//
//  main.cpp
//  regularExpressionMatching
//
//  Created by 黃耀昌 on 2019/1/27.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>
#include <ctime>

class Solution {
public:
    char** matchTable;
    std::string s, p;
//    std::vector<std::vector<char>> matchTable;
    int sl, pl;
    
    bool isMatch(std::string ss, std::string pp) {
        
//        return isMatchRecursive(s, p);
        s = ss;
        p = pp;
        sl = s.length();
        pl = p.length();
        
//        matchTable.assign(sl+1, std::vector<char>(pl+1, 'n'));
        
        matchTable = new char*[s.length()];
        for(int i=0;i<s.length();i++){
            matchTable[i] = new char[p.length()];
            for(int j=0;j<p.length();j++)
                matchTable[i][j] = 'n';
        }
        
        
        
        bool result = isMatchDynamic(0, 0);
        
//        for(int i=0;i<s.length();i++){
//            delete matchTable[i];
//        }
//        delete matchTable;
        
        return result;
    }
    
    bool isMatchDynamic(int i, int j){
        
        
        
        if(j >= pl){
//            matchTable[i][j] = (i == sl)?'t':'f';
            return i == sl;
        }
        
        bool charMatch;
        if(i < sl){
            if(matchTable[i][j] != 'n'){
                return matchTable[i][j] == 't';
            }
            
            charMatch = s[i] == p[j] || p[j] == '.';
        }
        else{
            charMatch = false;
        }
        
        bool resultStarAsZero;
        bool resultStarProduces;
//        char ans;
        
        if(j+2 <= pl && p[j+1] == '*'){
            
            resultStarAsZero = isMatchDynamic(i, j+2);
            resultStarProduces = charMatch && isMatchDynamic(i+1, j);
            return matchTable[i][j] = (resultStarAsZero || resultStarProduces)?'t':'f'  == 't';
//            return ans == 't';
        }
        else{
            return matchTable[i][j] = (charMatch && isMatchDynamic(i+1, j+1))?'t':'f' == 't';
//            return ans == 't';
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    bool isMatchRecursive(std::string s, std::string p){
        
        if(p.length() == 0){
            return s.length() == 0;
        }
        
        bool charMatch;
        if(s.length() > 0){
            charMatch = s[0] == p[0] || p[0] == '.';
        }
        else
            charMatch = false;
        
        bool resultStarAsZero;
        bool resultStarProduces;
        
        if(p.length() >= 2 && p[1] == '*'){
        
            resultStarAsZero = isMatchRecursive(s, p.substr(2));
            resultStarProduces = charMatch && isMatchRecursive(s.substr(1), p);
            return resultStarAsZero || resultStarProduces;
        }
        else{
            return charMatch && isMatchRecursive(s.substr(1), p.substr(1));
        }
    }
};


int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    Solution s;
    clock_t start, stop;
    double totalTime;
    
//    std::cout << s.isMatch("aaaap", "aaaap") << std::endl;
//    std::cout << s.isMatch("aaaap", "a*p") << std::endl;
//    std::cout << s.isMatch("apx", ".*.*") << std::endl;
//
//    std::cout << s.isMatch("aa", "bb") << std::endl;
    start = clock();
    for(int i=0;i<1000000;i++)
        s.isMatch("aaaa", "aaaa");
//    std::cout << s.isMatch("ppp", "ppp*p") << std::endl;
//    std::cout << s.isMatch("", "abcy") << std::endl;
//    std::cout << s.isMatch("", "y*abcd") << std::endl;
//    std::cout << s.isMatch("", "y*") << std::endl;
//    std::cout << s.isMatch("abcd", "y*abcd") << std::endl;
    stop = clock();
    
    std::cout << (double)(stop - start) / (double)CLOCKS_PER_SEC << std::endl;
    
    return 0;
}
