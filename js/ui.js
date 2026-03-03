class LabUI {

    constructor() {
        this.equipmentLayer = document.getElementById("equipment-layer");
        this.init();
    }

    init() {
        this.addTransformer();
        this.addVariac();
        this.addVoltmeter();
    }

    createEquipment(id, imgSrc, top, left, width) {
        const element = document.createElement("img");
        element.src = imgSrc;
        element.id = id;
        element.style.position = "absolute";
        element.style.top = top + "px";
        element.style.left = left + "px";
        element.style.width = width + "px";
        element.style.filter = "drop-shadow(0 15px 20px rgba(0,0,0,0.6))";

        this.equipmentLayer.appendChild(element);
    }

    addTransformer() {
        this.createEquipment(
            "transformer",
            "assets/transformer.png",
            250,
            500,
            250
        );
    }

    addVariac() {
        this.createEquipment(
            "variac",
            "assets/variac.png",
            430,
            200,
            200
        );
    }

    addVoltmeter() {
        this.createEquipment(
            "voltmeter",
            "assets/voltmeter.png",
            100,
            200,
            180
        );
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new LabUI();
});
