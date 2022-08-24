// 8. Exiba o maior valor inserido(independente de ser depósito ou
// saque)
// 9. Insira a média dos valores inseridos(independente de ser
// depósito ou saque)
// 10. No final mostre todos os valores inseridos pelo usuário e o
// cpf dele
// REGRAS:
// 1- Não deve ser permitido sacar um valor não disponível no saldo.
// 2- Não deve ser permitido sacar nem depositar um valor negativo.

nome = prompt("Insira o seu nome")
cpf = prompt("Insira o seu CPF")
saldo = parseFloat(1000)
maior = parseFloat(0)
media = parseFloat(0)
contador = parseInt(0)
continuar = true

while (continuar == true) {
    opcoes = prompt("Selecione uma opção: \n1 - Saque \n2 - Depósito")
    valor = parseFloat(prompt("Insira o valor"))
    if(valor > maior){
        maior = valor
    }

    // Saque
    if (opcoes == 1) {
        saldo = saldo - valor
        // Depósito
    } else if (opcoes == 2) {
        saldo = saldo + valor
    }
    
    console.log("Saldo atual: R$" + saldo.toFixed(2))
    media = media + valor
    contador++

    parar = prompt("Insira 1 para fazer outra transação \nInsira 2 para parar")
    if (parar == 1) {
        continuar = true
    } else if (parar == 2) {
        continuar = false
    }
}

media = media/contador

console.log("Saldo final: R$" + saldo.toFixed(2))
console.log("O maior valor inserido foi: R$" + maior.toFixed(2))
console.log("A média dos valores inseridos foi: R$" + media.toFixed(2))