// Array

let fruits = [ "Banana", {Apple : 3}, ["orange","kenno"],function veg(){

}]

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
