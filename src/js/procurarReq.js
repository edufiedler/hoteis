// const btn2 = document.querySelector('#delete')

// function getDadosForm(){
//     const ifuncionario_cpf = document.querySelector('#funcionario_cpf')
    
//     const funcionario = {
//         funcionario_cpf: ifuncionario_cpf.value,
//     }
//     return funcionario

// }


function getDadosReq(){
  const irequisicao_id = document.querySelector('#requisicao_id')
  
  const requisicao = {
    requisicao_id: irequisicao_id.value,
  }
  
  return requisicao
}

async function enviarDadosParaAPI2(requisicao){
  let resultado;

  if(isNaN(requisicao.requisicao_id)) {
    const resp = await fetch(`http://localhost:3000/requisicoes}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })

    resultado = await resp.json();

  } else {
    const resp = await fetch(`http://localhost:3000/requisicoes/req/${requisicao.requisicao_id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    })

    resultado = await resp.json();
  }

  exibeResul(resultado);
}   

async function exibeResul(resultado){
    document.getElementById("todosOsProdutos").innerHTML = '';


    const tabela = `<div class="header-lista">
    <div class="body-bold">Nome</div>

    <div class="body-bold">CPF</div>

    <div class="body-bold">Sexo</div>

    <div class="body-bold">Data de Nascimento</div>

    <div class="body-bold">Endereço</div>

    <div class="body-bold">Salário</div>

    <div class="body-bold">Tipo de Contrato</div>`;
    document.getElementById("todosOsProdutos").innerHTML=document.getElementById("todosOsProdutos").innerHTML+tabela; 
    
    resultado.forEach(funcionario => {
      var data = funcionario.datanasc;
      const novoFunc = `
      <div class="item-lista">
      <div class="body-lista">${funcionario.nom_pnome} ${funcionario.nom_snome}</div>
      <div class="body-lista">${funcionario.funcionario_cpf} </div>
      <div class="body-lista">${funcionario.sexo} </div>
      <div class="body-lista"> ${data} </div>
      <div class="body-lista"> ${funcionario.endereco} </div>
      <div class="body-lista"> ${funcionario.salario} </div>
      <div class="body-lista"> ${funcionario.tipodecontrato}</div>
      </div>`
      document.getElementById("todosOsProdutos").innerHTML=document.getElementById("todosOsProdutos").innerHTML+novoFunc;
  });
}