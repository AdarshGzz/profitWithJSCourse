// console.log("hollow");

// let addNumbers= (num1,num2) => num1+num2;

// console.log(addNumbers(2,5));

// let minutesToSeconds = (minutes) => minutes*60;

// console.log(minutesToSeconds(30));

// let yourAgeToSeconds = (yourAge) => yourAge*365*24*60*60;

// console.log(yourAgeToSeconds(20));

// let getFirstElment = (array) => array[0];

// let itemList = [
//   "first elment",
//   "second element",
//   "third elment",
//   "fourth elment",
//   "fifth elment",
// ];
// console.log(getFirstElment(itemList))

// // IMDB movie filters

// let movieFilter = (movieRating) =>{ 
//     if(movieRating>=7){
//         console.log("good")
//     }
//     else{
//         console.log("bad")
//     }
// }
// movieFilter(7);

// // check if the string is empty

// let checkString = (string) => {
//     if(string==""){
//         console.log("empty string")
//     }
//     else{
//         console.log("not empty")
//     }
// }

// checkString("");
// checkString("Godfather");

// // find max and min in array
// let findMinAndMax = (Numbers) =>{
//     let MAXNUMBER = 0;
//     let MINNUMBER = 100;
//     for(let i = 0; i <Numbers.length; i++){
//         if(MAXNUMBER<Numbers[i]){
//             MAXNUMBER = Numbers[i];
//         }
//     }
//     for(let i = 0; i <Numbers.length; i++){
//         if(MINNUMBER>Numbers[i]){
//             MINNUMBER = Numbers[i];
//         }
//     }
//     console.log(MAXNUMBER);
//     console.log(MINNUMBER);

// }

// givenNums = [1, 2, 3, 4, 5, 6, 7, 8];

// findMinAndMax(givenNums);

// // function to sort numbers by
// let Swap = (num1,num2) =>{
//    let temp = 0;
//    temp = num1;
//    num1 = num2;
//    num2 = temp;
// }
// let sortedNums_methode1 = (numbers) =>{
//     for(let i=0;i<numbers.length;i++){
//         for(let j=i+1;j<numbers.length;j++){
//             if(numbers[i]<numbers[j]){
//                 let temp = numbers[i];
//                 numbers[i] = numbers[j];
//                 numbers[j] = temp;
//             }
//         }
//     }
//     console.log("sorted array 1");

//     // for(let i=0;i<numbers.length;i++){
//     //     console.log(numbers[i]);
//     // }
//     console.log(numbers);
// }

// let sortedNums_methode2 = (numbers) =>{
//     for(let i=0;i<numbers.length-1;i++){
//         let max_num = numbers[i];
//         let max_location = i;
//         for(let j=1;j<numbers.length;j++){
//             if(numbers[j] > max_num){
//                 max_num = numbers[j];
//                 max_location = j;
//             }
//         }
//          numbers[max_location] = numbers[i];
//          numbers[i] = max_num;
//     }
//     console.log("sorted array 2");
//     console.log(numbers);
// }

// let Nums = [10,4,8,1,5,2,3,6,17];
// sortedNums_methode1(Nums);
// sortedNums_methode2(Nums);

////////////////////////////////////////////////////////////////////

////promises

// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         // resolve({
//         //     firstName:"adarsh",
//         //     lastName: "gupta"
//         // });
//         reject({
//             error:"something went wrong"
//         })
//     }, 1000);
// })

// promise.then((response)=>{
//     console.log("first response");
//     console.log(response);
// }).catch((error)=>{
//     console.log("second response");
//     console.log(error);
// })

////////////////////////////////////////////////////////////////

///// objects in javascript

// let user = {
//     firstName:"Adarsh",
//     secondName:"Gupta",
//     setPassward: (user,passward) =>{
//         user.password = passward
//     },
//     "user Hobbies": [
//         "coding",
//         "guitar"
//     ],
//     getFullName: (user) => {
//         return `${user.firstName} ${user.secondName}`
//     }
// }

// console.log(user);
// console.log(user.firstName);
// console.log(user["secondName"]);
// console.log(user.getFullName(user));
// console.log(user["user Hobbies"]);

// if("firstName" in user){
//     console.log("random Attrr");
// }
// else{
//     console.log("randon Attrr not exist");
// }

// for(props in user){
//     console.log(props)
//     console.log(user[props])
// }

////////////////////////////////

///// classes is javascript

class user{
    constructor(firstName, lastName,userHobbies){
        this.firstName = firstName;
        this.lastName = lastName;
        this.userHobbies = userHobbies;
    }
    getFullName = () =>{
        return `${this.firstName} ${this.lastName}`;
    }
}

let jhon = new user("jhon","davis",["soccer","volleyball"]);

let adarsh = new user("Adarsh","Gupta",["guitar","coding"]);
console.log(jhon);
console.log(jhon.getFullName());
console.log(adarsh.getFullName());