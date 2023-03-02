 // console
 console.log("hello world");
 // alert("alert");

 // document.write("this is a document");
 console.warn("warning");
 console.error("error occured");
 
//variables
 var n1 = 34;
 var n2 = 56;
 console.log(n1 + n2);
 
 //primitive data types-number,string,symbol,boolean,undefined,null
 var str1="string";

 var marks={
    h:20,
    u:30,

 }
 console.log(marks);

 var a=true;
 var b=null;

 console.log(a,b);
 //2 types of data types=1)primitives 2)reference-arrays,objects

 var arr=[1,2,3,"shru"]
 console.log(arr);

 //arithmetic operators
 console.log(n1 + n2);
 console.log(n1 - n2);
 console.log(n1 * n2);
 console.log(n1 / n2);

 //assignment operator

 var c=n1;

 c+=2;//c=c+2
 console.log(c);
//comparison operator

var x=10;
var y=20;
console.log(x==y)

//logical operators

console.log(true || true)
console.log(true && false)
console.log(false && false)
console.log(!false);

//functions
function avg(a,b){
    return a+b/2;

}
c=avg(2,6);
console.log(c);

//conditionals
var age=40;
if(age>50)
{
    console.log("kid");
}
else if(age>8){
    console.log("not kid");
}else{
    console.log("noo")
}

//loops
var arr=[1,2,3,4,5,6,7]
for(var i=0;i<arr.length;i++)
{
    if(i==2)
    {
        break;
    }
    console.log(arr[i]);
}

arr.forEach(function(element)
{
    console.log(element)
})

let j=0;
const ac=0;
// ac=ac+1;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


var arr=[1,2,3,4,5,6,7]
for(var i=0;i<arr.length;i++)
{
    if(i==2)
    {
        // break;
        continue;
    }
    console.log(arr[i]);
}


// array methods

let myarr=["shru","fan",1,true,null]

// console.log(myarr.length);
myarr.pop()
// myarr.push("harry")
// myarr.shift()
// console.log(myarr)
myarr.unshift("ddd")


//string methods
let str="she is is is is girl"
// console.log(str.length)
// console.log(str.indexOf("is"))
// console.log(str.lastIndexOf("is"))

console.log(str.slice(1,3))
str.replace("she","he");
console.log(str)

let mydate=new Date();
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getHours());

//dom manipulation
let elem=document.getElementById('click')
console.log(elem);

let elemclass=document.getElementsByClassName("container");
console.log(elemclass);
elemclass[0].style.background="yellow";

elemclass[0].classList.add("bg-primary")