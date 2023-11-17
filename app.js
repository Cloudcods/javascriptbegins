let p1=new Promise((resolve,reject) =>{
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("success")
        resolve(true)
    },5000)
})


let p2=new Promise((resolve,reject) => {
    console.log("promise is pending")
    setTimeout(()=>{
        console.log("failure")
        reject(new Error("Error...  "))

    })
})
console.log(p1,p2)