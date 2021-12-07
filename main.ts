let angle = 150
let alarme = 0
servos.P0.setAngle(150)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P16) == 1) {
        servos.P0.setAngle(60)
        basic.pause(2000)
    }
})
