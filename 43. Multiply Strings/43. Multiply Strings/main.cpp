//
//  main.cpp
//  43. Multiply Strings
//
//  Created by 黃耀昌 on 2019/2/25.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Solution {
public:
    string multiplyMyVersion(string num1, string num2) {
        
//        return strMulChar(num1, num2[0]);
//        return strAdd(num1, num2);
        
        string base = strMulChar(num1, num2[num2.length()-1]);
        for(int i=1;i<num2.length();i++){
            string temp = strMulChar(num1, num2[num2.length()-1-i]) + string(i,'0');
            base = strAdd(base, temp);
        }
        while(base.length()>1 && base[0]=='0'){
            base = base.substr(1);
        }
        
        return base;
    }
    
    string strAdd(string base, string num){
        
        int carry = 0;
        int temp;
        for(int i=0;i<base.length() || i<num.length();i++){
            if(i >= base.length()){
                if(carry == 0){
                    string look = num.substr(num.length()-i);
                    base = num.substr(0,num.length()-i) + base;
                    break;
                }
                else{
                    temp = (num[num.length()-1-i]-'0') + carry;
                    base = char(temp%10+'0') + base;
                    carry = temp/10;
                }
            }
            else if(i >= num.length()){
                if(carry == 0){
                    break;
                }
                else{
                    temp = (base[base.length()-1-i]-'0') + carry;
                    base[base.length()-1-i] = temp%10+'0';
                    carry = temp/10;
                }
                
            }
            else{
                temp = (base[base.length()-1-i]-'0') + (num[num.length()-1-i]-'0') + carry;
                base[base.length()-1-i] = temp%10 + '0';
                carry = temp/10;
            }
        }
        while(carry != 0){
            base = (char(carry%10 + '0')) + base;
            carry /= 10;
        }
        
        return base;
    }
    
    string strMulChar(string str, char c){
        
        string ans;
        
        int carry = 0;
        for(int i=str.length()-1;i>=0;i--){
            int num = charMultiply(str[i], c) + carry;
            carry = num/10;
            ans = char(num%10 + '0') + ans;
        }
        while(carry != 0){
            ans = char(carry%10 + '0') + ans;
            carry /= 10;
        }
        
        while(ans.length()>1 && ans[0]=='0'){
            ans = ans.substr(1);
        }
        
        return ans;
    }
    
    int charMultiply(char a, char b){
        return (a-'0')*(b-'0');
    }
    
    // 這是討論區裡別人的程式碼，我覺得這比我寫得好一百倍，就留下來作為筆記吧
    string multiply(string num1, string num2) {
        string zero = "0";
        if(num1 == zero || num2 == zero)
            return zero;
        string mul = "";
        int size1 = num1.size(), size2 = num2.size(), c = 0;
        vector<int> count(size1 + size2 - 1, 0);
        for(int i = 0; i < size1; i ++)
            for(int j = 0; j < size2; j ++)
                count[i + j] += (num1[i] - '0') * (num2[j] - '0');
        
        for(auto i = count.rbegin(); i != count.rend(); i ++){
            int tmp = *i + c;
            mul.insert(mul.begin(), tmp % 10 + '0');
            c = tmp / 10;
        }
        if(c)
            mul.insert(mul.begin(), c + '0');
        return mul;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    Solution s;
    cout << s.multiply("12341234", "123") << endl;
    return 0;
}
