//
//  main.cpp
//  18. 4sum
//
//  Created by 黃耀昌 on 2019/2/1.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> fourSum(vector<int>& nums, int target) {
        vector<vector<int>> ans;
        if(nums.size()<4)
            return ans;

        sort(nums.begin(), nums.end());
        
        for(int i=0;i<nums.size()-3;i++){
            for(int j=i+1;j<nums.size()-2;j++){
                int lp = j+1, hp = nums.size()-1;
                int sum12 = nums[i]+nums[j];
                while(lp<hp){
                    int sum = sum12+nums[lp]+nums[hp];
                    if(sum == target){
                        ans.push_back(vector<int>{nums[i],nums[j],nums[lp],nums[hp]});
                        while(nums[lp] == nums[lp+1])lp++;
                        while(nums[hp] == nums[hp-1])hp--;
                        lp++;
                        hp--;
                    }
                    else if(sum < target){
                        lp++;
                    }
                    else{
                        hp--;
                    }
                }
                while(nums[j] == nums[j+1])
                    j++;
            }
            while(nums[i] == nums[i+1])
                i++;
        }
        
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    
    vector<int> nums{1, 0, -1, 0, -2, 2};
    Solution s;
    vector<vector<int>> ans = s.fourSum(nums, 0);
    for(int i=0;i<ans.size();i++){
        for(int j=0;j<ans[i].size();j++)
            cout << ans[i][j] << " ";
        
        cout << endl;
    }
    return 0;
}
