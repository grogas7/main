function ekranaYaz(element) {
    document.getElementById('ekran').value += element;
}

function temizle() {
    document.getElementById('ekran').value = '';
}

function hesabla() {
    try {
        document.getElementById('ekran').value = eval(document.getElementById('ekran').value);
    } catch (err) {
        document.getElementById('ekran').value = 'Hata';
    }
}
function kvadrat() {
    let ekrandakiElement = document.getElementById('ekran').value;
    document.getElementById('ekran').value = eval(ekrandakiElement) ** 2;
}

function kok() {
    let ekrandakiElement = document.getElementById('ekran').value;
    document.getElementById('ekran').value = Math.sqrt(eval(ekrandakiElement));
}
function faiz() {
    let ekrandakiElement = document.getElementById('ekran').value;
    document.getElementById('ekran').value = eval(ekrandakiElement) / 100;
}

function sil() {
    let ekrandakiElement = document.getElementById('ekran').value;
    document.getElementById('ekran').value = ekrandakiElement.slice(0, -1);
}
function faktorial() {
    let ekrandakiElement = document.getElementById('ekran').value;
    const eded = parseFloat(ekrandakiElement);
    if (!isNaN(eded)) {
        let faktorialCavab = 1;
        for (let i = 1; i <= eded; i++) {
            faktorialCavab = faktorialCavab * i;
        }
        document.getElementById('ekran').value = faktorialCavab;
    } else {
        document.getElementById('ekran').value = 'Error';
    }
}