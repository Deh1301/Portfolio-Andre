document.addEventListener("DOMContentLoaded",()=>{
    
    const svgAnimation = ()=>{
        gsap.to("#svg",{
            duration:.8,
            rotate:15,
            yoyo: true,
            repeat: -3,
            ease:"power1.inOut"
        })
    }
    svgAnimation()

    const typed = new Typed("#textAnimation",{
        strings:['André','Calixto'],
        typeSpeed:50,
        startDelay: 0,
        loop:true,
        attr: null,
        showCursor: false,
    })
    
})