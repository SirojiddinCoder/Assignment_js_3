
//  1 dan 100 gacha sonlar
// for (let i = 0; i <= 100; i++)
//  {
//      	console.log(i);

// }


//   100 gacha tub sonlar royhati
// for (let i = 1; i <=100; i++)
//  {
// 	 tub_son = true;
// 	 for (let j = 2; j < i; j++) {
// 		 if(i % j == 0){
// 			 tub_son = false;
// 			 break;
// 		 }


// 	 }
// 	 if(tub_son == true){
// 		console.log(i);
// 	 }


// }


//  1 dan 10 gacha sonlar teskari tartibda
// for (let i = 10; i >=0; i--)
//  {
//      	console.log(i);

// }


//  1 dan 100  gacha juft sonlar
// for (let i = 1; i <=100; i++)
//  {
// 	 if( i%2== 0)
// 	 console.log(i);

// }


//  1 dan 100  gacha toq sonlar
// for (let i = 1; i <=100; i++)
//  {
// 	 if( i%2== 1)
// 	 console.log(i);

// }




//  1 dan 100  gacha toq orindagi va juft orindagi sonlar yigindisi
// let a='192080124184614';
// let arr=a.split("");
// let jcount=0;
// let tcount=0;


// console.log(arr.length)
// for(let i = 0;i<arr.length;i++){
//     if(i%2===0){
//         jcount+=parseInt(arr[i])
//     }else(
//         tcount+=parseInt(arr[i])
//         )
// }

// console.log(`juftlari yig'indi: ${jcount}`)
// console.log(`toqlari yig'indi: ${tcount}`)




// var title = "welcome webbrain";
// title = title.repeat(5);
// counterWe = 0;
// counterA = 0;
// counterB = 0;


// const we = (text) => {
//     var inde = parseInt(text.indexOf('we'));
//     counterWe++;
//     text = text.slice(inde + 2);
//     text.includes('we') && we(text);
//     text.includes("we") == false && console.log(counterWe);
// }

// const b = (text) => {
//     var inde = text.indexOf('b');
//     counterB++;
//     text = text.slice(inde + 1);
//     text.includes('b') && b(text);
//     text.includes("b") == false && console.log(counterB);
// }


// const wordA = (text) => {
//     var inde = text.indexOf('a');
//     counterA++;
//     text = text.slice(inde + 1);
//     text.includes('a') && wordA(text);
//     text.includes('a') == false && console.log(counterA);
// }


// we(title);
// b(title);
// wordA(title);
