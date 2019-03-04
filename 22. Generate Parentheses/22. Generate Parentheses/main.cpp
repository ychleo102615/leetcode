//
//  main.cpp
//  22. Generate Parentheses
//
//  Created by 黃耀昌 on 2019/2/5.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    vector<string> ans;
    
    vector<string> generateParenthesis(int n) {
        ans.clear();
        checkNextLevel("", 0, n);
        return ans;
    }
    
    void checkNextLevel(string now, int ptr, int n){
        if(n == 0){
            ans.push_back(now);
            return;
        }
        
        while(ptr <= now.length()){
            if(now[ptr] == ')' || ptr == now.length()){
                checkNextLevel(now.substr(0,ptr)+"()"+now.substr(ptr), ptr+1, n-1);
            }
            ptr++;
        }
    }
};

int main(int argc, const char * argv[]) {
    Solution s;
    vector<string> ans = s.generateParenthesis(4);
    for(int i=0;i<ans.size();i++){
        cout << ans[i] << endl;
    }
    return 0;
}
