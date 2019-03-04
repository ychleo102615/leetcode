//
//  main.cpp
//  42. Trapping Rain Water
//
//  Created by 黃耀昌 on 2019/2/24.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>
#include <stack>

using namespace std;

class Solution {
public:
    int trap(vector<int>& height) {
        
        if(height.size() < 3){
            return 0;
        }
        
        stack<int> lastHills;
        int vol = 0;
        
        for(int i=1;i<height.size();i++){
            
            if(height[i] < height[i-1]){
                lastHills.push(i-1);
            }
            if(!lastHills.empty() && i - lastHills.top() > 1){
                
                while(!lastHills.empty()){
                    if(height[i] <= height[lastHills.top()]){
                        vol += calculateVolumeAndFill(lastHills.top(), i, height);
                        if(height[lastHills.top()]<=height[i])
                            lastHills.pop();
                        
                        break;
                    }
                    else{
                        vol += calculateVolumeAndFill(lastHills.top(), i, height);
                        if(height[lastHills.top()]<=height[i])
                            lastHills.pop();
                    }
                }
                
            }
        }
        
        return vol;
    }
    
    int calculateVolumeAndFill(int l, int r, vector<int>& height){
        int lowTall = min(height[r],height[l]);
        int vol = lowTall * (r-l-1);
        
        for(int i=l+1;i<r;i++){
            vol -= height[i];
            height[i] = lowTall;
        }
        
        return vol;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    
    vector<int> height{4,2,0,3,2,5};
    Solution s;
    cout << s.trap(height) << endl;
    return 0;
}
