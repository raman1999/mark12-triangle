var sideOneInput = document.querySelector('#side-1')
var sideTwoInput = document.querySelector('#side-2')
var sideThreeInput = document.querySelector('#side-3')
var calculateArea = document.querySelector('#calculate-area')
var result = document.querySelector('#result')
var resultText = document.querySelector('#result-text')

function areaOfTriangle(event) {
    event.preventDefault()

    

    if (!sideOneInput.value || !sideTwoInput.value || !sideThreeInput.value) {
        alert("Fields can't be left empty! All the inputs are to be filled properly ")
    }

    var sideOne = parseFloat(sideOneInput.value)
    var sideTwo = parseFloat(sideTwoInput.value)
    var sideThree = parseFloat(sideThreeInput.value)

    if ((sideOne === 0) || (sideTwo === 0) || (sideThree === 0)) {
        alert("Side of a triangle can't be zero! Enter valid inputs :)")
        return
    }

    if (sideOne + sideTwo > sideThree && sideTwo + sideThree > sideOne && sideOne + sideThree > sideTwo) {
        var s = (sideOne + sideTwo + sideThree) / 2
        var area = (Math.sqrt(s * (s - sideOne) * (s - sideTwo) * (s - sideThree))).toFixed(2)
    
        

        resultText.textContent = 'Area of the triangle given sides ' +
        sideOne +
        ' units, ' +
        sideTwo +
        ' units, ' +
        sideThree +
        ' units = ' +
        area +
        ' sq.units'
      } else {
        // console.log('Oops! Not a valid triangle')
        resultText.textContent = 'Oops! Not a valid triangle'
      }
}

calculateArea.addEventListener('click', areaOfTriangle)


