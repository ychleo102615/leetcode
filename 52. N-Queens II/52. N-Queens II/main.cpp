//
//  main.cpp
//  52. N-Queens II
//
//  Created by 黃耀昌 on 2019/3/7.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int totalNQueens(int n) {
        
        vector<vector<string>> ans;
        vector<int> ansProto;
        int solutionNum = 0;
        
        dfsQueen(ansProto, n, solutionNum);
        return solutionNum;
    }
    
    void dfsQueen(vector<int>& ansProto, int &n, int &solutionNum){
        if(ansProto.size() == n){
            solutionNum++;
            return;
        }
        
        int row = ansProto.size();
        for(int i=0;i<n;i++){
            
            if(atkTest(ansProto, i, row)){
                ansProto.push_back(i);
                dfsQueen(ansProto, n, solutionNum);
                ansProto.pop_back();
            }
        }
    }
    
    bool atkTest(vector<int>& ansProto, int x, int y){
        for(int i=0;i<ansProto.size();i++){
            if(y==i){
                return false;
            }
            else if(x==ansProto[i]){
                return false;
            }
            else{
                double slope = (double)(y-i)/(x-ansProto[i]);
                if(slope == 1 || slope == -1){
                    return false;
                }
            }
        }
        return true;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    cout << s.totalNQueens(10) << endl;
    return 0;
}
