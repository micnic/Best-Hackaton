(function (hero) {
    var StaticBaseModel = function (options, action) {
        this.initialize(options);
    }

    var bs = StaticBaseModel.prototype = new createjs.Container(); // inherit from Container
    bs.bitmapObj = null,
    bs.initialize = function (options) {

        this.bitmapObj = new createjs.Bitmap(options.imgPath);

        this.bitmapObj.x = options.x;
        this.bitmapObj.y = options.y;

        this.on("tick", this.handleTick);
    }

    bs.handleTick = function() {
        console.log(hero)
    }

    window.StaticBaseModel = StaticBaseModel;
}(hero));