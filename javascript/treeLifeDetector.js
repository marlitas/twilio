function treeDetector(arg) {
    if(Number(arg) === 0) {
        console.log('alive');
    } else {
        console.log('other');
    };
}

treeDetector(process.argv[2])