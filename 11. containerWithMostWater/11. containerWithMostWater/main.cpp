//
//  main.cpp
//  11. containerWithMostWater
//
//  Created by 黃耀昌 on 2019/1/29.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <algorithm>

class Solution {
public:
    int maxArea(std::vector<int>& height) {
        int n = height.size();
        int max = 0;
//        for(int i=0;i<n-1;i++){
//            int thisMax = (n-i)*height[i];
//            if(max > thisMax)
//                continue;
//            for(int j=i+1;j<n;j++){
//                int vol;
//                if((vol = std::min(height[i], height[j]) * (j-i)) > max){
//                    max = vol;
//                }
//            }
//        }
        
        int l = 0, r = n-1;
        bool l_lesser;
        while(r>l){
            l_lesser = height[l] < height[r];
            max = std::max(max, height[(l_lesser)?l:r] * (r-l));
            
            if(l_lesser)
                l++;
            else
                r--;
        }
        
        return max;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    std::vector<int> h = {1,8,6,2,5,4,8,3,7};
    Solution s;
    std::cout << s.maxArea(h) << std::endl;
    return 0;
}
