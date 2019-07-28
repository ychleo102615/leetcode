class Solution {
public:
    void setZeroes(vector<vector<int>>& matrix) {
        int row = matrix.size();
        // cout << row << endl;
        // if (row <= 1){
        //     return;
        // }
        int col = matrix[0].size();
        
        int colRecord = 1;
        int rowRecord = 1;
        
        for(int i = 0; i< row; i++){
            for(int j = 0; j < col; j++){
                // matrix[0][0]不能作為旗幟
                if (i == 0 || j == 0){
                    if(i == 0){
                        // cout << "pass i 0 " << endl;
                        if(matrix[0][j] == 0)
                            rowRecord = 0;
                    }
                    if(j == 0){
                        // cout << "pass j 0" << endl;
                        if(matrix[i][0] == 0)
                            colRecord = 0;
                    }
                    continue;
                }
                
                
                // if(matrix[i][0] == 0 || matrix[0][j] == 0){
                //     // cout << "pass flag" << endl;
                //     continue;
                // }
                else if(matrix[i][j] == 0){
                    // cout << "pass" << endl;
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        for(int i = 1; i < row; i++){
            if(matrix[i][0] == 0){
                for(int j = 0; j < col; j++){
                    matrix[i][j] = 0;
                }
            }
        }
        
        for(int j = 1; j < col; j++){
            if(matrix[0][j] == 0){
                for(int i = 0; i < row; i++){
                    matrix[i][j] = 0;
                }
            }
        }
        
        // last check
        if(rowRecord == 0){
            for(int j = 0; j < col; j++)
                matrix[0][j] = 0;
        }
        if(colRecord == 0){
            for(int i = 0; i < row; i++)
                matrix[i][0] = 0;
        }
    }
};