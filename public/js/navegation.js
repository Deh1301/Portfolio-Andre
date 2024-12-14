document.addEventListener("DOMContentLoaded",()=>{
    const projeto = document.querySelector("#btnProjeto")
    const txtProjeto = document.querySelector("#projetosTitulo")
    const contato = document.querySelector("#btnContato")
    const footer = document.querySelector("footer")
    function clickNavegarInfo(){
        projeto.addEventListener("click",()=>{
            txtProjeto.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })

        })

        contato.addEventListener("click",()=>{
            footer.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })

        })

        
    }
    clickNavegarInfo()
})