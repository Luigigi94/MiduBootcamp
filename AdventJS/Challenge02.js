const letter = "bici coche balon _playstation bici coche peluche";
export default function listGifts(letter) {
  let gifts = letter.replace("_", "").split(" ");

  const list = {};

  let giftList = gifts.reduce(
    (prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),
    {}
  );

  list.push(giftList);
  return list;
}

const regalos = listGifts(letter);
console.log(regalos);
/*
const arr = [1, 3, 1, 2, 5, 2, 3, 4, 1, 2, 3, 4, 3];
const resultado = arr.reduce(
  (prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev),
  {}
);
console.log(resultado);*/
