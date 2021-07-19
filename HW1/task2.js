const initNum = num => {
  let res = num;
  let increase = 2;
  return () => {
    if(!res) {
      return res += increase;
    } else if(res % 5 === 0) {
      increase = 3;
      return res /= 5;
      // or
      // return res / 5;
    } else if(res % 7 === 0) {
      increase = 1;
      return res -= 7;
      // or
      // return res - 7;
    }
    return res += increase;
  }
}

const numInc = initNum(0);