//Increasing Triplet Subsequence

function increasingTriplet(nums: number[]): boolean {
  let first = Infinity;
  let second = Infinity;

  for (const num of nums) {
    if (num <= first) {
      first = num; // Нашли нового кандидата на самое маленькое число
    } else if (num <= second) {
      second = num; // Нашли кандидата на среднее число
    } else {
      // Если число больше и первого, и второго — тройка найдена!
      return true;
    }
  }
  // Если прошлись по всему массиву и ничего не вернули — такой тройки нет
  return false;
}

console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
