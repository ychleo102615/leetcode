//
//  main.cpp
//  29. Divide Two Integers
//
//  Created by 黃耀昌 on 2019/2/11.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
using namespace std;
class Solution {
public:
    int divide(int dividend, int divisor) {
        if(divisor == 1){
            return dividend;
        }
        if(divisor == -1){
            if(dividend == INT_MIN)
                return INT_MAX;
            else
                return -dividend;
        }
        
        bool reverse = true;
        if(dividend>0){
            dividend = -dividend;
            reverse = !reverse;
        }
        if(divisor>0){
            divisor = -divisor;
            reverse = !reverse;
        }
        
        int bound = divisor;
        int ans = -1;
        
        while(bound > dividend){
            if(INT_MIN-bound < bound){
                bound += bound;
                ans += ans;
//                bound <<= 1;
//                ans <<= 1;
            }
            else{
                while(bound >= dividend-divisor){
                    bound += divisor;
//                    ans++;
                    ans--;
                }
                break;
            }
        }
        while(bound<dividend){
            bound -= divisor;
//            ans--;
            ans++;
        }
        
        if(reverse){
            if(ans==INT_MIN)
                return INT_MAX;
            else
                return -ans;
        }
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    Solution s;
    cout << s.divide(INT_MAX,2) << endl;
    cout << s.divide(INT_MAX,1) << endl;
    cout << s.divide(INT_MAX,-1) << endl;
    cout << s.divide(INT_MIN,2) << endl;
    cout << s.divide(INT_MIN,1) << endl;
    cout << s.divide(INT_MIN,-1) << endl;
//    cout << s.divide(0,INT_MIN) << endl;
//    cout << s.divide(1,INT_MIN) << endl;
//    cout << s.divide(2,INT_MIN) << endl;
    return 0;
}
