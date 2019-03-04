//
//  main.cpp
//  45. Jump Game II
//
//  Created by 黃耀昌 on 2019/3/1.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int jump(vector<int>& nums){
        
        int steps = 0;
        int ptr = 0;
        
        while(ptr < nums.size()-1){
            int farestReach = 0;
            int next = 0;
            
            for(int i=nums[ptr];i>0;i--){
                if(ptr+i<nums.size()-1 && i + nums[ptr+i] > farestReach){
                    farestReach = i + nums[ptr+i];
                    next = i;
                }
                else if(ptr+i >= nums.size()-1){
                    next = i;
                    break;
                }
            }
            steps++;
            ptr += next;
//            cout << ptr << endl;
        }
        
        return steps;
    }
    
    
    vector<int> leastStepsAtBoxes;
    int jump2(vector<int>& nums) {
        leastStepsAtBoxes.assign(nums.size()-1, INT_MAX);
        
        jumpInSteps(nums, 0);
        
        return leastStepsAtBoxes[0];
    }
    
    int jumpInSteps(vector<int>& nums, int ptr){
        
        if(ptr >= nums.size()-1){
            return 1;
        }
        
        if(leastStepsAtBoxes[ptr] != INT_MAX){
            return leastStepsAtBoxes[ptr]+1;
        }
        
        
        int choices = nums[ptr];
        for(int i=choices; i>=1;i--){
            if(ptr+i<=nums.size()-1){
                int steps = jumpInSteps(nums, ptr+i);
                if(steps < leastStepsAtBoxes[ptr]){
                    leastStepsAtBoxes[ptr] = steps;
                }
            }
        }
        if(leastStepsAtBoxes[ptr] != INT_MAX){
            return leastStepsAtBoxes[ptr]+1;
        }
        else{
            return INT_MAX;
        }
//        return leastStepsAtBoxes[ptr]+1;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    vector<int> nums{2,3,1};
    Solution s;
    cout << s.jump(nums) << endl;
    
    return 0;
}
