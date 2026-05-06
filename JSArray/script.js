// let arr = [10,26,45,68,12,31,2,24]

// for(var i=0; i<8; i++)
// {
//     console.log(arr[i]);
    
// }
// console.log(arr);

// arr[2]= arr[2]+10;
// console.log(arr);

// arr = [];
// console.log(arr);


// arr.pop();
// console.log(arr);

// arr.push(58);
// console.log(arr);

// arr.unshift(11)
// console.log(arr);
// arr.shift(12);
// console.log(arr);

// console.log(arr.at(6));



// let ar = [10,26,45,68,12,31,2,24]

// for(var i=0; i<8; i++)
// {     console.log(ar[i]);


// }
// console.log("for each loop");

// ar.forEach((Element)=>{console.log(Element);
// });





// let arr1 = [];
// for(var i = 1; i<2;i++)
// {
//     console.log(arr1);
// }

// arr1.push(15);
// console.log(arr1);



// let fn =[
//   {
//     "name": "Aman Verma",
//     "dob": "2002-05-14",
//     "mobile": "9876543210",
//     "city": "Bhopal",
//     "job": "Software Developer"
//   },
//   {
//     "name": "Rahul Sharma",
//     "dob": "2001-11-22",
//     "mobile": "9123456780",
//     "city": "Indore",
//     "job": "Data Analyst"
//   },
//   {
//     "name": "Neha Singh",
//     "dob": "2003-07-09",
//     "mobile": "9988776655",
//     "city": "Delhi",
//     "job": "UI/UX Designer"
//   },
//   {
//     "name": "Priya Patel",
//     "dob": "2000-03-18",
//     "mobile": "9090909090",
//     "city": "Ahmedabad",
//     "job": "Digital Marketer"
//   },
//   {
//     "name": "Rohit Gupta",
//     "dob": "2002-12-30",
//     "mobile": "9012345678",
//     "city": "Jaipur",
//     "job": "Mechanical Engineer"
//   }
// ]

// fn.forEach(item => {
//     console.log(item["job"]);
    
// });
 

// console.log(fn);
// console.log(fn[1]["name"]);
// console.log(fn[2][""]);




let aman ={
    "name": "Aman Waghade",
    "dob": "2002-05-14",
    "mobile": "9876543210",
    "city": "Bhopal",
    "job": "Software Developer"
  }

console.log(Object.keys(aman));
console.log(Object.values(aman));
console.log(Object.entries(aman));


let arr1 = [2,3,85,9,65,6,91,4,78,85,55,8,6,45,12]
console.log(arr1);

 arr1.sort((a,b)=>a-b);  //sorting ke liye hai ye
console.log(arr1);


console.log(arr1.find((val) => val===12));
console.log(arr1.findIndex((val) => val===65));
console.log(arr1.findLastIndex((val) => val===3));
