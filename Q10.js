
let arr=[[1,2,3],[4,5,6],[9,8,9]];
let n = arr.length; 
let Left_Diagnol = 0;
let Right_Diagnol = 0;
for(let i=0; i<n; i++){
for(let j=0; j<n; j++){
       
if(i === j) {
Left_Diagnol += arr[i][j];
}
     
if(i + j === n - 1){
Right_Diagnol += arr[i][j];
}
}
}
console.log (Math.abs(Left_Diagnol - Right_Diagnol));
