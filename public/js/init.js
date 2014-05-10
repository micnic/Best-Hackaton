var bmpAnimation;
var stage;
var hero
document.addEventListener('DOMContentLoaded', function () {
//    var canvas = document.getElementById("game");

    var canvas = document.getElementById("game");

    var screen_width;
    var screen_height;

    var imgMonsterARun = new Image();

    canvas.addEventListener('keypress', function () {
        hero.onKeypress.apply(null, arguments);
    });
    canvas.addEventListener('keydown', function () {
        hero.onKeydown.apply(null, arguments);
    });
    canvas.addEventListener('keyup', function () {
        hero.onKeyup.apply(null, arguments);
    });

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

        hero = new BaseModel({arrSprites: [element1, element2]});

        hero.setAction({action: 'move'});

        stage.addChild(hero);
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