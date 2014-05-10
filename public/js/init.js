var bmpAnimation;
document.addEventListener('DOMContentLoaded', function () {
//    var canvas = document.getElementById("game");

    var canvas;
    var stage;
    var screen_width;
    var screen_height;


    var imgMonsterARun = new Image();

    function init() {
        canvas = document.getElementById("game");

        imgMonsterARun.onload = handleImageLoad;
        imgMonsterARun.onerror = handleImageError;
        imgMonsterARun.src = "public/img/move.png";
    }

    function reset() {
        stage.removeAllChildren();
        createjs.Ticker.removeAllListeners();
        stage.update();
    }

    function handleImageLoad(e) {
        startGame();
    }

    function startGame() {
        // create a new stage and point it at our canvas:
        stage = new createjs.Stage(canvas);

        // grab canvas width and height for later calculations:
        screen_width = canvas.width;
        screen_height = canvas.height;

        // create spritesheet and assign the associated data.
        var spriteSheet = new createjs.SpriteSheet({
//            framerate: 5,
            // image to use
            images: ['public/img/move.png', 'public/img/idle.png'],
            // width, height & registration point of each sprite
//            frames: {width: 35, height: 35},
            frames: [
                // x, y, width, height, imageIndex, regX, regY
                [0, 0, 35, 35, 0], // 10 images
//                [0, 0, 25, 35, 1] // 3 images
            ],
            animations: {
                idle: {
//                    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
                    frames: [0, 1]
                },
                move: [4, 9, 'move', 20]
            }
        });

        // create a BitmapAnimation instance to display and play back the sprite sheet:
        bmpAnimation = new createjs.Sprite(spriteSheet);

        // start playing the first sequence:
        bmpAnimation.gotoAndPlay("move"); 	//animate
//        bmpAnimation.gotoAndStop("move"); 	//animate

        bmpAnimation.currentFrame = 0;
        stage.addChild(bmpAnimation);

        createjs.Ticker.addEventListener("tick", tick);
        createjs.Ticker.useRAF = true;
        createjs.Ticker.setFPS(2);
    }

//called if there is an error loading the image (usually due to a 404)
    function handleImageError(e) {
        console.log("Error Loading Image : " + e.target.src);
    }

    function tick() {
//        // Hit testing the screen width, otherwise our sprite would disappear
//        if (bmpAnimation.x >= screen_width - 16) {
//            // We've reached the right side of our screen
//            // We need to walk left now to go back to our initial position
//            bmpAnimation.direction = -90;
//        }
//
//        if (bmpAnimation.x < 16) {
//            // We've reached the left side of our screen
//            // We need to walk right now
//            bmpAnimation.direction = 90;
//        }
//
//        // Moving the sprite based on the direction & the speed
//        if (bmpAnimation.direction == 90) {
//            bmpAnimation.x += bmpAnimation.vX;
//        }
//        else {
//            bmpAnimation.x -= bmpAnimation.vX;
//        }

        // update the stage:
        stage.update();
    }

    init();
});