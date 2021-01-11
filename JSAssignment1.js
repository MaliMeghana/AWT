//Que1
console.log("**************Que1***************");
function sum(x,y)
{
    return x+y;
}
console.log(sum(1,3));

//Que2
console.log("**************Que2***************");
var laptop={"os":"windows","company":"asus"};
for(var i in laptop)
{
    console.log(i);
}

//Que3
console.log("**************Que3***************");
var x=[1,3,"Meghana", "Mali",5.67];
for(var p=0;p<x.length;p++)
{
    console.log(x[p]);
}
console.log("**************Que4***************");
//Que4
for(var p=0;p<x.length;p++)
{
   if(Number.isInteger(x[p]))
   {
       console.log(x[p]+" is Integer");
   }
   else{
    console.log(x[p]+" is not Integer");
   }
}
//Que5
console.log("**************Que5***************");
var y=[3,5,6,4,7,1];
var s=0;
var s=y.reduce(function(a, b){
    return a + b;
}, 0);
console.log(s);

//Que6
console.log("**************Que6***************");

function convertCToF(cel)
{
    var ctemp=cel;
    var ftemp=(ctemp*9/5+32);
    console.log("Celsius : "+ctemp+" "+"Fahrenheit : "+ftemp);
}
function convertFToC(f)
{
    var ftemp=f;
    var ctemp=(ftemp-32)*5/9;
    console.log("Celsius : "+ctemp+" "+"Fahrenheit : "+ftemp);
}
convertCToF(60);
convertFToC(45);

//Que7
console.log("**************Que7***************");

function fact(num)
{
    var fact=1;
   for(var p=1;p<=num;p++)
   {
       fact=fact*p;
   }  
   console.log("factorial "+fact); 
}
fact(4);

//Que8
console.log("**************Que8***************");

function convertToCoins(amount,coin)
{
    if(amount===0)
    {
        return [];
    }
    else
    {
        if(amount>=coin[0])
        {
            x=(amount-coin[0]);
            return [coin[0]].concat(convertToCoins(x,coin));
        }
        else{
            coin.shift();
            return convertToCoins(amount,coin);
        }
    }
    
}
coin=[25,10,5,2,1];
console.log(convertToCoins(87,coin));