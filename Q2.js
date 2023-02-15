const arr4=[1,2,3];
const arr=[];

/*for (let i=arr4.length-1 ; i>=0 ; i--)
arr4.unshift(arr.pop());
console.log(arr);

console.log(arr4[i]);*/

for(var i=0;i<3;i++){
    arr.push(arr4.pop());
}
console.log(arr);





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
    

    