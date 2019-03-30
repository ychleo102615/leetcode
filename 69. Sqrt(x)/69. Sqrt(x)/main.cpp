//
//  main.cpp
//  69. Sqrt(x)
//
//  Created by 黃耀昌 on 2019/3/30.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
using namespace std;

class Solution {
public:
    int mySqrt(int x) {
        if(x <= 1){
            return x;
        }
        
        int candidate, pioneer = 1;
        double pioneerSquare = 1;
        while(pioneerSquare < x){
            candidate = pioneer;
            pioneer <<= 1;
            pioneerSquare = (double)pioneer * pioneer;
        }
        if(pioneerSquare == x){
            return pioneer;
        }
        
        int low = candidate, high = pioneer;
        int middle;
        
        while(high > low + 1){
            middle = (low + high) / 2;
            double middleSQ = (double)middle * middle;
            if(middleSQ < x){
                low = middle;
            }
            else if(middleSQ > x){
                high = middle;
            }
            else{
                return middle;
            }
        }
        
        middle = (high + low) / 2;
        return middle;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
//    for(int i=2; i<1000000; i++){
//        cout << "root " << i << " is :" << s.mySqrt(i) << endl;
//    }
    int i = INT_MAX;
    cout << "root " << i << " is :" << s.mySqrt(i) << endl;
    return 0;
}
