//
//  main.cpp
//  64. Minimum Path Sum
//
//  Created by 黃耀昌 on 2019/3/17.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int minPathSum(vector<vector<int>>& grid) {
        if(grid.size()<=0 || grid[0].size()<=0)
            return 0;
        
        int n = grid.size();
        int m = grid[0].size();
        vector<vector<int>> minPathTable(n, vector<int>(m, -1));
        minPathTable[n-1][m-1] = grid[n-1][m-1];
        return pickPath(grid, minPathTable, 0, 0);
    }
    
    int pickPath(vector<vector<int>>& grid, vector<vector<int>>& table, int n, int m){
        if(n >= grid.size() || m >= grid[0].size()){
            return INT_MAX;
        }
        else if(table[n][m] == -1){
            table[n][m] = grid[n][m] + min(pickPath(grid, table, n+1, m), pickPath(grid, table, n, m+1));
        }
        return table[n][m];
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
