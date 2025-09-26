const btn = document.getElementById("circle")
const head = document.getElementById("head")
const container = document.getElementById("container")
let toggle = false;

var tl = gsap.timeline()

tl.to("#circle", {
    x:72,
    duration:0.4,
})

tl.pause()

btn.addEventListener("click", ()=> {
  if(!toggle){
    tl.play()
    document.body.style.backgroundColor = "white"    
    head.style.color = "black";   
    btn.style.backgroundColor = "white"
    container.style.border = "2px solid white"
    container.style.backgroundColor = "blue"
  } 
  else {  
    tl.reverse()
    document.body.style.backgroundColor = "black"
    head.style.color = "white";
    btn.style.backgroundColor = "whitesmoke"
    container.style.backgroundColor = "black"
  }
  toggle = !toggle
    
})




    