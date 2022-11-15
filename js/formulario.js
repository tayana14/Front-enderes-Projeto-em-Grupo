const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const checkRg = document.getElementById("rg");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
const checkCep = document.getElementById("cep");
const checkEnd = document.getElementById("endereco");
const checkComplemento = document.getElementById("complemento");
const checkBairro = document.getElementById("bairro");
const checkCidade = document.getElementById("cidade");
const checkEstado = document.getElementById("estado");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const rgValue = checkRg.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;
  const cepValue = checkCep.value;
  const endValue = checkEnd.value;
  const compValue = checkComplemento.value;
  const bairroValue = checkCep.value;
  const cidadeValue = checkCidade.value;
  const estadoValue  = checkEstado.value;



  if (usernameValue === "") {
    setErrorFor(username, "O nome completo é obrigatório.");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
  }
  if (rgValue === "") {
    setErrorFor(rg, "O Rg  é obrigatório.");
  } else if (rgValue.length < 8) {
    setErrorFor(rg, "o Rg precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(rg);
  }

  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }
  if (cepValue === "") {
    setErrorFor(cep, "o cep é obrigatório.");
  } else if (cepValue.length < 8) {
    setErrorFor(cep, "o cep precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(cep);
  }
  if (endValue === "") {
    setErrorFor(endereco, "O endereço é obrigatório.");
  } else {
    setSuccessFor(endereco);
  }
  if (compValue === "") {
    setErrorFor(complemento, "O numero e complemento  é obrigatório.");
  } else {
    setSuccessFor(complemento);
  }
  if (bairroValue === "") {
    setErrorFor(bairro, "O bairro é obrigatório.");
  } else {
    setSuccessFor(bairro);
  }
  if (cidadeValue === "") {
    setErrorFor(cidade, "O nome de usuário é obrigatório.");
  } else {
    setSuccessFor(cidade);
  }
  if (estadoValue === "") {
    setErrorFor(estado, "O estado obrigatório.");
  } else {
    setSuccessFor(estado);
  }

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {
    console.log("O formulário está 100% válido!");
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
  
}



function limparFormulario() {
  document.getElementById('endereco').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
  document.getElementById('complemento').value = '';
}


const preencherFormulario = (endereco) =>{
  document.getElementById('endereco').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('estado').value = endereco.uf;
}


const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

const pesquisarCep = async() => {
  limparFormulario();
  
  const cep = document.getElementById('cep').value.replace("-","");
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  if (cepValido(cep)){
      const dados = await fetch(url);
      const endereco = await dados.json();
      if (endereco.hasOwnProperty('erro')){
          document.getElementById('endereco').value = 'CEP não encontrado!';
      }else {
          preencherFormulario(endereco);
      }
  }else{
      document.getElementById('endereco').value = 'CEP incorreto!';
  }
   
}

document.getElementById('cep')
      .addEventListener('focusout',pesquisarCep);
