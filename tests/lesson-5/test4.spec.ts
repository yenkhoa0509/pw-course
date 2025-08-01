import { test, expect } from '@playwright/test';

test('test4.spec.ts', async ({ page }) => {

    await test.step("Personal notes", async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.getByText("Bài học 4: Personal notes").click();
    });

    await test.step("Thêm mới 10 note", async () => {
        const notes = [
            {
                title: 'Apple bán được ba tỷ iPhone',
                content: 'CEO Tim Cook cho biết Apple đã bán tổng cộng ba tỷ iPhone từ khi ra mắt sản phẩm năm 2007.',
            },
            {
                title: 'Robot phục vụ người dân làm thủ tục hành chính',
                content: 'Hà Nội Robot lễ tân trả lời thắc mắc của người dân, hướng dẫn quy trình, giúp rút ngắn nhiều thời gian làm thủ tục tại các trung tâm phục vụ hành chính công trên địa bàn Thủ đô từ 1/8.',
            },
            {
                title: '5 máy hút ẩm kiêm lọc khí cao cấp',
                content: 'Số bình chọn thứ hai của "Sản phẩm tôi yêu 2025" là cuộc đua của 5 máy hút ẩm kiêm lọc khí cao cấp, bán chính hãng với giá từ 5,8 triệu đồng.',
            },
            {
                title: 'Ứng dụng chuyển đổi số trong quản lý cán bộ',
                content: 'Bộ Khoa học và Công nghệ sẽ đổi mới phương thức quản lý cán bộ, công chức',
            },
            {
                title: 'Người thu nhập dưới 500 USD thua lỗ nhiều nhất khi đầu tư tiền số',
                content: 'Khảo sát mới cho thấy số người có thu nhập dưới 500 USD/tháng tại Việt Nam có tỷ lệ thua lỗ cao nhất khi tham gia đầu tư tiền số',
            },
            {
                title: 'Tài khoản Apple vô tình đăng quảng cáo Galaxy Z Flip7',
                content: 'Tài khoản Apple Support trên Weibo của Trung Quốc gặp sự cố nghiêm trọng khi vô tình đăng một đoạn quảng cáo về Samsung Galaxy Z Flip7',
            },
            {
                title: 'Phó thủ tướng yêu cầu đẩy nhanh tiến độ các nhiệm vụ phát triển khoa học, công nghệ',
                content: 'Phó thủ tướng Nguyễn Chí Dũng cho rằng các nhiệm vụ về phát triển khoa học, công nghệ, đổi mới sáng tạo, chuyển đổi số đang bị chậm, yêu cầu các bộ ngành rà soát đẩy nhanh tiến độ.',
            },
            {
                title: 'Nơi hình thành động đất dữ dội nhất thế giới',
                content: 'Vành đai lửa Thái Bình Dương là dải núi lửa hình móng ngựa nổi tiếng với các vụ phun trào mạnh mẽ và động đất cường độ mạnh.',
            },
            {
                title: 'Sở hữu căn hộ Coteccons tại TP HCM, thanh toán chỉ 0,5% mỗi tháng',
                content: '100% căn view hồ bơi, sông Sài Gòn, Landmark 81 và pháo hoa, BIDV miễn lãi, ân hạn gốc 3 năm',
            },
        ];

        for (const note of notes) {
            await page.locator('//*[@id="note-title"]').fill(note.title);
            await page.locator('//*[@id="note-content"]').fill(note.content);
            await page.locator('//*[@id="add-note"]').click();
        }
    });

    await test.step("Search theo tiêu đề bài báo bất kì", async () => {
        await page.locator('//*[@id="search"]').fill('Apple bán được ba tỷ iPhone');
    });
    await page.pause();
});
