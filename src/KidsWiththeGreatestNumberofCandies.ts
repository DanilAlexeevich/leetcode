function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let result: boolean[] = [];
  candies.map((candy) => {
    if(candy + extraCandies >= Math.max(...candies)){
      result.push(true)
    }else result.push(false)
  });
  return result; 
};

console.log(kidsWithCandies([12, 1, 12], 10));