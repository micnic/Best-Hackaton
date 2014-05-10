var bmpAnimation;
var stage;
var tmp
document.addEventListener('DOMContentLoaded', function () {
//    var canvas = document.getElementById("game");

    var canvas = document.getElementById("game");

    var screen_width;
    var screen_height;

    var imgMonsterARun = new Image();

    canvas.addEventListener('keypress', function () {});
    canvas.addEventListener('keydown', function () {});
    canvas.addEventListener('keyup', function () {});

    function init() {
        startGame();
//        imgMonsterARun.onload = handleImageLoad;
//        imgMonsterARun.onerror = handleImageError;
//        imgMonsterARun.src = "public/img/move.png";
    }

    function startGame() {
//        // create a new stage and point it at our canvas:
        stage = new createjs.Stage(canvas);

        var element1 = {
                images: ['public/img/move.png'],
                // width, height & registration point of each sprite
                frames: {width: 35, height: 35},
                animations: {
                    // start, end, next, speed
                    move: [0, 9]
                },
                animKey: 'move'
            },
            element2 = {
                images: ['public/img/idle.png'],
                frames: {width: 25, height: 35},
                animations: {
                    // start, end, next, speed
                    move: [0, 2]
                },
                animKey: 'idle'
            }

        tmp = new BaseModel({arrSprites: [element1, element2]});

        tmp.setAction({action: 'move'});

        stage.addChild(tmp);
//
        createjs.Ticker.addEventListener("tick", tick);
        createjs.Ticker.useRAF = true;
        createjs.Ticker.setFPS(10);
    }

//
    function tick() {
        stage.update();
    }

//
    init();
});