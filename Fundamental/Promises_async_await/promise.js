let promise = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve("done!"), 1000);
    resolve(123);
    // reject();
});
// promise.then((value) => { console.log('value :>> ', value)})
// promise.
//     then((result) => console.log('result :>> ', result))
//     .catch((error) => console.log('error :>> ', error))
//     .finally(() => console.log('Done'))