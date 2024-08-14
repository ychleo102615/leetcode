class Twitter {
    private tweets: number[][];
    private followMatrix: Map<number, Map<number, boolean>>;
    constructor() {
        this.tweets = [];
        this.followMatrix = new Map();
    }

    postTweet(userId: number, tweetId: number): void {
        this.tweets.splice(0, 0, [userId, tweetId]);
    }

    getNewsFeed(userId: number): number[] {
        const map = this.followMatrix.get(userId);
        const shouldShow = function(thisUser: number): boolean {
            if (userId == thisUser) {
                return true;
            }
            if (map == undefined) {
                return false;
            }
            return map.has(thisUser);
        }
        return this.tweets.filter(tuple => shouldShow(tuple[0])).map(tuple => tuple[1]).slice(0, 10);
    }

    follow(followerId: number, followeeId: number): void {
        if (this.followMatrix.has(followerId)) {
            this.followMatrix.get(followerId)!.set(followeeId, true);
        } else {
            this.followMatrix.set(followerId, new Map([
                [followeeId, true]
            ]));
        }
    }

    unfollow(followerId: number, followeeId: number): void {
        if (this.followMatrix.has(followerId)) {
            this.followMatrix.get(followerId)!.delete(followeeId);
        }
    }
}

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
