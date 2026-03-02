const Config = {
    // The actual size of the simulation grid (number of pixels)
    GRID_WIDTH: 200,
    GRID_HEIGHT: 150,
    
    // How much to scale up the canvas visually (e.g. scale 4 means each grid pixel is 4x4 on screen)
    SCALE: 4,
    
    // Target Framerate (e.g., 30 or 60 for smooth, 12 for retro)
    TARGET_FPS: 60,
    
    // Time step between physics frames (ms)
    timeStep: 1000 / 60, // calculate automatically based on TARGET_FPS later if needed -> wait, let's keep it simple: we aim for requestAnimationFrame speed

    // Colors mapping (using integer format for fast TypedArray manipulation: AABBGGRR)
    // Little-endian format used by ImageData on most systems: Alpha is highest byte, Red is lowest in typical array representation, wait...
    // Actually, Uint32Array on little endian: 0xAABBGGRR.
    // e.g. opaque red (#FF0000) -> 0xFF0000FF
    // We'll define a helper to construct these safely.
};

// Helper to create 32-bit color integer from r, g, b
function rgb(r, g, b, a = 255) {
    return (a << 24) | (b << 16) | (g << 8) | r;
}
