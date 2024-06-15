const inputMass = document.getElementById('inputMass')
const inputHeight = document.getElementById('inputHeight')

const calcButton = document.getElementById('calcButton')

const imcResult = document.getElementById('imcResult')


const imcCalc = {
  mass: 0,
  height: 0,

  imc: function () {
    return Math.round(this.mass / (this.height ** 2), 2)
  },

  condition: function () {
    if (this.imc() < 18.5) {
      return 'bajo 😔'
    } else if (this.imc() > 18.5 && this.imc() < 24.9) {
      return 'normal 👍'
    } else if (this.imc() > 25 && this.imc() < 29.9) {
      return 'sobrepeso 😨'
    } else if (this.imc() > 30) {
      return 'obeso 😱'
    } else {
      return ''
    }
  }
}

calcButton.addEventListener('click', function () {
  imcCalc.mass = Number(inputMass.value)
  imcCalc.height = Number(inputHeight.value)

  imcResult.textContent = `Su índice de masa corporal es ${imcCalc.imc()} y su condición es ${imcCalc.condition()}.`
})