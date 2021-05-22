// 1 - crie uma função que exiba uma mensagem no console
function Mensenger(){
    console.log('Olá')
}
Mensenger()

// 2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function Name(){
    console.log('Felipe')
}
Name()

// 3 - crie uma função que receba seu nome, idade, e estilo musical preferido (parâmetros) e exiba no console
function Info( Nome, Idade, GeneroMusical){
    console.log(`Olá ! Meu nome é ${Nome} ${Idade} ${GeneroMusical}.`)
}
Info('Felipe', '22', 'Rap, MPB')

// 4 - crie uma função que receba o seu filme favorito, musica favorita (parâmetros) e exiba no console
function InfoPessoal (Filme, Musica){
    console.log(`Meu filme favorito é ${Filme}.`)
    console.log(`Minha musica favorito é ${Musica}.`)
}
InfoPessoal('Interestelar e TeneT', 'Childish Gambino - Feels Like Summer')

// 5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function Soma(Number1, Number2){
    return Number1 * Number2
}
console.log(Soma(3, 3))