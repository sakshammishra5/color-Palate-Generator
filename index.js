const colorSelector = document.getElementById("eye-dropper")
let schemeSelector = document.getElementById("select-menu")
let colorType = schemeSelector.value.toLowerCase()
let getColor = document.getElementById("get-button")

const colorRectangle = document.getElementById("color-rectangle")
const colorCodebox = document.getElementById("colour-code-rectangle")

var colorArray = []
var changedColor = ``

function getchanged_color() {
	changedColor = colorSelector.value.slice(1)
	return changedColor
}

colorSelector.addEventListener("change", getchanged_color)

getColor.addEventListener("click", function () {
	console.log(changedColor)
    console.log(colorType)
	fetch(
		`https://www.thecolorapi.com/scheme?hex=${changedColor}&mode=${colorType}`
	)
		.then((response) => response.json)
		.then(data => {
			colorArray = data.colors
			 console.log(data.colors)
			Boxcolor()
		})
})

function Boxcolor() {
	colorRectangle.innerHTML = ``
	colorCodebox.innerHTML = ``
	for (let i = 0; i < colorArray.length; i++) {
		colorRectangle.innerHTML += `<div  class="rectangle" style="background-color:${colorArray[i].hex.value};"></div>`
		colorCodebox.innerHTML += `<p class="coderec">${colorArray[i].hex.value}</p>`
	}
}
