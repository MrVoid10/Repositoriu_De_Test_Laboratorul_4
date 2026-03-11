function runTests(){

let results = [];

const tasks = ["task1","task2","task3"];

if(taskCount(tasks) === 3){
results.push("Test taskCount: PASSED");
}else{
results.push("Test taskCount: FAILED");
}

document.getElementById("testResults").innerHTML =
results.join("<br>");
}

runTests();