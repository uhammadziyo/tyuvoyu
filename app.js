let playButton = document.getElementById(`btn`)
let audio = document.getElementById(`audio`)


let h2 = document.getElementById(`h2`)

setInterval(()=>{
    let date = new Date()
    h2.innerHTML = `hozirgi vaqt: ${date.getHours()}: ${date.getMinutes()}: ${date.getSeconds()}`
},1000)