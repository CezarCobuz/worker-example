function generateRandomNumber() {
    return Math.random();
}

function generateBigArray() {
    let bigArr = []
    for (i = 0; i < 500000; i++) {
        bigArr[i] = generateRandomNumber();
    }
    return bigArr;
}

function main() {
    let finalMax = 0;
    let bArr = generateBigArray();
    let max = Math.max(...bArr);
    console.log(bArr);
    console.log('Max from main= ', max);

    let half1 = bArr.slice(0,(bArr.length/2));
    let half2 = bArr.slice(bArr.slice/2);

    let myWorker1 = new Worker('worker.js');
    let myWorker2 = new Worker('worker.js');
    let c = 0;

    myWorker1.postMessage(half1);
    console.log('half1 posted to worker1');
    myWorker2.postMessage(half2);
    console.log('half2 posted to worker2');

    myWorker1.onmessage = work;

    myWorker2.onmessage = work;

    function work(e) {
        c++;
        let max1 = e.data;
        console.log('Message received from worker, max1:', max1);
        if (finalMax < max1) {
            finalMax = max1;
        }
        if (c == 2) {
            console.log('Final MAX from workers:', finalMax);
        }
      }
}

main();
