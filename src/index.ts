/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />
//
//
import {bootstrapExtra} from "@workadventure/scripting-api-extra";

bootstrapExtra().catch((e: any) => {
    console.error(e);
});


console.log('Hello world!');
