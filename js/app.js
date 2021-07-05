'use strict';
let userName = prompt ('Enter your name , please');
alert('Welcome '+userName+' to my guessnig game .');



let q1 = prompt ('AM i a programmer ?');
let resq1 = q1.toLowerCase();

 if (resq1 === 'yes'||resq1 === 'y' ) {
   console.log('GOOD JOB , your answer is correct.');
   alert('GOOD JOB , your answer is correct.');
 }else{
    console.log('NO, your answer is not correct.');
    alert('NO, your answer is not correct');
}


 let q2 = prompt ('AM i good cooker?');
 let resq2 = q2.toLowerCase();
 if (resq2 === 'yes'||resq2 === 'y' ) {
    console.log('GOOD JOB , your answer is correct.');
    alert('GOOD JOB , your answer is correct.');
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
  }
 else{
     console.log('NO, your answer is not correct.');
     alert('NO, your answer is not correct');
 }


alert('Thank you  '+ userName +' , I hope you enjoed my game.');