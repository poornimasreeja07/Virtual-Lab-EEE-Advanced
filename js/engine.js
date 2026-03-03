class LabEngine {

    constructor() {
        this.voltage = 0;
        this.init();
    }

    init() {
        console.log("Lab Engine Initialized");
        this.setupVoltageControl();
    }

    setupVoltageControl() {
        const slider = document.getElementById("voltageSlider");
        const display = document.getElementById("voltageDisplay");

        slider.addEventListener("input", (e) => {
            this.voltage = parseInt(e.target.value);
            display.innerText = this.voltage + " V";

            this.updateSimulation();
        });
    }

    updateSimulation() {
        console.log("Voltage Updated:", this.voltage);
    }
}

window.addEventListener("DOMContentLoaded", () => {
    new LabEngine();
});
