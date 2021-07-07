'use strict';
let userName = prompt ('Enter your name , please');
alert('Welcome '+userName+' to my guessnig game .');

let score = 0;


function q1 (){
let q1 = prompt ('AM i a programmer ?');
let resq1 = q1.toLowerCase();

 if (resq1 === 'yes'||resq1 === 'y' ) {
   console.log('GOOD JOB , your answer is correct.');
   alert('GOOD JOB , your answer is correct.');
   score++
 }else{
    console.log('NO, your answer is not correct.');
    alert('NO, your answer is not correct');
 }

}
q1();

 let q2 = prompt ('AM i good cooker?');
 let resq2 = q2.toLowerCase();
 if (resq2 === 'yes'||resq2 === 'y' ) {
    console.log('GOOD JOB , your answer is correct.');
    alert('GOOD JOB , your answer is correct.');
    score++
  }
 else{
     console.log('NO, your answer is not correct.');
     alert('NO, your answer is not correct');
 }

let q3 = prompt ('Do we see the moon every day ?');
 let resq3 = q3.toLowerCase();

 if (resq3 === 'no'||resq3 === 'n' ) {
    console.log('GOOD JOB , your answer is correct.');
    alert('GOOD JOB , your answer is correct.');
    score++
  }
 else{
     console.log('NO, your answer is not correct.');
     alert('NO, your answer is not correct');
 }


let q4 = prompt ('Do I play football?');
let resq4 = q4.toLowerCase(); 
 if (resq4=== 'yes'||resq4 === 'y' ) {
    console.log('GOOD JOB , your answer is correct.');
    alert('GOOD JOB , your answer is correct.');
    score++
  }
 else{
     console.log('NO, your answer is not correct.');
     alert('NO, your answer is not correct');
 }


let q5 = prompt ('Did you Know me ? ');
 let resq5 = q5.toLowerCase();


 if (resq5=== 'no'||resq5 === 'n' ) {
    console.log('GOOD JOB , your answer is correct.');
    alert('GOOD JOB , your answer is correct.');
    score++
  }
 else{
     console.log('NO, your answer is not correct.');
     alert('NO, your answer is not correct');
 }



for (let i = 0; i < 4; i++) {
  let q6 = prompt('Guess the number btween 1 and 10 ?');
  if (q6==5 ) {
    console.log('GOOD JOB , your answer is correct.');
    alert('GOOD JOB , your answer is correct.');
    score++
    break;
  }
  if (q6 > 5) {
    alert(`too high , NO, your answer is not correct, try again!`);

  } else if (q6 < 5) {
    alert(`too low, NO, your answer is not correct , try again!`);
  } else {
    alert(`the number is 5 , correct.`)
    break;
  }
}


let favMeal = ['blue', 'red', 'green'];
for (let i = 0; i < 1; i++) {
  for (let j = 0; j <= 6; j++) {
    let q7 = prompt('Guess my favorite color ?')
    if (q7 == favMeal[0] || q7 == favMeal[1] || q7 == favMeal[2]) {
      console.log('GOOD JOB , your answer is correct.');
      alert(`GOOD JOB , your answer is correct , these my favorites colors ${favMeal} .`);
      score++
      break;

    } else {
      console.log('NO, your answer is not correct, try again.');
      alert('NO, your answer is not correct, try again.');
    }
  }
}
alert(`these my favorites colors  ${favMeal} .`)


 alert(`You Get ${score} of /7 .`)
alert('Thank you  '+ userName +' , I hope you enjoed my game.');




