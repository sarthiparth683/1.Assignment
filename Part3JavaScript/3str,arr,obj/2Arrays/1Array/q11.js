// 11595-07 & 08 Even & Odd Sum in Columns
function evenSumColumns(N, M, arr) {

    for (let i = 0; i < N; i++) {  // outer loop N is for Rows
        let sum = 0;              
        for (let j = 0; j < M; j++) {   // Inner loop M is for Columns
            // sum = sum + arr[i][j] ;  //this is sum of rows
            // sum = sum + arr[j][i] ;   // this is sum of columns
            // if (arr[j][i] % 2 == 0) {     // Even sum of columns
            if (arr[j][i] % 2 !== 0) {      // Odd sum of Columns
                sum = sum + arr[j][i];
            }
        }
        console.log(sum);
        // since N and M is same here so loop is not affected
    }

}

// Calling Function:-
evenSumColumns(3, 3,
    [[1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]]);

// Output odd sum columns
// 8
// 5
// 12

// Output even sum columns
// 4
// 10
// 6

