# Number System Converter

* Converts numbers to and from any base, tested specifically for any base between 2 and 16
* Defaults to binary conversion (to and from) if no base is given
* Ensures digits are each less than the base value, e.g. avoiding converting 12342_base2 which is impossible.
* With the current version of base checking, there is a limit for converting binary numbers from 1111111111111111_base2 (which is also 65535_base10) upward, exclusive. I am not sure why this is happening, but you should be able to convert from the current max safe integer (9007199254740991_base10) to any base system without any problems.
