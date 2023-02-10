console.time();
let i ,j ;
for (   i=1; i<=5;i++)
{
    for (let k=5; k>i;k--){
        process.stdout.write(".")
    }
    for ( j=0;j<i;j++){
        process.stdout.write(i.toString()+" ");
    }
    process.stdout.write("\n");
}
console.timeEnd();





    
