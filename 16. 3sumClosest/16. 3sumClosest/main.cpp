//
//  main.cpp
//  16. 3sumClosest
//
//  Created by 黃耀昌 on 2019/1/31.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <cmath>
#include <algorithm>


using namespace std;

class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int leastDiff = INT_MAX;
        sort(nums.begin(), nums.end());
        
        for(int i=0;i<nums.size()-2;i++){
            int lp = i+1, hp = nums.size()-1;
            int diff;
            while(lp<hp){
                diff = nums[i]+nums[lp]+nums[hp]-target;
                if(diff == 0){
                    return target;
                }
                else if(diff < 0){
                    lp++;
                }
                else{
                    hp--;
                }
                if(abs(diff) < abs(leastDiff))
                    leastDiff = diff;
            }
            while(nums[i] == nums[i+1]){
                i++;
            }
        }
        
        return target + leastDiff;;
    }
};

int main(int argc, const char * argv[]) {
    vector<int> nums {1,1,3,3,4,5,6,6,-10,4,4,3,3,4,5,6,7,8,81234,6234,43,234,234,4};
    Solution s;
    cout << s.threeSumClosest(nums, 100) << endl;
    return 0;
}
