//Que1

var add=(function(){
    var counter=0;
    return function(){counter+=1; return counter}
})();
console.log(add());
console.log(add());

//Que2
function rev(str) {
   // return str.split("").reverse().join("");
    var rev="";
   for(var i=str.length-1;i>=0;i--)
    {
        rev+=str[i];
    }
    console.log(rev);
}
rev("Meghana");
//console.log(rev("Meghana"));

//Que3
var circle=[
    {radius:9},
    {radius:5},
    {radius:2}
];
console.log(circle.sort((a, b) => (a.radius > b.radius) ? 1 : -1));

//Que4
function func(array)
{
    for(var i=0;i<array.length;i++)
    {
        for(var j=0;j<array.length;j++)
        {
            if(array[i]<array[j])
            {
                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
   return array;
}
var array=[4,2,1,9,7,3];
console.log(func(array));