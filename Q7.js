let str="111";
function reverseString(str){
    var splitString=str.split("");
    //console.log(splitString.toString());
    var reverseArray=splitString.reverse();
    //console.log(splitString.toString());
    var joinArray=reverseArray.join("");
    return joinArray;
}
    let finalstr=reverseString(str);
    //console.log(reverseString("Hello"))
    
    if(finalstr==str)
    {
        console.log("true")
    }
    else{
        console.log("False")
    }


  


    


    
    
 


   