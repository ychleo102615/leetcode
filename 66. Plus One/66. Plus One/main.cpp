//
//  main.cpp
//  66. Plus One
//
//  Created by 黃耀昌 on 2019/3/22.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        int len = digits.size()-1;
        int carry = 1;
        while(len>=0){
            if(digits[len] == 9){
                digits[len] = 0;
            }
            else{
                digits[len]++;
                carry = 0;
                break;
            }
            len--;
        }
        if(carry>0){
            digits.insert(digits.begin(), carry);
        }
        return digits;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<int> nums{5,4,3,3,3};
    Solution s;
    s.plusOne(nums);
    for(int i=0;i<nums.size();i++){
        cout << nums[i];
    }
    cout << endl;
    return 0;
}
