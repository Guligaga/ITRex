// source
function setABS(num) { console.log(`ABS:${num}`) }
function setTraction(num) { console.log(`Traction Control:${num}`) }
function setStability(num) { console.log(`Stability Control:${num}`) }

// В гоночной игре есть следующие настройки автомобиля: ABS, Traction Control, Stability Control. Каждый параметр может меняться от 1 до 5. Для упрощения жизни игрока нужно создать функции Beginner Good Driver Maniac которые имеют значения все 5-ки, все 3-ки и все 0 соответсвенно.

const car1 = {
  abs: 1,
  tractionControl: 2,
  stablilityControl: 3,
}

// Immutable variant

const beginner = car => {
  return Object.keys(car).reduce((acc, key) => acc[key] = 5, {})
}
const goodDriver = car => {
  return Object.keys(car).reduce((acc, key) => acc[key] = 3, {})
}
const maniac = car => {
  return Object.keys(car).reduce((acc, key) => acc[key] = 1, {})
}

// Mutable variant

const beginnerM = car => {
  for (const key in car) {
    car[key] = 5;
  }
}
const goodDriverM = car => {
  for (const key in car) {
    car[key] = 3;
  }
}
const maniacM = car => {
  for (const key in car) {
    car[key] = 1;
  }
}

// Using source variant

const carSettings = [
  setABS,
  setTraction,
  setStability
];

const beginnerS = () => {
  carSettings.forEach(setting => {
    setting(5)
  })
}
const goodDriverS = () => {
  carSettings.forEach(setting => {
    setting(3)
  })
}
const maniacS = () => {
  carSettings.forEach(setting => {
    setting(1)
  })
}