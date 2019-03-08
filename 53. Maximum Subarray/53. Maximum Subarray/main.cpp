//
//  main.cpp
//  53. Maximum Subarray
//
//  Created by 黃耀昌 on 2019/3/8.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        
        if(nums.size()<=0)
            return 0;
        
        int currentSum = nums[0];
        int maxSum = nums[0];
        
        for(int i=1;i<nums.size();i++){
            if(nums[i]>0){
                if(currentSum < 0){
                    currentSum = nums[i];
                }
                else{
                    currentSum+=nums[i];
                }
                
            }
            else{
                if(nums[i] > currentSum){
                    //-5 -> -1
                    currentSum = nums[i];
                }
                else if(currentSum+nums[i]>0){
                    currentSum += nums[i];
                }
                else{
                    currentSum = nums[i];
                }
            }
            
            if(currentSum > maxSum){
                maxSum = currentSum;
            }
        }
        
        
        return maxSum;
    }
    
    int dcSubArray(vector<int>& nums){
        
        return 0;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<int> nums{1,-2,2};
    Solution s;
    cout << s.maxSubArray(nums) << endl;
    return 0;
}
