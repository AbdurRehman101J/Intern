function Polygone(n) {
    if(n<0) {
        return false
    }
    return (n*n) + ((n-1)*(n-1))
}
console.log(Polygone(4))


/*
let arr=[1,2,3,4,5,6,9,8,9];
let n=arr.length;
   
  
 let first_index=arr[0];
 let last_index=n;
 let mid_index=Math.floor(first_index+last_index/2);
 let Left_Diagnol=first_index+last_index+ mid_index;
 console.log(Left_Diagnol);

 let R_first_index=arr[2];
 console.log(R_first_index);
 let R_last_index=arr[6];
 console.log(R_last_index);
 let R_mid_index=Math.floor(R_first_index+R_last_index/2);
 console.log( R_mid_index);
 
 let Right_Diagnol=R_first_index+R_last_index+ R_mid_index;
 console.log(Right_Diagnol);
 */