onmessage = function (e) {
    halfArr = e.data;
    console.log('Message received from main script');
    var workerResult = Math.max(...halfArr);
    console.log('Posting MAX back to main script');
    postMessage(workerResult);
}