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

module.exports = function (callback) {
    // Detects speech in the audio file
   fileName = '/Users/shawn/Library/Developer/CoreSimulator/Devices/115BA51F-DB3E-4989-A056-2F564B71CE7E/data/Containers/Data/Application/74972594-1539-49BB-9698-71571D28EB65/Documents/test.lpcm';
   speech.recognize(fileName, options)
        .catch(err => {
            console.log(err);
        })
        .then((results) => {
            const transcription = results[0];
            callback(results[0]);
            console.log(`Transcription: ${transcription}`);
        });
    // [END speech_quickstart]
}
