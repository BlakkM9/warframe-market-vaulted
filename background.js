// Key is relic id, value is always true
const UNVAULTED_RELICS = {
    // Lith 
    "lith_t4_relic": true,
    "lith_t6_relic": true,
    "lith_p5_relic": true,
    "lith_c7_relic": true,
    "lith_a4_relic": true,
    "lith_k6_relic": true,
    "lith_b8_relic": true,
    "lith_g4_relic": true,
    "lith_i1_relic": true,
    "lith_c8_relic": true,

    // Meso 
    "meso_r4_relic": true,
    "meso_p4_relic": true,
    "meso_n11_relic": true,
    "meso_c6_relic": true,
    "meso_z4_relic": true,
    "meso_d6_relic": true,
    "meso_i1_relic": true,
    "meso_t5_relic": true,
    "meso_p5_relic": true,

    // Neo 
    "neo_t4_relic": true,
    "neo_d3_relic": true,
    "neo_p2_relic": true,
    "neo_z8_relic": true,
    "neo_v9_relic": true,
    "neo_v10_relic": true,
    "neo_o1_relic": true,
    "neo_k3_relic": true,
    "neo_n15_relic": true,
    "neo_b7_relic": true,
    "neo_a5_relic": true,

    // Axi 
    "axi_a5_relic": true,
    "axi_g5_relic": true,
    "axi_t7_relic": true,
    "axi_n7_relic": true,
    "axi_o5_relic": true,
    "axi_i1_relic": true,
    "axi_a2_relic": true,
    "axi_s8_relic": true,
    "axi_c6_relic": true,
    "axi_v8_relic": true,
    "axi_v10_relic": true,
    "axi_a13_relic": true,
    "axi_g6_relic": true,
}

function requestListener(requestDetails) {
    // Ignore orders only requests
    if (!requestDetails.url.endsWith("orders?include=item")) { return; }

    // Check vault status for current item
    console.log("Completed request: " + requestDetails.url);

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