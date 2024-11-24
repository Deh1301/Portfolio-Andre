document.addEventListener("DOMContentLoaded",()=>{
    const projeto = document.querySelector("#btnProjeto")
    const txtProjeto = document.querySelector("#projetosTitulo")
    function clickNavegarInfo(){
        projeto.addEventListener("click",()=>{
            txtProjeto.scrollIntoView({
                behavior:"smooth",
                block:"start"
            })
        })

        
    }
    clickNavegarInfo()
})