//
//  main.cpp
//  stringToInteger
//
//  Created by 黃耀昌 on 2019/1/26.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <stdlib.h>

class Solution {
public:
    int myAtoi(std::string str) {
        int ptr = 0;
        int ptrEnd = 0;
        bool signEncountered = false;
        
        while(str[ptr] == ' ')
            ptr++;
        
        ptrEnd = ptr;
        
        if(str[ptrEnd] == '-' || str[ptrEnd] == '+'){
            signEncountered = true;
            ptrEnd++;
        }
        
        while(isDigit(str[ptrEnd])){
            ptrEnd++;
        }
        
        if(ptr == ptrEnd)
            return 0;
        if(ptr+1 == ptrEnd && signEncountered)
            return 0;
        
        return selfMadeAtoi(str.substr(ptr, ptrEnd-ptr));
    }
    
    bool isDigit(char c){
        return ('0' <= c && c <= '9');
    }
    
    int selfMadeAtoi(std::string s){
        int a = 0;
        bool isNegative = false;
        int start = 0;
        
        if(s[0] == '-'){
            start++;
            isNegative = true;
        }
        else if(s[0] == '+'){
            start++;
            isNegative = false;
        }
        
        for(int i=start;i<s.length();i++){
            int d = s[i] - '0';
            if(isNegative){
                if(a < (INT_MIN+d)/10)
                    return INT_MIN;
                a *= 10;
                a -= d;
            }
            else{
                if(a > (INT_MAX-d)/10)
                    return INT_MAX;
                a *= 10;
                a += d;
            }
        }
        
        return a;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    Solution s;
    
    std::cout << s.myAtoi("    +99") << std::endl;
    std::cout << s.myAtoi("    ++99") << std::endl;
    std::cout << s.myAtoi("    -99") << std::endl;
    std::cout << s.myAtoi("    --99") << std::endl;
    std::cout << s.myAtoi("    +-99") << std::endl;
    std::cout << s.myAtoi("    10++") << std::endl;
    std::cout << s.myAtoi("    +2147483648") << std::endl;
    
    return 0;
}
