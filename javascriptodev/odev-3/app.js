function asalSayilariBul(sayiSiniri) {
    for (let a = 2; a <= sayiSiniri; a++) {
      let asalMi = true;
  
      for (let b = 2; b < a; b++) {
        if (a % b === 0) {
          asalMi = false;
          break;
        }
      }
  
      if (asalMi) {
        console.log(a + " bir asal sayıdır.");
      }
    }
  }
  
  // Örneğin, 20'ye kadar olan asal sayıları bul
  asalSayilariBul(200);