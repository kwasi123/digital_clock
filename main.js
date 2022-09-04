const hourBox = document.querySelector('.hours');
const minuteBox = document.querySelector('.minutes');
const secondBox = document.querySelector('.seconds');


setInterval(function () {
    const dateObject = new Date();

    if (dateObject.getSeconds().toString().length === 1) {
        secondBox.textContent = '0' + dateObject.getSeconds().toString();
    } else {
        secondBox.textContent = dateObject.getSeconds().toString();
    }

    if (dateObject.getMinutes().toString().length === 1) {
        minuteBox.textContent = '0' + dateObject.getMinutes().toString();
    } else {
        minuteBox.textContent = dateObject.getMinutes().toString();
    }

    if (dateObject.getHours().toString().length === 1) {
        hourBox.textContent = '0' + dateObject.getHours().toString();
    } else {
        hourBox.textContent = dateObject.getHours().toString();
    }
}, 1000);