// Ödev-10) 1- Aşağıdaki sipariş bilgilerini object içerisinde saklayınız.
// 2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
// 3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

let siparis1 ={
   
        siparisId: 101,
        siparisTarihi: "31.12.2022",
        odemeSekli: "kredi kartı",
        kargoAdresi: "Yahya kaptan mah. Kocaeli İzmit",
        firmaId: "34",
        firmaAdı:"apple turkiye",
        musteriId:"12",

        urunler:[
            { urunId: 5, urunBasligi: "IPhone 13 Pro", urunUrl: "http://abc.com/iphone-13-pro", urunFiyati: 22000 },
            { urunId: 6, urunBasligi: "IPhone 13 Pro Max", urunUrl: "http://abc.com/iphone-13-pro-max", urunFiyati: 25000 }
        ]
}

let siparis2 = {
    siparisId: 102,
    siparisTarihi: "30.12.2022",
    odemeSekli: "kredi kartı",
    kargoAdresi: "Yahya kaptan mah. Kocaeli İzmit",
    firmaId: "34",
    firmaAdı:"apple turkiye",
    musteriId:"12",

    urunler: [
      { urunId: 6, urunBasligi: "IPhone 13 Pro Max", urunUrl: "http://abc.com/iphone-13-pro-max", urunFiyati: 25000 }
    ],
    musteri: { musteriId: 12 },
    satici: { firmaId: 34, firmaAdi: "Apple Türkiye" }
};

function hesaplaKDVTahilToplam(siparis) {
    let toplamFiyat = siparis.urunler.reduce((toplam, urun) => toplam + urun.urunFiyati, 0);
    let kdvDahilToplam = toplamFiyat * 1.18; // KDV: %18
    return kdvDahilToplam;
  }
  
  let siparis1KDVToplam = hesaplaKDVTahilToplam(siparis1);
  let siparis2KDVToplam = hesaplaKDVTahilToplam(siparis2);
  
  console.log("Sipariş 1 KDV dahil toplam ücret: " + siparis1KDVToplam);
  console.log("Sipariş 2 KDV dahil toplam ücret: " + siparis2KDVToplam);
  
 
  let tumSiparisler = [siparis1, siparis2];
  let tumSiparislerinKDVToplami = tumSiparisler.reduce((toplam, siparis) => toplam + hesaplaKDVTahilToplam(siparis), 0);
  
  console.log("Tüm siparişlerin KDV dahil toplam ücreti: " + tumSiparislerinKDVToplami);
    
