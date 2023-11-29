//7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız.

// Öğrenci 1: Kemal Devrimdar 2010 (70,60,80)
// Öğrenci 2: Saliha Temel 2012 (80,80,90)
// Öğrenci 3: Defne Küp 2009 (60,60,70)


let ogrenciler = [
    { ad: "Kemal Devrimdar", dogumYili: 2010, notlar: [70, 60, 80] },
    { ad: "Saliha Temel", dogumYili: 2012, notlar: [80, 80, 90] },
    { ad: "Defne Küp", dogumYili: 2009, notlar: [60, 60, 70] }
  ];
  
  
  ogrenciler.forEach(function (ogrenci) {
    
    let simdikiYil = new Date().getFullYear();
  
    
    ogrenci.yas = simdikiYil - ogrenci.dogumYili;
  
    let notToplam = ogrenci.notlar.reduce((toplam, not) => toplam + not, 0);
    ogrenci.notOrtalamasi = notToplam / ogrenci.notlar.length;
  });
  console.log(ogrenciler);