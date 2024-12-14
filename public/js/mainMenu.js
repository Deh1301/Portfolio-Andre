document.addEventListener("DOMContentLoaded", () => {
  const div = document.querySelector("div");
  const h2 = document.querySelector("h2");

  const telaInicialAnimar = () => {
    const animaDiv = () => {
      setTimeout(() => {
        div.style.opacity = "100%";
        div.style.marginLeft = "250px";
        div.style.rotate = "40deg";
      }, 1000);
    };
    animaDiv();

    const animaHiperTexto = () => {
      setTimeout(() => {
        h2.style.marginLeft = "450px";
        h2.style.opacity = "100%";
      }, 1500);
    };
    animaHiperTexto();
  };

  telaInicialAnimar();

  // const carregarProximaPag = () => {
  //   setTimeout(() => {
  //     window.location.href = "indexSite.html";
  //   }, 5000);
  // };
  // carregarProximaPag()
});
