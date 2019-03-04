//
//  main.cpp
//  reverseInteger
//
//  Created by 黃耀昌 on 2019/1/26.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <math.h>
#include <limits.h>

class Solution {
public:
    int reverse(int x) {
        
        if(x>0){
            if(log10(x) >= 9 && x%10 >= 3)
                return 0;
        }
        else{
            if(log10(-x) >= 9 && -x%10 >= 3)
                return 0;
        }
        
        int a = 0;
        int preLimit = INT_MAX/10;
        int npreLimit = INT_MIN/10;
        
        while(x != 0){
            if(a > preLimit || a < npreLimit)
                return 0;
            a *= 10;
            a += x % 10;
            x /= 10;
        }

        
        return a;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    Solution s;
    
//    std::cout << s.reverse(2147483647) << std::endl;
    
    std::cout << s.reverse(-100) << std::endl;
    return 0;
}
