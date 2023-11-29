// Odev:8
// Verilen url ve ders adı bilgisini kullanarak aşağıdaki işlemleri yapınız.
// url="https://www.wissenakademie.com&quot;;
// dersAdi="Fullstack Web Developer Eğitimi";
// -url kaç karakterlidir?
// -ders adı kaç kelimeden oluşmaktadır?
// -url https ile başlıyor mu?
// -ders adı içinde Eğitimi kelimesi geçiyor mu?
// -url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
// https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi

let url = "https://www.wissenakademie.com";
let dersAdi = "Fullstack Web Developer Eğitimi";

//Url kaç karakterlidir?
let urlKarakter = url.length;
console.log("Url karakter sayısı: " + urlKarakter);

//Ders adı kaç kelimeden oluşmaktadır?
 let dersAdiKelime = dersAdi.split(" ").length;
 console.log("Ders adı kelime sayısı: " + dersAdiKelime);

 //url https ile başlıyor mu?
 let urlHttps= url.startsWith("https");
 console.log("Url Https İle basşlıyor mu?: " + urlHttps);

 // Ders adı içinde "Eğitimi" kelimessi geçiyor mu?
 let egitimiKelimesi =dersAdi.includes("Eğitimi");
 console.log("Eğitimi kelimesi geçiyor mu?: " + egitimiKelimesi);
 //küçük büyük harf duyarlılığı var örn:"eğitimi" şeklinde yazıldığında false alıyoruz

 //url ve ders adını kullanarak aşağıdaki string ifadeyi oluşturun:
// https://www.wissenakademie.com/fullstack-web-gelistirme-egitimi

let yeniStringIfade = url + "/" + dersAdi.toLowerCase().replace(/ /g, '-') + "-egitimi";
console.log("Oluşturulan yeni string ifade: " + yeniStringIfade);

