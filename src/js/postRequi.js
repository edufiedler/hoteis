const btn = document.querySelector('#salvar')

btn.addEventListener('click', () => {
    //capturar
    const requisicao = getDadosForm();
    //enviar
    enviarDadosParaAPI(requisicao);
})

function getDadosForm(){
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

async function enviarDadosParaAPI(requisicao){
    const resposta = await fetch('http://localhost:3000/requisicoes', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requisicao)
    })
    if(resposta.status === 201){
        // limparCampos()
        window.location.href = 'lista-requisicoes.html'
    } else console.log('Erro ao adicionar requisicao')
}   