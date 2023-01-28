"use strict";

const cv_files_dir = "assets/cv/"

/**
 * Add Event listeners
 * */
const openBtn = document.getElementById('cv-btn');
const cvBtn = document.getElementById('popup-btn-get');
const closeBtn = document.getElementById('popup-btn-close');
openBtn.addEventListener('click', openPopUp);
cvBtn.addEventListener('click', giveThemMyCV);
closeBtn.addEventListener('click', closePopUp);

/**
 * Opens the cv selector pop-up.
 *  In case of request from mobile device or screen size max-width: 820px,
 *  the popup will not open, and the download of 'rnd' cv version will be trigger
 * Args: None
 * Returns: None
 * */
function openPopUp() {
    let popup = document.getElementById("popup-cv");
    clearErrMsg()

    if (isMobile() || isSmallScreen()){
        triggerFileDownload('rnd');
    } else {
        popup.classList.add("open-popup");
    }
}

/**
 * closes the cv selector pop-up.
 * Args: None
 * Returns: None
 * */
function closePopUp() {
    let popup = document.getElementById("popup-cv");
    popup.classList.remove("open-popup");
}

/**
 * Determine which CV version to serve.
 *  If the recruiter tends to specific role the corresponds CV version will serve.
 * Args: None
 * Returns: None
 * Trigger: trigger file download
 * */
function giveThemMyCV() {
    let role = fetchSelection();

    if (typeof role.value == 'undefined') {
        const err_message = document.createTextNode(
            'You must choose one of the options!')
        const err = document.getElementById('must-choose-cv');
        if (!err.hasChildNodes()) {
            err.appendChild(err_message);
        }
    } else {
        triggerFileDownload(role.value);
        role.checked = false;
        closePopUp();
    }
}

/**
 * Trigger download of the corresponds CV version
 * Args: role (str) - one of ['rnd', 'pm', 'analyst']
 * Returns: (button) the selected radio button object
 * */
function triggerFileDownload(role) {
    const cv_downloader = document.createElement('a');

    cv_downloader.href = cv_files_dir + role + ".pdf";
    cv_downloader.download = "AdirBenShimol_" + role + "_cv.pdf";

    document.body.appendChild(cv_downloader);
    cv_downloader.click();
    document.body.removeChild(cv_downloader);
}

/**
 * Extract user selection from pop-up radio buttons.
 * Args: None
 * Returns: (button) the selected radio button object
 * */
function fetchSelection() {
    const radioButtons = document.querySelectorAll('input[name="role"]')
    let role;
    let checkedBt;
    for (const bt of radioButtons) {
        if (bt.checked) {
            role = bt.value;
            checkedBt = bt;
            break;
        }
    }
    return checkedBt;
}

/**
 * Clear the `must choose role` error message
 * Args: None
 * Returns: None (Appends text node to popup)
 * */
function clearErrMsg(){
    const err = document.getElementById('must-choose-cv');
    if (err.hasChildNodes()) {
        let text = err.firstChild;
        err.removeChild(text);
    }
}

/**
 * Checks if brows from mobile device using UserAgent
 * Args: None
 * Returns: (bool) true if mobile, false else
 * */
function isMobile() {
    return (/Android|iPhone/i.test(navigator.userAgent));
}

/**
 * Checks if the device screen is small (as media query)
 * small screen set to be max-width: 820px
 * Args: None
 * Returns: (bool) true if small, false else
 * */
function isSmallScreen() {
    let screenQuery = window.matchMedia("(max-width: 820px)")
    return screenQuery.matches;
}
