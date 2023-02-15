console.time();
let arr=[-4 ,3, -9, 0, 4, 1,];
let n=arr.length;
let countN=0;
let countP=0;
let countZ=0;
for (let i=0;i<n;i++){

    if(arr[i]>0){
       countP++;
}else
    if(arr[i]<0){
        countN++;
 }
    else
    if(arr[i]==0){
       
        countZ++;
    }
}
console.log("Positive Number : "+ countP/n);
console.log("Negative Number : "+ countN/n);
console.log("Zero Number : "+ countZ/n);
console.timeEnd();   
    
    