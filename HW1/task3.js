function crasher(a) {
  delete a.bla;
}

const a = {
  bla: 'bla',
};

// начало блока изменений
Object.defineProperty(a, 'bla', {
  configurable: false,
})
crasher(a);
// конец блока изменений

console.log(a);