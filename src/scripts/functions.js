export function showMenu() {
  const ipad = window.matchMedia("screen and (max-width:767px)");
  const menu = document.querySelector(".lista_navegacion");
  const burguerb = document.querySelector(".menu");
  var linksNavegacion = document.querySelectorAll(".lista_navegacion li");
  linksNavegacion = [...linksNavegacion];
  function aparecer() {
    if (menu.classList.contains("isActive")) {
      menu.classList.remove("isActive");
    } else {
      menu.classList.add("isActive");
    }
  }
  ipad.addListener(validacion);
  function validacion(event) {
    if (event.matches) {
      burguerb.addEventListener("click", aparecer);
      linksNavegacion.map((link) => link.addEventListener("click", aparecer));
    } else {
      burguerb.removeEventListener("click", aparecer);
      linksNavegacion.map((link) =>
        link.removeEventListener("click", aparecer)
      );
    }
  }
  validacion(ipad);
}
export function desvanecimiento(){
  function desaparecer(elemento){
    if(elemento.classList.contains("oculto")){
      elemento.classList.remove("oculto")
    }else{
      elemento.classList.add("oculto")
    }
  }
 function bajarOpacidad(elemento){
  if(elemento.classList.contains("desaparecido")){
    elemento.classList.remove("desaparecido")
  }else{
    elemento.classList.add("desaparecido")
  }
 }

  const animationLayer= document.querySelector(".animationLayer")
  if(animationLayer.classList.contains("desaparecido")){
    desaparecer(animationLayer)
    animationLayer.classList.remove("desaparecido")
  }else{
    setTimeout(bajarOpacidad,500,animationLayer) 
    setTimeout(desaparecer,2000,animationLayer)
  }
}
