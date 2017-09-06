var calc = {
    calculate: function(str){
        if (/^[-+()*\/0-9\s.]+$/.test(str)) {
            try {
                return Math.round(eval(str) * 100) / 100;
            }
            catch (e) {
                return undefined;
            };
        }
        else {
            return undefined;
        };    
    }
};

module.exports = calc;