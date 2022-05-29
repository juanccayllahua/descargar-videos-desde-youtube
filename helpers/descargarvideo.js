const fs = require('fs');
const ytdl = require('ytdl-core');
const ProgressBar = require('progress');
let bar;
//https://gist.github.com/kostasx/6ebfe030d44c59662c4721e2336a7cd4


const descargarVideo = async (urldescarga, pathDesacarga, nameFileIn) => {
    let statusDescarga = false;
    return new Promise((resolve, reject) => { 
        ytdl(urldescarga).on('response', function (res) {
            
            var len = parseInt(res.headers['content-length'], 10);

            console.log('longitudes . ', len);

            console.log();
            var bar = new ProgressBar('  downloading [:bar] :rate/bps :percent :etas', {
                complete: '=',
                incomplete: ' ',
                width: 20,
                total: len
            });

            res.on('data', function (chunk) {
                bar.tick(chunk.length);
            });

            res.on('end', function () {
                resolve(statusDescarga);
                console.log('\n');
            });

        }).pipe(fs.createWriteStream(`${pathDesacarga}${nameFileIn}`));
    });
}

module.exports = {
    descargarVideo
}

