const valor = 'Global'

function minhaFuncao() { // Procura a variavel no contexto mais abrangente
    console.log(valor)
}
 
function exec() {
    const valor = 'Local'
    minhaFuncao()
}

exec()