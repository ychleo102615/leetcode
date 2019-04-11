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
            else if(cutOff == "."){
                continue;
            }
            else if(cutOff == ".."){
                if(address.size() > 0)
                    address.pop_back();
                continue;
            }
            address.push_back(cutOff);
        }
        
        for(int i=0;i<address.size();i++){
            ans +=  "/" + address[i];
        }
        if(address.size() == 0)
            ans = "/";
        
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    
    string path = "/a/../../b/../c//.//";
    Solution s;
    cout << "Answer is: " << s.simplifyPath(path) << endl;
    return 0;
}
