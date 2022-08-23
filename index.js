const celsius = document.querySelector('.celsius')
const fahrenheit = document.querySelector('.fahrenheit')
const kelvin = document.querySelector('.kelvin')
const temp = document.querySelectorAll('input')

temp.forEach(function(input) {
    input.addEventListener('input', function() {
        let inputType = this.className
        if (this.value === '') {
            celsius.value = null
            fahrenheit.value = null
            kelvin.value = null
            return
        }
        let inputValue = parseFloat(this.value)

        if (inputType === 'celsius') {
            fahrenheit.value = ((inputValue * 1.8) + 32).toFixed(2)
            kelvin.value = (inputValue + 273.15).toFixed(2)
        } else if (inputType === 'fahrenheit') {
            celsius.value = ((inputValue - 32) / 1.8).toFixed(2)
            kelvin.value = (parseFloat(celsius.value) + 273.15).toFixed(2)
        } else if (inputType === 'kelvin') {
            celsius.value = (inputValue - 273.15).toFixed(2)
            fahrenheit.value = ((parseFloat(celsius.value) * 1.8) + 32).toFixed(2)
        }
    })
})