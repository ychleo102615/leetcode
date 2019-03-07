//
//  main.cpp
//  50. Pow(x, n)
//
//  Created by 黃耀昌 on 2019/3/7.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>

using namespace std;

class Solution {
public:
    double myPow(double x, int n) {
        
        if(n==0)
            return 1;
        else if(n==1)
            return x;
        
        if(x==0)
            return 0;
        else if(x==1)
            return 1;
        
        double left = 1;
        
        bool sign = n > 0;
        // when n is INT_MIN, get bug
        
        if(n==INT_MIN){
            x *= x;
            n = INT_MAX/2+1;
        }
        else{
            n= abs(n);
        }
        
        while(n > 1){
            if((n&1) == 0){//(n%2 == 0){
                x *= x;
                n >>= 1;
            }
            else{
                left *= x;
                x *= x;
                n >>= 1;
            }
        }
        
        x *= left;
        
        if(!sign)
            x = 1/x;
        
        return x;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
//    cout << s.myPow(-3, -1) << endl;
    cout << s.myPow(2, INT_MAX) << endl;
    cout << s.myPow(2, INT_MIN) << endl;
    return 0;
}
