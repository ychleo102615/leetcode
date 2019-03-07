//
//  main.cpp
//  51. N-Queens
//
//  Created by 黃耀昌 on 2019/3/7.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    
    vector<vector<int>> ansRecord;
    
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> ans;
        vector<int> ansProto;
        ansRecord.clear();
        
        dfsQueen(ansProto, n);
        transcriptAnswer(ans, n);
        
        return ans;
    }
    
    void dfsQueen(vector<int>& ansProto, int &n){
        if(ansProto.size() == n){
            ansRecord.push_back(ansProto);
            return;
        }
//        if(ansProto.size() == 6){
//            int look;
//            cout << "7" << endl;
//        }
        
        int row = ansProto.size();
        for(int i=0;i<n;i++){
            if(ansProto.size() == 2){
                if(ansProto[1]==4)
                    int look = ansProto.size();
            }
            if(atkTest(ansProto, i, row)){
                ansProto.push_back(i);
                dfsQueen(ansProto, n);
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
//                double slope = (double)(y-i)/(x-ansProto[i]);
//                if(slope == 1 || slope == -1){
//                    return false;
//                }
                if(y-i == abs(x-ansProto[i])){
                    return false;
                }
            }
        }
        return true;
    }
    
    void transcriptAnswer(vector<vector<string>>& ans, int &n){
        
        int solutionNum = ansRecord.size();
        
        ans.assign(solutionNum, vector<string>(n,string(n,'.')));
        
        for(int i=0;i<solutionNum;i++){
            for(int j=0;j<n;j++){
                ans[i][j][ansRecord[i][j]] = 'Q';
            }
        }
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    s.solveNQueens(8);
    return 0;
}
