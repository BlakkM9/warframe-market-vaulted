if (typeof browser === "undefined") {
    var browser = chrome;
}

function requestListener(requestDetails) {
    // Ignore orders only requests
    if (!requestDetails.url.endsWith("orders?include=item")) { return; }

    browser.tabs.executeScript({ file: "vaulted-tinter.js" });
}

browser.webRequest.onCompleted.addListener(
    requestListener,
    { urls: ["https://api.warframe.market/v1/items/*"] }
);


// Wiki console scraping for unvaulted relics
// var str = "";

// str += "// Lith \n"
// Object.values($("#mw-customcollapsible-UnvaultedRelicList > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > ul:nth-child(1) > li")).forEach((item) => {
//     str += extractRelicId(item);
// });

// str += "\n// Meso \n"
// Object.values($("#mw-customcollapsible-UnvaultedRelicList > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(2) > ul:nth-child(1) > li")).forEach((item) => {
//     str += extractRelicId(item);
// });

// str += "\n// Neo \n"
// Object.values($("#mw-customcollapsible-UnvaultedRelicList > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(3) > ul:nth-child(1) > li")).forEach((item) => {
//     str += extractRelicId(item);
// });

// str += "\n// Axi \n"
// Object.values($("#mw-customcollapsible-UnvaultedRelicList > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(4) > ul:nth-child(1) > li")).forEach((item) => {
//     str += extractRelicId(item);
// });

// function extractRelicId(item) {
//     try {
//         return "\"" + item.innerText.replace("\n", "").replace(" ", "_").toLowerCase() + "_relic" + "\": true" + ",\n"
//         //return "TEST"
//     } catch(e) {}

//     return "";
// }

// console.log(str);