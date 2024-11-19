const numbers=[1,2,3,4,5,6,7,8,9,11,10,12,13,14,15,17,18,19,20,21,24,12,45,23,1,5,46];
let even="";
let odd="";
for(let i=0;i<numbers.length;i++){
    if(numbers[i]%2==0){
      even=even+numbers[i]+" ";
    }
    else{
        odd=odd+numbers[i]+" ";
    }
}
 console.log("Even = ",odd);
 console.log("odd= ",even);