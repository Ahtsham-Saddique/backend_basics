// Array

let fruits = [ "Banana", {Apple : 3}, ["orange","kenno"],
function veg(){

},"Banana"]

console.log(fruits[1].Apple+"\n");
console.log(fruits[2][1]+"\n");
console.log(fruits[fruits.length-1]+"\n");


// foreach-map-filter-find-indexof-slice-push-pop-shift-unshift-charat

// forEach affect on original array
fruits.forEach((val,index,arr)=>
{

  arr[index]=  val+"modified";
});


    console.log(fruits);


    
// map does not  affect on original array return copy of modified or same array


let mapped_Fruits = fruits.map((val,index,arr)=>
{
    return arr[val]=val+"mapped";
});
console.log(mapped_Fruits);

// filter_method
let filtered_arr=fruits.filter((val)=>
{if(fruits.indexOf(val)>=2)
{
    return true;
}
else{
    return  false;
}
}
);

console.log(filtered_arr);

// indexOf function
let fruits2 = [ "Banana", {Apple : 3}, ["orange","kenno"],
function veg(){

},"Banana"]
console.log(fruits2.indexOf("Banana",2));

// charAt method in js
console.log(fruits2.find((val)=>
{
   return  val==="Banana";
}));

console.log(fruits2[0].charAt(2));

// push method

fruits2.push(function ne(){

});

fruits2.forEach((val)=>
{
    console.log(val);
})

console.log(fruits2);

// pop delete form last

fruits2.pop();


console.log(fruits2);
// delete form start

fruits2.shift();

console.log(fruits2);

// add at start
fruits2.unshift("Banana");


console.log(fruits2);