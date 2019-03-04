//
//  main.cpp
//  14. longestCommonPrefix
//
//  Created by 黃耀昌 on 2019/1/30.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <string>
#include <cmath>

using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
        string prefix = strs[0];
        for(int i=1;i<strs.size();i++){
            int loc = getSameLength(prefix, strs[i]);
            prefix = prefix.substr(0, loc) ;
        }
        
        return prefix;
    }
    
    int getSameLength(string s1, string s2){
        for(int i=0;i<s1.length();i++){
            if(i<s2.length()){
                if(s1[i] != s2[i])
                    return i;
            }
            else
                return i;
        }
        return s1.length();
    }
};

int main(int argc, const char * argv[]) {
    
    vector<string> strings = {"apple", "apply", "applejuice", "app"};
    Solution s;
    cout << s.longestCommonPrefix(strings) << endl;
    
    return 0;
}
