let washCar = 10
let mowLawn = 20
let pullWeeds = 30 
let allTask = []
let sum = 0
let task = 0
let li = ""

let totalAmount = document.querySelector(".total-amount")
// totalAmount.textContent = "$" + sum
let washBtn = document.getElementById("wash-btn")
let mowBtn = document.getElementById("mow-btn")
let pullBtn = document.getElementById("pull-btn")
let ulEl = document.querySelector(".ul-el")

function renderprice(taskName) {
    
    if(allTask.includes(taskName)){
        return
    }else{
        allTask.push(taskName)
        for (let i = 0; i < allTask.length; i++){
           task = allTask[i]
        }
        li = `<li> $${task}</li>`
        ulEl.innerHTML += li
        
    }
    sum += taskName
    totalAmount.textContent = "$" + sum
}


washBtn.addEventListener("click", function() {
    renderprice(washCar)
})
mowBtn.addEventListener("click", function() { 
    renderprice(mowLawn)
})
pullBtn.addEventListener("click", function() { 
    renderprice(pullWeeds)
})