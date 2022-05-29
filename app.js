
const { calcularsizefile } = require('./common/common');
const { descargarVideo } = require('./helpers/descargarvideo');
const { extraerAudio } = require('./helpers/extraerAudio');
const ytdl = require('ytdl-core');
// No te des porvencido Dios siempre esta con nosotros.
const pathDesacarga = 'download/';
const pathSalid = 'out/';

const urldescarga = 'https://www.youtube.com/watch?v=_ovdm2yX4MA';
const nameFileIn = 'levels.mp4';
const nameFileOut = 'levels.mp3';

const active = 0;

const main = async () => {
  if (active == 1) {
    const status = await descargarVideo(urldescarga, pathDesacarga, nameFileIn);
    console.log('Hola video descargado formato mp4');
    const statusconvert = await extraerAudio(pathDesacarga, nameFileIn, pathSalid, nameFileOut);
    console.log('Hola Video Convertido en mp3');
    const filesize = await calcularsizefile(pathSalid, nameFileOut);
  } else {
    console.log('Para habilitar la descarga actualizar el dato de la constante active a valor 1');

  }
}
main();

