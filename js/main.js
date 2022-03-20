// GRAB CAR
const GRAB_CAR_1 = 8000;
const GRAB_CAR_2 = 7500;
const GRAB_CAR_3 = 7000;
const GRAB_CAR_WAIT = 2000;

// GRAB SUV
const GRAB_SUV_1 = 9000;
const GRAB_SUV_2 = 8500;
const GRAB_SUV_3 = 8000;
const GRAB_SUV_WAIT = 3000;

// GRAB BLACK
const GRAB_BLACK_1 = 10000;
const GRAB_BLACK_2 = 9500;
const GRAB_BLACK_3 = 9000;
const GRAB_BLACK_WAIT = 3500;

var tienKm_1 = 0;
var tienKm_2 = 0;
var tienKm_3 = 0;
var tongTien = 0;
var tienCho = 0;
var soKm = 0;
var thoiGianCho = 0;
var content = "";

// format VND
var currentFormat = new Intl.NumberFormat("vn-VN");

// Tinh tien
document.getElementById("btnTinhTien").onclick = function () {
  soKm = document.getElementById("soKm").value * 1;
  thoiGianCho = document.getElementById("thoiGianCho").value * 1;

  // Lay loai xe
  var loaiXe = kiemTraLoaiXe();

  switch (loaiXe) {
    case "grabCar":
      //   Tinh tien grabCar
      tongTien = tinhTien(
        soKm,
        GRAB_CAR_1,
        GRAB_CAR_2,
        GRAB_CAR_3,
        thoiGianCho,
        GRAB_CAR_WAIT
      );
      break;
    case "grabSuv":
      //   Tinh tien grabSuv
      tongTien = tinhTien(
        soKm,
        GRAB_SUV_1,
        GRAB_SUV_2,
        GRAB_SUV_3,
        thoiGianCho,
        GRAB_SUV_WAIT
      );
      break;
    case "grabBlack":
      //   Tinh tien grabBlack
      tongTien = tinhTien(
        soKm,
        GRAB_BLACK_1,
        GRAB_BLACK_2,
        GRAB_BLACK_3,
        thoiGianCho,
        GRAB_BLACK_WAIT
      );
      break;
    default:
      alert("Vui lòng chọn loại xe!");
      break;
  }

  // Show divThanhTien
  document.getElementById("divThanhTien").style.display = "block";

  // In ket qua
  document.getElementById("xuatTien").innerHTML =
    currentFormat.format(tongTien);

  // Show nut In hoa don
  document.getElementById("btnInHoaDon").style.display = "block";
};

// Ham kiem tra loai xe
function kiemTraLoaiXe() {
  var grabCar = document.getElementById("grabCar");
  var grabSuv = document.getElementById("grabSuv");
  var grabBlack = document.getElementById("grabBlack");
  var loaiXe = "";

  if (grabCar.checked) {
    loaiXe = "grabCar";
  } else if (grabSuv.checked) {
    loaiXe = "grabSuv";
  } else if (grabBlack.checked) {
    loaiXe = "grabBlack";
  }
  return loaiXe;
}

// Ham tinh tien cho
function tinhTienCho(thoiGianCho, giaCho) {
  var kq = 0;
  if (thoiGianCho >= 3) {
    kq = Math.floor(thoiGianCho / 3) * giaCho;
  }
  return kq;
}

// Ham tinh tienKm_1
function tinhTienKm_1(soKm, giaKm) {
  var kq = 0;
  kq = Math.round(soKm) * giaKm;
  return kq;
}

// Ham tinh tienKm_2
function tinhTienKm_2(soKm, giaKm) {
  var kq = 0;
  kq = (Math.round(soKm) - 1) * giaKm;
  return kq;
}

// Ham tinh tienKm_3
function tinhTienKm_3(soKm, giaKm) {
  var kq = 0;
  kq = (Math.round(soKm) - 19) * giaKm;
  return kq;
}

// Ham tinh tongTien
function tinhTien(soKm, giaKm_1, giaKm_2, giaKm_3, thoiGianCho, giaCho) {
  if (soKm <= 1) {
    tienKm_1 = tinhTienKm_1(soKm, giaKm_1);
    tienCho = tinhTienCho(thoiGianCho, giaCho);
    tongTien = tienKm_1 + tienCho;
  } else if (soKm > 1 && soKm <= 19) {
    tienKm_1 = tinhTienKm_1(1, giaKm_1);
    tienKm_2 = tinhTienKm_2(soKm, giaKm_2);
    tienCho = tinhTienCho(thoiGianCho, giaCho);
    var tongTien = tienKm_1 + tienKm_2 + tienCho;
  } else if (soKm > 19) {
    tienKm_1 = tinhTienKm_1(1, giaKm_1);
    tienKm_2 = tinhTienKm_2(19, giaKm_2);
    tienKm_3 = tinhTienKm_3(soKm, giaKm_3);
    tienCho = tinhTienCho(thoiGianCho, giaCho);
    tongTien = tienKm_1 + tienKm_2 + tienKm_3 + tienCho;
  }
  return tongTien;
}

// In hoa don
document.getElementById("btnInHoaDon").onclick = function () {
  // Lay loai xe
  var loaiXe = kiemTraLoaiXe();
  switch (loaiXe) {
    case "grabCar":
      // In hoa don grabCar
      content = inHoaDon(GRAB_CAR_1, GRAB_CAR_2, GRAB_CAR_3, GRAB_CAR_WAIT);
      break;
    case "grabSuv":
      // In hoa don grabSuv
      content = inHoaDon(GRAB_SUV_1, GRAB_SUV_2, GRAB_SUV_3, GRAB_SUV_WAIT);
      break;
    case "grabBlack":
      // In hoa don grabBlack
      content = inHoaDon(
        GRAB_BLACK_1,
        GRAB_BLACK_2,
        GRAB_BLACK_3,
        GRAB_BLACK_WAIT
      );
      break;
  }

  document.getElementById("tbody").innerHTML = content;
  document.getElementById("tbody").classList.add = "show-bill";
};

// clear table
document.getElementById("btnClose").onclick = function () {
  content = "";
  console.log(content);
};

// Ham inHoaDon
function inHoaDon(giaKm_1, giaKm_2, giaKm_3, giaCho) {
  if (soKm >= 0 && soKm <= 1) {
    content += "<tbody>";
    content += inTienKm_1(soKm, GRAB_CAR_1);
    content += inTienCho(giaCho);
    content += inTongKm();
    content += inTongTien();
    content += "</tbody>";
  } else if (soKm > 1 && soKm <= 19) {
    content += "<tbody>";
    content += inTienKm_1(1, giaKm_1);
    content += inTienKm_2(soKm - 1, giaKm_2);
    content += inTienCho(giaCho);
    content += inTongKm();
    content += inTongTien();
    content += "</tbody>";
  } else if (soKm > 19) {
    content += "<tbody>";
    content += inTienKm_1(1, giaKm_1);
    content += inTienKm_2(18, giaKm_2);
    content += inTienKm_3(soKm - 19, giaKm_3);
    content += inTienCho(giaCho);
    content += inTongKm();
    content += inTongTien();
    content += "</tbody>";
  }
  return content;
}

// Ham in hoa don tienCho
function inTienCho(giaCho) {
  var kq = "";
  kq += "<tr>";
  kq += "<td>" + "Thời gian chờ <br> (3 phút/1 lần chờ)" + "</td>";
  kq += "<td>" + thoiGianCho + " phút</td>";
  kq += "<td>" + currentFormat.format(giaCho) + "/lần</td>";
  kq += "<td>" + currentFormat.format(tienCho) + "</td>";
  kq += "</tr>";
  return kq;
}

// Ham in hoa don tienKm_1
function inTienKm_1(soKm, giaKm_1) {
  var kq = "";
  kq += "<tr>";
  kq += "<td>" + "KM Đầu tiên" + "</td>";
  kq += "<td>" + soKm + "</td>";
  kq += "<td>" + currentFormat.format(giaKm_1) + "</td>";
  kq += "<td>" + currentFormat.format(tienKm_1) + "</td>";
  kq += "</tr>";

  return kq;
}

// Ham in hoa don tienKm_2
function inTienKm_2(soKm, giaKm_2) {
  var kq = "";
  kq += "<tr>";
  kq += "<td>" + "Từ " + 2 + " đến" + "</td>";
  kq += "<td>" + soKm + "</td>";
  kq += "<td>" + currentFormat.format(giaKm_2) + "</td>";
  kq += "<td>" + currentFormat.format(tienKm_2) + "</td>";
  kq += "</tr>";
  return kq;
}

// Ham in hoa don tienKm_3
function inTienKm_3(soKm, giaKm_3) {
  var kq = "";
  kq += "<tr>";
  kq += "<td>" + "Từ " + 19 + " đến" + "</td>";
  kq += "<td>" + soKm + "</td>";
  kq += "<td>" + currentFormat.format(giaKm_3) + "</td>";
  kq += "<td>" + currentFormat.format(tienKm_3) + "</td>";
  kq += "</tr>";
  return kq;
}

// Ham in hoa don tongKm
function inTongKm() {
  var kq = "";
  kq += "<tr>";
  kq += "<td colspan = '4' class='tongTien'>" + "Tổng số km: " + soKm + " km";
  ("</td>");
  kq += "</tr>";
  return kq;
}

// Ham in hoa don tongTien
function inTongTien() {
  var kq = "";
  kq += "<tr>";
  kq +=
    "<td colspan = '4' class='tongTien'>" +
    "TỔNG TIỀN: " +
    currentFormat.format(tongTien) +
    " vnd";
  ("</td>");
  kq += "</tr>";
  return kq;
}
