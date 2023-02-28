// // let Dom = [
// //     '<p id="para1">',
// //     '<span id="span1">dwf</span>',
// //     '<span id="span2">dfe</span>',
// //     '<span id="span3">feg</span>',
// //     '</p>'
// // ]

// let div1 = document.getElementById("DOM")
// div1.innerText = "Add some values";
// let p = document.createElement("p");
// p.classList = "para";
// let span1 = document.createElement("span");
// span1.classList = "span1";
// span1.innerText = "kani";
// let span2 = document.createElement("span");
// span2.classList = "span2";
// span2.innerText = "venkat";
// let span3 = document.createElement("span");
// span3.classList = "span3";
// span3.innerText = "iniyan";
// p.appendChild(span1);
// p.appendChild(span2);
// p.appendChild(span3);
// div1.appendChild(p);

// // let func1 = () => {
// //     let para = document.getElementById("DOM");
// //     para.appendChild(Dom);
// // }

// const a = ["apple", "kiwi", "orange", "guava"];
// a.splice(2, 1, "gfhj", "guh")
// document.getElementById("DOM").innerHTML = a;

// // document.getElementById("DOM").innerHTML = a;
// var person = function(pName){
//     var name = pName;
//     this.getName = function(){
//         return name;
//     }
// }
// var person = new person("kani");
// console.log(person.getName());

// let z = 34;
// var t = 10;
// var print = ()=>{
//     var t = 78;
//     let z = 50;
//     console.log('hi',z,t);
//     var fun = () => {
//         console.log(t, z);
//     }
//   fun(); 
  
// }
// print();
// console.log(z);

// const numbers = [175, 50, 25];
// document.getElementById("DOM").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }
// let arr = [1,2,3,4,5];
// arr.forEach(myFunction);
// document.getElementById("DOM").innerHTML = arr;
// function myFunction(item,index,array){
//   array[index]=item*10;
// }
 
calculator();
let addNumber = document.getElementById("add-number");

function dis(num){
addNumber.value +=num;
}