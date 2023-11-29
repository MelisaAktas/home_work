//Ödev-1) Prompt aracılığı ile kullanıcıdan bir saniye değeri alın. Örneğin 1500. Ardından bu girilen değerin kaç dakika, kaç saniye olduğunu hesaplayıp konsola düzgün bir şekilde yazdırın.


let saniye = prompt("Saniye değerini girin:");
saniye = parseInt(saniye);
let dakika = Math.floor(saniye / 60);// bölme işleminden sonra elde edilen ondalık kısmı kaldırarak tam sayıya çevirmek için
let kalanSaniye = saniye % 60;


console.log(saniye + " saniye, " + dakika + " dakika " + kalanSaniye + " saniyedir.");