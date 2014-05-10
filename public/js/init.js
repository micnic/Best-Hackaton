var bmpAnimation;
var stage;
var hero;
var screen_width = 512;
var screen_height = 288;
document.addEventListener('DOMContentLoaded', function () {
//    var canvas = document.getElementById("game");

    var canvas = document.getElementById("game");

    document.addEventListener('keydown', function (event) {
        hero.onKeydown(event);
    });
    document.addEventListener('keyup', function (event) {
        hero.onKeyup(event);
    });

    function init() {
        startGame();
    }

    function startGame() {
//        // create a new stage and point it at our canvas:
        stage = new createjs.Stage(canvas);

        hero = new BaseModel({arrSprites: Ninja}, 'idle');

        stage.addChild(hero);

        createjs.Ticker.addEventListener("tick", tick);
        createjs.Ticker.useRAF = true;
        createjs.Ticker.setFPS(10);
    }

    function tick() {
        stage.update();
    }

    init();
});