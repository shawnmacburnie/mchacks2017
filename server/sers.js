var speech = require('@google-cloud/speech')({
    projectId: 'mchacks-2017-157108',
    keyFilename: './googlecode.json'
});

// Detect the speech in an audio file. 
// speech.recognize('./audio.raw', {
//   encoding: 'LINEAR16',
//   sampleRate: 16000
// }, function(err, transcript) {
//   // transcript = 'how old is the Brooklyn Bridge' 
// });

// The name of the audio file to transcribe
// const fileName = './resources/test3.lpcm';

// The audio file's encoding and sample rate
const options = {
    encoding: 'LINEAR16',
    sampleRate: 16000

};

module.exports = function () {
    // Detects speech in the audio file
   fileName = '/Users/aa/Library/Developer/CoreSimulator/Devices/9A1AF458-8DD5-4BFB-B98C-50455F9B8189/data/Containers/Data/Application/3FB9C2D5-53D8-49FA-9B89-B30048D4F12F/Documents/test.lpcm';
   speech.recognize(fileName, options)
        .then((results) => {
            const transcription = results[0];
            cal(results[0]);
            console.log(`Transcription: ${transcription}`);
        });
    // [END speech_quickstart]
}
