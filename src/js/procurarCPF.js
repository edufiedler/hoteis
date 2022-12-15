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
    document.getElementById("todosOsProdutos").innerHTML = '';


      const tabela = `<div class="header-lista">
      <div class="body-bold">ID</div>

      <div class="body-bold">Tipo</div>

      <div class="body-bold">Data de Abertura</div>

      <div class="body-bold">Status</div>

      <div class="body-bold">Texto Livre</div>
    </div>`;
      document.getElementById("todosOsProdutos").innerHTML=document.getElementById("todosOsProdutos").innerHTML+tabela; 
      
      resultado.forEach(requisicao => {
       
        const novoFunc = `
        <div class="item-lista">
        <div class="body-lista">${requisicao.requisicao_id}</div>
        <div class="body-lista">${requisicao.tipo} </div>
        <div class="body-lista">${requisicao.dataabertura} </div>
        <div class="body-lista"> ${requisicao.status} </div>
        <div class="body-lista"> ${requisicao.textolivre} </div>
        </div>
       
        
        `
        document.getElementById("todosOsProdutos").innerHTML=document.getElementById("todosOsProdutos").innerHTML+novoFunc;
    });
}   




