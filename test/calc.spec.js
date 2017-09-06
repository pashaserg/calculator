var should = require('should');
var calc = require('../source/calc');

describe('calc spc', function(){
   

    
    it('"(1+2)" -> 3', function(){
        should(calc.calculate("1+2")).equal(3);
    });

    it("(1+2) -> 3", function(){
        should(calc.calculate("1+2")).equal(3);
    });

    it('"1.1+2" -> 3.1', function(){
        should(calc.calculate("1.1+2")).equal(3.1);
    });

    it('"3-1" -> 2', function(){
        should(calc.calculate("3-1")).equal(2);
    });

    it('"3.1-1" -> 2.1', function(){
        should(calc.calculate("3.1-1")).equal(2.1);
    });

    it('"2*2" -> 4', function(){
        should(calc.calculate("2*2")).equal(4);
    });
    
    it('"(2*2)" -> 4', function(){
        should(calc.calculate("(2*2)")).equal(4);
    });

    it('"2.1*2" -> 4.2', function(){
        should(calc.calculate("2.1*2")).equal(4.2);
    });

    it('"1/2" -> 0.5', function(){
        should(calc.calculate("1/2")).equal(0.5);
    });

    it('"(1/2)" -> 0.5', function(){
        should(calc.calculate("(1/2)")).equal(0.5);
    });

    it('"1.1/2" -> 0.55', function(){
        should(calc.calculate("(1.1/2)")).equal(0.55);
    });
    
    it('"1/2 + 5 + 4*5" -> 25.5', function(){
        should(calc.calculate("1/2 + 5 + 4*5")).equal(25.5);
    });

    it('"1/2 + (5 + 4) * 5" -> 45.5', function(){
        should(calc.calculate("1/2 + (5 + 4) * 5")).equal(45.5);
    });

    it('"1/2    + (5 + 4) * 5" -> 45.5', function(){
        should(calc.calculate("1/2    + (5 + 4) * 5")).equal(45.5);
    });

    it('"1/2    + (5 + 4) * 5" -> 45.5', function(){
        should(calc.calculate("1/2    + (5 + 4) * 5")).equal(45.5);
    });

    it('"1/2 + (5.5 + 4.7) * 5.1" -> 52.52', function(){
        should(calc.calculate("1/2 + (5.5 + 4.7) * 5.1")).equal(52.52);
    });

    it('"-1/2 + (-5.5 - 4.7) * 5.1" -> -52.52', function(){
        should(calc.calculate("-1/2 + (-5.5 - 4.7) * 5.1")).equal(-52.52);
    });

    it('"1+2/3" -> 1.67', function(){
        should(calc.calculate("1+2/3")).equal(1.67);
    });

    it('"1+2/45/78/78" -> 1', function(){
        should(calc.calculate("1+2/45/78/78")).equal(1);
    });

    it('"0" -> 0', function(){
        should(calc.calculate("0")).equal(0);
    });

    it('"18" -> 18', function(){
        should(calc.calculate("18")).equal(18);
    });

    it('"(1/2 + 5 + 4*5" -> undefined', function(){
        should(calc.calculate("(1/2 + 5 + 4*5")).equal(undefined);
    });

    it('"1/2 ++ 5 + 4) * 5" -> undefined', function(){
        should(calc.calculate("1/2 ++ 5 + 4) * 5")).equal(undefined);
    });

    it('"[1/2] + 5 + 4 * 5" -> undefined', function(){
        should(calc.calculate("[1/2] + 5 + 4 * 5")).equal(undefined);
    });

    it('"1/2 >> 5 + 4) * 5" -> undefined', function(){
        should(calc.calculate("1/2 >> 5 + 4) * 5")).equal(undefined);
    });

    it('"1/2 + 5a + 4b * 5" -> undefined', function(){
        should(calc.calculate("1/2 + 5a + 4b * 5")).equal(undefined);
    });

    it('trololo_NLO" -> undefined', function(){
        should(calc.calculate("trololo_NLO")).equal(undefined);
    });
});

