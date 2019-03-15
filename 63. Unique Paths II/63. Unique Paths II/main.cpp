//
//  main.cpp
//  63. Unique Paths II
//
//  Created by 黃耀昌 on 2019/3/15.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    int uniquePathsWithObstacles(vector<vector<int>>& obstacleGrid) {
        if(obstacleGrid.size()<=0 || obstacleGrid[0].size()<=0)
            return 0;
        
        int n = obstacleGrid.size(), m = obstacleGrid[0].size();
        vector<vector<int>> ans(n,vector<int>(m, -1));
        if(!obstacleGrid[n-1][m-1])
            ans[n-1][m-1] = 1;
        else
            ans[n-1][m-1] = 0;
        
        findPath(obstacleGrid, ans, 0, 0);
        return ans[0][0];
    }
    
    int findPath(vector<vector<int>>& obstacleGrid, vector<vector<int>>& ans, int m, int n){
        if(n>=obstacleGrid.size() || m>=obstacleGrid[0].size()){
            return 0;
        }
        else if(ans[n][m] == -1){
            if(obstacleGrid[n][m] == 1){
                ans[n][m] = 0;
            }
            else{
                ans[n][m] = findPath(obstacleGrid, ans, m+1, n) + findPath(obstacleGrid, ans, m, n+1);
            }
        }
        return ans[n][m];
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    vector<vector<int>> table{{0,0,0},{0,1,0},{0,0,0},{0,0,0},{0,1,0},{0,0,0}};
    cout << s.uniquePathsWithObstacles(table) << endl;;
    return 0;
}
