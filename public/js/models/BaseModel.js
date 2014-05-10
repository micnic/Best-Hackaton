(function () {

    var BaseModel = function (options) {
        this.initialize(options);
    }

    var bm = BaseModel.prototype = new createjs.Container(); // inherit from Container

    bm.onKeypress = function(event) {
        console.log(event)
    }

    bm.onKeydown = function(event) {

        if(event.which == 37) { //left

        } else if(event.which == 38) { //up

        } else if(event.which == 39) { //right

        } else if(event.which == 40) { //down

        }
    }

    bm.onKeyup = function(event) {
        console.log(event)
    }
    bm.bnpAnimationObjects = {};

    bm.currentAnimmation = null;

    bm.Container_initialize = bm.initialize;

    bm.initialize = function (options) {

        this._initSprites(options.arrSprites);

//        me.bnpAnimationArr();
//        this.addChild(this.background, );
//        this.on("click", this.handleClick);
        this.on("tick", this.handleTick);
    }

    bm.handleTick = function() {
//        console.log('aaaa')
    }

    bm._initSprites = function (arrSprites) {
        var me = this;
        arrSprites.forEach(function (element, index) {

            var spriteSheet = new createjs.SpriteSheet(element);

            var animation = new createjs.Sprite(spriteSheet);

            me.bnpAnimationObjects[element.animKey] = animation;

        });

    }

    bm.setAction = function(direction) {

        if(this.currentAnimmation) {
            stage.removeChild(this.currentAnimmation);
        }

        if(direction.transform) {
            //TODO transform
        } else {
            this.currentAnimmation =  this.bnpAnimationObjects[direction.action];

            this.currentAnimmation.gotoAndPlay(direction.action);
        }

        stage.addChild(this.currentAnimmation);
    }


//
    bm.handleClick = function (event) {
        console.log('click');
    }
//
//    bm.handleTick = function (event) {
//        console.log('handle click')
//    }
//
//    bm.move = function (direction) {
//        this.x = this.x + 1;
//        this.y = this.y + 1;
//        console.log(direction);
//    }

    window.BaseModel = BaseModel;
}());