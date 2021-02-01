const fs = require('fs');

//  READING FILES

// fs.readFile('./docs/blog1.txt', (err, data) => { //asyncronous
//     if (err) {
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log('last line');

// WRITING FILES

// fs.writeFile('./docs/blog1.txt', 'hello, bello', () => {
//     console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'hello, bello', () => {
//     console.log('file was written');
// });

// DIRECTORIES
if (!fs.existsSync('./assets')) { // we check to see if 'assets' folder already exists
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    })
} else {
    fs.rmdir('./assets', (err) => { //we remove the folder 'assets'
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// DELETING FILES

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file deleted');
    })
}