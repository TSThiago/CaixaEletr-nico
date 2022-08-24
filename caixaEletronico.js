// 1. Solicite o nome e cpf do seu cliente
// 2. Ofereça a opção de saque ou depósito
// 3. Pergunte um valor
// 4. Caso a opção de saque seja a escolhida, remova o valor
// inserido do saldo total.
// 5. Caso a opção de depósito seja escolhida, adicione o valor
// inserido do saldo total
// 6. Pergunte se o seu usuário deseja continuar. (Insira 1 para
// continuar e 2 para parar)
// 7. Exiba o saldo total
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
continuar = true

while(continuar == true){
opcoes = prompt("Selecione uma opção: \n1 - Saque \n2 - Depósito")
valor = parseFloat(prompt("Insira o valor"))

// Saque
if(opcoes == 1){
    saldo = saldo - valor
// Depósito
}else if(opcoes == 2){
    saldo = saldo + valor
}
console.log("Saldo atual: R$" +saldo.toFixed(2))

parar = prompt("Insira 1 para fazer outra transação \nInsira 2 para parar")
if(parar == 1){
    continuar = true
}else if(parar == 2){
    continuar = false
}
}