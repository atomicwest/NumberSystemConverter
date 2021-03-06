var url = "http://ogjdne.cf/resources/number_converter/index.html";

// casper.userAgent('Mozilla/4.0 (compaatible; MSIE 6.0; Windows NT5)')

casper.test.begin('Ensure Default Values', 3, function suite(test) {
    casper.start(url, function() {
    //   console.log(this);
       casper.then(function() {
          var convfrom = this.getElementInfo('#convfrom')["attributes"];
          var origbase = this.getElementInfo('#origbase')["attributes"];
          var endbase = this.getElementInfo('#endbase')["attributes"];
          test.assertEquals(convfrom["value"],"0", "Default Input Value is 0")
          test.assertEquals(origbase["value"],"2", "Default Input Base Value is 0")
          test.assertEquals(endbase["value"],"2", "Default Output Base Value is 0")
       });
    });

    casper.run(function() {
        test.done();
    });
})

//----------------------------------------------------------

casper.test.begin('Binary To Decimal', 1, function suite(test) {

    casper.start(url, function(){
        this.sendKeys("#convfrom","1010100");
        this.sendKeys("#origbase","2");
        this.sendKeys("#endbase","10");
        // casper.capture("fill.png");
    } );

    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/BtD_filledin.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "84", "1010100 base 2 = 84 base 10");
    });

    casper.run(function() {
        test.done();
    });
});

//----------------------------------------------------------

casper.test.begin('Binary To Hexadecimal', 1, function suite(test) {

    casper.start(url, function(){
        this.sendKeys("#convfrom","1011001010");
        this.sendKeys("#origbase","2");
        this.sendKeys("#endbase","16");
        // casper.capture("fill.png");
    } );

    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/BtH_filledin.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "2CA", "1011001010 base 2 = 2CA base 16");
    });

    casper.run(function() {
        test.done();
    });
});

//----------------------------------------------------------

casper.test.begin('Decimal To Hexadecimal', 4, function suite(test) {

    casper.start(url, function(){
        this.sendKeys("#convfrom","65343138547");
        this.sendKeys("#origbase","10");
        this.sendKeys("#endbase","16");
        // casper.capture("fill.png");
    } );

    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/DtH_filledin.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "F36C12AF3", "65343138547 base 10 = F36C12AF3 base 16");
    });

    casper.thenClick('button#hex', function() {
        casper.capture("tests/casperjs/screenshots/DtH_HexPrefix.png")

        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });

        var hexbtnLabel = this.evaluate(function() {
            return document.querySelector('[id="hex"]').innerHTML;
        });

        test.assertEquals(result, "0xF36C12AF3", "Added hexadecimal prefix with Add Hex Prefix button");
        test.assertEquals(hexbtnLabel, "Remove Hex Prefix", "Hex Prefix button label changes dynamically");
    });

    casper.thenClick('button#clearf', function() {
        casper.capture("tests/casperjs/screenshots/DtH_clear.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "0", "Result field has been cleared when Clear button is clicked");
    });

    casper.run(function() {
        test.done();
    });
});

//----------------------------------------------------------

casper.test.begin('Hexadecimal to Binary', 2, function suite(test) {

    casper.start(url, function(){
        this.sendKeys("#convfrom","ABC");
        this.sendKeys("#origbase","16");
        this.sendKeys("#endbase","2");
        // casper.capture("fill.png");
    } );

    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/HtB_filledin.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "101010111100", "ABC base 16 = 101010111100 base 2");
    });

    casper.thenClick('button#clearf', function() {
        casper.capture("tests/casperjs/screenshots/HtB_clear.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "0", "Result field has been cleared when Clear button is clicked");
    });

    casper.run(function() {
        test.done();
    });
});

//----------------------------------------------------------

casper.test.begin('Hexadecimal to Decimal', 2, function suite(test) {

    casper.start(url, function(){
        this.sendKeys("#convfrom","DEF");
        this.sendKeys("#origbase","16");
        this.sendKeys("#endbase","10");
        // casper.capture("fill.png");
    } );

    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/HtD_Caps_filledin.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "3567", "DEF base 16 = 3567 base 10");
    });

    casper.thenOpen(url, function() {
        this.sendKeys("#convfrom","def");
        this.sendKeys("#origbase","16");
        this.sendKeys("#endbase","10");
    });
    
    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/HtD_NoCaps_filledin.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "3567", "Script is indiscriminate to capitalization");
    });

    casper.run(function() {
        test.done();
    });
});

//----------------------------------------------------------

casper.test.begin('Decimal To Binary', 1, function suite(test) {

    casper.start(url, function(){
        this.sendKeys("#convfrom","54168743514");
        this.sendKeys("#origbase","10");
        this.sendKeys("#endbase","2");
        // casper.capture("fill.png");
    } );

    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/DtB_filledin.png")
        var result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        test.assertEquals(result, "110010011100101101010110111001011010", "54168743514 base 10 = 110010011100101101010110111001011010 base 16");
    });

    casper.run(function() {
        test.done();
    });
});
