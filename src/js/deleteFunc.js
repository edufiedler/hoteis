// const btn2 = document.querySelector('#delete')

// function getDadosForm(){
//     const ifuncionario_cpf = document.querySelector('#funcionario_cpf')
    
//     const funcionario = {
//         funcionario_cpf: ifuncionario_cpf.value,
//     }
//     return funcionario

// }

async function enviarDadosParaAPI(funcionario){
    const resposta = await fetch(`http://localhost:3000/funcionarios/${funcionario.funcionario_cpf}`, {
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

