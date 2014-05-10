(function () {

    var BaseModel = function (options, action) {
        this.initialize(options, action);
    }

    var bm = BaseModel.prototype = new createjs.Container(); // inherit from Container

    bm.bnpAnimationObjects = {};

    bm.waitFinish = false;

    bm.currentAnimation = null;

    bm.Container_initialize = bm.initialize;

    bm.dx = 0;
    bm.dy = 0;

    /*bm.onKeypress = function (event) {

     }*/

    bm.initialize = function (options, action) {

        this._initSprites(options.arrSprites);

        this.currentAnimation = this.bnpAnimationObjects[action];
        this.setState({action: action});


        this.on("tick", this.handleTick);
    }

    bm.handleTick = function () {

//        this.currentAnimation.x = this.currentAnimation.x + this.dx;
//        this.currentAnimation.y = this.currentAnimation.y + this.dy;
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

    bm.animationEnded = function (target, type, name, next) {
        if (this.waitFinish) {
            this.waitFinish = false;
            this._setIdleState();
        }
    };

    bm.onKeydown = function (event) {
        var activeKeys = KeyboardJS.activeKeys().join();

        if (activeKeys.indexOf('left') >= 0/* && !this.rotate*/) {
            //this.rotate = true;
            this.currentAnimation.setTransform(this.currentAnimation.x, this.currentAnimation.y, -1);
        } else if (activeKeys.indexOf('right') >= 0/* && this.rotate*/) {
            //this.rotate = false;
            this.currentAnimation.setTransform(this.currentAnimation.x, this.currentAnimation.y, 1);
        }

        if (activeKeys == 'left') {
            if (this.state !== 'move') {
                this.dx = -2;
                this.setState({action: 'move'});
            }
        } else if (activeKeys == 'up') {
            this.setState({action: 'jump'});
        } else if (activeKeys == 'right') {
            if (this.state !== 'move') {
                this.dx = 2;
                this.setState({action: 'move'});
            }
        } else if (activeKeys == 'down') {
            this.setState({action: 'lean'});
        } else if (activeKeys == 'left,up' || activeKeys == 'up,left') {
            this.dx = -5;
            this.waitFinish = true;
            this.setState({action: 'big_jump'});
        } else if (activeKeys == 'left,down' || activeKeys == 'down,left') {
            this.dx = -2;
            this.setState({action: 'lean_move'});

        } else if (activeKeys == 'right,up' || activeKeys == 'up,right') {
            this.dx = 5;
            this.waitFinish = true;
            this.setState({action: 'big_jump'});
        } else if (activeKeys == 'right,down' || activeKeys == 'down,right') {
            this.dx = 2;
            this.setState({action: 'lean_move'});
        } else if ((activeKeys == 'space,spacebar'  || activeKeys == 'left,space,spacebar' || activeKeys == 'space,spacebar,left' == 'right,space,spacebar' || activeKeys == 'space,spacebar,right') && !this.waitFinish) {
            this.dx = 0;
            this.waitFinish = true;
            this.setState({action: 'hit'});
        } else if (activeKeys == 'down,space,spacebar' || activeKeys == 'space,spacebar,down') {
            this.dx = 0;
            this.waitFinish = true;
            this.setState({action: 'lean_hit'});
        } else if (activeKeys == 'up,space,spacebar' || activeKeys == 'space,spacebar,up') {
            this.dx = 0;
            this.waitFinish = true;
            this.setState({action: 'jump_hit'});
        }
    }

    bm._setIdleState = function () {
        this.dx = 0;
        this.setState({action: 'idle'});
    }

    bm.onKeyup = function (event) {
        if (this.state !== 'idle' && !this.waitFinish) {
            this._setIdleState();
        }
    }

    bm.setState = function (state) {

        var currentPos = {
            x: this.currentAnimation.x,
            y: this.currentAnimation.y
        };

        if (this.currentAnimation) {
            stage.removeChild(this.currentAnimation);
        }

        this.state = state.action;

        this.currentAnimation = this.bnpAnimationObjects[state.action];
        this.currentAnimation.x = 100;//currentPos.x;
        this.currentAnimation.y = 288 - this.currentAnimation.spriteSheet._frameHeight;

//        if (this.currentAnimation.x >= screen_width) {
//            this.dx = 0;
//            this.currentAnimation.x = screen_width - this.currentAnimation.spriteSheet._frameWidth;
//            console.log(this.currentAnimation.x);
//        } else if (this.currentAnimation.x < 0) {
//            this.dx = 0;
//            this.currentAnimation.x = 0;
//        }

        this.currentAnimation.gotoAndPlay(state.action);

        stage.addChild(this.currentAnimation);
    }

    window.BaseModel = BaseModel;
}());