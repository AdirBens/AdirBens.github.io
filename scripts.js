"use strict";
const cv_files_dir = "assets/"
const openBtn = document.getElementById('cv-btn');
const cvBtn = document.getElementById('cv-download');
const closeBtn = document.getElementById('pop-close-btn');

openBtn.addEventListener('click', openPopUp);
cvBtn.addEventListener('click', giveThemMyCV);
closeBtn.addEventListener('click', closePopUp);

function openPopUp() {
    let popup = document.getElementById("popup");
    const err = document.getElementById('must-choose-cv');
    if (err.hasChildNodes()) {
        let text = err.firstChild;
        err.removeChild(text);
    }
    popup.classList.add("open-popup");
}

function closePopUp() {
    let popup = document.getElementById("popup");
    popup.classList.remove("open-popup");
}


function giveThemMyCV() {
    const radioButtons = document.querySelectorAll('input[name="designation"]')
    let designation;
    let checkedBt;
    for (const bt of radioButtons) {
        if (bt.checked) {
            designation = bt.value;
            checkedBt = bt;
            break;
        }
    }
    if (typeof designation == 'undefined') {
        const err_message = document.createTextNode(
            'You must choose one of the options!')
        const err = document.getElementById('must-choose-cv');
        err.appendChild(err_message);
    } else {
        triggerFileDownload(designation);
        checkedBt.checked = false;
        closePopUp();
    }
}

function triggerFileDownload(fileName) {
    const cv_downloader = document.createElement('a');

    cv_downloader.href = cv_files_dir + fileName + ".pdf";
    cv_downloader.download = "AdirBenShimol_" + fileName + "_cv.pdf";

    document.body.appendChild(cv_downloader);
    cv_downloader.click();
    document.body.removeChild(cv_downloader);
}
