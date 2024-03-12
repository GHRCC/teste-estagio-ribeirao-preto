function verificaFibonacci(numero) {
  let a = 0;
  let b = 1;
  while (b < numero) {
    let temp = b;
    b = a + b;
    a = temp;
  }
  return b === numero;
}

let numeroInformado = parseInt(
  prompt(
    "Digite um número para verificar se pertence à sequência de Fibonacci:"
  )
);

if (verificaFibonacci(numeroInformado)) {
  console.log(`O número ${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
  console.log(
    `O número ${numeroInformado} não pertence à sequência de Fibonacci.`
  );
}
