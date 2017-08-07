// Test file for chayns typings

import {chayns} from "./index";

chayns.register({
    strictMode: false,
    appName: 'chayns-typings-test',
});

chayns.ready.then(data => {
    return data;
}).catch(err => {
    return err;
});

chayns.dialog.alert('Chayns Typings', 'Test chayns typings');
