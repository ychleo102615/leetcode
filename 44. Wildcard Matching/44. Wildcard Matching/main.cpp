//
//  main.cpp
//  44. Wildcard Matching
//
//  Created by 黃耀昌 on 2019/2/26.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<bool>> table;
    vector<vector<bool>> check;
    int slen;
    int plen;
    bool isMatched(string s, string p) {
        table.clear();
        check.clear();
        for(int i=1;i<p.length();i++){
            if(p[i-1] == '*' && p[i] == '*'){
                p.erase(i,1);
                i--;
            }
        }
        slen = s.length();
        plen = p.length();
        table.assign(s.length(), vector<bool>(p.length(), false));
        check.assign(s.length(), vector<bool>(p.length(), false));
        return match(s, p);
    }
    
    bool match(string s, string p){
        if(p.length() == 0){
            return s.length() == 0;
        }
        int stringPointer = slen-s.length();
        int patternPointer = plen-p.length();
        
        if(stringPointer!=slen){
            if(check[stringPointer][patternPointer]){
                return table[stringPointer][patternPointer];
            }
        }
        
        bool ans;
        if(s.length() > 0 && (s[0] == p[0] || p[0] == '?')){
            ans = match(s.substr(1), p.substr(1));
            table[stringPointer][patternPointer] = ans;
            check[stringPointer][patternPointer] = true;
            return ans;
        }
        else if(p[0] == '*'){
            
            if(s.length() > 0){
                ans = match(s, p.substr(1)) || match(s.substr(1), p);
                table[stringPointer][patternPointer] = ans;
                check[stringPointer][patternPointer] = true;
                return ans;
            }
            
            else
                return match(s, p.substr(1));
        }
        else{
            return false;
        }
        
        
    }
    
    bool isMatch(string s, string p){
        
        for(int i=1;i<p.length();i++){
            if(p[i-1] == '*' && p[i] == '*'){
                p.erase(i,1);
                i--;
            }
        }
        
        vector<vector<bool>> matchTable(s.length()+1, vector<bool>(p.length()+1, false));
        matchTable[0][0] = true;
        for(int i=1;i<=p.length();i++){
            if(p[i-1] == '*')
                matchTable[0][i] = matchTable[0][i-1];
            else
                matchTable[0][i] = false;
        }
        
        for(int sp=1; sp<=s.length(); sp++){
            for(int pp=1; pp<=p.length(); pp++){
                if(s[sp-1] == p[pp-1] || p[pp-1] == '?'){
                    matchTable[sp][pp] = matchTable[sp-1][pp-1];
                }
                else if(p[pp-1] == '*'){
                    matchTable[sp][pp] = matchTable[sp-1][pp] || matchTable[sp][pp-1];
                }
            }
        }
        
        
        return matchTable[s.length()][p.length()];
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    string s1 = "aa";
    string s2 = "*aaa";
    bool ans = s.isMatch(s1, s2);
    string message;
    if(ans)
        message = "pass";
    else
        message = "fail";
    cout << message << endl;
    
    return 0;
}
