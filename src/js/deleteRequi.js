function getDadosForm3(){
    const irequi_id = document.querySelector('#requisicao_id')
 
    const requicao = {
        requisicao_id: irequi_id.value,
    }
    return requicao

}


async function enviarDadosParaAPI3(requicao){
   const resposta = await fetch(`http://localhost:3000/requisicoes/${requicao.requisicao_id}`, {
       method: 'DELETE',
       headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(requicao)
   })
   if(resposta.status === 200){
       window.location.href = 'lista-requisicoes.html'
   } else console.log('Erro ao apagar requicao')
}  