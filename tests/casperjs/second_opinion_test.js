var url = "http://ogjdne.cf/resources/number_converter/index.html";
var urlbd = "http://www.binaryhexconverter.com/binary-to-decimal-converter"
var urlbh = "" 
// casper.userAgent('Mozilla/4.0 (compaatible; MSIE 6.0; Windows NT5)')

//----------------------------------------------------------

casper.test.begin('Binary To Decimal', 1, function suite(test) {

    var result;
    var compareAns;

    casper.start(url, function(){
        this.sendKeys("#convfrom","1010100");
        this.sendKeys("#origbase","2");
        this.sendKeys("#endbase","10");
        // casper.capture("fill.png");
    } );

    casper.thenClick('button#conversion', function() {
        casper.capture("tests/casperjs/screenshots/BtD_filledin.png")
        result = this.evaluate(function() {
            return document.querySelector('[id="result"]').value;
        });
        console.log(result)
        test.assertEquals(result, "84", "1010100 base 2 = 84 base 10");
    });
    console.log(result)
    // casper.start(urlbd, function() {
    //     this.sendKeys("#tabin", "1010100");
    // });

    // casper.thenClick('[value="Convert"]', function() {
    //     casper.capture("tests/casperjs/screenshots/BtD_othersite.png")
    //     compareAns = this.evaluate(function() {
    //         return document.querySelector('[id="resulttxt"]').value;
    //     });
    //     test.assertEquals(result, compareAns, result + "==" + compareAns)
    // })

    // // test.assertEquals();

    casper.run(function() {
        test.done();
    });
});

//----------------------------------------------------------

// casper.test.begin('Binary To Hexadecimal', 1, function suite(test) {

//     casper.start(url, function(){
//         this.sendKeys("#convfrom","1011001010");
//         this.sendKeys("#origbase","2");
//         this.sendKeys("#endbase","16");
//         // casper.capture("fill.png");
//     } );

//     casper.thenClick('button#conversion', function() {
//         casper.capture("tests/casperjs/screenshots/BtH_filledin.png")
//         var result = this.evaluate(function() {
//             return document.querySelector('[id="result"]').value;
//         });
//         test.assertEquals(result, "2CA", "1011001010 base 2 = 2CA base 16");
//     });

//     casper.run(function() {
//         test.done();
//     });
// });