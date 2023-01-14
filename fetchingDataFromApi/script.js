console.log("Starting")

// let userPromise = fetch("https://randomuser.me/api/");
// console.log(userPromise);

// userPromise.then((response)=>{
//     return response.json();
// }).then((resData)=>{
//     console.log(resData.results[0].name.first);
//     console.log(resData.results[0].name.last);
// }).catch((error)=>{
//     console.log("error");
// })

let userPromise = fetch("https://randomuser.me/api/");
console.log(userPromise);

userPromise.then((response)=>{
    return response.json();
}).then((responseData)=>{
    document.getElementById('title').innerText  = (responseData.results[0].name.title);
    document.getElementById('firstname').innerText = (responseData.results[0].name.first);
    document.getElementById('lastname').innerText = (responseData.results[0].name.last);
}).catch((error)=>{
    console.log("error");
})

// document.getElementById("fullname").innerText = title + " " + firstname + " " + lastname;