//
//  main.cpp
//  58. Length of Last Word
//
//  Created by 黃耀昌 on 2019/3/10.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>

using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        int len = 0;
        int ptr = s.length()-1;
        
        while(ptr>=0){
            if(s[ptr] == ' '){
                if(len>0){
                    break;
                }
            }
            else if(isalpha(s[ptr])){
                len++;
            }
            ptr--;
        }
        return len;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    cout << s.lengthOfLastWord("a        ") << endl;
    return 0;
}
