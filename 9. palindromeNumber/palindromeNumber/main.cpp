//
//  main.cpp
//  palindromeNumber
//
//  Created by 黃耀昌 on 2019/1/26.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <math.h>

class Solution {
public:
    bool isPalindrome(int x) {
        if(x<0)
            return false;
        
        int num[9];
        int len = 0;
        while(x>0){
            num[len] = x%10;
            x/=10;
            len++;
        }
        for(int i=0;i<ceil(len/2);i++){
            if(num[i] != num[len-i-1])
                return false;
        }
        return true;
        
//        int length = log10(x)+1;
//        int step = pow(10, length-1);
//        int half = ceil(length/2);
//        for(int i=0;i<half;i++){
//            int x1 = x/step;
//            int x2 = x%10;
//            if(x1 != x2)
//                return false;
//            x /= 10;
//            step/=10;
//            x %= step;
//            step/=10;
//        }
//
//        return true;
    }
};
int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    Solution s;
    
    std::cout << (s.isPalindrome(16861)) << std::endl;
    
    return 0;
}
