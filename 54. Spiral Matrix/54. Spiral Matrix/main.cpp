//
//  main.cpp
//  54. Spiral Matrix
//
//  Created by 黃耀昌 on 2019/3/9.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        vector<int> ans;
        if(matrix.size()<=0)
            return ans;
        
        int m_head = 0, m_end = matrix.size();
        int n_head = 0, n_end = matrix[0].size();
        
        int state = 0;
        int col = 0, row = 0;
        
        while(m_head<m_end && n_head<n_end){
            switch (state) {
                case 0:
                    for(;col<n_end;col++){
                        ans.push_back(matrix[row][col]);
                    }
                    m_head++;
                    col--;
                    row++;
                    break;
                    
                case 1:
                    for(;row<m_end;row++){
                        ans.push_back(matrix[row][col]);
                    }
                    n_end--;
                    row--;
                    col--;
                    break;
                    
                case 2:
                    for(;col>=n_head;col--){
                        ans.push_back(matrix[row][col]);
                    }
                    m_end--;
                    col++;
                    row--;
                    break;
                    
                case 3:
                    for(;row>=m_head;row--){
                        ans.push_back(matrix[row][col]);
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
    vector<vector<int>> nums{{1,2,3,4},{5,6,7,8},{9,10,11,12},{13,14,15,16}};
    Solution s;
    s.spiralOrder(nums);
    return 0;
}
