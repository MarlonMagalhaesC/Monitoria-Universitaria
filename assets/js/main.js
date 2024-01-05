/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navbarId, bodyId)=>{
  const toggle = document.getElementById(toggleId),
  navbar = document.getElementById(navbarId),
  bodypadding = document.getElementById(bodyId)

  if(toggle && navbar){
    toggle.addEventListener('click', ()=>{
      navbar.classList.toggle('expander')

      bodypadding.classList.toggle('body-pd')
    })
  }
}
showMenu('nav-toggle','navbar','body-pd')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')
function colorLink(){
  linkColor.forEach(l=> l.classList.remove('active'))
  this.classList.add('active')
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))


/*===== COLLAPSE MENU  =====*/ 
const linkCollapse = document.getElementsByClassName('collapse__link')
var i

for(i=0;i<linkCollapse.length;i++){
  linkCollapse[i].addEventListener('click', function(){
    const collapseMenu = this.nextElementSibling
    collapseMenu.classList.toggle('showCollapse')

    const rotate = collapseMenu.previousElementSibling
    rotate.classList.toggle('rotate')
  })
}
function logar() {
  let email = document.getElementById("email");
  let senha = document.getElementById("senha");
  let aluno = document.getElementById("flexRadioDefault1");
  let mentor = document.getElementById("flexRadioDefault2");
  let professor = document.getElementById("flexRadioDefault3");
  if (email.value == "samuel.correia@sga.pucminas.br" && senha.value == "sa12345"){
    if (document.querySelector('input[name="flexRadioDefault"]:checked').value == "aluno") {
      alert("Usuário autenticado!");
      window.location.href = "painel_aluno.html";
    }else{
      alert("Método de entrada incorreto")
    }
  }
  if (email.value == "marlon.carvalho.1494218@sga.pucminas.br" && senha.value == "12345"){
   if (document.querySelector('input[name="flexRadioDefault"]:checked').value == "mentor") {
    alert("Usuário autenticado!");
    window.location.href = "painel_monitor.html";
   } else{
    alert("Método de entrada incorreto")
  }
   
  }
  if (email.value == "alessandro.pereira@sga.pucminas.br" && senha.value == "12345") {
    if (document.querySelector('input[name="flexRadioDefault"]:checked').value == "professor") {
      alert("Usuário autenticado!");
      window.location.href = "painel_monitor.html";
    }
    else{
      alert("Método de entrada incorreto")
    }

  }
}

