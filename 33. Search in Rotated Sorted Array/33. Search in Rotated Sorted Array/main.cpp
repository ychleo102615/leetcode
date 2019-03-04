//
//  main.cpp
//  33. Search in Rotated Sorted Array
//
//  Created by 黃耀昌 on 2019/2/17.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    int search(vector<int>& nums, int target) {
        
        int size = nums.size();
        if(size<=0)
            return -1;
        int l=0, r=size-1;
        while(r-l>1){
            int m = (r+l)/2;
            if(nums[l]>nums[m]){
                r=m;
            }
            else if(nums[m]>nums[r]){
                l=m;
            }
            else{
                r=0;
                break;
            }
        }
        if(nums[l]<nums[r]){
            r=0;
        }
        
        
        int lt=0, rt=size-1;
        while(rt>lt){
            int m=(lt+rt)/2;
            if(target<=nums[shiftIn(m, r, size)]){
                rt=m;
            }
            else{
                lt=m+1;
            }
        }
        int ans = shiftIn(lt, r, size);
//        cout << nums[lt] << " " << nums[rt] << endl;
//
//        cout << "This should be target: " << nums[ans] << endl;
        
        if(nums[ans] != target)
            return -1;
        else{
            return ans;
        }
        
    }

    
    int shiftIn(int shiftee, int &shift, int &len){
        return (shiftee + shift)%len;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    vector<int> nums{4,2};
    Solution s;
    cout << s.search(nums, 4) << endl;
    return 0;
}
