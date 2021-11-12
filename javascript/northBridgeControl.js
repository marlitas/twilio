function extendBridge(arg) {
    if(arg === 'EXTEND'){
        console.log('Extending bridge!');
    };
}

extendBridge(process.argv[2]);