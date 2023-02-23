console.time();
function delayedUpperCase(input, n){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(typeof input==="string"){
                resolve(input.toUpperCase());
            }else{
                reject(input);
            }
        }, n);
    });
    
}
delayedUpperCase("AbdurRehman",300).then(result => console.log(result)).catch(error => console.log(error));
delayedUpperCase(10101,300).then(result => console.log(result)).catch(error => console.log(error));



function delayedUpperCase(input, n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (typeof input === 'string') {
          resolve(input.toUpperCase());
        } else {
          reject(input);
        }
      }, n);
    });
  }
let a = function(result){
    console.log(result);
}
delayedUpperCase("AbdurRehman", 2000).then(a);

let b = function(error){
    console.log(error);
}
delayedUpperCase(346583, 2000).catch(b);
console.timeEnd();