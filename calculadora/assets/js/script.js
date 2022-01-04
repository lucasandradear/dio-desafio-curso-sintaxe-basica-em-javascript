function menuPrincipal() {
  return Number(prompt(`Informe qual operação você deseja realizar:
  1- Soma
  2- Subtração
  3- Multiplicação
  4- Divisão Real
  5- Divisão Modular (resto da divisão)
  6- Potenciação
  7- Sair`))
}

function soma(num1, num2) {
  return num1 + num2
}

function subtracao(num1, num2) {
  return num1 - num2
}

function multiplicacao(num1, num2) {
  return num1 * num2
}

function divisaoReal(num1, num2) {
  return num1 / num2
}

function divisaoModular(num1, num2) {
  return num1 % num2
}

function potenciacao(num1, num2) {
  return Math.pow(num1, num2)
}

function validacaoNum() {
  let valor
  do{
    valor = Number(prompt('Informe um valor:'))
    if(Number.isNaN(valor)) {
      alert('Valor Inválido! Por favor, tente um valor válido.')
    }
  }while(Number.isNaN(valor))
  return valor
}

var operacao

function calculadora() {
  do {
    operacao = menuPrincipal()

    switch(operacao) {
      case 1:
        alert('Resultado: ' + soma(validacaoNum(), validacaoNum()))
        break
      case 2:
        alert('Resultado: ' + subtracao(validacaoNum(), validacaoNum()))
        break
      case 3:
        alert('Resultado: ' + multiplicacao(validacaoNum(), validacaoNum()))
        break
      case 4:
        alert('Resultado: ' + divisaoReal(validacaoNum(), validacaoNum()))
        break
      case 5:
        alert('Resultado: ' + divisaoModular(validacaoNum(), validacaoNum()))
        break
      case 6:
        alert('Resultado: ' + potenciacao(validacaoNum(), validacaoNum()))
        break
      case 7:
        alert('Saindo...')
        break
      default:
        alert('Opção Inválida!\nAs opções válidas são apenas de 1 a 7.\nTente novamente!')
    }

  } while(operacao !== 7)
}

calculadora()