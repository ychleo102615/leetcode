//
//  main.cpp
//  65. Valid Number
//
//  Created by 黃耀昌 on 2019/3/18.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <sstream>
#include <algorithm>

using namespace std;

class Solution {
public:
    bool isNumber(string s) {
        
        enum parseState{preSpace,preFloat,preE,postE,postSpace,space};
        parseState state = preSpace;
        
        int i=0;
        while(i<s.length()){
            char look = s[i];
            switch (state) {
                case preSpace:
                    if(s[i] == ' '){
                        i++;
                    }
                    else if(isdigit(s[i])){
                        i++;
                        state = preFloat;
                    }
                    else if(containSymbolAndLegal('-', s, i) || containSymbolAndLegal('+', s, i)){
                        i += 2;
                        state = preFloat;
                    }
                    else if(containSymbolAndLegal('.', s, i)){
                        i += 2;
                        state = preE;
                    }
                    else{
                        return false;
                    }
                    break;
                    
                case preFloat:
                    if(isdigit(s[i])){
                        i++;
                    }
                    else if (s[i] == ' '){
                        i++;
                        state = space;
                    }
                    else if(containSymbolAndLegal('.', s, i)){
                        i += 2;
                        state = preE;
                    }
                    else if(s[i] == 'e'){
                        if(suffixWithDigit(s, i) || containSymbolAndLegal('-', s, ++i) || containSymbolAndLegal('+', s, i)){
                            i+=2;
                            state = postSpace;
                        }
//                        else if(containSymbolAndLegal('-', s, ++i)){
//                            i+=2;
//                            state = postE;
//                        }
                        else
                            return false;
                    }
                    else{
                        return false;
                    }
                    
                    break;
                    
                case preE:
                    if(isdigit(s[i])){
                        i++;
                    }
                    else if (s[i] == ' '){
                        i++;
                        state = space;
                    }
                    else if(s[i] == 'e'){
                        if(suffixWithDigit(s, i) || containSymbolAndLegal('-', s, ++i)){
                            i+=2;
                            state = postSpace;
                        }
                        else
                            return false;
                    }
                    else{
                        return false;
                    }
                    break;
                    
                case postSpace:
                    if(isdigit(s[i])){
                        i++;
                    }
                    else if (s[i] == ' '){
                        i++;
                        state = space;
                    }
                    else{
                        return false;
                    }
                    break;
                    
                case space:
                    if(s[i] == ' '){
                        i++;
                    }
                    else{
                        return false;
                    }
                default:
                    break;
            }
        }
        if(state == preSpace)
            return false;
        if(s.length() == 1 && s[0] == '.')
            return false;
        return true;
    }
    
    bool containSymbolAndLegal(char symbol, string& s, int& i){
        
//        if(s[i] == symbol && suffixWithDigit(s, i))
//            return true;
        if(s[i] == symbol){
            if(suffixWithDigit(s, i)){
                return true;
            }
            else if(symbol == '.' && i>0 && isdigit(s[i-1])){
                i--;
                return true;
            }
            return false;
        }
        else
            return false;
    }
    
    bool suffixWithDigit(string& s, int& i){
        if(i+1<s.length() && isdigit(s[i+1]))
            return true;
        else
            return false;
    }
};

int main(int argc, const char * argv[]) {
    Solution s;
//    vector<string> possibleNumber {"100.100e-100"};
    cout << s.isNumber("100.100e-100") << endl;
    cout << s.isNumber("100") << endl;
    cout << s.isNumber("-100") << endl;
    cout << s.isNumber("100.0") << endl;
    cout << s.isNumber("100e100") << endl;
    cout << s.isNumber("100e-100") << endl;
    cout << s.isNumber("1 ") << endl;
    cout << s.isNumber("1e1 ") << endl;
    
    
    cout << "-----" << endl;
    
//    cout << s.isNumber(<#string s#>) << endl;
//    cout << s.isNumber("100-  ") << endl;
//    cout << s.isNumber("100.") << endl;
//    cout << s.isNumber("100-") << endl;
//    cout << s.isNumber("e") << endl;
//    cout << s.isNumber("100e") << endl;
//    cout << s.isNumber("100e-1.0") << endl;
    cout << s.isNumber("-.8") << endl;
    
}
