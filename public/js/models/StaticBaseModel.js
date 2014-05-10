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

        if(!options.y) {
            this.currentAnimation.y = hero.currentAnimation.y;
        } else {
            this.currentAnimation.y = options.y;
        }

        stage.addChild(this.currentAnimation);

        this.on("tick", this.handleTick);
    }

    bs.checkCollision = function() {

        var distance = this.currentAnimation.x - hero.currentAnimation.x;
        if(Math.abs(distance) < this.currentAnimation.spriteSheet._frameWidth) {

            stage.removeChild(this);
            delete this;
            console.log('collision');
        }
    };

    bs.handleTick = function () {
        this.currentAnimation.x -= hero.dx;
        this.checkCollision();
    }

    window.StaticBaseModel = StaticBaseModel;
}());