const textElement = document.getElementById('text');
const text = "CAM 36G";
let index = 0;

function type() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, 150);
    }
}

type();