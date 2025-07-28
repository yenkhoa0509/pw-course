const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ['apple', 'banana', 'cherry', 'date'];
const numbers = [1, 2, 3, 4, 5];
const expenses = [50, 100, 150];

// 1.1 Kiểm tra tất cả giá trị trong scores có > 70 không
console.log(scores.every(score => score > 70));

// 1.2 Kiểm tra tất cả giá trị trong ages có > 15 không
console.log(ages.every(age => age >= 15));

// 1.3 Kiểm tra tất cả từ trong words có độ dài > 3 không
console.log(words.every(word => word.length > 3));

// 2.1 Lọc các giá trị trong scores > 80
const scoresAbove80 = scores.filter(score => score > 80);
console.log(scoresAbove80);

// 2.2 Lọc các giá trị trong ages >= 18
const adultAges = ages.filter(age => age >= 18);
console.log(adultAges);

// 2.3 Lọc các từ trong words có độ dài > 5
const longWords = words.filter(word => word.length > 5);
console.log(longWords);

// 3.1 Tìm giá trị đầu tiên trong scores > 80
const firstScoreAbove80 = scores.find(score => score > 80);
console.log(firstScoreAbove80);

// 3.2 Tìm tuổi đầu tiên trong ages > 20
const firstAgeOver20 = ages.find(age => age > 20);
console.log(firstAgeOver20);

// 3.3 Tìm từ đầu tiên words có độ dài > 5
const firstFiveLetterWord = words.find(word => word.length > 5);
console.log(firstFiveLetterWord);

// 4.1 Từ scores, tạo mảng mới: tăng 10% nếu < 90, giảm 5% nếu ≥ 90
const updatedScores = scores.map(score => {
    if (score < 90) {
        return score * 1.1;
    } else {
        return score * 0.95;
    }
});

console.log("Updated scores:", updatedScores);

// 4.2 Từ numbers = [1, 2, 3], chuyển thành mảng chuỗi
const numberStrings = numbers.map(num => num.toString());
console.log("Mảng chuỗi:", numberStrings);

// 4.3 Từ numbers = [1, 2, 3], nhân đôi mỗi giá trị
const doubled = numbers.map(num => num * 2);
console.log("Mảng nhân đôi:", doubled);

// 5.1 Kiểm tra scores có giá trị nào > 80 không
const hasScoreOver80 = scores.some(score => score > 80);
console.log("Có score > 80 không:", hasScoreOver80);

// 5.2 Kiểm tra ages có giá trị nào < 18 không
const hasUnder18 = ages.some(age => age < 18);
console.log("Có tuổi < 18 không:", hasUnder18);

// 5.3 Kiểm tra words có từ nào dài > 5 không
const hasLongWord = words.some(word => word.length > 5);
console.log("Có từ dài > 5 không:", hasLongWord);

// 6.1 Tính tổng các giá trị trong scores
const totalScores = scores.reduce((sum, val) => sum + val, 0);
console.log("Tổng scores =", totalScores);

// 6.2 Tính tích các giá trị trong numbers
const productNumbers = numbers.reduce((product, val) => product * val, 1);
console.log("Tích numbers =", productNumbers);

// 6.3 Tính tổng các giá trị trong expenses
const totalExpenses = expenses.reduce((sum, val) => sum + val, 0);
console.log("Tổng expenses =", totalExpenses);


