// tests/api.lesson11.spec.ts
import { test, expect } from "@playwright/test";

test.describe.serial("Lesson 11 - API Testing", () => {
    const regEmail = "yenkhoa_20@yopmail.com";
    const regUsername = "yenkhoa_20";
    const regPassword = "12345678";
    let token: string;
    let articleSlug: string;
    let commentIds: number[] = [];

    test("Test 1: Đăng ký tài khoản", async ({ request }) => {
        const url = "https://conduit-api.bondaracademy.com/api/users";
        const response = await request.post(url, {
            data: {
                user: {
                    username: regUsername,
                    email: regEmail,
                    password: regPassword,
                },
            },
        });
        expect(response.status()).toBe(201);
        const body = await response.json();
        expect(body.user.email).toBe(regEmail);
    });

    test.describe("Test 2a: Đăng nhập và tạo article", () => {
        test.beforeEach(async ({ request }) => {
            const url = "https://conduit-api.bondaracademy.com/api/users/login";
            const response = await request.post(url, {
                data: {
                    user: {
                        email: regEmail,
                        password: regPassword,
                    }
                },
            });
            expect(response.status()).toBe(200);
            const resBody = await response.json();
            token = resBody.user.token;
        });

        test("Test 2b: Tạo article", async ({ request }) => {
            const titleArticle = "API in Playwright";
            const url = "https://conduit-api.bondaracademy.com/api/articles";
            const response = await request.post(url, {
                headers: { Authorization: `Token ${token}` },
                data: {
                    article: {
                        title: titleArticle,
                        description: "Demo lesson 11",
                        body: "How to use Playwright to create article",
                        tagList: ["Playwright Viet Nam", "pw", "pw-k6"],
                    },
                },
            });
            expect(response.status()).toBe(201);
            const resBody = await response.json();
            articleSlug = resBody.article.slug;
            expect(resBody.article.title).toBe(titleArticle);
        });
    });

    test.describe("Test 3-5: Comment và cleanup", () => {
        test.beforeEach(async () => {
            expect(token).toBeTruthy();
            expect(articleSlug).toBeTruthy();
        });

        test("Test 3: Thêm 5 comment 01..05", async ({ request }) => {
            commentIds = [];
            for (let i = 1; i <= 5; i++) {
                const url = `https://conduit-api.bondaracademy.com/api/articles/${articleSlug}/comments`;
                const res = await request.post(url, {
                    headers: { Authorization: `Token ${token}` },
                    data: { comment: { body: `Comment 0${i}` } },
                });
                expect(res.status()).toBe(200);
                const b = await res.json();
                commentIds.push(b.comment.id);
            }
            expect(commentIds.length).toBe(5);
        });

        test("Test 4: Xóa Comment 02 và 05", async ({ request }) => {
            const listUrl = `https://conduit-api.bondaracademy.com/api/articles/${articleSlug}/comments`;
            const listRes = await request.get(listUrl, { headers: { Authorization: `Token ${token}` } });
            expect(listRes.status()).toBe(200);
            const { comments } = await listRes.json();

            const toDelete = comments
                .filter((c: any) => c.body === "Comment 02" || c.body === "Comment 05")
                .map((c: any) => c.id);
            expect(toDelete.length).toBe(2);

            for (const id of toDelete) {
                const del = await request.delete(
                    `https://conduit-api.bondaracademy.com/api/articles/${articleSlug}/comments/${id}`,
                    { headers: { Authorization: `Token ${token}` } }
                );
                expect(del.status()).toBe(200);
            }
        });
    });

    test("Test 5: Xóa article", async ({ request }) => {
        const url = `https://conduit-api.bondaracademy.com/api/articles/${articleSlug}`;
        const del = await request.delete(url, {
            headers: { Authorization: `Token ${token}` },
        });
        expect(del.status()).toBe(204);
    });
});
