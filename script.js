function setClock() {
    const now = new Date();
    const hours = now.getHours() % 12; 
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDegrees = (hours * 30) + (minutes / 2); // 360 / 12 = 30 degrees per hour
    const minuteDegrees = minutes * 6; // 360 / 60 = 6 degrees per minute
    const secondDegrees = seconds * 6; // 360 / 60 = 6 degrees per second

    document.querySelector('.hour-hand').style.transform = `rotate(${hourDegrees}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDegrees}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDegrees}deg)`;

    // Digital clock update
    const digitalClock = document.getElementById('digital-clock');
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let amPm = h >= 12 ? 'PM' : 'AM'; 
    h = h % 12 || 12; // Convert to 12-hour format
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    digitalClock.textContent = `${h}:${m}:${s} ${amPm}`;
}

setInterval(setClock, 1000);
