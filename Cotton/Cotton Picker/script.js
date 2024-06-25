let score = 0;
let xp = 0;
let level = 1;
let autoclickerCount = 0;
let autoclickerCost = 10;
let doubleClickCount = 0;
let doubleClickCost = 20;
let tripleClickCount = 0;
let tripleClickCost = 30;
let superClickCount = 0;
let superClickCost = 50;
let timeWarpCount = 0;
let timeWarpCost = 100;
let quantumLeapCount = 0;
let quantumLeapCost = 200;

let achievements = {
    '500_clicks': false,
    'level_5': false
};

document.getElementById('clicker-btn').addEventListener('click', function() {
    score++;
    xp++;
    checkLevelUp();
    updateScore();
    updateExperience();
    checkAchievements();
});

function updateScore() {
    document.getElementById('count').innerText = score;
}

function updateExperience() {
    document.getElementById('xp').innerText = xp;
}

function checkLevelUp() {
    if (xp >= level * 300) {
        level++;
        xp = 0;
        document.getElementById('current-level').innerText = level;
        alert(`Osiągnąłeś poziom: ${level}!`);
    }
}

function buyAutoclicker() {
    if (score >= autoclickerCost) {
        autoclickerCount++;
        score -= autoclickerCost;
        autoclickerCost += 5;
        updateScore();
        updateAutoclickerInfo();
        startAutoclicker();
    } else {
        alert("Brak środków!");
    }
}

function startAutoclicker() {
    setInterval(function() {
        score += autoclickerCount;
        updateScore();
    }, 1000);
}

function updateAutoclickerInfo() {
    document.getElementById('autoclicker-btn').innerText = `Kup pracownika (koszt: ${autoclickerCost}, ilość: ${autoclickerCount})`;
}

function buyDoubleClick() {
    if (score >= doubleClickCost) {
        doubleClickCount++;
        score -= doubleClickCost;
        doubleClickCost += 10;
        updateScore();
        updateDoubleClickInfo();
    } else {
        alert("Brak środków!");
    }
}

function updateDoubleClickInfo() {
    document.getElementById('double-click-btn').innerText = `Kup nowe pole (koszt: ${doubleClickCost}, ilość: ${doubleClickCount})`;
}

function buyTripleClick() {
    if (score >= tripleClickCost) {
        tripleClickCount++;
        score -= tripleClickCost;
        tripleClickCost += 15;
        updateScore();
        updateTripleClickInfo();
    } else {
        alert("Brak środków!");
    }
}

function updateTripleClickInfo() {
    document.getElementById('triple-click-btn').innerText = `Kup kombajn (koszt: ${tripleClickCost}, ilość: ${tripleClickCount})`;
}

function buySuperClick() {
    if (score >= superClickCost) {
        superClickCount++;
        score -= superClickCost;
        superClickCost += 25;
        updateScore();
        updateSuperClickInfo();
    } else {
        alert("Brak środków!");
    }
}

function updateSuperClickInfo() {
    document.getElementById('super-click-btn').innerText = `Kup bat (koszt: ${superClickCost}, ilość: ${superClickCount})`;
}

function buyTimeWarp() {
    if (score >= timeWarpCost) {
        timeWarpCount++;
        score -= timeWarpCost;
        timeWarpCost += 50;
        updateScore();
        updateTimeWarpInfo();
    } else {
        alert("Brak środków!");
    }
}

function updateTimeWarpInfo() {
    document.getElementById('time-warp-btn').innerText = `Kup małego czarnucha (koszt: ${timeWarpCost}, ilość: ${timeWarpCount})`;
}

function buyQuantumLeap() {
    if (score >= quantumLeapCost) {
        quantumLeapCount++;
        score -= quantumLeapCost;
        quantumLeapCost += 100;
        updateScore();
        updateQuantumLeapInfo();
    } else {
        alert("Brak środków!");
    }
}

function updateQuantumLeapInfo() {
    document.getElementById('quantum-leap-btn').innerText = `Kup wielkiego nyggusa (koszt: ${quantumLeapCost}, ilość: ${quantumLeapCount})`;
}

function checkAchievements() {
    if (score >= 500 && !achievements['500_clicks']) {
        achievements['500_clicks'] = true;
        alert("Odblokowano osiągnięcie: 500 kliknięć!");
    }

    if (level >= 5 && !achievements['level_5']) {
        achievements['level_5'] = true;
        alert("Odblokowano osiągnięcie: Level 5!");
    }

    // Add more achievement conditions as needed
}
