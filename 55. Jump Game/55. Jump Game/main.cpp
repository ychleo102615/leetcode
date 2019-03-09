//
//  main.cpp
//  55. Jump Game
//
//  Created by 黃耀昌 on 2019/3/9.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//


// The jump game 2 is earlier than jump game 1
// already solved it, but still trying to rewrite it again

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    bool canJump(vector<int>& nums) {
        if(nums.size()<=1)
            return true;
        
        int ptr = 0;
        bool reach = true;
        
        while(ptr < nums.size()-1){
            int choice = nums[ptr];
            int farest = 0;
            int next = -1;
            for(int i=1;i<=choice;i++){
                if(ptr+i>=nums.size()-1){
                    next = i;
                    break;
                }
                if(nums[ptr+i] + i> farest){
                    farest = nums[ptr+i]+i;
                    next = i;
                }
            }
            
            if(next==-1){
                reach = false;
                break;
            }
            
            ptr += next;
        }
        
        return reach;
    }
};

int main(int argc, const char * argv[]) {
    
    vector<int> nums{5,9,3,2,1,0,2,3,3,1,0,0};
    Solution s;
    bool ans = s.canJump(nums);
    if(ans)
        cout << "pass" << endl;
    else
        cout << "fail" << endl;
    
    
    return 0;
}
