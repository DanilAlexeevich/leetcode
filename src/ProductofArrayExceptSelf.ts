function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer: number[] = new Array(n).fill(1);

  // Проход слева направо: answer[i] = произведение всех элементов до i
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Проход справа налево: домножаем на произведение всех элементов после i
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

console.log(productExceptSelf([-1, 1, 0, -3, 3]));
