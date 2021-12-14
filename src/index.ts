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
    if (message.includes('Audio{')) {
        const message_parts: string[] = message.split('{');
        console.log(message_parts);
        const audio_file: string = message_parts?.pop() || "";
        const audio = WA.sound.loadSound(decodeURI(audio_file));
        audio.play;
    }
});
