let tamanhoCaracteres = document.querySelector("#valor");
let imputSlider = document.querySelector("#slider");
let botaoGerarSenha = document.querySelector("#button");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

tamanhoCaracteres.innerHTML = imputSlider.value; //para iniciar com o valor default
let senha = "abcdefghijklmnopqrstuvxwyzABCDEFGHIJKLMNOPQRSTUVWXYZ012345679!@";
let novaSenha = "";

slider.oninput = function () {
  tamanhoCaracteres.innerHTML = this.value;
};

function gerarSenha() {
  let pass = "";
  for (let i = 0; i < imputSlider.value; ++i) {
    pass += senha.charAt(Math.floor(Math.random() * senha.length));
  }
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;
}

function copiarSenha() {
  navigator.clipboard.writeText(novaSenha); //faz uma cópia do texto para o ctrl c
}
