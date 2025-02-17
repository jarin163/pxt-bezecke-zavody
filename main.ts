radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber === 9) {
        console.log("restart")
        control.reset()
    }

})
    

radio.setGroup(92)

let stopTime = 0
let startTime = 0

Sensors.SetLightLevel()


    


radio.onReceivedNumber(function (receivedNumber: number) {
    if (receivedNumber === 1) {
        startTime = input.runningTime()  
        basic.showString("!")
        console.log("Start")
    }
})


Sensors.OnLightDrop(function () {
    music.playTone(500, 500)
    stopTime = input.runningTime()  
    let raceTime = (stopTime - startTime) / 1000  
    console.log(raceTime)
    basic.showNumber(raceTime)
    radio.sendNumber(raceTime)
        })



    
