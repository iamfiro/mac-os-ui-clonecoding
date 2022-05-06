var progressPercent = 0;
function change() {
            progressPercent = progressPercent +1;
            document.getElementById('boot-progress-bar-color').style.width = progressPercent + "%";
            if (progressPercent == 100) {
                document.getElementById('boot-progress-bar-color').style.borderRadius = "50px 50px 50px 50px";
        
                setTimeout(function() {
                    document.getElementById('boot-screen').style.display = "none";
                    document.getElementById('mac-home-view').style.display = "flex"
                }, 3000);
        
                clearInterval(progressinterval);
            }
    }

function startupProgress() {
    document.getElementById('boot-progress-bar').style.visibility = "visible";
    progressPercent = 0;
}

  setTimeout(() => startupProgress(), 3000);
  setTimeout(() => document.getElementById('boot-apple-icon').style.visibility = "visible", 2000);

  let progressinterval = setInterval(() => change(), 50)