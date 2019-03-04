//
//  main.cpp
//  19. removeFromLInkedList
//
//  Created by 黃耀昌 on 2019/2/2.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

struct ListNode {
    int val;
    ListNode *next;
    ListNode(int x) : val(x), next(NULL) {}
};

class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode *ptrPioneer = head, *ptrNth = head, *parent = NULL;
        
        for(int i=0;i<n;i++){
            ptrPioneer = ptrPioneer->next;
        }
        while(ptrPioneer!=NULL){
            ptrPioneer = ptrPioneer->next;
            parent = ptrNth;
            ptrNth = ptrNth->next;
        }
        if(parent == NULL){
            head = ptrNth->next;
        }
        else{
            parent->next = ptrNth->next;
        }
        
        return head;
    }
};
int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}
