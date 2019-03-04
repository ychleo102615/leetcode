//
//  main.cpp
//  40. Combination Sum II
//
//  Created by 黃耀昌 on 2019/2/22.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution {
public:
    vector<vector<int>> ans;
    vector<bool> flag;
    vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
        ans.clear();
        flag.assign(candidates.size(), false);
        sort(candidates.begin(), candidates.end());
        
        findSum(target, candidates, 0);
        
        return ans;
    }
    
    void findSum(int target, vector<int>& candidates, int start){
        vector<int> combination;
        if(target==0){
            for(int i=0;i<flag.size();i++){
                if(flag[i]){
                    combination.push_back(candidates[i]);
                }
            }
            ans.push_back(combination);
            return;
        }
        else if(target<0){
            return;
        }
        else{
            for(int i=start;i<candidates.size();i++){
                if(i>0 && !flag[i-1] && candidates[i-1]==candidates[i])
                    continue;
                if(!flag[i]){
                    if(target-candidates[i]<0)
                        break;
                    flag[i] = true;
                    findSum(target-candidates[i], candidates, i);
                    flag[i] = false;
                }
            }
        }
        
        return;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<int> candidates{2,5,2,1,2};
    Solution s;
    vector<vector<int>> ans = s.combinationSum2(candidates, 5);
    return 0;
}
