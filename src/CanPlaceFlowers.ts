function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    const prev = i === 0 ? 0 : flowerbed[i - 1];
    const next = i === flowerbed.length - 1 ? 0 : flowerbed[i + 1];

    if (prev === 0 && next === 0 && flowerbed[i] === 0) {
      flowerbed[i] = 1;
      count += 1;
    }
  }

  if (count >= n) return true;

  return false;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
