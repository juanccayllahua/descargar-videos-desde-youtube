const ffmpeg = require('ffmpeg');

const extraerAudio = async (pathDesacarga, nameFileIn, pathSalid, nameFileOut) => {
  let convertToAudio = false;
  return new Promise((resolve, reject) => {
    try {
      var process = new ffmpeg(`${pathDesacarga}${nameFileIn}`);
      console.log('Convirtiendo a mp3');

      process.then(function (video) {
        // Callback mode
        video.fnExtractSoundToMP3(`${pathSalid}${nameFileOut}`, function (error, file) {
          if (!error) {
            console.log('archivo audio generado: ' + file);
            convertToAudio = true;
            resolve(convertToAudio);
          } else {
            console.log('error ', error);
          }
        });

      }, function (err) {
        console.log('Error: ' + err);
      });
    } catch (e) {
      console.log(e.code);
      console.log(e.msg);
      reject(e);
    }
  })
}

module.exports = {
  extraerAudio
}
