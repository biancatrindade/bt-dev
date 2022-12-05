document.getElementById("botao-enviar").addEventListener("click", validaFormulario)

function validaFormulario(){
  if(document.getElementById("nome").value != "" &&       document.getElementById("email").value != ""){
    alert('Prontinho! Em breve você receberá meu contato \o/')
  }else{
    alert("Opa! Tá faltando alguma coisa... Que tal tentar novamente? Lembrando que o nome e o e-mail são obrigatórios ;)")
  }
}