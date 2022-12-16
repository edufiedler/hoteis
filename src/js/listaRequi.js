async function consultaTodasAsRequisicoes() {
    const resp = await fetch(`http://localhost:3000/requisicoes`, {
      method: 'GET',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
      },
  })

    let resultado = await resp.json();
    mostraRequisicoes(resultado);
}

function mostraRequisicoes(resultado) {
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