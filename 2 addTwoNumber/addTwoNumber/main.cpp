//
//  main.cpp
//  addTwoNumber
//
//  Created by 黃耀昌 on 2019/1/22.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>

struct ListNode {
     int val;
     ListNode *next;
     ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        int carryTemp=0;
        ListNode* ptr = NULL;
        ListNode* lastNode = NULL;
        ListNode* temp;
        int digit;
        
        while(l1 != NULL || l2 != NULL || carryTemp != 0){
            
            digit = carryTemp;
            if(l1!=NULL){
                digit+=l1->val;
                l1 = l1->next;
            }
            if(l2!=NULL){
                digit+=l2->val;
                l2 = l2->next;
            }
            
            temp = new ListNode(digit%10);
            
            if(ptr == NULL)
                ptr = temp;
            else if(lastNode != NULL)
                lastNode->next = temp;
            
            lastNode = temp;
            carryTemp = digit/10;
        }
        
        return ptr;
    }
};


int main(int argc, const char * argv[]) {
    
    ListNode* l1 = new ListNode(5);
    ListNode* l2 = new ListNode(5);
//    l2->next = new ListNode(3);
    Solution s;
    
    int digit = 0;
    int step = 0;
    ListNode* temp = s.addTwoNumbers(l1, l2);
    while(temp!=NULL){
        int t = temp->val;
        for(int i=0;i<step;i++){
            t *= 10;
        }
        
        digit += t;
        step++;
        temp = temp->next;
    }
    
    std::cout << digit << std::endl;
    
    return 0;
}
