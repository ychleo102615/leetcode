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

    // 記憶體佔用多，速度較快
    bool searchMatrix_(vector<vector<int>>& matrix, int target) {
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
            return false;
        }
        if(matrix[theRow][loc] == target){
            return true;
        }
        
        return false;
    }


    // 第二種嘗試，記憶體佔用較少，但花的時間更多，可能是呼叫的關係吧
    bool searchMatrix(vector<vector<int>>& matrix, int target) {
        if(matrix.size() == 0)
            return false;
        
        int row = findRow(matrix, target);
        if(row < 0)
            return false;

        int left = 0, right = matrix[row].size() - 1;
        while(left <= right){
            int mid = (left + right) / 2;
            if(matrix[row][mid] == target){
                return true;
            }
            else if(matrix[row][mid] < target){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }

        return false;
    }

    int findRow(vector<vector<int>>& matrix, int target){
        int left = 0, right = matrix.size() - 1;
        if(matrix[0].size() == 0)
            return -1;

        while(right >= left){
            int mid = (left + right) / 2;
            if(matrix[mid][0] == target){
                return mid;
            }
            else if(matrix[mid][0] < target){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            }
        }

        return (left + right) / 2;
    }

    // 重新思考二元搜尋法的細節處理
    bool test(vector<int>& matrix, int target) {

        int left = 0, right = matrix.size() - 1;
        while(right >= left){
            cout << "-------This turn:";
            cout << "left and right: " << left << " " << right << endl;

            int mid = (left + right) / 2;
            cout << "mid: " << mid  << " value: " << matrix[mid] << endl;
            if(matrix[mid] == target){
                cout << "find" << endl;
                return mid;
            }
            else if(matrix[mid] > target){
                cout << "get left part" << endl;
                right = mid - 1;
            }
            else{
                cout << "get right part" << endl;
                left = mid + 1;
            }
        }
        
        cout << "left and right: " << left << " " << right << endl;
        cout << "did'nt find" << endl;
        
        return false;
    }
};

int main(int argc, const char * argv[]) {

    Solution s;
    // vector<vector<int>> testData{{1}};
    // vector<vector<int>> testData{{2,3,4}, {5,6,7}, {8,9,10}};
    // if(s.searchMatrix(testData, 1)){
    //     cout << "found" << endl;
    // }
    // else{
    //     cout << "not found" << endl;
    // }


    vector<int> array = {1,2,3,4,5,96,97,98,99,100};
    s.test(array, 50);
    
    return 0;
}
