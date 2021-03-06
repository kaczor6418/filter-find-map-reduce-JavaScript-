Array.prototype.myFilter = function(callbackFunction) {
    const filtered = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFunction(this[i], i, this)) {
            filtered.push(this[i]);
        }
    }
    return filtered;
};
