Stream = require('node-rtsp-stream')
var express = require('express');
var app = express();

let rtspURLArray = [
// 'rtsp://dsteam:Password1!@192.168.0.6:554/Streaming/channels/0101'
'rtsp://dsteam:Password1!@103.249.43.66:1554'
// 'rtmp://192.168.0.42/live/vod1'


  // 'rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa',
  // 'rtsp://170.93.143.139/rtplive/470011e600ef003a004ee33696235daa'
]

for (let i = 0 ; i < rtspURLArray.length ; i++){
  let portNumber = 3000 + i ;
  let stream = new Stream({
    name: 'name' + i,
    streamUrl: rtspURLArray[i],
    wsPort: portNumber,
    ffmpegOptions: {
      '-stats': '',
      '-r': 30

    }
  })
}




var express = require('express');
var app = express();
app.use('/test', express.static('public'));
app.listen(9000, function () {
  console.log('Example app listening on port 3000!');
});