//
//  main.cpp
//  36. Valid Sudoku
//
//  Created by 黃耀昌 on 2019/2/18.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    bool isValidSudoku(vector<vector<char>>& board) {
        for(int i=0;i<board.size();i++){
            vector<bool> occupied(board[i].size(), false);
            for(int j=0;j<board[i].size();j++){
                
//                if(board[i][j] == '.'){
//                    continue;
//                }
//                else{
//                    if(occupied[board[i][j] - '1'])
//                        return false;
//                    occupied[board[i][j] - '1'] = true;
//                }
                if(isOccupied(i, j, occupied, board))
                    return false;
            }
        }
        for(int i=0;i<board.size();i++){
            vector<bool> occupied(board[i].size(), false);
            for(int j=0;j<board[i].size();j++){
                
//                if(board[j][i] == '.'){
//                    continue;
//                }
//                else{
//                    if(occupied[board[j][i] - '1'])
//                        return false;
//                    occupied[board[j][i] - '1'] = true;
//                }
                if(isOccupied(j, i, occupied, board))
                    return false;
            }
        }
        
        for(int iOut=0;iOut<9;iOut+=3){
            for(int jOut=0;jOut<9;jOut+=3){
                if(!visitSudoku(board, iOut, jOut)){
                    return false;
                }
            }
        }
        
        return true;
    }
    
    bool visitSudoku(vector<vector<char>>& board, int io, int jo){
        vector<bool> occupied(board[0].size(), false);
        for(int i=0;i<3;i++){
            for(int j=0;j<3;j++){
//                if(board[i+io][j+jo] == '.'){
//                    continue;
//                }
//                else{
//                    if(occupied[board[i+io][j+jo] - '1'])
//                        return false;
//                    occupied[board[i+io][j+jo] - '1'] = true;
//                }
                if(isOccupied(i+io, j+jo, occupied, board))
                    return false;
            }
        }
        return true;
    }
    
    bool isOccupied(int i, int j, vector<bool> &occupied, vector<vector<char>>& board){
        if(board[i][j] == '.'){
            return false;
        }
        else{
            if(occupied[board[i][j] - '1'])
                return true;
            occupied[board[i][j] - '1'] = true;
        }
        return false;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
