// const btn2 = document.querySelector('#delete')

async function enviarDadosParaAPI3(){
    ifuncionario_cpf = document.querySelector('#funcionario_cpf')

    const resposta = await fetch(`http://localhost:3000/funcionarios/${ifuncionario_cpf}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcionario)
    })
    if(resposta.status === 200){
        window.location.href = 'lista-funcionarios.html'
    } else console.log('Erro ao apagar funcionário')
}   

