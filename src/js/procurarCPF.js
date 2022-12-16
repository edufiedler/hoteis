// const btn2 = document.querySelector('#delete')

// function getDadosForm(){
//     const ifuncionario_cpf = document.querySelector('#funcionario_cpf')
    
//     const funcionario = {
//         funcionario_cpf: ifuncionario_cpf.value,
//     }
//     return funcionario

// }


function getDadosCPF(){
  const ifuncionario_cpf = document.querySelector('#funcionario_cpf')
  
  const funcionario = {
    funcionario_cpf: ifuncionario_cpf.value,
  }
  
  return funcionario
}

async function enviarDadosParaAPI(funcionario){
  const resp = await fetch(`http://localhost:3000/requisicoes/func/${funcionario.funcionario_cpf}`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
      //body: JSON.stringify(funcionarios)
  })

    let resultado = await resp.json();
    mostraRequisicoes(resultado);
}   




