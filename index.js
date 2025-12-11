const input = document.getElementById("unit")
const btn = document.getElementById("converter")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")

let oldInputValue = input.value

calcConversion()

input.addEventListener("input", function(event){

    acceptInputIfValidCharacter(event)
})

btn.addEventListener("click", function() {
    calcConversion()
})

window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcConversion();
    }
});

function calcConversion() {
    const unit = Number(input.value)

    length.textContent = `${unit} meters = ${(unit * 3.281).toFixed(3)} feet | ${unit} feet = ${(unit * 0.305).toFixed(3)} meters`
    volume.textContent = `${unit} liters = ${(unit * 0.264).toFixed(3)} gallons | ${unit} gallons = ${(unit * 3.785).toFixed(3)} liters`
    mass.textContent = `${unit} kilos = ${(unit * 2.204).toFixed(3)} pounds | ${unit} pounds = ${(unit * 0.454).toFixed(3)} kilos`
}

function acceptInputIfValidCharacter(event) {
    if (event.data === ",") {
        input.value = input.value.replace(",", ".");
    }

    if (!isValidNumber(event.data)) {
        input.value = oldInputValue
    }

    oldInputValue = input.value

    if (input.value.length) {
        input.setAttribute("size", String(input.value.length))
    } else {
        input.setAttribute("size", "1")
    }
}

function isValidNumber(character) {
    return (character >= 0 && character <= 9 && character !== " ")
        ||
        (character === "." && !alreadyHasDecimalSeparator(character))
        ||
        (character === "," && !alreadyHasDecimalSeparator(character))
        ||
        character === null;
}

function alreadyHasDecimalSeparator(character) {

    return (character === "." || character === ",")
        &&
        (oldInputValue.includes(".") || oldInputValue.includes(","))
}