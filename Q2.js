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
    

    