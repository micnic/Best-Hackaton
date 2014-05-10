(function () {

    var BaseModel = function (options) {
        this.initialize(options);
    }

    var bm = BaseModel.prototype = new createjs.Container(); // inherit from Container

    bm.bnpAnimationObjects = {};

    bm.currentAnimmation = null;

    bm.Container_initialize = bm.initialize;

    bm.dX = 0;
    bm.dy = 0;

    bm.onKeypress = function (event) {
        console.log(event)
    }

    bm.onKeyup = function (event) {
        console.log(event)
    }

    bm.initialize = function (options) {

        this._initSprites(options.arrSprites);

        this.on("tick", this.handleTick);
    }

    bm.handleTick = function () {

        this.currentAnimmation.x = this.currentAnimmation.x + this.dX;
//        this.currentAnimmation.y = this.currentAnimmation.y + this.dY;
        console.log('aaaa')
    }

    bm._initSprites = function (arrSprites) {
        var me = this;
        arrSprites.forEach(function (element, index) {

            var spriteSheet = new createjs.SpriteSheet(element);

            var animation = new createjs.Sprite(spriteSheet);

            me.bnpAnimationObjects[element.animKey] = animation;

        });

    }

    bm.onKeydown = function (event) {

        if (event.which == 37) { //left
            this.dX = -1;
            this.setAction({action: 'move', transformation: true});

        } else if (event.which == 38) { //up
            this.setAction({action: 'jump'});
        } else if (event.which == 39) { //right
            this.dX = 1;
            this.setAction({action: 'move'});
        } else if (event.which == 40) { //down
            this.setAction({action: 'lean'});
        }
    }

    bm.setAction = function (direction) {

        if (this.currentAnimmation) {
            stage.removeChild(this.currentAnimmation);
        }

        if (direction.transform) {
            //TODO transform
        } else {
            this.currentAnimmation = this.bnpAnimationObjects[direction.action];

            this.currentAnimmation.gotoAndPlay(direction.action);
        }

        stage.addChild(this.currentAnimmation);
    }

    window.BaseModel = BaseModel;
}());