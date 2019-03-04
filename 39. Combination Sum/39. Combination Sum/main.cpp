//
//  main.cpp
//  39. Combination Sum
//
//  Created by 黃耀昌 on 2019/2/21.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <map>
#include <set>
#include <algorithm>

using namespace std;

class Solution {
    typedef vector<int> sortedInts;
public:
    map<int,vector<sortedInts>> table;
    vector<sortedInts> combinationSum(vector<int>& candidates, int target) {
        table.clear();
        
        return getSumSet(candidates, target);
    }
    
    vector<sortedInts> getSumSet(vector<int>& candidates, int target){
        vector<sortedInts> ans;
        if(target<0)
            return ans;
        if(target==0){
            ans.push_back(sortedInts());
            return ans;
        }
        
        if(table.find(target) == table.end()){
            
            for(int i=0;i<candidates.size();i++){
                vector<sortedInts> tmp = getSumSet(candidates, target-candidates[i]);
                for(int j=0;j<tmp.size();j++){
//                    tmp[j].insert(candidates[i]);
                    insert(tmp[j], candidates[i]);
                    bool add = true;
                    for(int k=0;k<ans.size();k++){
                        if(ans[k]==tmp[j])
                            add = false;
                    }
                    if(add)
                        ans.push_back(tmp[j]);
                }
            }
            table.insert(make_pair(target, ans));
        }
        
        return table[target];
    }
    
    void insert(sortedInts &ints, int value){
        sortedInts::iterator it = lower_bound(ints.begin(), ints.end(), value);
        ints.insert(it, value);
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<int> can{2,3,6};
    Solution s;
    vector<vector<int>> ans = s.combinationSum(can, 6);
    return 0;
}
