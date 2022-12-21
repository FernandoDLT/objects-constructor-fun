// Create a constructor with 4 properties and three methods

function PizzaMaker(size,toppings,crust,sauce) {
    this.size = size
    this.toppings = toppings
    this.crust = crust
    this.sauce = sauce
    this.hot = function() {
        alert('Coution!!!')
    }
    this.delivery = function() {
        alert('Your pie is on the way!!')
    }
    this.arrived = function () {
        alert('Your pie has arrived!')
    }
}
let papajohns = new PizzaMaker ('Papa Johns', 'Large', 'all', 'NY Style', 'Heavy')


function MakeLaptop(laptopMake,laptopSeries,laptopColor,laptopMonitor) {
    this.brand = laptopMake
    this.series = laptopSeries
    this.color = laptopColor
    this.size = laptopMonitor
    this.powerButton = function() {
        alert('Powering to ON...')
    }
    this.closeLid = function() {
        alert('Powering Down...')
    }
    this.touchScreen = function() {
        alert('Welcome!')
    }
}

let acerAspire = new MakeLaptop('Acer', 'StarGate1000', 'silver', 32)

function PizzaMachine(size,toppings,crust,sauce) {
    this.size = size
    this.topping = toppings
    this.crust = crust
    this.sauce = sauce
    this.estimatedDeliveryTime = function() {
        console.log('Calculating...')
    }
    this.burnMouth = function() {
        console.log('Pasumadreeeee!!')
    }
    this.frisbee = function() {
        console.log('YIKESSSSS!!!')
    }
}
let pizza = new PizzaMachine('large',['spinach','garlic'], 'deep dish', 'THICK')


// Car constructor
class MakeCar{
    constructor(carMake,carModel,carColor,numOfDoors) {
        this.make = carMake
        this.model = carModel
        this.color = carColor
        this.doors = numOfDoors
    }
    honk() {
        alert('BEEP BEEP, FUCKER!')
    }
    lock() {
        alert(`Locked ${this.doors} doors!`)
    }
}
let HondaCivic = new MakeCar('Honda', 'Civic', 'Silver', 4)
