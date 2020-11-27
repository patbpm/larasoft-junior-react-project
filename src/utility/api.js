const faker = require('faker');
const fs = require('fs');

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const tyreTypes = ['summer', 'winter', 'winter-spike'];

function rand(limit) {
  return Math.floor(Math.random() * limit);
}

function generateVehicle() {
  let vehicles = [];
  for (let id = 1; id <= 500; id++) {
    let manufacturer = faker.vehicle.manufacturer();
    let model = faker.vehicle.model();
    let type = faker.vehicle.type();
    let fuel = faker.vehicle.fuel();
    let colour = faker.vehicle.color();
    let mileage = rand(50000);
    let tyres = tyreTypes[rand(3)];
    let registration = `${letters.charAt(rand(26))}${letters.charAt(rand(26))}${letters.charAt(
      rand(26)
    )}-${numbers.charAt(rand(10))}${numbers.charAt(rand(10))}${numbers.charAt(rand(10))}`;
    vehicles.push({
      id: id,
      manufacturer: manufacturer,
      model: model,
      type: type,
      fuel: fuel,
      colour: colour,
      mileage: mileage,
      tyres,
      registration,
    });
  }
  return { data: vehicles };
}

let dataObj = generateVehicle();
fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));