input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
})
