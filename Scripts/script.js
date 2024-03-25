// toggle bar 
const togglebutton = document.getElementsByClassName("toggle-button")[0];
const navbarlinks = document.getElementsByClassName("nav-links")[0];

togglebutton.addEventListener("click", () => {
    navbarlinks.classList.toggle('active')
})

// nav color change by scrolling.

const navbar = document.querySelector(".navbar");
const navLink = document.querySelector(".nav-links");
const toggleButton = document.querySelector(".toggle-button")

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 0) {
        navbar.classList.add("scroll");
        navLink.classList.add("scroll");
        toggleButton.classList.add("scroll");
        navLink.classList.remove("active");
    }
    else {
        navbar.style.backgroundColor = "##2b7a78";
        navbar.classList.remove("scroll");
        navLink.classList.remove("scroll");
        toggleButton.classList.remove("scroll");
        navLink.classList.remove("active");
    }
})

// Download Pdf
function cvDownload() {
    const pdfPath = 'ResumePdf/JebastinMichaelRaj_Resume.pdf';
    const anchor = document.createElement('a');

    anchor.href = pdfPath;
    anchor.download = 'JebastinMichaelRajResume.pdf';
    document.body.appendChild(anchor);
    anchor.click();

    document.body.removeChild(anchor);

    console.log("clicked");
}
