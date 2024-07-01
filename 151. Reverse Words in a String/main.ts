function reverseWords(s: string): string {
    // const splits = s.split(/\s+/).filter(x => x != "");
    // console.log(splits)
    // return splits.reverse().join(" ");
    return s.trim().split(/\s+/).reverse().join(" ");
};
