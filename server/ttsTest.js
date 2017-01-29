const WebSocket = require('ws');
const ws = new WebSocket('wss://ws.dev.nuance.com/?app_id=NMDPTRIAL_jacob149_dal_ca20170128124913&algorithm=key&app_key=8cefd363a11fa726efd3e768db9f5a863bb44087e0b2dede5708caffb2f15b3fe12ea2824e49a93d1c90a5f72fff7e6ab4bef19470d072c8d83dc78a2e22c90f');

ws.on('open', function open() {
    ws.send(JSON.stringify({
        'message': 'connect',
        'user_id': options.userId,
        'codec': options.codec || 'audio/x-speex;mode=wb',
        'device_id': deviceId,
        'phone_model': 'nuance_internal_mixjsapp',
        'phone_number': options.userId
    }));
});

ws.on('message', function incoming(data, flags) {
    console.log(data, flags);
});