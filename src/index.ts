/// <reference path="../node_modules/@workadventure/iframe-api-typings/iframe_api.d.ts" />

import {bootstrapExtra} from "@workadventure/scripting-api-extra";
import {Popup} from "@workadventure/iframe-api-typings/Api/iframe/Ui/Popup";

// The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure.
bootstrapExtra().catch(e => console.error(e));

let imprimantePopup : Popup;
let indice1 : Popup;
let indice2 : Popup;
let indice3 : Popup;
let indice4 : Popup;
let indice5 : Popup;
let indice6 : Popup;
let papierImprimante : Popup;

WA.room.onEnterLayer('imprimanteZone').subscribe(()=>{

    imprimantePopup = WA.ui.openPopup("imprimanteMessage", "Il n'y a plus de papier !", [{
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

// indice 1

WA.room.onEnterLayer('zoneI1').subscribe(()=>{

    indice1 = WA.ui.openPopup("indice1", "1", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("zoneI1").subscribe(() => {
    if(indice1){
        indice1.close();
    }

})
//indice1
WA.room.onEnterLayer('zoneI2').subscribe(()=>{

    indice2 = WA.ui.openPopup("indice2", "2", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("zoneI2").subscribe(() => {
    if(indice2){
        indice2.close();
    }

})

//indice 3

WA.room.onEnterLayer('zoneI3').subscribe(()=>{

    indice3 = WA.ui.openPopup("indice3", "MDP 6 caractères", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("zoneI3").subscribe(() => {
    if(indice3){
        indice3.close();
    }

})

//indice 4

WA.room.onEnterLayer('zoneI4').subscribe(()=>{

    indice4 = WA.ui.openPopup("indice4", "4", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("zoneI4").subscribe(() => {
    if(indice4){
        indice4.close();
    }

})

// indice 5
WA.room.onEnterLayer('zoneI5').subscribe(()=>{

    indice5 = WA.ui.openPopup("indice5", "A puis B", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("zoneI5").subscribe(() => {
    if(indice5){
        indice5.close();
    }

})

//indice 6

WA.room.onEnterLayer('zoneI6').subscribe(()=>{

    indice6 = WA.ui.openPopup("indice6", "6", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("zoneI6").subscribe(() => {
    if(indice6){
        indice6.close();
    }

})

//papier impriamnte

WA.room.onEnterLayer('papierImprimanteZone').subscribe(()=>{

    papierImprimante = WA.ui.openPopup("papierImprimante", "Tu ne vas pas mettre ce papier dans l'imprimante quand même !", [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
    }]);
});

WA.room.onLeaveLayer("papierImprimanteZone").subscribe(() => {
    if(papierImprimante){
        papierImprimante.close();
    }

})



WA.room.onEnterLayer('clock').subscribe(()=>{
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    WA.chat.sendChatMessage(time, 'Mr Robot');
});


