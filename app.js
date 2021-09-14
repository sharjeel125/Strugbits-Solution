
//---------------------------------------------------------------Solution #1----------------------------------------------------------------------

var matrixExample = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

function diagnolSum(matrix) {
    var sumDiagonals = { PrimaryDiagnol: 0, SecondaryDiagnol: 0 },
        matrixLength = matrix.length;

    for (var i = 0; i < matrixLength; i++) {
        sumDiagonals.PrimaryDiagnol += matrix[i][i];
        sumDiagonals.SecondaryDiagnol += matrix[i][matrixLength - i - 1];
    }
    return sumDiagonals
}

console.log(diagnolSum(matrixExample))



//---------------------------------------------------------------Solution #2----------------------------------------------------------------------


var lst1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var lst2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

for (var i = 0; i < lst1.length; i++) {
    console.log(lst1[i] * lst2[i]);
}


//---------------------------------------------------------------Solution #3----------------------------------------------------------------------


var obj = {
    parent_name: 'Father',
    child1: 'Sumair',

};
var arr = ["Hamza", "Shahbaz", "Jahanzaib", "Junaid", "Tabish", "Ahtisham", "Asghar"]
const finalObj = { ...arr, ...obj }
console.log(finalObj)

//---------------------------------------------------------------Solution #4----------------------------------------------------------------------



fetch(' https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => console.log(data));



