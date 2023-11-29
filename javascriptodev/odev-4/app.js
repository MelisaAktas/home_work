//Girilen bir yıl değerinin (örneğin: 1975) artık yıl olup olmadığını bulup konsola sonucu yazdırın. Bir yıl 400'e tam olarak bölünebiliyorsa ya da 4'e tam olarak bölünmekle birlikte 100'e de tam olarak bölünemiyorsa artık yıldır.







let yil = prompt("Bir yıl girişi yapınız: ");

yil =parseInt(yil);

if ((yil %400 ===0)|| (yil % 4 ===0)&& (yil%100 !==0)) {
    console.log(yil + " bir artık yıldır.");
}else{
    console.log(yil + " bir artık yıl değildir.");
}
