const fs = require('fs');

function tsp_ls(distance_matrix) {
    const len = distance_matrix.length;
    if ((len == 0) || (len == 1)) {
        return 0; 
    }
    let current = Array.from({ length: len }, (_, i) => i);
    for (let i = current.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        let tmp = current[i];
        current[i] = current[j];
        current[j] = tmp;
    }

    function calcLen(route) {
        let dist = 0;
        for (let i = 0; i < route.length - 1; i++) {
            dist += distance_matrix[route[i]][route[i + 1]];
        }
        return dist;
    }

    function swap(route, i, k) {
        while (i < k) {
            let tmp = route[i];
            route[i] = route[k];
            route[k] = tmp;
            i++;
            k--;
        }
    }

    function copy(route) {
        let newWay = [];
        for (let i = 0; i < route.length; i++) {
            newWay.push(route[i]);
        }
        return newWay;
    }
    const maxIt = len * len;
    let min = calcLen(current);
    let bestRoute = copy(current);
    for (let iteration = 0; iteration < maxIt; iteration++) {
        let i = Math.floor(Math.random() * (len - 1));
        let k = Math.floor(Math.random() * (len - i - 1)) + i + 1;
        const currentLength = calcLen(current);
        swap(current, i, k);
        const newLength = calcLen(current);
        if (newLength >= currentLength) {
            swap(current, i, k);
        }
        if (newLength < min) {
            min = newLength;
            bestRoute = copy(current);
        }
    }

    return min;
}

function tsp_hk(distance_matrix) {
    const n = distance_matrix.length;
    if ((n == 0) || (n == 1)) {
        return 0;
    }
    const mem = Array.from({ length: n }, () => ({}));

    function heldKarpEq(mask, pos) {
        if (mask == (1 << n) -1){
            return 0;
        }
        if (mem[pos][mask] != undefined){
            return mem[pos][mask];
        }
        let minCost = Infinity; 
        for (let nxt = 0; nxt < n; nxt++){
            if (mask & (1 << nxt)){
                continue;
            } 
            const newMask = mask | (1 << nxt);
            const cost = distance_matrix[pos][nxt] + heldKarpEq(newMask, nxt);
            minCost = Math.min(minCost, cost);
        }
        mem[pos][mask] = minCost;
        return minCost;
    }
    let result = Infinity; 
    for (let start = 0; start < n; start++) {
        result = Math.min(result, heldKarpEq(1 << start, start));
    }
    return result;
}

function compare(distMat) {
    const startTimeHK = Date.now();
    const hkAns = tsp_hk(distMat);
    const endTimeHK = Date.now();

    const startTimeLS = Date.now();
    const lsAns = tsp_ls(distMat);
    const endTimeLS = Date.now();

    return {
        HeldKarp: { result: hkAns, time: endTimeHK - startTimeHK },
        LocalSearch: { result: lsAns, time: endTimeLS - startTimeLS },
    };
}
