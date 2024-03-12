function inverteString(string) {
  let stringInvertida = "";
  for (let i = string.length - 1; i >= 0; i--) {
    stringInvertida += string[i];
  }
  return stringInvertida;
}

let stringOriginal = "Exemplo de string para inverter";

let stringInvertida = inverteString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
