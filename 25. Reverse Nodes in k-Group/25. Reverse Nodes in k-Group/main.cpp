//
//  main.cpp
//  25. Reverse Nodes in k-Group
//
//  Created by 黃耀昌 on 2019/2/8.
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
    ListNode* reverseKGroup(ListNode* head, int k) {
        
//        ListNode unusedEntity(INT_MIN);
        ListNode *ptr = head;
//        ListNode *last = &unusedEntity;
        ListNode *last = NULL;
//        last->next = head;
        ListNode *tempNext;
        ListNode *ans = head;
        
        if(k<=1)
            return ans;
        
        while(ptr != NULL){
            
            for(int i=0;i<k;i++){
                if(ptr == NULL)
                    return ans;
                ptr = ptr->next;
            }
            
            for(int i=0;i<k;i++){
                tempNext = head->next;
                head->next = ptr;
                ptr = head;
                head = tempNext;
            }

            if(last == NULL){
                last = ans;
                ans = ptr;
            }
            else{
                tempNext = last->next;
                last->next = ptr;
                last = tempNext;
            }
            ptr = head;
        }

        return ans;
    }
};
int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
