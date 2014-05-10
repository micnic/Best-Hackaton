var bmpAnimation;
var stage;
var hero
document.addEventListener('DOMContentLoaded', function () {
//    var canvas = document.getElementById("game");

    var canvas = document.getElementById("game");

    var screen_width;
    var screen_height;

    var imgMonsterARun = new Image();

    canvas.addEventListener('keypress', function (event) {
        hero.onKeypress(event);
    });
    canvas.addEventListener('keydown', function (event) {
        hero.onKeydown(event);
    });
    canvas.addEventListener('keyup', function (event) {
        hero.onKeyup(event);
    });

    function init() {
        startGame();
    }

    function startGame() {
//        // create a new stage and point it at our canvas:
        stage = new createjs.Stage(canvas);

        hero = new BaseModel({arrSprites: Ninja});

        hero.setAction({action: 'move'});

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