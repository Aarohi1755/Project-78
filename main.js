var images=[
    "fAMILY BOOK.jpg",
    "aarohi.gif",
    "MAMMA.gif",
    "pappa.gif",
    "Mammai.gif",
    "Lalla.gif" 
];

var names=[
    "Aarohi Nanda's Family Book",
    "Aarohi Nanda (Me)",
    "Roompa Nanda (My Mother)",
    "Sandeep Nanda (My Father)",
    "Kalyani Acharjee (My Maternal Grandmother)",
    "Tapan Kumar Acharjee (My Maternal Grandfather)",
    
];

var i = 0;
function Update(){
    i++
    var number_of_family_members = 5;
    if (i > number_of_family_members) {
        
        i = 0;
    }

    var UpdatedImage = images[i];
    var UpdatedName = names[i];
    document.getElementById("FamilyImages").src = UpdatedImage;
    document.getElementById("FamilyNames").innerHTML = UpdatedName;
}