class LabUI {

    constructor() {
        this.equipmentLayer = document.getElementById("equipment-layer");
        this.loadEquipment();
    }

    loadEquipment() {

        this.createEquipment(
            "transformer",
            "assets/transformer.jpg",
            220,
            420,
            380
        );

        this.createEquipment(
            "variac",
            "assets/variac.jpg",
            400,
            60,
            220
        );

        this.createEquipment(
            "voltmeter",
            "assets/voltmeter.jpg",
            60,
            60,
            200
        );

        this.createEquipment(
            "ammeter",
            "assets/ammeter.jpg",
            60,
            300,
            200
        );

        this.createEquipment(
            "wattmeter",
            "assets/wattmeter.jpg",
            60,
            550,
            220
        );
    }

    createEquipment(id, imgSrc, top, left, width) {

        const img = document.createElement("img");

        img.src = imgSrc;
        img.id = id;

        img.style.position = "absolute";
        img.style.top = top + "px";
        img.style.left = left + "px";
        img.style.width = width + "px";
        img.style.borderRadius = "6px";
        img.style.boxShadow = "0 10px 25px rgba(0,0,0,0.5)";

        this.equipmentLayer.appendChild(img);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new LabUI();
});
