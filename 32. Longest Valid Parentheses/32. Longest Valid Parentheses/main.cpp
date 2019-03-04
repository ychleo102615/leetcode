//
//  main.cpp
//  32. Longest Valid Parentheses
//
//  Created by 黃耀昌 on 2019/2/13.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>
#include <stack>
#include <map>

using namespace std;

class Solution {
public:
    int longestValidParentheses(string s) {
        
        stack<int> leftParPos;
        vector<pair<int, int>> validParList;
        map<int,int> validParList2;
        
        int longestLen = 0;
        
        for(int i=0;i<s.length();i++){
            if(s[i] == '('){
                leftParPos.push(i);
            }
            else if(s[i] == ')'){
                
                if(leftParPos.size()>0){
                    
                    if(validParList.size()>0){
                        if(validParList.back().first==leftParPos.top()+1 &&
                           validParList.back().first+validParList.back().second==i){
                            //最後一組括號被現在的括號組包起來的狀況
//                            delete validParList.back().second;
                            validParList.pop_back();
                        }
//                        if(validParList.back().first+validParList.back().second==leftParPos.top()){
//                            //前一組括號和這一組可以相連
//                            leftParPos.pop();
//                            leftParPos.push(validParList.back().first);
//                        }
                    }
                    if(validParList.size()>0){
                        if(validParList.back().first+validParList.back().second==leftParPos.top()){
                            //前一組括號和這一組可以相連
                            leftParPos.pop();
                            leftParPos.push(validParList.back().first);
                            validParList.pop_back();
                        }
                    }
                    
                    int len = i-leftParPos.top()+1;
                    validParList.push_back(make_pair(leftParPos.top(), len));
                    if(len > longestLen){
                        longestLen = len;
                    }
                    leftParPos.pop();
                }
            }
        }
        
        return longestLen;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    vector<string> ss{
//        "(())((()))",
        "()(()())"
//        "(()())",
//        "((()))))))()()()()",
//        ")()())"
    };
    for(int i=0;i<ss.size();i++){
        cout << s.longestValidParentheses(ss[i]) << endl;
    }
    
    return 0;
}
