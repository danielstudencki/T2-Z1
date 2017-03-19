if(!("repeat" in String.prototype)) {

    String.prototype.repeat = function(count) {

        var text = this.valueOf(),
            repeated = "";

        for(var i = 0; i < count; i++) {
                repeated += text;
            };
        if(count === 0) {
            return "";
        };

    return repeated;

    };

}



