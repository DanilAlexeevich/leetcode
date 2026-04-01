type ToBeOrNotToBe = {
  toBe: (val: any) => boolean;
  notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
  let res = val;
  return {
    toBe(val) {
      if (val === res) {
        return true;
      } else throw new Error('Not Equal');
    },
    notToBe(val) {
      if (val !== res) {
        return true;
      } else throw new Error('Equal');
    },
  };
}
console.log(expect(5).notToBe(5));