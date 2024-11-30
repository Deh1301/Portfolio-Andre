document.addEventListener("DOMContentLoaded",()=>{
    const studioEfeitoImg = ()=>{
        gsap.to("#imgStudio", {
            duration: 1,
            rotate: 5,       
            yoyo: true,       
            repeat: -3,       
            ease: "power1.inOut"
        });
    }
    studioEfeitoImg()
    const cronometroEfeitoImg = ()=>{
        gsap.to("#imgCronometro",{
            duration: 1,
            rotate: -5,       
            yoyo: true,       
            repeat: -3,       
            ease: "power1.inOut"
        })
    }
    cronometroEfeitoImg()
    const ListaTarefaImg= ()=>{
        gsap.to("#imgTarefa",{
            duration:1,
            rotate:-5,
            yoyo: true,
            repeat: -3,
            ease:"power1.inOut"
        })
    }
    ListaTarefaImg()
    const cadastro = ()=>{
        gsap.to("#imgCadastro",{
            duration:1,
            rotate:-5,
            yoyo: true,
            repeat: -3,
            ease:"power1.inOut"
        })
    }
    cadastro()
    AOS.init()
})