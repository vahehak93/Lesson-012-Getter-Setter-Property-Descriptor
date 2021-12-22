/*The input is object, which `keys` are student's names and `values` are `array` of their scores. Find the student with the best average score.

```javascript
getBestStudent({
  John: [100, 90, 80],
  Bob: [100, 70, 80],
});
// OUTPUT => "John"

// John's avg = 90
// Bob's avg = 83.33*/


const student_score= {
    John: [100, 90, 80],
    Bob: [100, 70, 80],
};

let getBestStudent = function(obj) {
    let arr = [];
    
    for (let i of Object.values(obj)) {
        let aver = i.reduce((a,b) => (a+b))
        arr.push(aver/i.length)
    }
    let aver_max_score = Math.max(...arr);
    let max_scored_student = arr.indexOf(aver_max_score)
    
    return `${Object.keys(student_score)[max_scored_student]} : ${aver_max_score}`
};  

console.log(getBestStudent(student_score));
