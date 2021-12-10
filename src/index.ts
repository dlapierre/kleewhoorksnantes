/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";
import {Popup} from "@workadventure/iframe-api-typings/Api/iframe/Ui/Popup";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let currentPopup: any = undefined;
const today = new Date();
const time = today.getHours() + ":" + today.getMinutes();

// WA.room.onEnterZone('clock', () => {
//     currentPopup =  WA.ui.openPopup("clockPopup","It's " + time,[]);
// })

let imprimantePopup : Popup;

WA.room.onEnterLayer('imprimanteZone').subscribe(()=>{

    imprimantePopup = WA.ui.openPopup("imprimanteMessage", "Il n''y a plus de papier !", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("imprimanteZone").subscribe(() => {
    if(imprimantePopup){
        imprimantePopup.close();
    }

})

WA.room.onEnterLayer('clock').subscribe(()=>{

    WA.chat.sendChatMessage(time, 'Mr Robot');
});

// WA.room.onLeaveZone('clock', closePopUp)
// WA.room.onLeaveLayer('clock').subscribe(()=>{closePopUp()});
// function closePopUp(){
//     if (currentPopup !== undefined) {
//         currentPopup.close();
//         currentPopup = undefined;
//     }
// }
