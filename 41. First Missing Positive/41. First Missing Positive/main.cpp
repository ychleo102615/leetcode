//
//  main.cpp
//  41. First Missing Positive
//
//  Created by 黃耀昌 on 2019/2/23.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        
        // 在nums[0]的位置應該要出現1，如過沒有的話就是回傳此答案，有的話迴圈進行下去。
        for(int i=0;i<nums.size();i++){
            int thisNum = nums[i];
            while(isInside(nums, thisNum)){
                if(nums[thisNum-1] == thisNum)
                    break;
                
                int tmp = nums[thisNum-1];
                nums[thisNum-1] = thisNum;
                thisNum = tmp;
            }
        }
        
        for(int i=0;i<nums.size();i++){
            if(nums[i] != i+1)
                return i+1;
        }
        
        return nums.size()+1;
    }
    
    bool isInside(vector<int>& nums, int num){
        return num > 0 && num <= nums.size();
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<int> nums{};
    Solution s;
    cout << s.firstMissingPositive(nums) << endl;
    return 0;
}
