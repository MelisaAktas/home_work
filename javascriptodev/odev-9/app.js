// Ödev-9)

// 1- "Elma,Armut,Muz,Çilek" elemanlarına sahip bir dizi oluşturunuz.
let meyveler =["Elma","Armut","Muz","Çilek"];

//2- Dizi kaç elemanlıdır?
let elemanSayisi = meyveler.length;
console.log("Dizi kaç elemanlıdır:" + elemanSayisi);

//3- Dizinin ilk ve son elemanı nedir?
let ilkEleman = meyveler[0];
let sonEleman = meyveler[meyveler.length -1];
console.log("Dizinin ilk elemanı: " + ilkEleman);
console.log("Dizinin son elemanı: " + sonEleman);

//4- Elma dizinin bir elemanımıdır?
let elmaVar = meyveler.includes("Elma");
console.log("Elma dizinin bir elemanı mı? " + (elmaVar ? "Evet" : "Hayır"));

//5- Kiraz meyvesini listenin sonuna ekleyiniz.
let yenimeyve = meyveler.push("Kiraz")
console.log("Yeni meyvenin adı nedir?"+ meyveler);

//6- Dizinin son 2 elemanını siliniz.
meyveler.pop();
meyveler.pop();

console.log("Dizinin son iki elamanı silinmiş hali:"+ meyveler);

