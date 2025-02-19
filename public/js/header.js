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

    const AnimationText = () => {
        const p = document.querySelector("#p")

        function AnimarP() {
            if (p.style.marginTop === "" || p.style.marginTop === "0px") {
                p.style.marginTop = "-40px";
                setTimeout(() => {
                    p.style.marginTop = "10px";
                    p.style.transition = ".4s"
                    p.style.opacity = "100%"
                }, 1000);

            }
        }
        AnimarP()

        function AnimarP1() {

            setTimeout(() => {
                p.style.marginTop = "0px";
                p.style.transition = ".4s"
                p.style.opacity = "100%"
            }, 1100);


        }
        AnimarP1()
    }


    AnimationText()
})