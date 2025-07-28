// 1. Khởi động Tàu Vũ trụ K16
let departurePlanet = "Trái Đất";
let mission = "Khám phá Vũ trụ K16";
let crew = ["Ánh", "Cindy", "Phong", "Ngân", "Sơn", "Helen", "Hiền", "Tú", "Huy", "Duy"];

function launchShip(crew) {
    return "Chuẩn bị khởi động! Phi hành đoàn gồm: " + crew.join(", ") + " sẽ đồng hành cùng bạn trong chuyến phiêu lưu " + mission + "!";
}
console.log(launchShip(crew));

// 2. Du hành đến hành tinh bí ẩn
function calculateDistance(speed, time) {
    return speed * time;
}
let distance = calculateDistance(1000, 24);
console.log("Khoảng cách đến hành tinh bí ẩn = " + distance);

// 3. Hành tinh kỳ lạ
function convertTimeToHex(time) {
    return time.toString(16);
}
let hexTime = convertTimeToHex(120);
console.log("Thời gian ở hành tinh = " + hexTime);

// 4. Khám phá kho báu
function decryptCode(code) {
    let result = "";

    for (const char of code) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }

    return result;
}

let secret = decryptCode("K16 Challenge");
console.log("Mật mã đã giải mã:", secret);

// 5. Trở về Trái Đất
function returnToEarth() {
    console.log("Chuẩn bị trở về Trái Đất!");
}
returnToEarth();
