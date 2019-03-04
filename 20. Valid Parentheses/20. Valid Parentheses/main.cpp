//
//  main.cpp
//  20. Valid Parentheses
//
//  Created by 黃耀昌 on 2019/2/3.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <stack>

using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> myStack;
        for(int i=0;i<s.length();i++){
            if(myStack.empty() || !Match(myStack.top(), s[i])){
                myStack.push(s[i]);
            }
            else{
                myStack.pop();
            }
        }
        if(myStack.empty())
            return true;
        else
            return false;
    }
    
    bool Match(char c1, char c2){
        return c2 > c1 && c2 -c1 <= 2;
    }
};

int main(int argc, const char * argv[]) {
    return 0;
}
