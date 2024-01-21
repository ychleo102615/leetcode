enum Token {
    SIGN,
    DIGIT,
    DOT,
    E,
    OTHER,
};

function isNumber(s: string): boolean {

    const tokens = parseTokens(s);


    let index = 0

    let parseValidNumber = (): boolean => {
        //console.log("parseValidNumber", index)
        const current = index;
        if (parseSNDecimal()) {
            return true;
        }
        index = current;
        if (parseSNInterger()) {
            return true;
        }
        return false;
    };
    let parseDec1 = (): boolean => {
        //console.log("parseDec1", index)
        if (tokens[index] == Token.SIGN) {
            index++;
        }
        if (tokens[index] == Token.DIGIT) {
            index++;
        } else {
            return false;
        }
        if (tokens[index] == Token.DOT) {
            index++;
        } else {
            return false;
        }
        if (tokens[index] == Token.DIGIT) {
            index++;
        }
        return true;
    }
    let parseDec2 = (): boolean => {
        //console.log("parseDec2", index)
        if (tokens[index] == Token.SIGN) {
            index++;
        }
        if (tokens[index] == Token.DOT) {
            index++;
        } else {
            return false;
        }
        if (tokens[index] == Token.DIGIT) {
            index++;
        } else {
            return false;
        }
        return true;
    }
    let parseDecimal = (): boolean => {
        //console.log("parseDecimal", index)
        const current = index;
        if (parseDec1()) {
            return true;
        }
        //console.log("false, index", index)
        index = current;
        return parseDec2();
    };
    let parseInteger = (): boolean => {
        //console.log("parseInteger", index)
        if (tokens[index] == Token.SIGN) {
            index++;
        }
        if (tokens[index] == Token.DIGIT) {
            index++;
        } else {
            return false;
        }
        return true;
    };

    let parseE = (): boolean => {
        //console.log("parseE", index)
        if (tokens[index] == Token.E) {
            index++;
            return parseInteger();
        }
        return true;
    }
    let parseSNInterger = (): boolean => {
        //console.log("parseSNInterger", index)
        if (!parseInteger()) {
            return false;
        }
        return parseE();
    }
    let parseSNDecimal = (): boolean => {
        //console.log("parseSNDecimal", index)
        if (!parseDecimal()) {
            return false;
        }
        return parseE();
    }
    //console.log(tokens)

    if (parseValidNumber()) {
        return index == tokens.length;
    } else {
        return false;
    }
};

function parseTokens(s: string): Token[] {
    let tokens: Token[] = [];
    let i = 0;
    while (i < s.length) {
        switch(s[i]) {
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                if (tokens.length <= 0 || tokens[tokens.length-1] != Token.DIGIT) {
                    tokens.push(Token.DIGIT);
                }
                break;
            case '+':
            case '-':
                tokens.push(Token.SIGN);
                break;
            case '.':
                tokens.push(Token.DOT);
                break;
            case 'e':
            case 'E':
                tokens.push(Token.E);
                break;
            default:
                tokens.push(Token.OTHER);
        }
        i++;
    }

    return tokens;
}
