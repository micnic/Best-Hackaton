var bmpAnimation;
var stage;
var tmp
document.addEventListener('DOMContentLoaded', function () {
//    var canvas = document.getElementById("game");

    var canvas;

    var screen_width;
    var screen_height;

    var imgMonsterARun = new Image();

    function init() {
        canvas = document.getElementById("game");
        startGame();
//        imgMonsterARun.onload = handleImageLoad;
//        imgMonsterARun.onerror = handleImageError;
//        imgMonsterARun.src = "public/img/move.png";
    }

    function startGame() {
//        // create a new stage and point it at our canvas:
        stage = new createjs.Stage(canvas);

        tmp = new BaseModel({arrSprites: [Ninja.big_jump, Ninja.idle, Ninja.jump, Ninja.lean, Ninja.move, Ninja.lean_move]});

//        tmp.setAction({action: 'lean_move'});
        tmp.setAction({action: 'lean'});
//        tmp.setAction({action: 'jump'});
        tmp.setAction({action: 'big_jump'});
//        tmp.setAction({action: 'move'});
//        tmp.setAction({action: 'lean_move'});

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