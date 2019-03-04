//
//  main.cpp
//  12,13. romanInteger
//
//  Created by 黃耀昌 on 2019/1/29.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <map>

class Solution {
public:
    std::string intToRoman(int num) {
        int digit[4];
        std::string roman;
        std::string rule = "IVXLCDM";
        
        for(int i=0;i<4;i++){
            digit[i] = num%10;
            int state = 2*i;
            std::string tmp;
            if(digit[i] == 9){
                tmp = tmp + rule[state] + rule[state+2];
                roman = tmp + roman;
            }
            else if(digit[i] >= 5){
                tmp = rule[state];
                while(digit[i]-- > 5){
//                    roman = rule[state] + roman;
                    roman = tmp + roman;
                }
                tmp = rule[state+1];
                roman = tmp + roman;
            }
            else if(digit[i] == 4){
                tmp = tmp + rule[state] + rule[state+1];
                roman = tmp + roman;
            }
            else{
                tmp = rule[state];
                while(digit[i]-- > 0){
                    roman = tmp + roman;
                }
            }
            num /= 10;
        }
        
        
        
        return roman;
    }
    
    std::map<char,int> rule = {
        {'I', 1},
        {'V', 5},
        {'X', 10},
        {'L', 50},
        {'C', 100},
        {'D', 500},
        {'M', 1000}
    };
    int romanToInt(std::string s) {
        int num = 0;
        
        for(int i=0;i<s.length()-1;i++){
            if(rule[s[i]] < rule[s[i+1]]){
                num -= rule[s[i]];
            }
            else{
                num += rule[s[i]];
            }
        }
        num += rule[s[s.length()-1]];
        
        return num;
    }
};


int main(int argc, const char * argv[]) {
    Solution s;
//
//    std::cout << s.intToRoman(79) << std::endl;
    
    for(int i=0;i<100000;i++){
        s.romanToInt("MCD");
    }
    
    return 0;
}
