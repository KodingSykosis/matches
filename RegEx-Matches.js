if (typeof RegExp.prototype.matches === 'undefined')
RegExp.prototype.matches = function(str) {
    var results = new Array();
    var match, tmp;

    if (!this.global) {
        throw "RegExp must have global set to true.";
    }

    do {
        match = this.exec(str);
        if (match === null) break;

        results.push(match[1]);
    } while(this.lastIndex < str.length);

    return results;
}