const faker = require('faker');
const fs = require('fs')

function generateVehicle() {
    let vehicles = []
    for (let id=1; id <= 2; id++) {
        let manufacturer = faker.vehicle.manufacturer();
        let model = faker.vehicle.model();
        let type = faker.vehicle.type();
        let fuel = faker.vehicle.fuel();
        let colour = faker.vehicle.color();
        let mileage = faker.random.number();

        vehicles.push({
            "id": id,
            "manufacturer": manufacturer,
            "model": model,
            "type": type,
            "fuel": fuel,
            "colour": colour,
            "mileage": mileage

        });
    }
    return { "data": vehicles }
}

let dataObj = generateVehicle();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
