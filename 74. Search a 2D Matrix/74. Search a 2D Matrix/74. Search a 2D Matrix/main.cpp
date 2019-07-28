//
//  main.cpp
//  74. Search a 2D Matrix
//
//  Created by 黃耀昌 on 2019/7/28.
//  Copyright © 2019 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <string>

using namespace std;

class Solution {
public:
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        vector<int> firstElement;
        for(int i=0;i<matrix.size();i++){
            if(matrix[i].size() > 0)
                firstElement.push_back(matrix[i][0]);
        };

        // 在這邊原本使用lower_bound，但是在遇上target就是第一列第一個元入的時候，theRow會給-1，進而報錯
        int theRow = upper_bound(firstElement.begin(), firstElement.end(), target) - firstElement.begin() - 1;
        if(theRow < 0){
            return false;
        }
        

        int loc = lower_bound(matrix[theRow].begin(), matrix[theRow].end(), target) - matrix[theRow].begin();
        if(loc == matrix[theRow].size()){
            // cout << "no element" << endl;
            return false;
        }
        if(matrix[theRow][loc] == target){
            // cout << "found" << endl;
            return true;
        }
        else{
            // cout << "no elememt like " << matrix[theRow][loc] << endl;
        }

        
        return false;
    }
};

int main(int argc, const char * argv[]) {

    Solution s;
    // vector<vector<int>> testData{{1}};
    vector<vector<int>> testData{{2,3,4}, {5,6,7}, {8,9,10}};
    if(s.searchMatrix(testData, 1)){
        cout << "found" << endl;
    }
    else{
        cout << "not found" << endl;
    }

    
    return 0;
}
