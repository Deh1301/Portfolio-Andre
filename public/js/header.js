document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header")
    const nav = document.querySelector("nav")
    setTimeout(() => {
        header.style.opacity = "90%"
        header.style.transition = ".5s"
        nav.style.opacity = "90%"
        nav.style.transition = ".5s"


    }, 1000)
    const typed = new Typed("#headerTxt", {
        typeSpeed: 50,
        loop: true,
        strings: ['< >Bem Vindo ao meu Portfólio < / >']

    })

    AOS.init()

    const loadingText = ()=>{
        setInterval(()=>{
            const AnimationTextP = () => {
                const p = document.querySelector("#p")
                if (!p) return; 
        
                p.style.opacity = "0"; 
        
                setTimeout(() => {
                   p.style.opacity = "100%";
                   p.style.marginTop = "-20px"; 
                   p.style.transition = "0.5s";
                
                setTimeout(() => {
                    p.style.marginTop = "15px"; 
                    p.style.transition = "0.5s ";
                    setTimeout(() => {
                        p.style.marginTop = "0px";
                        p.style.transition = "0.5s ";
                       }, 500);
                   }, 300);
                }, 500);
        
          }
          AnimationTextP()

          const AnimationTextR = ()=>{
            const r = document.querySelector("#r")
            if(!r) return
            r.style.opacity = "0"
    
            setTimeout(()=>{
                r.style.opacity = "100%";
                r.style.marginTop = "10px"; 
                r.style.transition = "0.5s";
                setTimeout(() => {
                    r.style.marginTop = "-35px"; 
                    r.style.transition = "0.5s ";
                    setTimeout(() => {
                        r.style.marginTop = "0px";
                        r.style.transition = "0.5s ";
                       }, 500);
                   }, 300);
    
            },500)
    
    
        }
        AnimationTextR()

        const AnimationTextO = ()=>{
            const o = document.querySelector("#o")
            if(!o) return
    
            setTimeout(()=>{
                o.style.opacity = "100%";
                o.style.marginTop = "10px"; 
                o.style.transition = "0.5s";
                setTimeout(() => {
                    o.style.marginTop = "15px"; 
                    o.style.transition = "0.5s ";
                    setTimeout(() => {
                        o.style.marginTop = "0px";
                        o.style.transition = "0.5s ";
                       }, 500);
                   }, 300);
    
            },500)
           
        }
        AnimationTextO()

        },3000)
        
    }
    loadingText()
    
    
    
})