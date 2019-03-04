//
//  main.cpp
//  31. Next Permutation
//
//  Created by 黃耀昌 on 2019/2/12.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

/*
 
 我猜這題會是之後很容易再次考到的題目，像是現在我重新回顧第31題的原因就是在第46題又遇到了。
 雖然當初在寫31題的時候已經苦思一整天並且搞懂了，但是現在又得回來複習，幸好還看得懂。
 現在為了以後任何時候回來看東能夠看懂，我想下大量地註解，雖然這就軟體設計可能不是件好事，這代表
 程式會很難維護，不過我想第31題的內容我己經寫得很完美了，應該不會再改動。
 
 */

class Solution {
public:
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

int factorial(int n)
{
    // single line to find factorial
    return (n==1 || n==0) ? 1: n * factorial(n - 1);
}
int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<int> nums{4,3,2,1};
    Solution s;
    int f=factorial(nums.size());
    for(int k=0;k<f;k++){
        for(int i=0;i<nums.size();i++){
            cout << nums[i] << " ";
        }
        cout << endl;
        s.nextPermutation(nums);
    }
    
    return 0;
}
