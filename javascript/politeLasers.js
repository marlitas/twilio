function getLaserSetting(arg) {
    if (arg === 'please') {
        return 'OFF';
    } else {
        return 'ON';
    }

}

const currentSetting = getLaserSetting(process.argv[2]);