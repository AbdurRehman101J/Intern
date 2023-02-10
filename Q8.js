function centuryFromYear(year) {
    var x = Math.floor((year-1)/100) + 1;
    return x; 
}
console.log(centuryFromYear(1905));  





function century(year){
    century=0;
    for(let i=0;i<year;i++ ){
        if (i%100===0){
            century++;
        }
    }
    return century;
}
console.log(century(10));

   
  

