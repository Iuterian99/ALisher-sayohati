var elParagraph = document.querySelector('.allowance');

var userName = prompt('What is your name please: ');

var wantedCountry = prompt(`${userName} which country do you want to travel: `);

alert('"' + wantedCountry + '"' + " uchun umimiy xarajatlar: \nBorib-kelish uchun samalyot bileti -$500 \nMehmonxona to`lovi (to`liq safar davomiyligi uchun) -$250 \nMuzey va ko`ngilochar joylar uchun -120 yevro ");

var yourMoney = prompt(userName + " how much money do you have in uzbek sums? ");

alert("Dollorni sumga o`girish: \n$1 = 10 628,68 sums \n1yevro = 12 546,09 sums");

var cash = yourMoney - 0;

var dollor = 750 * 10629;
var yevro = 120 * 12546;
if (cash >= yevro + dollor) {
  console.log(elParagraph.textContent = "Oq yo'l 😊");
} else {
  console.log(elParagraph.textContent = 'ozgina sabr qilish kerak bo’lar ekan 😔');
}