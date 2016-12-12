# Number System Converter

* Converts numbers to and from any base, tested specifically for any base between 2 and 16
* Defaults to binary conversion (to and from) if no base is given
* Ensures digits are each less than the base value, e.g. avoiding converting 12342_base2 which is impossible.
* With the current version of base checking, there is a limit for converting binary numbers from 1111111111111111_base2 (which is also 65535_base10) upward, exclusive. This is partially due to how the code parses integers as strings. More unit tests are being done and the issues have been logged.
* UI testing has been done with a CasperJS script that can be found in the tests folder. There are currently 10 basic tests, which can be run from the terminal on a machine that has PhantomJS and CasperJS installed. When everything is working, your terminal will look like this:

![WorkingTests](/images/casperjs_workingtests.PNG "Passing browser tests")
