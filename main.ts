serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeString("hello")
    basic.pause(1000)
    if (serial.readString() == "echo") {
        basic.showIcon(IconNames.Heart)
    }
})
