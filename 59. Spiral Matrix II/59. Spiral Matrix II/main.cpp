//
//  main.cpp
//  59. Spiral Matrix II
//
//  Created by 黃耀昌 on 2019/3/12.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<vector<int>> generateMatrix(int n) {
        vector<vector<int>> ans(n,vector<int>(n,-1));
        
        int m_head = 0, m_end = n;
        int n_head = 0, n_end = n;
        
        int state = 0;
        int col = 0, row = 0;
        int offset = 1;
        
        while(m_head<m_end && n_head<n_end){
            switch (state) {
                case 0:
                    for(;col<n_end;col++){
//                        ans.push_back(matrix[row][col]);
                        ans[row][col] = offset++;
                    }
                    m_head++;
                    col--;
                    row++;
                    break;
                    
                case 1:
                    for(;row<m_end;row++){
//                        ans.push_back(matrix[row][col]);
                        ans[row][col] = offset++;
                    }
                    n_end--;
                    row--;
                    col--;
                    break;
                    
                case 2:
                    for(;col>=n_head;col--){
//                        ans.push_back(matrix[row][col]);
                        ans[row][col] = offset++;
                    }
                    m_end--;
                    col++;
                    row--;
                    break;
                    
                case 3:
                    for(;row>=m_head;row--){
//                        ans.push_back(matrix[row][col]);
                        ans[row][col] = offset++;
                    }
                    n_head++;
                    row++;
                    col++;
                    break;
                    
                default:
                    break;
            }
            
            state++;
            state %= 4;
        }
        return ans;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    s.generateMatrix(0);
    return 0;
}
