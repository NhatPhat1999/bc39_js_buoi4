function sapxep(a, b, c) {
    var max = a;
    var middle = b;
    var min = c;
    if (a > b && a > c) {
        if (b > c) {
            max = a;
            middle = b;
            min = c;
        } else {
            max = a;
            middle = c;
            min = b;
        }
    } else if (b > a && b > c) {
        if (a > c) {
            max = b;
            middle = a;
            min = c;
        } else {
            max = b;
            middle = c;
            min = a;
        }
    } else if (c > a && c > b) {
        if (a > b) {
            max = c;
            middle = a;
            min = b;
        } else {
            max = c;
            middle = b;
            min = a;
        }
    }
    var rs = min + "," + middle + "," + max;
    return rs;
}


// bt1
document.getElementById("btnSapxep").onclick = function () {
    var number_1 = document.getElementById("number_1").value * 1;
    var number_2 = document.getElementById("number_2").value * 1;
    var number_3 = document.getElementById("number_3").value * 1;
    document.getElementById("infoSapxep").innerHTML = "thứ tự tăng dần: " + sapxep(number_1, number_2, number_3);
}

// bt2
document.getElementById("btnNguoiSd").onclick = function () {
    var nguoiSd = document.getElementById("nguoiSd").value;
    var loiChao = "";
    if (nguoiSd === "b") {
        loiChao = "xin chào Bố";
    } else if (nguoiSd === "m") {
        loiChao = "xin chào Mẹ";
    } else if (nguoiSd === "a") {
        loiChao = "xin chào Anh trai";
    } else {
        loiChao = "xin chào Em gái";
    }
    document.getElementById("infoNguoisd").innerHTML = loiChao + "!";
}

// bt3
document.getElementById("btnDemso").onclick = function () {
    var soThu1 = document.getElementById("soThu1").value * 1;
    var soThu2 = document.getElementById("soThu2").value * 1;
    var soThu3 = document.getElementById("soThu3").value * 1;
    var soChan = 0;
    if (soThu1 % 2 === 0) { soChan += 1 };
    if (soThu2 % 2 === 0) { soChan += 1 };
    if (soThu3 % 2 === 0) { soChan += 1 };
    var soLe = 3 - soChan;
    document.getElementById("infoDemso").innerHTML = "có " + soChan + " số chẳn, " + soLe + " số lẻ";
}

// bt4
document.getElementById("btnTamgiac").onclick = function () {
    var canhThu1 = document.getElementById("canhThu1").value * 1;
    var canhThu2 = document.getElementById("canhThu2").value * 1;
    var canhThu3 = document.getElementById("canhThu3").value * 1;
    var duDoan;
    if (canhThu1 + canhThu2 > canhThu3 && canhThu1 + canhThu3 > canhThu2 && canhThu2 + canhThu3 > canhThu1) {
        if (canhThu1 === canhThu2 || canhThu1 === canhThu3 || canhThu2 === canhThu3) {
            duDoan = "tam giác cân"
        };
        if (canhThu1 === canhThu2 && canhThu1 === canhThu3 && canhThu2 === canhThu3) {
            duDoan = "tam giác đêu"
        };
        if (Math.sqrt(canhThu1 * canhThu1 + canhThu2 * canhThu2) === Math.sqrt(canhThu3 * canhThu3) ||
            Math.sqrt(canhThu1 * canhThu1 + canhThu3 * canhThu3) === Math.sqrt(canhThu2 * canhThu2) ||
            Math.sqrt(canhThu3 * canhThu3 + canhThu2 * canhThu2) === Math.sqrt(canhThu1 * canhThu1)
        ) {
            duDoan = "tam giác vuông"
        };
    } else {
        duDoan = "không phải tam giác";
    };
    document.getElementById("infoTamgiac").innerHTML = duDoan;
}