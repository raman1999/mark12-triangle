var angleOne = document.querySelector('#angle1')
var angleTwo = document.querySelector('#angle2')
var angleThree = document.querySelector('#angle3')
var checkAngleSum = document.querySelector('#check-angle-sum')
var angleSum = document.querySelector('#angle-sum')
var resultText = document.querySelector('#result-text-for-angle-sum')

function sumOfAngles(event) {
  event.preventDefault()

  

  if (!angleOne.value || !angleTwo.value || !angleThree.value) {
      alert("Angle field can't be empty.\nPlease enter valid angles.")
      return
  }

  var angle1= parseFloat(angleOne.value)
  var angle2 = parseFloat(angleTwo.value)
  var angle3 = parseFloat(angleThree.value)
  
  if ((angle1 === 0) || (angle2 === 0) || (angle3 === 0)) {
      alert("Angle of a triangle can't be ZERO! \n If it's zero, it'll be a forming a straight line")
      return
  }

  var sum = angle1 + angle2 + angle3
  console.log(sum)
  angleSum.textContent = 'Sum of the angles is: ' + sum
  
  if (sum != 180) {
     resultText.textContent = 'Oops! these angles cannot make a triangle'
   }
  else {
     resultText.textContent = 'It makes a triangle :)'
  }
}

checkAngleSum.addEventListener('click', sumOfAngles)



