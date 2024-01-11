function edgeScore(edges: number[]): number {
    let scores = Array(edges.length).fill(0);
    let biggest = 0;
    for (let i = 0; i < edges.length; i++) {
        scores[edges[i]] += i;
        if (scores[edges[i]] > scores[biggest]) {
            biggest = edges[i];
        } else if (scores[edges[i]] == scores[biggest]) {
            if (biggest > edges[i]) {
                biggest = edges[i];
            }
        }
    }
    return biggest;
};
