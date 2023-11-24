var angkot = []
// var jumlahKursi = 10
var penumpangSudahNaik = false
// kursi
// for (let index = 0; index < jumlahKursi; index++) {
    // angkot.push(undefined);
// }
console.log("Kursi Kosong")
console.log(angkot)

function cariPenumpang(){
    
}
function penumpangNaik(namaPenumpang){

    // cek penumpang
    for (let i = 0; i <= angkot.length; i++) {
        if(angkot[i] == namaPenumpang) {
            penumpangSudahNaik = true;
            break
        } else {
            penumpangSudahNaik = false;
        }
    }
    

    // masukin penumpang
    if(penumpangSudahNaik == false){
        
        for (let i = 0; i <= angkot.length; i++) {
     
            if(angkot[i] == undefined){
                angkot[i] = namaPenumpang
                console.log(namaPenumpang + "  Naik")
                break
            } 
        }
    }
    else {
        console.log(namaPenumpang + " Sudah Naik")
    }
        
}

function penumpangTurun(namaPenumpang){
    
    var cariPenumpang = angkot.findIndex(function(x){
        return x == namaPenumpang;
        }
    )
    if(cariPenumpang >= 0){
        console.log(angkot[cariPenumpang] + " Turun")
        // console.log("nama Penumpang : "+angkot[cariPenumpang])
        // console.log("kursi Penumpang : "+ cariPenumpang)
        angkot[cariPenumpang] = undefined
    }
    else {
        console.log("Penumpang tidak ada");
    }
}

penumpangNaik("Asep")
penumpangNaik("Budi")
penumpangNaik("Coki")
penumpangNaik("Daud")
penumpangNaik("Firaun")
penumpangNaik("Guntur")
penumpangNaik("Hamam")
console.log(angkot)

penumpangTurun("Coki")
penumpangTurun("Daud")
penumpangTurun("Firaun")
console.log(angkot)

penumpangNaik("Guntur")
console.log(angkot)

penumpangNaik("Coki")
penumpangNaik("Daud")
penumpangNaik("Firaun")
penumpangNaik("Ilham")
penumpangNaik("Joshua")
penumpangNaik("Kiara")
penumpangNaik("Zidan")
console.log(angkot)