const btn = document.querySelector('#update')

function getDadosForm2(){
    
    const inom_pnome = document.querySelector('#nom_pnome')
    const inom_snome = document.querySelector('#nom_snome')
    const ifuncionario_cpf = document.querySelector('#funcionario_cpf')
    const isexo = document.querySelector('#sexo')
    const idatanasc = document.querySelector('#datanasc')
    const iendereco = document.querySelector('#endereco')
    const isalario = document.querySelector('#salario')
    const itipodecontrato = document.querySelector('#tipodecontrato')
    
    const funcionario = {
        nom_pnome: inom_pnome.value,
        nom_snome: inom_snome.value,
        funcionario_cpf: ifuncionario_cpf.value,
        sexo: isexo.value,
        datanasc: idatanasc.value,
        endereco: iendereco.value,
        salario: isalario.value,
        tipodecontrato:itipodecontrato.value
    }
    return funcionario

}

async function enviarDadosParaAPI2(funcionario){
    const resposta = await fetch(`http://localhost:3000/funcionarios/${funcionario.funcionario_cpf}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(funcionario)
    })
    if(resposta.status === 200){
        window.location.href = 'lista-funcionarios.html'
    } else console.log('Erro ao adicionar funcionário')
}   

