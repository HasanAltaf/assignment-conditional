const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if(randomNumber>0.7){
    alert('number is greater than 0.7');
}

let myarray=[1,2,3,4,5,6]

for( let i=0; i<=myarray.length;i++){
    console.log(myarray[i]);
}

let num1 =0;
while(num1<myarray.length){
    console.log(myarray[num1]);
    num1++;
}
for( let i=myarray.length-1; i>=0;i--){
    console.log(myarray[i]);
}
const randomnumber2= Math.random();
console.log(randomNumber);
console.log(randomnumber2);
if((randomNumber>0.7 && randomnumber2>0.7)||
randomNumber<= 0.2|| randomnumber2 <=0.2){
    alert('greater than 0.7 or smaller than 0.2')

}