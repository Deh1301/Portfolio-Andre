document.addEventListener("DOMContentLoaded",()=>{
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")
    setTimeout(()=>{
        header.style.opacity="90%"
        header.style.transition = ".5s"
        nav.style.opacity="90%"
        nav.style.transition = ".5s"
        

    },1000)
    const typed = new Typed("#headerTxt",{
        typeSpeed:50,
        loop:true,
        strings:['< >Bem Vindo ao meu Portfólio < / >']

    })
    
    AOS.init()
})