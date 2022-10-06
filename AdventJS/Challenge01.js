const ovejas = [
  { name: "Noa", color: "azul" },
  { name: "Euge", color: "rojo" },
  { name: "Navidad", color: "rojo" },
  { name: "Ki Na Ma", color: "rojo" },
  { name: "AAAAAaaaaa", color: "rojo" },
  { name: "Nnnnnnnn", color: "rojo" },
];

export default function contarOvejas(ovejas) {
  return ovejas
    .filter((oveja) => oveja.color === "rojo")
    .filter((oveja) => `${oveja.name}`.toLowerCase().includes("n"))
    .filter((oveja) => `${oveja.name}`.toLowerCase().includes("a"));
}
const ovejasFiltradas = contarOvejas(ovejas);
console.log(ovejasFiltradas);
