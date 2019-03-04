//
//  main.cpp
//  34. Find First and Last Position of Element in Sorted Array
//
//  Created by 黃耀昌 on 2019/2/18.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> ans;
        ans.push_back(-1);
        ans.push_back(-1);
        
        cout << nums.end()-nums.begin() << endl;
        
        if(nums.size()<=0){
            return ans;
        }
        if(nums.size()==1){
            if(nums[0]==target){
                ans.clear();
                ans.push_back(0);
                ans.push_back(0);
            }
            return ans;
        }
        
        vector<int>::iterator front, rear;
        front = lower_bound(nums.begin(), nums.end(), target);
        rear = upper_bound(nums.begin(), nums.end(), target);
        
//        cout << *front << " " << *rear << endl;
        
        if(front != nums.end() && *front == target){
            ans.clear();
            ans.push_back(front-nums.begin());
            ans.push_back(rear-nums.begin()-1);
        }
        
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<int> nums{2,2};
    vector<int> ans;
    Solution s;
    ans = s.searchRange(nums, 3);
    cout << ans.at(0) << " " << ans.at(1) << endl;
    return 0;
}
