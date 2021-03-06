var bmpAnimation;
var stage;
var hero;
var screen_width = 512;
var screen_height = 288;
document.addEventListener('DOMContentLoaded', function () {
//    var canvas = document.getElementById("game");

    var canvas = document.getElementById("game");
    canvas.width = screen_width;
    canvas.height = screen_height;

    document.addEventListener('keydown', function (event) {
        hero.onKeydown(event);
        canvas.style.backgroundPosition = (parseInt(canvas.style.backgroundPosition || 0) - (hero.dx / 2)) + 'px bottom';
        event.preventDefault();
    });
    document.addEventListener('keyup', function (event) {
        hero.onKeyup(event);
        event.preventDefault();
    });

    createjs.Sound.play('public/sound/DarkMystery.ogg');

    function init() {
        startGame();
    }

    function startGame() {
//        // create a new stage and point it at our canvas:
        stage = new createjs.Stage(canvas);

        hero = new BaseModel({arrSprites: Ninja}, 'idle');
//        staticObj = new BaseModel({arrSprites: Ninja}, 'idle');
        staticObject = new StaticBaseModel({
            imgPath: 'public/img/barrier.png',
            x: 120
        });

        staticObject2 = new StaticBaseModel({
            imgPath: 'public/img/barrier.png',
            x: 300
        });

//        staticObject1 = new StaticBaseModel({
//            imgPath: 'public/img/barrier.png',
//            x: 300,
//            y: 120
//        });

        stage.addChild(hero);
        stage.addChild(staticObject);
//        stage.addChild(staticObject1);
        stage.addChild(staticObject2);

        createjs.Ticker.addEventListener("tick", tick);
        createjs.Ticker.useRAF = true;
        createjs.Ticker.setFPS(10);
    }

    function tick() {
        stage.update();
    }

    init();
});