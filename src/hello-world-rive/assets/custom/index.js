const RiveHandler = function () {


    let riveInstance;

    const init = function () {

        // Html elements
        const riveCanvas = document.querySelector("#rive-canvas");
        const startButton = document.querySelector("#startButton");
        const stopButton = document.querySelector("#stopButton");

        // Rive setup
        const layout = new rive.Layout({
            fit: rive.Fit.FitWidth, // Change to: rive.Fit.Contain, or Cover
            alignment: rive.Alignment.Center,
        });

        const stateMachine = "RocketLife";

        // Load the rive instance from the source file
        riveInstance = new rive.Rive({
            src: "assets/rive/azure_rocket.riv",
            // Or the path to a public Rive asset
            // src: '/public/example.riv',
            canvas: riveCanvas,
            layout: layout, // This is optional. Provides additional layout control.
            autoplay: true,
            stateMachines: stateMachine,
            onLoad: () => {

                // Resise the surface
                riveInstance.resizeDrawingSurfaceToCanvas();

                //
                // Get triggers to manage the stateMachine (see rive project)
                //
                const stateMachineInputs = riveInstance.stateMachineInputs(stateMachine);

                const startTrigger = stateMachineInputs.find((_) => _.name === 'StartFlying')
                const stopTrigger = stateMachineInputs.find((_) => _.name === 'StopFlying')


                startButton.addEventListener('click', (event) => {
                    startTrigger.fire();
                });

                stopButton.addEventListener('click', (event) => {
                    stopTrigger.fire();
                });


                // Create an intersection observer instance to detect when canvas is in view
                const observer = new IntersectionObserver((entries, observer) => {

                    entries.forEach((entry) => {

                        // If the canvas element is in view, play the state machine
                        // if (entry.isIntersecting) {
                        //     r.play("State Machine 1");
                        //     stateMachineInput.value = true;
                        //     // Stop observing the canvas element
                        //     // observer.unobserve(entry.target);
                        // } else {
                        //     // Pause the state machine if its out of view again if you want
                        //     r.pause("State Machine 1");
                        // }

                        // when you're done, unobserve the canvas
                        // observer.unobserve(entry.target);

                    });
                });
                observer.observe(riveCanvas);


                // Play the machine
                riveInstance.play(stateMachine);


            },
        });

        // Resize the drawing surface if the window resizes
        window.addEventListener(
            "resize",
            () => {
                riveInstance.resizeDrawingSurfaceToCanvas();
            },
            false
        );


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