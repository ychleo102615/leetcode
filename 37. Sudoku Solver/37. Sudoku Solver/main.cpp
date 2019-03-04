//
//  main.cpp
//  37. Sudoku Solver
//
//  Created by 黃耀昌 on 2019/2/19.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    
    vector<vector<bool>> rowCandidate;
    vector<vector<bool>> colCandidate;
    vector<vector<bool>> celCandidate;
    bool reached;
    void solveSudoku(vector<vector<char>>& board) {
        
        rowCandidate.assign(9,vector<bool>(9,true));
        colCandidate.assign(9,vector<bool>(9,true));
        celCandidate.assign(9,vector<bool>(9,true));
        reached = false;
        int unsolved = 81;
        
        for(int order=0; order<81; order++){
            int i=order/9, j=order%9, g=getGrid(order);
            if(board[i][j] != '.'){
                int num = board[i][j] - '1';
                rowCandidate[i][num] = false;
                colCandidate[j][num] = false;
                celCandidate[g][num] = false;
                unsolved--;
            }
        }
        
        solve(0, board);
        return;
    }
    
    int getGrid(int order){
        return order/9/3*3 + order%9/3;
    }
    
    void solve(int order, vector<vector<char>>& board){
        if(reached)
            return;
        if(order == 81){
            reached = true;
            return;
        }
        
        int i=order/9, j=order%9, g=getGrid(order);
        if(board[i][j] == '.'){
            for(int n=0;n<9;n++){
                if(rowCandidate[i][n]&&colCandidate[j][n]&&celCandidate[g][n]){
                    board[i][j] = '1' + n;
                    rowCandidate[i][n] = false;
                    colCandidate[j][n] = false;
                    celCandidate[g][n] = false;
                    solve(order+1, board);
                    if(reached)
                        return;
                    board[i][j] = '.';
                    rowCandidate[i][n] = true;
                    colCandidate[j][n] = true;
                    celCandidate[g][n] = true;
                }
                
            }
        }
        else
            solve(order+1, board);
        
        return;
    }
};

class Solutionbb {
public:
    void solveSudoku(vector<vector<char>>& board) {
        
        vector<vector<bool>> rowCandidate(9,vector<bool>(9,true));
        vector<vector<bool>> colCandidate(9,vector<bool>(9,true));
        vector<vector<bool>> celCandidate(9,vector<bool>(9,true));
        int unsolved = 81;
        
        for(int order=0; order<81; order++){
            int i=order/9, j=order%9, g=getGrid(order);
            if(board[i][j] != '.'){
                int num = board[i][j] - '1';
                rowCandidate[i][num] = false;
                colCandidate[j][num] = false;
                celCandidate[g][num] = false;
                unsolved--;
            }
        }
        
        while(unsolved > 0){
            for(int o=0;o<81;o++){
                int i=o/9, j=o%9, g=getGrid(o);
                if(board[i][j] == '.'){
                    int sum=0, record;
                    for(int n=0;n<9;n++){
                        if(rowCandidate[i][n]&&colCandidate[j][n]&&celCandidate[g][n]){
                            sum++;
                            record = n;
                        }
                    }
                    if(sum==1){
                        // find solution
                        board[i][j] = '1' + record;
                        rowCandidate[i][record] = false;
                        colCandidate[j][record] = false;
                        celCandidate[g][record] = false;
                        unsolved--;
                    }
                    cout << sum << endl;
                }
            }
            //            unsolved = 0;
        }
    }
    
    int getGrid(int order){
        return order/9/3*3 + order%9/3;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
