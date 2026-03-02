let engine;
let input;
let lastTime = 0;
let fpsDisplay;

function init() {
    engine = new Engine('game-canvas');
    engine.resize(); // Compute dynamic sizing immediately

    input = new Input(engine);
    fpsDisplay = document.getElementById('fps-display');

    window.addEventListener('resize', () => {
        if (engine) engine.resize();
    });

    requestAnimationFrame(gameLoop);
}

function gameLoop(timestamp) {
    // Calculate dt
    const dt = timestamp - lastTime;

    // Lock to 60 FPS (approx 16.67ms per frame)
    if (dt >= Config.timeStep) {
        lastTime = timestamp - (dt % Config.timeStep); // Prevent drift

        if (engine.frameCount % 10 === 0 && dt > 0) {
            fpsDisplay.innerText = Math.round(1000 / dt);
        }

        engine.step();
        engine.render();
    }

    requestAnimationFrame(gameLoop);
}

window.onload = init;
