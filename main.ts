let list: number[] = []
let value = 0
input.onButtonPressed(Button.A, () => {
    for (let value of list) {
        music.playTone(value, music.beat(BeatFraction.Whole))
    }
    basic.pause(1000)
})
input.onButtonPressed(Button.B, () => {
    for (let value of list) {
        music.playTone(value * 2, music.beat(BeatFraction.Whole))
    }
    basic.pause(1000)
})
list = [262, 392, 330, 392, 262]