(function () {

    var BaseModel = function (options, action) {
        this.initialize(options, action);
    }

    var bm = BaseModel.prototype = new createjs.Container(); // inherit from Container

    bm.bnpAnimationObjects = {};

    bm.currentAnimmation = null;

    bm.Container_initialize = bm.initialize;

    bm.dX = 0;
    bm.dy = 0;

    /*bm.onKeypress = function (event) {

    }*/

    bm.initialize = function (options, action) {

        this._initSprites(options.arrSprites);

        this.currentAnimmation = this.bnpAnimationObjects[action];
        this.setState({action: action});


        this.on("tick", this.handleTick);
    }

    bm.handleTick = function () {

        this.currentAnimmation.x = this.currentAnimmation.x + this.dX;
//        this.currentAnimmation.y = this.currentAnimmation.y + this.dY;
    }

    bm._initSprites = function (arrSprites) {
        var me = this;
        arrSprites.forEach(function (element, index) {

            var spriteSheet = new createjs.SpriteSheet(element);

            var animation = new createjs.Sprite(spriteSheet);

            animation.addEventListener('animationend', function (target, type, name, next) {
                me.animationEnded(target, type, name, next)
            });

            me.bnpAnimationObjects[element.animKey] = animation;

        });

    }

    bm.animationEnded = function(target, type, name, next) {

    }

    bm.onKeydown = function (event) {
        var activeKeys = KeyboardJS.activeKeys().join();
        if (activeKeys == 'left') { //left
            if (this.state !== 'move') {
                this.dX = -2;
                this.setState({action: 'move', transformation: true});
            }
        } else if (activeKeys == 'up') { //up
            this.setState({action: 'jump'});
        } else if (activeKeys == 'right') { //right
            if (this.state !== 'move') {
                this.dX = 2;
                this.setState({action: 'move'});
            }
        } else if (activeKeys == 'down') { //down
            this.setState({action: 'lean'});
        } else if (activeKeys == 'left,up' || activeKeys == 'up,left') {
        } else if (activeKeys == 'left,down' || activeKeys == 'down,left') {
            this.dX = -2;
            this.setState({action: 'lean_move'});
        } else if (activeKeys == 'right,up' || activeKeys == 'right,up') {
            this.dX = 5;
            this.setState({action: 'big_jump'});
        } else if (activeKeys == 'right,down' || activeKeys == 'right,down') {
            this.dX = 2;
            this.setState({action: 'lean_move'});
        }
    }

    bm.onKeyup = function (event) {
        if (this.state !== 'idle') {
            this.dX = 0;
            this.setState({action: 'idle'});
        }
    }

    bm.setState = function (state) {

        var currentPos = {
            x: this.currentAnimmation.x,
            y: this.currentAnimmation.y
        };

        if (this.currentAnimmation) {
            stage.removeChild(this.currentAnimmation);
        }

        this.state = state.action;

        this.currentAnimmation = this.bnpAnimationObjects[state.action];
        this.currentAnimmation.x = currentPos.x;
        this.currentAnimmation.y = 288 - this.currentAnimmation.spriteSheet._frameHeight;
//        this.currentAnimmation._currentFrame = 0;
        this.currentAnimmation.onAnimationEnd = function() {
            console.log('animation end')
        }

        this.currentAnimmation.gotoAndPlay(state.action);

        stage.addChild(this.currentAnimmation);
    }

    window.BaseModel = BaseModel;
}());