//
//  main.cpp
//  62. Unique Paths
//
//  Created by 黃耀昌 on 2019/2/28.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>

using namespace std;

class Solution {
public:
    double uniquePaths(int m, int n) {
        if(m < n)
            swap(m, n);
        
        if(n==1)
            return 1;
        
        double pathNum = 0;
        for(int level = 1; level < n; level++){
            int movableRowNum = level - 1;
            pathNum += combination(m, level) * combination(n-2, movableRowNum);
        }
        
        return pathNum;
    }
    
    int combination(int num, int range){
        if(range == 0)
            return 1;
        return factorialWithRange(num, range)/factorialWithRange(range, range);
    }
    
    double factorialWithRange(int num, int range){
        double ans = num;
        for(int i=1;i<range;i++){
            ans *= --num;
        }
        
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    for(int i=1;i<=1;i++)
        cout << i << "th element: " << fixed << s.uniquePaths(2, 2) << endl;
    return 0;
}
