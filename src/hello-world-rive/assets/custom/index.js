const RiveHandler = function () {


    let riveInstance;

    const init = function () {

        const layout = new rive.Layout({
            fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
            alignment: rive.Alignment.Center,
        });

        const riveCanvas = document.getElementById("rive-canvas");

        // Load the rive instance from the source file
        riveInstance = new rive.Rive({
            src: "assets/rive/azure_rocket.riv",
            // Or the path to a public Rive asset
            // src: '/public/example.riv',
            canvas: riveCanvas,
            layout: layout, // This is optional. Provides additional layout control.
            autoplay: true,
            stateMachines: "RocketLife",
            onLoad: () => {
                riveInstance.resizeDrawingSurfaceToCanvas();
            },
        });


    };

    return {
        init: () => {
            init();
        },
        clean: () => {
            if (riveInstance) {
                riveInstance.cleanup();
            }
        }
    };

}();


document.addEventListener("DOMContentLoaded", (event) => {
    RiveHandler.init();
});

window.addEventListener("beforeunload", function (e) {
    RiveHandler.clean();
    return null;
});