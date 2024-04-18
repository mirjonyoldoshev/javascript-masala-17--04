//-----------------------------------------homework---------------------------------------------------------
//----------------------------------------1---------------------------------------------------------------

/**function aniqlovchiFasl(oy) {
  // Oy raqamlariga mos keluvchi fasllar
  var fasllar = {
    1: "Qish",
    2: "Qish",
    3: "Bahor",
    4: "Bahor",
    5: "Bahor",
    6: "Yoz",
    7: "Yoz",
    8: "Yoz",
    9: "Kuz",
    10: "Kuz",
    11: "Kuz",
    12: "Qish",
  };

  // Berilgan oy raqamiga mos keluvchi fasn ni aniqlovchi
  var fasl = fasllar[oy];

  // Natijani qaytarish
  return fasl;
}

// Misol uchun, 3-oy raqamiga mos keluvchi fasl ni tekshirish
var oyRaqami = 3;
var aniqFasl = aniqlovchiFasl(oyRaqami);
console.log("Fasl: " + aniqFasl);
*/
//bir necha xil usullari mavjud har bir oyni kiritib 3ta oyni biriktirib qoysa xam boladi

//----------------------------------------2---------------------------------------------------------------
/**function aniqlovchiYosh(tugilganYil) {
  var hozirgiSana = new Date();
  var hozirgiYil = hozirgiSana.getFullYear();
  var yosh = hozirgiYil - tugilganYil;

  return yosh;
}

// Foydalanuvchidan tug'ilgan yilni olish
var tugilganYil = prompt("Tug'ilgan yilingizni kiriting:");
tugilganYil = parseInt(tugilganYil);

// Yoshni hisoblash
var yosh = aniqlovchiYosh(tugilganYil);
console.log("Siz " + yosh + " yoshdasiz.");
//prompt orqali qollanilgan buni aniq yoshni kiritib masalan 2005 deb kiritsez
//18yoshdasz deb consolga chiqarishi xam mumkin prompta xammasini xisobledi 1900 kiritgan  vaqtiz
//124 yosh deb chiqarib beradi
*/
//----------------------------------------3---------------------------------------------------------------
/**function juftToqYigindisi(n) {
  var juftYigindi = 0;
  var toqYigindi = 0;

  for (var i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      juftYigindi += i;
    } else {
      toqYigindi += i;
    }
  }

  var nisbat = juftYigindi / toqYigindi;
  return nisbat;
}

// Foydalanuvchidan N ni olish
var n = prompt("N ni kiriting:");
n = parseInt(n);

// Juft va toq yig'indilarni hisoblash
var nisbat = juftToqYigindisi(n);
console.log("Juft yig'indisi: " + juftYigindi);
console.log("Toq yig'indisi: " + toqYigindi);
console.log("Nisbat: " + nisbat);
*/
//ushbu kodda 10 kiritganda juft sonlar yig'indisi qancha toq sonlar yig'indisi qancha nisbatini chiqaradi
//10 kiritganda nisbat 0.5 deb chiqaradi
//----------------------------------------4---------------------------------------------------------------
/**function aniqlovchiOperator(raqamKod) {
  var operatorlar = {
    90: "belline",
    91: "belline",
    93: "ucell",
    94: "ucell",
    95: "uztelcom",
    97: "mobi UZ",
    98: "MCHJ lar uchun",
    99: "uzmobile",
    20: "oq mobile",
    50: "ucell",
    77: "uzmobile",
    70: "toshkent shaxar respuplikaga qarashli kompaniyalar",
    // Boshqa operatorlar uchun bu yerga qo'shimcha kodlar va nomlar qo'shing
  };

  var operator = operatorlar[raqamKod];
  return operator || "Noma'lum operator";
}

// Foydalanuvchidan telefon raqamini olish
var raqam = prompt("Telefon raqamingizni kiriting (raqam kod bilan):");

// Raqam kodini ajratib olish
var raqamKod = raqam.slice(0, 2);

// Operatorni aniqlash
var operator = aniqlovchiOperator(raqamKod);
console.log("Operator: " + operator);
// ushbu kodda biz raqamn kiritganda operatorini chiqarib beradi malumki birichi 2ta xonasi operator raqammi
// 90,91,93,94,95,97,98,99,20,50,77,70 kiritganda operator qaysi kompaniya bosa shuni chiqarib beradi 
//boshqa raqamlar kiritganda operator noma'lum operator deb chiqarib beradi
*/
//
//
//
//

//
//
//
//
//

/**function kattaKichikAylantirish(satr) {
  var aylanganSatr = "";

  for (var i = 0; i < satr.length; i++) {
    var harf = satr.charAt(i);
    var kichikHarf = harf.toLowerCase();
    aylanganSatr += kichikHarf;
  }

  return aylanganSatr;
}

// Foydalanuvchidan satrni olish
var satr = prompt("Satrni kiriting:");

// Katta harflarni kichik harflarga aylantirish
var aylanganSatr = kattaKichikAylantirish(satr);
console.log("Aylangan satr: " + aylanganSatr);
//USHBU KODDA SATRDAGI HARFLARNI KICHIK HARFLARGA AYLANTIRIB BERADI
//MASALAN aaQQWaa bosa xam yani ortasida kelsqa xam boshqa harflarni kichikga aylantirib beradi
// aaqqwaa degan natija konsoleda chiqadi
*/
//----------------------------------------2---------------------------------------------------------------
/**function faktorialniHisoblash(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return "Manfiy sonning faktoriali mavjud emas.";
  } else {
    var faktorial = 1;
    for (var i = 2; i <= n; i++) {
      faktorial *= i;
    }
    return faktorial;
  }
}

// Foydalanuvchidan sonni olish
var son = prompt("Sonni kiriting:");

// Faktorialni hisoblash
var faktorial = faktorialniHisoblash(parseInt(son));
console.log("Faktorial: " + faktorial);
*/
//----------------------------------------3---------------------------------------------------------------
/**function tselsiyToFarengeyt(tselsiy) {
  var farengeyt = (tselsiy * 9) / 5 + 32;
  return farengeyt;
}

// Foydalanuvchidan Tselsiy haroratini olish
var tselsiy = prompt("Tselsiy haroratini kiriting:");

// Farengeytga aylantirish
var farengeyt = tselsiyToFarengeyt(parseFloat(tselsiy));
console.log("Farengeyt harorati: " + farengeyt);
*/

// let str = "Hello World";
// let str2 = "333060016";
// console.log(str);
// console.log(str2);
// let arr = [...str];
// let arr2 = [...str2];

// console.log(arr);
// console.log(arr2);
