let arr1 = [1,2,3];
for (let i = 0; i <=10; i++) {
    arr1.push(i);
    console.log(arr1[i])
}
console.log(arr1)
console.log(arr1[2])

//------------------------------------------------------
let table = [4, 8, 12, 16, 20, 24, 28, 32, 36, 40];
for (let i = 0; i < table.length; i++) {
    // console.log(table[i] / 2);
};

// Finding Maximum scores
var scores = [87, 92, 78, 94, 89];
var maxScore = scores[0];
var minScore = scores[0];
for (var i = 1; i < scores.length; i++) {
    // console.log(scores[i])
    if (scores[i] > maxScore) {
        maxScore = scores[i];
    }
    if (scores[i] < minScore) {
        minScore = scores[i];
    }
};
console.log("Maximum Score:", maxScore);
console.log("Minimum Score:", minScore);


