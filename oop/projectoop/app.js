function Kursus(paket, jenis, harga){
    this.paket = paket;
    this.jenis = jenis;
    this.harga = harga;
}

function UI(){}

UI.prototype.simpanData = function(kursus){
    const list = document.getElementById('data-paket');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${kursus.paket}</td>
    <td>${kursus.jenis}</td>
    <td>${kursus.harga}</td>
    <td><a href="#" class="delete">X</a></td>
    `;

    list.appendChild(row);
}

UI.prototype.clearFields = function(){
    document.getElementById('paket').value = '';
    document.getElementById('jenis').value = '';
    document.getElementById('harga').value = '';
}

document.getElementById('paket-kursus').addEventListener('submit', function(e){
    const   paket = document.getElementById('paket').value,
            jenis = document.getElementById('jenis').value,
            harga = document.getElementById('harga').value;

    const kursus = new Kursus(paket, jenis, harga);
    const ui = new UI();

    ui.simpanData(kursus);
    ui.clearFields();

    e.preventDefault();
});