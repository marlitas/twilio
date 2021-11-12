function water(status, dryness) {
    if(Number(status) === 0 && Number(dryness) > 10) {
        console.log('WATER');
    };
}

water(process.argv[2], process.argv[3])