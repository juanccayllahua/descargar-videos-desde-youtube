const fs = require('fs'); 

const calcularsizefile = async (path, fileName) => {

    return new Promise((resolve, reject) => {
        console.log('calculando peso de archivo...');

        const { size: file2Size } = fs.statSync(`${path}${fileName}`);

        const fileSizeKB = (file2Size * 0.001);
        const fileSizeMB = (fileSizeKB * 0.001).toFixed(2);
        console.log(`peso :  ${fileSizeMB} MB`);
        resolve(fileSizeMB)


    })


}
module.exports = {
    calcularsizefile
}