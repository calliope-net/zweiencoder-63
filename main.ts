pins.onPulsed(DigitalPin.C12, PulseValue.Low, function () {
    e1 += 1
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (m0 == 0) {
        m0 = 50
    } else {
        m0 = 0
    }
    motors.dualMotorPower(Motor.M0, m0)
    zeigeEncoder()
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    e0 = 0
    e1 = 0
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    if (m1 == 0) {
        m1 = 50
    } else {
        m1 = 0
    }
    motors.dualMotorPower(Motor.M1, m1)
    zeigeEncoder()
})
pins.onPulsed(DigitalPin.C14, PulseValue.Low, function () {
    e0 += 1
})
function zeigeEncoder () {
	
}
let m1 = 0
let e0 = 0
let m0 = 0
let e1 = 0
lcd16x2rgb.initLCD(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E))
pins.digitalWritePin(DigitalPin.C9, 1)
pins.setPull(DigitalPin.C14, PinPullMode.PullUp)
pins.setPull(DigitalPin.C12, PinPullMode.PullUp)
loops.everyInterval(1000, function () {
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 0, 0, 15, e0, lcd16x2rgb.eAlign.right)
    lcd16x2rgb.writeText(lcd16x2rgb.lcd16x2_eADDR(lcd16x2rgb.eADDR_LCD.LCD_16x2_x3E), 1, 0, 15, e1, lcd16x2rgb.eAlign.right)
})
