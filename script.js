console.log("Hol Mundo");

//funciones
//Function Expression [a una constante se le asigna una función]
const sumar = (operando1, operando2) => {
  console.log(operando1);
  console.log(operando2);
  return operando1 + operando2;
};

const result = sumar(1, 2);
console.log(result);

const op1 = 3;
const op2 = 4;

const resultVar = sumar(op1, op2);
console.log(resultVar);

//función declarativa
function restar(a, b) {
  console.log(a);
  console.log(b);
  return a - b;
}
