const euro = document.getElementById("Euro");
const Usdollar = document.getElementById("US")
const NepRs = document.getElementById("Nep");
const AUDdollar= document.getElementById("AUD");

// lets convert Nepali rupees to other currency
NepRs.addEventListener("input", fromNepali)
function fromNepali(){

    var n1=parseFloat( NepRs.value);
    const d1 = n1 *0.0085;
    const e1 =n1 * 0.0073;
    const D1 =  n1 * 0.012;
    Usdollar.value= d1.toFixed(3);
    euro.value= e1.toFixed(3) ;
    AUDdollar.value = D1.toFixed(3);

}



// Lets convert American dollar to other currency
Usdollar.addEventListener("input", fromUS);

function fromUS(){

    var us =parseFloat( Usdollar.value);
    const n1 = us * 117.41;
    const e1 =us * 0.85;
    const D1 =  us * 1.40;
    NepRs.value= n1.toFixed(3);
    euro.value= e1.toFixed(3) ;
    AUDdollar.value = D1.toFixed(3);

}



// Lets convert Australian Dollar to other currency
AUDdollar.addEventListener("input", fromAUD);

function fromAUD(){
    var D = parseFloat(AUDdollar.value);
    n1= D * 84.11;
    e1 = D* 0.61;
    d1= D * 0.72;
    NepRs.value= n1.toFixed(3);
    euro.value=e1.toFixed(3);
    Usdollar.value=d1.toFixed(3);
}


euro.addEventListener("input",fromEuro)

function fromEuro(){
    var e = parseFloat(euro.value);
    n1= e* 137.57;
    d1 = e* 1.17;
    D1= e* 1.64;
    NepRs.value =n1.toFixed(3);
    Usdollar.value= d1.toFixed(3);
    AUDdollar.value= D1.toFixed(3);
}

function main(){
    fromNepali();
    fromUS();
    fromEuro();
    fromAUD();

}