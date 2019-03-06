//
//  main.cpp
//  48. Rotate Image
//
//  Created by 黃耀昌 on 2019/3/6.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

/*
 這題在之前面試也有被考到，興號當時有想出來。這題的思考方向我後來歸納出了兩種：
    一種是可以拿出一張紙，你實際旋轉看看就會知道，你可以先對角線對調成[j][i]這樣，在進行左右對調
    成[n-1-j][i]
 
    第二種是參考線性代數，或是座標上你要如何旋轉一個點，
    公式是(x', y') = (x*cos(pi/2) - y*sin(pi/2), x*sin(pi/2) + y*cos(pi/2)
    比較違反直覺地，程式相較於座標不一樣的地方在於：你要assign新值給本來的位置上，而新值的
    來源卻是反方向旋轉的地方
 */

#include <iostream>
#include <vector>

using namespace std;

class Solution {
public:
    void rotate(vector<vector<int>>& matrix) {
        vector<vector<int>> temp = matrix;
        int n = matrix.size();
        
        for(int i=0;i<n;i++){
            for(int j=0;j<n;j++){
                matrix[i][j] = temp[n-1-j][i];
            }
        }
        
        return;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
