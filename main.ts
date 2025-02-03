let stopTime = 0

Sensors.SetLightLevel()

radio.setGroup(92)

radio.onReceivedNumber(function(receivedNumber: number) {
    if (receivedNumber === 1) {
        music.playTone(850, 1000)
    }
})


Sensors.OnLightDrop(function() {
    music.playTone(300, 1000)


})