# Number System Converter

* Converts numbers to and from any base, tested specifically for any base between 2 and 16
* Defaults to binary conversion (to and from) if no base is given
* Ensures digits are each less than the base value, e.g. avoiding converting 12342_base2 which is impossible.
* Hexadecimal to Binary/Decimal issue has been fixed and can now properly convert values
* [UI testing][mainUItest] has been done with a CasperJS script that can be found in the tests folder. There are currently 14 basic tests, which can be run from the terminal on a machine that has PhantomJS and CasperJS installed. When everything is working, your terminal will look like this:

![WorkingTests](/images/casperjs_workingtests_suite.PNG "Passing browser tests")


* Screenshots are currently enabled for the [headless browser test suite][mainUItest]
* [Unit tests][unit] have been created for core functions, currently 4 for checkBase(), 4 for fromDecimal(), and 4 for toDecimal()
 

[mainUItest]: /tests/casperjs/conversion_input_tests.js
[unit]: /tests/casperjs/unit_tests.js