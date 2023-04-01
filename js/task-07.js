const slider = document.querySelector("#font-size-control");
const textController = document.querySelector("#text")
slider.addEventListener('input',handleFontSizeChange);
function handleFontSizeChange(event) {
textController.style.fontSize=`${slider.value}px`
}