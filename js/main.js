if(!("repeat" in String.prototype)) {

    String.prototype.repeat = function(count) {

    var text = this.valueOf(),
        repeated = "";

    if(count > 0) {
        for(var i = 0; i < count; i++) {
            repeated += text;
        };
    } else if(count === 0) {
        return "";
    };

    return repeated;

    };

}



