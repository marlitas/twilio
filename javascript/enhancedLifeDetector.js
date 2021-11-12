function lifeDetector(status) {
    if(Number(status) === 0) {
        console.log('alive');
    } else if(Number(status) === 1) {
        console.log('flowering');
    } else if(Number(status) === 2){
        console.log('shedding');
    } else {
        console.log('other');
    }
}

lifeDetector(process.argv[2])