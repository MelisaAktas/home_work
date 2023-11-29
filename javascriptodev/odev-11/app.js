//1- sayilar listesindeki her bir elemanın karesini yazdırınız.

let sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

sayilar.forEach(sayi => {
  console.log(sayi * sayi);
});

//2- sayilar listesindeki hangi sayılar 5' in katıdır?

let katSayi5 = [];
for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] % 5 === 0) {
        katSayi5.push(sayilar[i]);
    }
  }
  
  console.log("5'in katı olan sayılar: " + katSayi5);


  //3- sayilar listesindeki çift sayıların toplamını bulunuz.

  let ciftSayilarinToplami = 0;
  
  for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] % 2 === 0) {
      ciftSayilarinToplami += sayilar[i];
    }
  }
  
  console.log("Çift sayıların toplamı: " + ciftSayilarinToplami);
  

//let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23","samsung s20"];

//4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

let urunler = ["iphone 12", "samsung s22", "iphone 13", "samsung s23", "samsung s20"];

urunler.forEach(urun => {
  console.log(urun.toUpperCase());
});

//5- urunler listesinde samsung geçen kaç ürün vardır?

let samsungUrunSayisi = urunler.filter(urun => urun.toLowerCase().includes("samsung")).length;

console.log("Samsung geçen ürün sayısı: " + samsungUrunSayisi);



//6- ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
let ogrenciler = [
  { "ad": "yiğit", "soyad": "bilgi", "notlar": [60, 70, 60] },
  { "ad": "ada", "soyad": "bilgi", "notlar": [80, 70, 80] },
  { "ad": "çınar", "soyad": "turan", "notlar": [10, 20, 60] }
];




  