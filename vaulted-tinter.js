setTimeout(() => {
    let UNVAULTED_RELICS = {
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

    let dropLocations = document.querySelectorAll(".item__drop__locations li");

    // Check if prime part is obtainable from any relic
    let partVaulted = true;

    // Tint all drop locations that are vaulted relics
    dropLocations.forEach((item) => {
        let dropId = item.querySelector("a").getAttribute("href");
        dropId = dropId.substr(dropId.lastIndexOf("/") + 1);

        
        // Is relic?
        if (dropId.endsWith("relic")) {

            // Is vaulted?
            if (!UNVAULTED_RELICS[dropId]) {
                item.querySelector("span").style.color = "#444";
            } else {
                partVaulted = false;
            }
        }
    });

    // Tint prime part if vaulted otherwise reset color
    let itemName = document.querySelector(".item__name-highlight");
    if (partVaulted) {
        console.log(itemName);
        itemName.style.color = "#444";
    } else {
        console.log("part not vaulted!");
        itemName.style.color = "";
    }
}, 25);