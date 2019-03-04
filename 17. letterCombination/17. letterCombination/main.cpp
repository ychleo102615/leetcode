//
//  main.cpp
//  17. letterCombination
//
//  Created by 黃耀昌 on 2019/1/31.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    string ds;
    int vols[10] = {0,0,3,3,3,3,3,4,3,4};
    vector<string> phone = {"abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    vector<string> ans;
    
    vector<string> letterCombinations(string digits) {
        ans.clear();
        ds = digits;
        vector<int> ptrs(digits.length(), 0);
        if(digits.length()==0)
            return ans;
        getDeeper(ptrs, 0);
        
        return ans;
    }
    
    void getDeeper(vector<int> &ptrs, int deepNess){
        if(deepNess >= ds.length()){
            string s;
            for(int i=0;i<ds.length();i++){
                s += phone[ds[i]-'2'][ptrs[i]];
            }
            ans.push_back(s);
            return;
        }
        int thisButton = ds[deepNess]-'2';
        int choicesNumInThisButton = phone[thisButton].length();
        for(int i=0;i<choicesNumInThisButton;i++){
            getDeeper(ptrs, deepNess+1);
            ptrs[deepNess] = (ptrs[deepNess]+1) % choicesNumInThisButton;
        }
        
        return;
    }
};
int main(int argc, const char * argv[]) {
    Solution s;
    vector<string> ansmain = s.letterCombinations("");
    for(int i=0;i<ansmain.size();i++){
        cout << ansmain[i] << endl;
    }
    return 0;
}
