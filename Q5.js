const arr=[3,6,-2,-5,7,3];
Firstindex=0;
Secondindex=0;
result=0;
for(let i=0;i<arr.length;i++){
    Firstindex=arr[i];
    Secondindex=arr[i+1];
    if(Firstindex*Secondindex>result)
    {
        result=Firstindex*Secondindex;
    }
}
console.log(result); 






    
