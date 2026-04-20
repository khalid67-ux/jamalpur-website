<script>
const titles = [
    "জামালপুর জেলায় আপনাকে স্বাগতম"
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    const title = document.getElementById("hero-title");

    if (!title) return;

    if (i >= titles.length) i = 0;

    currentText = titles[i];

    if (!isDeleting) {
        title.innerHTML = currentText.substring(0, j++);
    } else {
        title.innerHTML = currentText.substring(0, j--);
    }

    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && j === currentText.length + 1) {
        speed = 1500;
        isDeleting = true;
    } 
    else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        speed = 300;
    }

    setTimeout(typeEffect, speed);
}

window.onload = function () {
    typeEffect();
};
</script>