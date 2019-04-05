//
//  main.cpp
//  70. Climbing Stairs
//
//  Created by 黃耀昌 on 2019/4/5.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int climbStairs(int n) {
        int ans = 0;
//        findWay(ans, n);
//        cout << "com: " << combination(6, 6) << endl;
//        return ans;
        
        
        int maxOfTwo = n / 2;
        
        for(int i = 0; i <= maxOfTwo; i++){
            ans += combination(n, i);
            n--;
        }
        
        return ans;
    }
    
    void findWay(int &ans, int leftStairs){
        if(leftStairs <= 1){
            ans++;
            return;
        }
        
        findWay(ans, leftStairs-1);
        findWay(ans, leftStairs-2);
    }
    
    int combination(int a, int b){
        int complementary = a - b;
        if(complementary < 0){
            return -1;
        }
        else if(complementary == 0){
            return 1;
        }
        
        if(b > complementary)
            b = complementary;
        
        int ans = 1;
        for(int i=1;i<=b;i++){
            ans *= a;
            ans /= i;
            a--;
        }
        
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    int n = 44;
    Solution s;
    cout << "Ans is: " << s.climbStairs(n) << endl;
    return 0;
}
