const num=[1,2,3,4,5,6,7];
const k=3;
function arrayRotation(arr){
    for (let i=1; i<num.length-k;i++){
    arr.unshift(arr.pop())}
    console.log(arr);
}
console.log(arrayRotation(num));





    
