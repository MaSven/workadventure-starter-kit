/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
//
//
import { bootstrapExtra } from "@workadventure/scripting-api-extra";

bootstrapExtra().catch((e: any) => {
    console.error(e);
});


console.log('Hello world!');

WA.chat.sendChatMessage('Hello world', 'Mr Robot');


WA.chat.onChatMessage((message: string) => {
    if (message.includes('Audio:')) {
        const message_parts: string[] = message.split(':', 2);
        console.log(message_parts);
        const audio_file = decodeURI(message_parts[1]);
        const audio = WA.sound.loadSound(audio_file);
        const config = {
            volume: 0.5,
            loop: false,
            rate: 1,
            detune: 1,
            delay: 0,
            seek: 0,
            mute: false
        };
        audio.play(config);
    }
});
