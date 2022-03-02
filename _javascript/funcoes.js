function mudaFoto (foto) {
    document.getElementById("icone").src = foto;
}
function calc_total() {
    var qtd = parseInt(document.getElementById('campoQtd').value);
    var tot = qtd * 1500;
    document.getElementById('campoTot').value = tot;
}
