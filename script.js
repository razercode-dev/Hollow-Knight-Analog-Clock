const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");


function updateClock() {
    const now = new Date();

    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const hourDeg = (h % 12) * 30 + m * 0.5;
    const minuteDeg = m * 6;
    const secondDeg = s * 6;


    hour.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
minute.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
second.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

}

function updateDigital() {
    const now = new Date();
    const h = String(now.getHours()).padStart(2, '0');
    const m = String(now.getMinutes()).padStart(2, '0');
    const s = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("digital").innerText = `${h}:${m}:${s}`;
}



setInterval(updateClock, 1000);
setInterval( updateDigital, 1000);
updateDigital();
updateClock();