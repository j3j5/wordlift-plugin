window.addEventListener("load", function () {
    const startBtn = document.getElementById("wl-start-btn");
    const stopBtn = document.getElementById("wl-stop-btn");
    const restPath = _wlTaskPageSettings['rest_path'];

    const updateProgressBar = function () {
        wp.apiRequest({path: restPath}).success(
            (data) => {
                document.querySelector(".wl-task__progress__bar").style.width =
                    (data.index * 100.0) / data.count + "%";

                if ("started" === data.state) {
                    if (!startBtn.classList.contains("hidden"))
                        startBtn.classList.add("hidden");
                    if (stopBtn.classList.contains("hidden"))
                        stopBtn.classList.remove("hidden");
                } else {
                    if (startBtn.classList.contains("hidden"))
                        startBtn.classList.remove("hidden");
                    if (!stopBtn.classList.contains("hidden"))
                        stopBtn.classList.add("hidden");
                }

                setTimeout(updateProgressBar, 1000);
            }
        );
    };

    setTimeout(updateProgressBar, 1000);

    startBtn.addEventListener("click", function () {
        wp.apiRequest({
            method: "POST",
            path: restPath,
        });
    });

    stopBtn.addEventListener("click", function () {
        wp.apiRequest({
            method: "DELETE",
            path: restPath,
        });
    });
});
