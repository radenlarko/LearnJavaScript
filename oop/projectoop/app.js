class Kursus{
    constructor(paket, jenis, harga){
    this.paket = paket;
    this.jenis = jenis;
    this.harga = harga;
}}

class UI{
    simpanData(kursus){
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

    clearFields(){
        document.getElementById('paket').value = '';
        document.getElementById('jenis').value = '';
        document.getElementById('harga').value = '';
    }
}

class paketKursus{
    static getPaket(){
        let belajar;
        if(localStorage.getItem('belajar') === null){
            belajar = [];
        } else {
            belajar = JSON.parse(localStorage.getItem('belajar'));
        }
        return belajar;
    }
    static tampilKursus(){
        const belajar = paketKursus.getPaket();
        belajar.forEach(function(kursus) {
            const ui = new UI;
            ui.simpanData(kursus);
        });
    }
    static addPaket(kursus){
        const belajar = paketKursus.getPaket();
        belajar.push(kursus);
        localStorage.setItem('belajar', JSON.stringify(belajar));
    }
}

document.addEventListener('DOMContentLoaded', paketKursus.tampilKursus);

document.getElementById('paket-kursus').addEventListener('submit', function(e){
    const   paket = document.getElementById('paket').value,
            jenis = document.getElementById('jenis').value,
            harga = document.getElementById('harga').value;

    const kursus = new Kursus(paket, jenis, harga);
    const ui = new UI();

    if(paket==='' || jenis==='' || harga===''){
        alert('Mohon isi data yg kosong');
    }else{
        ui.simpanData(kursus);
        alert('Terimakasih data berhasil disimpan');
        paketKursus.addPaket(kursus);
        ui.clearFields();

    }


    e.preventDefault();
});