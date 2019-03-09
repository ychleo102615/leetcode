//
//  main.cpp
//  57. Insert Interval
//  and 56. Merge Intervals
//
//  Created by 黃耀昌 on 2019/3/9.
//  Copyright © 2019年 黃耀昌. All rights reserved.
//

#include <iostream>
#include <vector>

using namespace std;

struct Interval {
    int start;
    int end;
    Interval() : start(0), end(0) {}
    Interval(int s, int e) : start(s), end(e) {}
};

class Solution {
public:
    
    vector<Interval> merge(vector<Interval>& intervals){
        
        vector<Interval> ans;
        
        for(int i=0;i<intervals.size();i++){
            ans = insert(ans, intervals[i]);
        }
        
        return ans;
    }
    
    vector<Interval> insert(vector<Interval>& intervals, Interval newInterval) {
        
        /*
         *  reference version: faster in problem 56
         *
         */
        bool done = false;
        for(int i=0;i<intervals.size();i++){
            if(isOverlaped(intervals[i], newInterval)){
                joinIntervals(intervals[i], newInterval);
                intervals.erase(intervals.begin()+i);
                i--;
                
            }
            else{
                if(newInterval.start < intervals[i].start){
                    intervals.insert(intervals.begin()+i, newInterval);
                    done = true;
                    break;
                }
            }
        }
        if(!done){
            intervals.push_back(newInterval);
        }

        return intervals;
        
        
        
        /*
         *      copy version, faster in problem 57
         *
         */
//        vector<Interval> ans;
//        int index = 0;
        
//        while(index < intervals.size()){
//            if(isOverlaped(intervals[index], newInterval)){
//                joinIntervals(intervals[index], newInterval);
//                index++;
//            }
//            else if(newInterval.start < intervals[index].start){
//                ans.push_back(newInterval);
//                done = true;
//                break;
//            }
//            else{
//                ans.push_back(intervals[index]);
//                index++;
//            }
//        }
//
//        copy(intervals.begin()+index, intervals.end(), back_inserter(ans));
//        if(!done){
//            ans.push_back(newInterval);
//        }
//
//        return ans;
        
    }
    
    void joinIntervals(Interval& origin, Interval& newInterval){
        newInterval.start = min(origin.start, newInterval.start);
        newInterval.end = max(origin.end, newInterval.end);
    }
    
    bool isOverlaped(Interval& origin, Interval& newInterval){
        return origin.end >= newInterval.start && newInterval.end >= origin.start;
    }
};

int main(int argc, const char * argv[]) {
    // insert code here...
    std::cout << "Hello, World!\n";
    vector<Interval> intervals;
    intervals.push_back(Interval(1,3));
    intervals.push_back(Interval(2,6));
//    intervals.push_back(Interval(6,7));
    intervals.push_back(Interval(8,10));
    intervals.push_back(Interval(15,18));
    Solution s;
//    s.insert(intervals, Interval(4, 8));
    s.merge(intervals);
    return 0;
}
