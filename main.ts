function mostrar () {
    acción = opciones._pickRandom()
    patron.push(acción)
    for (let value of patron) {
        basic.showString("" + (value))
        basic.pause(100)
    }
}
input.onButtonPressed(Button.A, function () {
    if (mueve) {
        acción = patron[n]
        if (acción == "A") {
            n = n + 1
        } else {
            juega = false
            basic.showIcon(IconNames.No)
        }
    }
})
input.onGesture(Gesture.TiltRight, function () {
    if (mueve) {
        acción = patron[n]
        if (acción == "D") {
            n = n + 1
        } else {
            juega = false
            basic.showIcon(IconNames.No)
        }
    }
})
input.onGesture(Gesture.TiltLeft, function () {
    if (mueve) {
        acción = patron[n]
        if (acción == "I") {
            n = n + 1
        } else {
            juega = false
            basic.showIcon(IconNames.No)
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    patron = []
    juega = true
    mueve = false
    mostrar()
})
input.onButtonPressed(Button.B, function () {
    if (mueve) {
        acción = patron[n]
        if (acción == "B") {
            n = n + 1
        } else {
            juega = false
            basic.showIcon(IconNames.No)
        }
    }
})
function mover () {
    mueve = true
    n = 0
    while (juega && false) {
    	
    }
    mueve = false
}
let n = 0
let patron: string[] = []
let acción = ""
let opciones: string[] = []
let mueve = false
let juega = false
juega = false
mueve = false
opciones = [
"A",
"B",
"I",
"D"
]
