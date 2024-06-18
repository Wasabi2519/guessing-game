function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setNewColor() {
    const randomColor = getRandomColor();
    document.getElementById('colorCircle').style.backgroundColor = randomColor;
    document.getElementById('colorInput').value = '';
}

function checkColor() {
    const userColor = document.getElementById('colorInput').value;
    const displayedColor = document.getElementById('colorCircle').style.backgroundColor;
    const rgbToHex = rgb => {
        let hex = Number(rgb).toString(16);
        if (hex.length < 2) {
            hex = "0" + hex;
        }
        return hex;
    };
    const fullColorHex = (r, g, b) => {
        const red = rgbToHex(r);
        const green = rgbToHex(g);
        const blue = rgbToHex(b);
        return `#${red}${green}${blue}`;
    };

    const rgb = displayedColor.match(/\d+/g);
    const hexColor = fullColorHex(rgb[0], rgb[1], rgb[2]);

    if (!userColor) {
        document.getElementById('result').innerText = `正解は ${hexColor}`;
    } else if (userColor.toUpperCase() === hexColor.toUpperCase()) {
        document.getElementById('result').innerText = 'Correct!';
    } else {
        document.getElementById('result').innerText = `違うよ! 正解の色は ${hexColor}だよ`;
    }
    setNewColor();
}

window.onload = setNewColor;
