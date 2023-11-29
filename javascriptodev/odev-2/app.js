//Ödev-2) Kullanıcıya her defasında 100'den büyük bir sayı girmesi için prompt ile veri girmesini isteyin. Eğer farklı bir değer girerse tekrardan değer girmesi talebinde bulunun.
//Kullanıcı 100 den büyük bir sayı veya boş satıra onay verene kadar döngüye devam edilmelidir.


let kullaniciGirdisi;
do{
    kullaniciGirdisi = prompt("Lütfen 100'den büyük bir sayı giriniz:")
}
while (kullaniciGirdisi<=100) {
    Console.log("Girilen sayı: " + kullaniciGirdisi);
    
}