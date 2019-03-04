//
//  main.cpp
//  26. Remove Duplicates from Sorted Array
//
//  Created by 黃耀昌 on 2019/2/9.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        int count = 0;
//        int last;
        if(nums.size()>0){
            count = 1;
//            last = nums[0];
        }
        
        for(int i=1;i<nums.size();i++){
            if(nums[count-1] != nums[i]){
                nums[count] = nums[i];
                count++;
//                last = nums[i];
            }
        }
        
        return count;
    }
};


int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    vector<int> nums = {1,1,2};
    Solution s;
    cout << s.removeDuplicates(nums) << endl;
    return 0;
}
