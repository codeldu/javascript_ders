// //declaration




// // function loggerDeclaration(){
// //     console.log("LOG by declaration");
// // }

// // loggerDeclaration();


// //expression



// const dilimle = function(meyveSayi){
//     let dilim= meyveSayi*4;
//     return dilim;
// }



// const shireCeken = (almaSayi, portagalSayi) => {
//     let almaDilimininSayi = dilimle(almaSayi);
//     let portagalDilimininSayi = dilimle(portagalSayi);

//     return `Menim sokumda ${almaDilimininSayi} qeder alma dilimi, ${portagalDilimininSayi} qeder portagal dilimi var`

// }

// // console.log(shireCeken(3,4));

// //arrow

// // const dilimle = meyveSayi => meyveSayi *4;

// let dilimSayi = dilimle(3);

// console.log(dilimSayi);





// const tipCalculator = hesab => {
//     let tip;
//     if(hesab>=50 && hesab<=300){
//         tip = hesab*15/100;
//     }else{
//         tip = hesab*20/100;
//     }
//     return tip;
// }


// const hesabla = hesab => hesab + tipCalculator(hesab);

// console.log(hesabla(430))




// const tipCalc = bill => bill>=50 && bill<=300 ? bill*15/100 : bill*20/100;

// const mainCalc = bill => bill + tipCalc(bill);

// console.log(mainCalc(40));





















// const tipCalcutor = hesab => hesab>=50 && hesab <=300 ? hesab*0.15 : hesab* 0.2;
// const calculator = tamHesab => tamHesab + tipCalcutor(tamHesab)

// console.log(calculator(300));


// const umumiCalculator= function(elovset){
//     return elovset + tipCalculator(elovset)
// }


// const tipCalculator = function(hesab){
//     if(hesab>=50 && hesab <=300){
//         return hesab*0.15;
//     }else{
//         return hesab*0.2;
//     }
// }

// console.log(umumiCalculator(300));



// const ortalamaFunc = function(a,b,c){
//     return (a+b+c)/3;
// }

// const qalibFunc = function(x,y){
//     if( 2*x >= y){
//         return ("Delfinler qalibdir" + x + "-" + y )
//     }else if ( y/x >=2 ){
//         return ("Koalalar qalibdir" + y + "-" + x )
//     }else{
//         return ("Qalib yoxdur"+ x + "             "+ y) 
//     }
// }

// console.log(qalibFunc(ortalamaFunc(10, 10, 10), ortalamaFunc(20, 20, 20)));




// let massNihad= 95;
// let massNail= 85;

// let heightNihad=1.88;
// let heightNail=1.76;

// let nihadBki = massNihad / (heightNihad ** 2);
// let nailBki = massNail / (heightNail ** 2);

// let isNihadBigger = nihadBki > nailBki;

// if(isNihadBigger){
//     console.log("Nihad nailden boyukdur");
// }else{
//     console.log("Nihad boyuk deyil");
// }



// console.log("Nail " + nailBki + "   Nihad " + nihadBki);
// console.log(isNihadBigger);









// let bki = function(mass, height){
//     return mass / (height**2);

// }

// function bki(mass, height) {
//     return mass/ (height**2)
// }



// const bki = (mass, height) => mass/ (height**2);

// console.log(bki(97,1.82));
// console.log(bki(63,1.83));

// console.log(bki(108, 1.78));




// Funksiya 3 parametr teleb edir( 2 eded, 1 operator);
// Calculator



// const calculator = function (eded1, eded2, operator) {

//     let cavab;

//     if ( !isNaN(eded1) && !isNaN(eded2)) {
//         if (operator == "+") {
//             cavab = eded1 + eded2;
//         } else if (operator == "-") {
//             cavab = eded1 - eded2;
//         } else if (operator == "*") {
//             cavab = eded1 * eded2;
//         } else if (operator == "/") {
//             if(eded2 == 0){
//                 cavab = " 0 a bolmek olmaz"
//             }else{
//             cavab = eded1 / eded2}
//         } else {
//             cavab = "Operator yalnishdir!"
//         }
//     }else{
//         cavab= "Eded deyil"
//     }

//     return cavab;

// }


// let eded1Promp = Number(prompt("1ci ededi daxil edin"));
// let eded2Promp = Number(prompt("2ci ededi daxil edin"));
// let operPromp = prompt(`Operator daxil edin ("+" , "-" , "*" , "/")`)


// alert(calculator(eded1Promp, eded2Promp, operPromp));

// console.log(Number("salam"));



// Termometr - farenheytle qebul edib selsi ile cixisha verir;

// const termometer = function(f){
//     let c =(f-32)*(5/9);
//     return c;
// }

// Girish suret zaman
// cixish mesafe


// Bank kredit melumatlarinin hesablanmasi

//girishe teleb olunur 
//1. emek haqqi
//2. istediyiniz meblegh
//3. Istediyiniz muddet (ay)

// Maksimal muddet 36 ay  (eger cox olarsa "size bu shertlerde kredit dushmur");

// Faiz derecesi
// 0-12 ay arasi - illik 13%;
// 12-24 ay arasi - illik 15%;
// 24 - 36 ay arasi - illik 17%;

// Maksimal kredit meblegi - Emek haqqinin 10 misli (eger cox olarsa "size bu shertlerde kredit dushmur");

// ayliq odenish emek haqqinin 45 faizinden cox ola bilmez ( eger cox olarsa "size bu shertlerde kredit dushmur" );

// cixishda ("3000 azn mebleg size 15% le 16 bay muddetine ayliq 345 manat serti ile verilir");

// const kredit = function(salary, cash, month){
//     if ( (cash> salary *10) || month > 36 ){
//         return "size bu shertlerde kredit dushmur"
//     }else{
//         let percentage ;
//         let year;
//         if (month<=12){
//             percentage = 13;
//             year =1;
//         }else if (month > 12 && month <= 24){
//             percentage =15;
//             year = 2; 
//         }else if ( month > 24 && month <=36){
//             percentage=17;
//             year =3;
//         }

//         let payment = (cash + cash*(percentage*year/100))/month;

//         if ( payment < salary*0.45){
//             return `${cash} azn mebleg size ${percentage} % ile ${month} ay muddetine ayliq ${payment} azn odenishle verilir`
//         }else{
//             return "size bu shertlerde kredit dushmur"
//         }


//     }
// }


// console.log(kredit(1000, 9000, 24));














// Radar - 
// Girishde (suret heddi ve faktiki suret)
// 1. suret heddini 0-10 km/s ashmaga gore cerime yoxdur
// 2. suret heddini 10-30 km/s ashmaga gore cerime 20 azn;
// 3. suret heddini 30-50 km/s ashmaga gore cerime 50 azn;
// 4. suret heddini 50 km/s-dan cox ashmaga gore cerime 250 azn;


//Cerime 10 gun erzinde odenilse 10 faiz endirim var;

// cixishda teleb olunur " Sizin 50 azn mebleginde cerimeniz var, 10 gun erzinde odesez filan qeder olacaq" ve ya " sizin cerimeniz yoxdur"


// const radar = function (limit, speed) {

//     let bill;

//     if (speed<= limit+10){
//         bill = 0;
//     }else if (speed > limit+10 && speed <limit +30 ){
//         bill= 20;
//     }else if (speed > limit+30 && speed <limit +50 ){
//         bill= 50
//     }else bill=250;


//     if (bill==0){
//         return  "sizin cerimeniz yoxdur"
//     } else {
//         return ` Sizin ${bill} azn mebleginde cerimeniz var, 10 gun erzinde odesez ${bill*0.9} azn olacaq`
//     }

// }

// console.log(radar(110, 178));




// let person = [
//     "Huseynagha",
//     "Haqverdiyev",
//     24,
//     13,
//     "Code",
//     ["Ayxan", "Seyfeddin", "Mirtalib"]
// ];


// let myName = "Huseynagha"





// const person238 = {
//     name : "Huseynagha",
//     surname : "Hagverdiyev",
//     age : 24,
//     getInfo : () => {
//         console.log(`Menim adim ${this.name} soyadim ${this.surname}, yashim ise ${this.age} - dir`);
//     }
// }

// let need = prompt("Teleb etdiyin melumati daxil et")

// const person239 = {
//     name : "Ayxan",
//     surname : "Ceferzade",
//     age : 21,
//     getInfo : function(){
//         alert(`Menim adim ${this.name} soyadim ${this.surname}, yashim ise ${this.age} - dir`);
//     }
// }

// alert(person239[need]);


// let nihad = [
//     "Nihad",
//     "Canizade",
//     19
// ];

// let person = [
//     "huseynagha",
//     "Haqverdiyev",
//     24,
//     true,
//     "a",
//     "B",
//     "Cemshid",
//     "Cavidan",
//     34,
//     "Djanavar",
//     "Djavidann",
//     "Xedice",
//     "*",
//     785,
//     "Happy New Year",
//     1999,
//     1972,
//     1975
// ];

// let myName = "Samir";

// console.log(myName[3])


// let string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit maiores asperiores enim dolorem dolores debitis explicabo. Blanditiis minima incidunt error at veniam dolores ipsum reiciendis tenetur. Voluptas, repudiandae et!"

// let counter = 0;

// for (let i=0; i< string.length; i++){
//     if (string[i] != "m") continue;

//     counter++;
// }

// console.log(counter);






// 1. Object yaradin (adi bir shexsin adi olsun)
// 2. Obyektin fullName , mass, height adli keyleri ve uygun valueleri olsun
// 3. Obyektin ichinde BKI hesablayan funksiya yazin. k/h*h;




// const Huseynagha = {
//     fullName : "Huseynagha",
//     mass : 64,
//     height : 1.66,
//     bki : function(){
//         return ;
//     }
// }



// console.log(Huseynagha.bki());



// hesablari bir arrayda saxla(verilecek);

// funksiya yaradib, icine parametr kimi arrayi oturmelisiz;
// 50-300 arasi  - 15 %, diger hallarda 20%;
// bexshishleri hesablayib bir arraye yig;
// umumi odenecek meblegleri bir arraye yig




// let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52, 42];
// let bills2 = [15, 445 , 658, 349, 122];




// function tipCalculator(a) {

//     let tips = []
//     let totals = [];

//     for (let i = 0; i < a.length; i++) {
//         let tip;
//         if (a[i] >= 50 && a[i] <= 300) {
//             tip = a[i] * 0.15;
           
//         } else {
//             tip = a[i] * 0.2;      
//         }
//         tips.push(tip);
//         totals.push(tip + a[i])

//     }

//     let sum = 0;
//     for (let j = 0; j < totals.length; j++) {
        
//         sum += totals[j];
//     }

//     let avarage = sum/totals.length;


//     return [tips, totals, avarage];

// }


// console.log(tipCalculator(bills));
// console.log(tipCalculator(bills2));
// console.log(tipCalculator(bills3));


// let a=11;

// while (a<10) {
//     console.log("Salam");
//     a++
// }

// do {
//     console.log("Salam");
//     a++
// } while (a<10);

// let bills3 = [7, 15, 278, 376];

// let bills4 = [...bills3];

// console.log(bills4);


// let myForEach = bills3.forEach(function(item){
//     return item;
// })

// const person = {
//     myName : "Huseynagha",
//     age : 24
// }


// for (const element in person) {
//     console.log(person[element]);
// }

// let myMap = bills3.map((element)=>{
//     return element**2;
// })


// console.log("My map ===", myMap, "ForEach ====", myForEach);


// let myNumber = prompt()


// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'papaya', 'lemon'];


// for (let i = 5; i >= 0; i--) {
//  console.log(i);
// }



// let i = 6;

// while (i<5) {
//     console.log(i);
//     i++;
// }

// do {
//     console.log(i);
//     i++;
// } while (i<5);

// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'papaya', 'lemon'];

// let mappedFruits = fruits.map((meyve)=>meyve);


// let forEachFruit = fruits.forEach((meyve)=>meyve);


// console.log( mappedFruits , forEachFruit);

// let numbers = [1, 28, 46, 2025, 78, 99]



// let fruits = ['apple', 'banana', 'orange', 'kiwi', 'papaya', 'lemon'];


// const person = {
//     firstName : "Seyfeddin",
//     lastName: "Qurbanov",
//     age : 30
// }



// for (let x in person){
//     console.log(person[x]);
// }

// for (let x of fruits){
//     console.log(x);
// }


// const iphone11 = {
//     name: "iPhone 11",
//     ram : "4gb",
//     price : "1000azn"
// }

// const samsung = {
//     name : "Galaxy Note",
//     ram : "8gb",
//     price : "1425azn"
// }

// let response = [iphone11, samsung]

// console.log(response);

// let myText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam odit maiores asperiores enim dolorem dolores debitis explicabo. Blanditiis minima incidunt error at veniam dolores ipsum reiciendis tenetur. Voluptas, repudiandae et!"

// let numbers = [1, 2025, 28,  78, 46, 99]

// let count = 0;

// for (let i = 0; i < myText.length; i++) {
  
//     if (myText[i] !== "m") continue;

//     count++;


    
// }

// console.log(count);



// const fiveChecker = (e) => e.length>5;

// let myArray = ["Salam", "Lenkaran", "Baku", "University"];
// let newArray = ["Ganja", "Mingachevir"];

// let mixedArray = [myArray, newArray];
// let flatted = mixedArray.flat();


// console.log(flatted);

// let five = myArray.filter((e) => e.length>=5);
// console.log(five);


// let newArray = ["Ganja", "Mingachevir"]

// myArray.sort();

// console.log(myArray);


// let numberArray = [1, 88, 4 , 238 , 9812, 38];

// let checkedArray = numberArray.filter(function(num){
//     return num>50
// });


// let numArray = [8, 4, 2];

// let reduced = numArray.reduce(((a,b)=> a / b), 5)

// console.log(reduced);



// let textWrapper = document.getElementById('textWrapper');

// let myButton = document.getElementById('clicker');

// console.log(Math);


// let nums = [25, 45 , 89, 1245 , 3 , 66, 78, 44 , 345];

// let filters = nums.filter(function(e){
//     return e>50;
// });

// let words = ["Azerbaycan", "Guclu", "Dovletdir"];

// let cumle = words.indexOf("Dovletdir")

// console.log(nums.sort((a,b)=>b-a));

// console.log(window)

// let myDiv = document.querySelector('#textWrapper');
// let myButton = document.querySelector('#clicker');

// myButton.addEventListener('click',function(){
//     myDiv.innerText = "Salam, dunya"
// })

// let centerButton = document.querySelector('#center');


// let toggleClass =  function(){
//     myDiv.classList.toggle("hidden")}

// console.log("salam") 
// centerButton.addEventListener('mousedown', toggleClass);

// let arrayWords = ["Lenkeran", "Dovlet", "Universiteti"]

// let arrayWords2 = ["Code", "Academy"]

// // console.log(arrayWords.concat(arrayWords2))
// console.log(arrayWords2.toString());
// console.log(arrayWords.join(""));

// console.log(document.all);
// console.log(window);


/// 14.11.2023 ///

// let myButton = document.getElementById('clicker');
// let myDiv = document.getElementById('textWrapper');
// let hideButton = document.getElementById('center');

// let myFunction = ()=>{
//     if (myDiv.style.backgroundColor != "red"){
//         myDiv.style.backgroundColor = "red"
//     }else{
//         myDiv.style.backgroundColor = "white"
//     }
//     }

// myButton.addEventListener("click", myFunction);

// hideButton.addEventListener('click', ()=>{
//     myDiv.classList.toggle('hidden');
// })


// let openBtn = document.getElementById('open-modal');

let openBtn = document.querySelectorAll('.operModals');
console.log(openBtn);
let modalWrp= document.getElementById('modal-wrapper');
let closeBtn = document.getElementById('close-modal');

let hideOrShow = () => {
    modalWrp.classList.toggle('hidden')
}

document.addEventListener('keydown',(i)=>{
    if (i.key === "q"){
        modalWrp.classList.add('hidden');
    }
})

// for (let i = 0; i < openBtn.length; i++) {
//     openBtn[i].addEventListener('click', hideOrShow) 
// }

openBtn.forEach((button)=>{
    button.addEventListener('click', hideOrShow);
})

closeBtn.addEventListener('click', hideOrShow);
