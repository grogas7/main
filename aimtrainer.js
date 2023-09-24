let trails = [];

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        endGame();
    }
});

document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".dot-cursor");
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

document.addEventListener("click", (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = e.pageX + 'px';
    trail.style.top = e.pageY + 'px';
    document.body.appendChild(trail);

    setTimeout(() => {
        document.body.removeChild(trail);
    }, 850); 
});

        document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        endGame();
    }
});
document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".dot-cursor");
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        endGame();
    }
});
let startTime;
let endTime;
let gameRunning = false;
let targetInterval;
let totalTargets = 0;
let totalElapsedTime = 0;

function startGame() {
    if (!gameRunning) {
        clearTargets();
        startTime = null;
        endTime = null;
        gameRunning = true;
        totalTargets = 0;
        totalElapsedTime = 0;
        document.getElementById('time').textContent = '0';
        document.getElementById('startButton').style.display = 'none';
        document.getElementById('stopButton').style.display = 'inline-block';
        createTarget();
        targetInterval = setInterval(createTarget, 2500); 
    }
}

function endGame() {
    if (gameRunning) {
        gameRunning = false;
        clearInterval(targetInterval);
        document.getElementById('startButton').style.display = 'inline-block';
        document.getElementById('stopButton').style.display = 'none';
        if (startTime) {
            endTime = new Date().getTime();
            const elapsedTime = endTime - startTime;
            totalElapsedTime += elapsedTime;
            totalTargets++;
            document.getElementById('time').textContent = Math.round(totalElapsedTime / totalTargets);
        }
    }
}

function createTarget() {
    const gameContainer = document.getElementById('game-container');
    const playArea = document.getElementById('play-area');
    const target = document.createElement('div');
    target.className = 'target';
    const targetSize = 45;
    target.style.width = targetSize + 'px';
    target.style.height = targetSize + 'px';
    target.style.backgroundColor = 'yellow';
    target.style.borderRadius = '50%';

    const maxX = gameContainer.clientWidth - targetSize;
    const maxY = gameContainer.clientHeight - targetSize;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    target.style.left = randomX + 'px';
    target.style.top = randomY + 'px';

    const targetStartTime = new Date().getTime();

    target.onclick = function () {
        if (!startTime) {
            startTime = targetStartTime;
        }
        playArea.removeChild(target);
        const targetEndTime = new Date().getTime();
        const elapsedTime = targetEndTime - targetStartTime;
        totalElapsedTime += elapsedTime;
        totalTargets++;
        document.getElementById('time').textContent = Math.round(totalElapsedTime / totalTargets);
    };
    playArea.appendChild(target);
}

function clearTargets() {
    const playArea = document.getElementById('play-area');
    while (playArea.firstChild) {
        playArea.removeChild(playArea.firstChild);
    }
}
