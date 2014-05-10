var Ninja = [{
        images: ['public/img/big_jump.png'],
        frames: {width: 45, height: 65},
        animations: {
            move: [0, 14]
        },
        animKey: 'big_jump'
    }, {
        images: ['public/img/idle.png'],
        frames: {width: 25, height: 35},
        animations: {
            // start, end, next, speed
            move: [0, 2]
        },
        animKey: 'idle'
    }, {
        images: ['public/img/jump.png'],
        frames: {width: 25, height: 40},
        animations: {
            move: [0, 5]
        },
        animKey: 'jump'
    }, {
        images: ['public/img/lean.png'],
        frames: {width: 20, height: 25},
        animations: {
            move: [0, 2]
        },
        animKey: 'lean'
    }, {
        images: ['public/img/lean_move.png'],
        frames: {width: 45, height: 20},
        animations: {
            move: [0, 9]
        },
        animKey: 'lean_move'
    }, {
        images: ['public/img/move.png'],
        frames: {width: 35, height: 35},
        animations: {
            move: [0, 9]
        },
        animKey: 'move'
    }
]

