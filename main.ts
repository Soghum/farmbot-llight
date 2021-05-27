let Movement = 0
basic.forever(function () {
    if (Movement == 1) {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
basic.forever(function () {
    if (input.acceleration(Dimension.X) <= 1) {
        Movement = 1
    } else {
        Movement = 0
    }
})
basic.forever(function () {
    if (Movement == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
