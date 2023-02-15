var arr1 = [["eggs", 2.89], ["milk", 3.29],
["cheese", 5.79]];
var arr2 = [["eggs", 2.89], ["eggs", 2.99],
["cheese", 5.97], ["milk", 3.29], ["cheese", 5.97]];
function countItems(arr1, arr2,)
{
var count = 0;
for (var i = 0; i < arr1.length; i++)    
for (var j = 0; j < arr2.length; j++) 
 if (arr1[i][0] === arr2[j][0] &&
(arr1[i][1]!= arr2[j][1]))
count++;        
return count;
}
console.log( "Count = " + countItems(arr1,arr2));
   
