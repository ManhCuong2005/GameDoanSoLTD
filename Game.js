var randomNumber = Math.floor(Math.random() * 9000) + 1000;
// alert(randomNumber);

var soThuNhat = Math.floor(randomNumber / 1000); // Lấy chữ số hàng nghìn
randomNumber = randomNumber % 1000; // Bỏ đi chữ số hàng nghìn

var soThuHai = Math.floor(randomNumber / 100); // Lấy chữ số hàng trăm
randomNumber = randomNumber % 100; // Bỏ đi chữ số hàng trăm

var soThuBa = Math.floor(randomNumber / 10); // Lấy chữ số hàng chục
randomNumber = randomNumber % 10; // Bỏ đi chữ số hàng chục

var soThuTu = randomNumber; // Chữ số hàng đơn vị

var count = 1;
function playGame() {
  // Lấy phần tử input
  var inputElement = document.getElementById("textIp");
  // Lấy dữ liệu người dùng nhập vào
  var choice = inputElement.value;
  // Lấy phần tử để hiển thị kết quả
  var resultElement = document.getElementById("ketQua");

  if (choice < 1000 || choice > 9999) {
    resultElement.innerText =
      "Vui lòng chỉ nhập vào 4 số, vì con số của chúng tôi có 4 chữ số!";
  } else {
    var soThuNhat1 = Math.floor(choice / 1000);
    choice = choice % 1000;

    var soThuHai1 = Math.floor(choice / 100);
    choice = choice % 100;

    var soThuBa1 = Math.floor(choice / 10);
    choice = choice % 10;

    var soThuTu1 = choice;

    var benDemSoDung = 0;

    if (soThuNhat == soThuNhat1) {
      benDemSoDung += 1;
    }

    if (soThuHai == soThuHai1) {
      benDemSoDung += 1;
    }

    if (soThuBa == soThuBa1) {
      benDemSoDung += 1;
    }

    if (soThuTu == soThuTu1) {
      benDemSoDung += 1;
    }

    if (benDemSoDung < 4) {
      resultElement.innerText = "Bạn đã đoán đúng " + benDemSoDung + " số!";
      count += 1;
    } else {
      resultElement.innerText = "Chúc mừng bạn đã đúng sau " + count + " lần!";
    }
  }
}
