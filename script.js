// MENU MOBILE
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touschstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAtrribute("aria-expanded", active);
  if (active){
    event.currentTarget.setAtrribute('aria-label', 'Fechar Menu');
  } else{
    event.currentTarget.setAtrribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("toushstart", toggleMenu);

//FIM MENU MOBILE
