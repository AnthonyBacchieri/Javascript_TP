
window.addEventListener("DOMContentLoaded", () => {
    let spans = document.querySelectorAll("div#motsmeles > div > span");
    let lettres = [];
    for (let i = 0; i < spans.length; i++) {
        lettres.push(spans.item(i).textContent.toUpperCase());
    }

    let abs = new AbsGrille();
    abs.setLettres(lettres);
    let pres = new PresGrille();
    let ctrl = new CtrlGrille(abs, pres);
});