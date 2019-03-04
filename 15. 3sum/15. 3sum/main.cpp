//
//  main.cpp
//  15. 3sum
//
//  Created by 黃耀昌 on 2019/1/30.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> threeSum(vector<int>& nums) {
        vector<vector<int>> ans;
        if(nums.size()<3)
            return ans;
        
        sort(nums.begin(), nums.end());
        for(int i=0;i<nums.size()-2;i++){
            int lp = i+1, hp = nums.size()-1;
            int s;
            while(lp<hp){
                s = nums[lp] + nums[hp];
                if(s == -nums[i]){
                    ans.push_back({nums[i], nums[lp], nums[hp]});
                    while(nums[lp] == nums[lp+1])lp++;
                    while(nums[hp] == nums[hp-1])hp--;
                    lp++;
                    hp--;
                }
                else if(s < -nums[i]){
                    lp++;
                }
                else{
                    hp--;
                }
            }
            while(nums[i] == nums[i+1]){
                i++;
            }
//                for(int j=i+1;j<nums.size()-1;j++){
//                    if(j==i+1 || nums[j-1]!=nums[j]){
//                        int target = 0 - nums[i] - nums[j];
//                        if(*lower_bound(nums.begin()+j+1, nums.end(), target) == target){
//                            ans.push_back(vector<int> {nums[i], nums[j], target});
//                        }
//                    }
//                }
        }
        
        
        return ans;
    }
};
int main(int argc, const char * argv[]) {
    
    Solution s;
    
    vector<int> nums{1,-1,-1,0};
    vector<vector<int>> ans = s.threeSum(nums);
    
    for(int i=0;i<ans.size();i++){
        cout << i << ": ";
        for(int j=0;j<ans[i].size();j++)
            cout << ans[i][j] << " ";
        cout << endl;
    }
    
    return 0;
}
