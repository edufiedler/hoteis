// const btn = document.querySelector('#update')

function getDadosForm2(){
    const iid = document.querySelector('#requisicao_id')
    const itipo = document.querySelector('#tipo')
    const idataabertura = document.querySelector('#dataabertura')
    const idatafechamento = document.querySelector('#datafechamento')
    const istatus = document.querySelector('#status')
    const itextolivre = document.querySelector('#textolivre')
    const ifuncionario_cpf = document.querySelector('#funcionario_cpf')
    
    const requisicao = {
        requisicao_id: iid.value,
        tipo: itipo.value,
        dataabertura: idataabertura.value,
        datafechamento: idatafechamento.value,
        status: istatus.value,
        textolivre: itextolivre.value,
        funcionario_cpf: ifuncionario_cpf.value
    }
    return requisicao

}

async function enviarDadosParaAPI2(requisicao){
    const resposta = await fetch(`http://localhost:3000/requisicoes/${requisicao.requisicao_id}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcionario)
    })
    if(resposta.status === 200){
        window.location.href = 'lista-requisicoes.html'
    } else console.log('Erro ao adicionar requicao')
}   

