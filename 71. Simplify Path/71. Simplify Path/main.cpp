//
//  main.cpp
//  71. Simplify Path
//
//  Created by 黃耀昌 on 2019/4/8.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include<sstream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string simplifyPath(string path) {
        string ans;
        vector<string> address;
        istringstream iss(path);
        string cutOff;
        
        while(getline(iss, cutOff, '/')){
            if(cutOff.length() <= 0){
                continue;
            }
            cout << cutOff << endl;
            address.push_back(cutOff);
        }
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    
    string path = "/home//foo//./";
    Solution s;
    s.simplifyPath(path);
    return 0;
}
