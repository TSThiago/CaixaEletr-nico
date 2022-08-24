// REGRAS:
// 1- Não deve ser permitido sacar um valor não disponível no saldo.
// 2- Não deve ser permitido sacar nem depositar um valor negativo.

nome = prompt("Insira o seu nome")
cpf = prompt("Insira o seu CPF")
saldo = parseFloat(1000)
maior = parseFloat(0)
media = parseFloat(0)
contador = parseInt(0)
valores = []
index = parseInt(0)
continuar = true

while (continuar == true) {
    opcoes = prompt("Selecione uma opção: \n1 - Saque \n2 - Depósito")
    while(opcoes < 1 || opcoes > 2){
        opcoes = prompt("Selecione uma opção válida: \n1 - Saque \n2 - Depósito")
    }
    valor = parseFloat(prompt("Insira o valor"))
    valores[index] = valor
    index++
    
    if(valor > maior){
        maior = valor
    }

    // Saque
    if (opcoes == 1 && valor > saldo) {
        alert("ERRO! Valor inserido maior que o saldo disponível!")
    } 
    if (opcoes == 1 && valor <= saldo) {
        saldo = saldo - valor
        alert("Saque efetuado")
    }
    
    // Depósito
    if (opcoes == 2 && valor < 0){
        alert("ERRO! Valor inserido não válido!")
    }
    if (opcoes == 2 && valor >= 0){
        saldo = saldo + valor
        alert("Depósito efetuado")
    }
    alert("Saldo atual: R$" + saldo.toFixed(2))
    media = media + valor
    contador++

    parar = prompt("Insira 1 para fazer outra transação \nInsira 2 para parar")
    while(parar < 1 || parar > 2){
        parar = prompt("Insira 1 para fazer outra transação \nInsira 2 para parar")
    }
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
console.log("Todos os valores inseridos do usuário com o CPF " +cpf+ ": " +valores)