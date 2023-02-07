/*var arr1=[1,2,3];
var arr2=[4,5,6];
var result;
result=arr1.concat(arr2);
console.log(result);*/

/*var arr1=[1,2,3];
var arr2=[4,5,6];


console.log(arr1+ ","+arr2);


/*const arr4=[1,2,3];

for (let i=arr4.length-1 ; i>=0 ; i--)


{
    console.log(arr4[i]);
   
}*/


let arr = [ 1,2,3,4,5,6,7 ];
let n = arr.length;
let k = 3; 
let i, j;
for (i = n - k, j = n - 1; i < j; i++, j--) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
}
for (i = 0, j = n - k - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
for (i = 0, j = n - 1; i < j; i++, j--) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
for (let i = 0; i < n; i++) {
    console.log(arr[i]+ " ");

}




    

    