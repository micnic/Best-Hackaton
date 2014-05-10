(function () {
    var StaticBaseModel = function (options, action) {
        this.initialize(options);
    }

    var bs = StaticBaseModel.prototype = new createjs.Container(); // inherit from Container


    bs.initialize = function (options) {
        var element = {
            images: [options.imgPath],
            frames: {width: 20, height: 25},
            animations: {
                move: [0]
            }
        }
        var spriteSheet = new createjs.SpriteSheet(element);

        this.currentAnimation = new createjs.Sprite(spriteSheet);

        this.currentAnimation.x = options.x;
        this.currentAnimation.y = options.y;

        stage.addChild(this.currentAnimation);

        this.on("tick", this.handleTick);
    }

    bs.handleTick = function () {
        this.currentAnimation.x -= hero.dx;
    }

    window.StaticBaseModel = StaticBaseModel;
}());