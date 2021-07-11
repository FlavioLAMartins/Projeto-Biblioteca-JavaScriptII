const livros = require('./database')

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um livro?S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponivris:')
    console.log('/Produtividade e estilo de vida','/Linguaguem corporal')

    const entradaCategoria = readline.question('Qual categoria voce escolhe:')

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)

    console.table(retorno)
} else { 
    const livrosOrdenados = livros.sort((a,b)=>a.paginas - b.paginas)
    console.log('Essas são todas os livros disponiveis:')
    console.table(livrosOrdenados)
}