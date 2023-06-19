// https://www.devmedia.com.br/validando-e-mail-em-inputs-html-com-javascript/26427
let regexEmail = /\S+@\S+\.\S+/

// https://operahouse.com.br/blog/expressoes-regulares 
let regexCPF = /^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}/

// let regexCPFOutro = /[0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3

let regexCPFOutro = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/

const myFormCpf = document.getElementById('myFormCpf')
const myFormEmail = document.getElementById('myFormEmail')


// validador CPF 
const validadorCPF = (cpf) => regexCPFOutro.test(cpf)

// validador Email 
const validadorEmail = (email) => regexEmail.test(email)


// Form CPF 
myFormCpf.addEventListener('submit', (e)=>{
    e.preventDefault()

    let cpfValue = myFormCpf.cpf.value
    if(validadorCPF(cpfValue)){
        alert('O seu CPF: ' + cpfValue + ' Existe!')
    }
    else{
        alert('CPF invalido!, por favor tente novamente')
    }
})


// Form Email 
myFormEmail.addEventListener('submit', (e)=>{

    e.preventDefault()

    console.log('o');
    let emailValue = myFormEmail.email.value
    
    if(validadorEmail(emailValue)){
        alert('O seu E-mail: ' + emailValue + ' Existe!')
    }
    else{
        alert('CPF invalido!, por favor tente novamente')
    }
})



// regras do CPF e CNPJ 
// https://souforce.cloud/regra-de-validacao-para-cpf-e-cnpj-no-salesforce/