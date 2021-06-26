const ipad=window.matchMedia("screen and (max-width:767px)")
const menu=document.querySelector(".lista_navegacion-principal");
const burguerb=document.querySelector(".menu")
function aparecer(){
if(menu.classList.contains("isActive")){
    menu.classList.remove("isActive")
}else{
    menu.classList.add("isActive")
}}
ipad.addListener(validacion)
function validacion(event){
    if(event.matches){
        burguerb.addEventListener("click",aparecer)
    }else{
        burguerb.removeEventListener("click",aparecer)
    }
}
validacion(ipad)