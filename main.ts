function mostrar () {
    patron.push(opciones._pickRandom())
    for (let value of patron) {
        if (value == "I") {
            basic.showArrow(ArrowNames.West)
        } else if (value == "D") {
            basic.showArrow(ArrowNames.East)
        } else {
            basic.showString(value)
        }
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
	
})
input.onGesture(Gesture.TiltLeft, function () {
    patron.push("I")
})
input.onButtonPressed(Button.AB, function () {
    patron = []
    jugar = true
    mostrar()
    basic.pause(500)
    mostrar()
    basic.pause(500)
    mostrar()
})
let patron: string[] = []
let opciones: string[] = []
let jugar = false
jugar = false
opciones = [
"A",
"B",
"I",
"I"
]
basic.forever(function () {
	
})
