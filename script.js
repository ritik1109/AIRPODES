var tm= gsap.timeline()
// tm.fomr("#nav",{
//     y:-100,
//     opacity:0
// })
tm.from("#nav i,#nav a",{
    y:"-100",
    delay:".3",
    duration:".5",
    opacity:"0",
    stagger:".3"
})

tm.from("#right img",{
    scale:".5",
    opacity:0,
    // duration:""
})

tm.from("#center h1, #center h2 ,#center p",{
    x:-700,
    stagger:.5
})
tm.from("#center button,#line h1",{
    scale:.1,
    opacity:0,
    stagger:.5
})
tm.from("#line-2 h1, #circle",{
   opacity:0,
   scale:.2
})


var add=document.querySelector("#center button")
add.addEventListener("click",function(){
    add.style.bacgroundColor="white"
})