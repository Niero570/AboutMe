const img = document.getElementById("draggable-image");

let offsetX, offsetY, isDragging = false;

img.addEventListener("mousedown", (event) => {
    isDragging = true;
    offsetX = event.clientX - img.getBoundingClientRect().left;
    offsetY = event.clientY - img.getBoundingClientRect().top;
    img.style.cursor = "grabbing";
});

document.addEventListener("mousemove", (event) => {
    if (!isDragging) return;
    img.style.left = `${event.clientX - offsetX}px`;
    img.style.top = `${event.clientY - offsetY}px`;
});

document.addEventListener("mouseup", () => {
    isDragging = false;
    img.style.cursor = "grab";
});