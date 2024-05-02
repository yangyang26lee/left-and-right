let Distance = 0
basic.forever(function () {
    Distance = sonar.ping(
    DigitalPin.P16,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    basic.showNumber(Distance)
})
basic.forever(function () {
    if (Distance < 10) {
        pins.digitalWritePin(DigitalPin.P8, 1)
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P8, 0)
        pins.digitalWritePin(DigitalPin.P13, 1)
        music.play(music.tonePlayable(220, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P13, 0)
    } else {
        music.stopAllSounds()
    }
})
