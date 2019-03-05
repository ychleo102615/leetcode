//
//  main.cpp
//  47. Permutations II
//
//  Created by 黃耀昌 on 2019/3/5.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <map>

using namespace std;

class Solution {
public:
    vector<vector<int>> permuteUnique(vector<int>& nums) {
        
        int repeats = factorial(nums.size());
        
        map<int,int> myMap;
        for(int i=0;i<nums.size();i++){
            
            if(myMap.find(nums[i]) == myMap.end()){
                myMap.insert(make_pair(nums[i], 1));
            }
            else{
                myMap[nums[i]]++;
                repeats /= myMap[nums[i]];
            }
        }
        
        vector<vector<int>> ans;
        
        for(int i=0;i<repeats;i++){
            ans.push_back(nums);
            nextPermutation(nums);
        }
        
        return ans;
    }
    
    int factorial(int n)
    {
        // single line to find factorial
        return (n==1 || n==0) ? 1: n * factorial(n - 1);
    }
    
    void nextPermutation(vector<int>& nums) {
        
        int i;
        
        //首先，從尾部開始找尋已經屬於“最大數串狀態”的數串，範圍會是i至nums.size()-1。
        for(i=nums.size()-1; i>=1; i--){
            
            //進入次此判斷即代表i-1已經不是最大數串的狀態了，所以我們已經找到了i。
            if(nums[i-1] < nums[i]){
                
                //第二個步驟，是從此最大數串中，從尾部開始找尋第一個大於nums[i-1]的元素，並使他們交換。
                for(int j=nums.size()-1; j>=i; j--){
                    
                    //進入此判斷即為找到欲交換的元素了。如果找不到的話就代表說此數串從一開始就是最大狀態了。
                    if(nums[j]>nums[i-1]){
                        swap(nums[j], nums[i-1]);
                        break;
                    }
                }
                break;
            }
        }
        
        //最後一個步驟，就是把此最大數串顛倒過來，成為最小數串的狀態。到此結束，已經得到了下一個排列組合了。
        reverse(nums.begin()+i,nums.end());
        return;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    vector<int> nums{1,1,1,3,3,3};
    vector<vector<int>>ans = s.permuteUnique(nums);
    
    for(int i=0;i<ans.size();i++){
        cout << i << "th: ";
        for(int j=0;j<ans[i].size();j++){
            cout << ans[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
