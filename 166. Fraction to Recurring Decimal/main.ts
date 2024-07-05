function fractionToDecimal(numerator: number, denominator: number): string {
    if (numerator == 0) {
        return "0";
    }
    let isSigned = false;
    if (numerator < 0) {
        isSigned = !isSigned;
        numerator = -numerator;
    }
    if (denominator < 0) {
        isSigned = !isSigned;
        denominator = -denominator;
    }

    let result = isSigned ? "-" : "";

    let quotient = Math.floor(numerator / denominator);
    let remainder = numerator % denominator;
    result += quotient.toString();

    if (remainder == 0) {
        return result;
    }
    result += ".";

    //                     remainder, index
    const history = new Map<number, number>();
    do {
        numerator = remainder * 10;
        quotient = Math.floor(numerator / denominator);
        remainder = numerator % denominator;

        result += quotient.toString();
        if (history.has(remainder)) {
            let start = history.get(remainder)!;
            if (result[start] == result.slice(-1)) {
                // console.log("repeat")
                result = result.slice(0, -1);
            } else {
                // console.log("different", result[start], result[result.length-1])
                start++;
            }
            return result.slice(0, start) + "(" + result.slice(start, result.length) + ")";
        }
        if (remainder == 0) {
            return result;
        }
        history.set(remainder, result.length - 1);
    } while(true);
};
