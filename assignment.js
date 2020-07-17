//**answer to question no 1*/
function feetToMile(feet) {
    var Mile = feet / 5280; // Because 1 mile = 5280 feet;
     return Mile //returns the mile after conversion;
}
var res1 = feetToMile(1000);
console.log(res1);


//**answer to question no 2*/
function woodCalculator(chair,table,bed) {
    var wood = (chair*1)+(table*3)+(bed*5); // 1 chair needs 1 cubic feet wood, 1 table needs 3 cubic feet wood and 1 bed needs 5 cubic feet wood;
     return wood //retruns total wood needed;
}
var res2 = woodCalculator(15,6,3);
console.log(res2);


//**answer to question no 3*/
function brickCalculator(floor) {
    var brick;
    if(floor<=10)
     brick = 1000*15*floor; // For 1 floor 1000 brick needed, 1-10 floors are 15feet
    else if(floor>=11&&floor<=20)
     brick = 1000*12*floor; // For 1 floor 1000 brick needed, 11-20 floors are 12feet
    else
     brick = 1000*10*floor; // For 1 floor 1000 brick needed, more than 20 floors are 10feet

    return brick //returns total brick needed;
}
var res3 = brickCalculator(6);
console.log(res3);
var res3 = brickCalculator(25);
console.log(res3);


//**answer to question no 4*/
function tinyFriend(array){
    var result=[]; // array for saving result;
    var c=0;  //counter for the result array;
    var smallest=array[0].length; //set smallest to the first name length; 
    for(var i=1;i<array.length;i++) //loop to find the smallest name length 
    {    if(array[i].length<smallest)  //comparing the current name length with smallest and update samllest if needed; 
         {
             smallest=array[i].length;
         }
    }
    for(var i=0;i<array.length;i++) //loop to find the names with the samllest length
    {
        if(array[i].length==smallest)//if it finds a names with smallest length then it saves the name in result array and increases the counter of result array 
          { 
              result[c]=array[i];
              c++; 
          }          
    }
    return result; //returns result array which contains the names with smallest length
}

var names=['Ovi','Arif','Po','Raihan','Ra'];
var res4 = tinyFriend(names);
console.log(res4);  