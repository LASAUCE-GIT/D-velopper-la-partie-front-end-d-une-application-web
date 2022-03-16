let BtnMariage = document.getElementById ("BtnMariage")
let BtnGrossesse = document.getElementById ("BtnGrossesse")
let BtnBaby = document.getElementById ("BtnBaby")
let BtnFamille = document.getElementById ("BtnFamille")
let BtnCouple = document.getElementById ("BtnCouple")
let BtnCrist = document.getElementById ("BtnCrist")
let BtnPortrait = document.getElementById ("BtnPortrait")

BtnMariage.addEventListener("click", function () {
 document.getElementById ("item1").style.cssText = ("background-image: url(img/mariage1.jpg)");
 document.getElementById ("item2").style.cssText = ("background-image: url(img/mariage2.jpg)");
 document.getElementById ("item3").style.cssText = ("background-image: url(img/mariage3.jpg)");
 document.getElementById ("item4").style.cssText = ("background-image: url(img/mariage4.jpg)");
 document.getElementById ("item5").style.cssText = ("background-image: url(img/mariage5.jpg)");
 document.getElementById ("item6").style.cssText = ("background-image: url(img/mariage6.jpg)");
 BtnMariage.style.backgroundColor = "white"
 BtnGrossesse.style.backgroundColor = "transparent"
 BtnBaby.style.backgroundColor = "transparent"
 BtnFamille.style.backgroundColor = "transparent"
 BtnCouple.style.backgroundColor = "transparent"
 BtnCrist.style.backgroundColor = "transparent"
 BtnPortrait.style.backgroundColor = "transparent"
})
BtnGrossesse.addEventListener("click", function () {
    BtnMariage.style.backgroundColor = "transparent"
 BtnBaby.style.backgroundColor = "transparent"
 BtnFamille.style.backgroundColor = "transparent"
 BtnCouple.style.backgroundColor = "transparent"
 BtnCrist.style.backgroundColor = "transparent"
 BtnPortrait.style.backgroundColor = "transparent"
    BtnGrossesse.style.backgroundColor = "white"
 document.getElementById ("item1").style.cssText = ("background-image: url(img/Grossese1.jpg)");
 document.getElementById ("item2").style.cssText = ("background-image: url(img/Grossese2.jpg)");
 document.getElementById ("item3").style.cssText = ("background-image: url(img/Grossese3.jpg)");
 document.getElementById ("item4").style.cssText = ("background-image: url(img/Grossese4.jpg)");
 document.getElementById ("item5").style.cssText = ("background-image: url(img/Grossese5.jpg)");
 document.getElementById ("item6").style.cssText = ("background-image: url(img/Grossese6.jpg)");
})
BtnBaby.addEventListener("click", function () {
    BtnGrossesse.style.backgroundColor = "transparent"
 BtnMariage.style.backgroundColor = "transparent"
 BtnFamille.style.backgroundColor = "transparent"
 BtnCouple.style.backgroundColor = "transparent"
 BtnCrist.style.backgroundColor = "transparent"
 BtnPortrait.style.backgroundColor = "transparent"
    BtnBaby.style.backgroundColor = "white"
 document.getElementById ("item1").style.cssText = ("background-image: url(img/Baby1-min.jpg)");
 document.getElementById ("item2").style.cssText = ("background-image: url(img/Baby2-min.jpg)");
 document.getElementById ("item3").style.cssText = ("background-image: url(img/Baby3-min.jpg)");
 document.getElementById ("item4").style.cssText = ("background-image: url(img/Baby4-min.jpg)");
 document.getElementById ("item5").style.cssText = ("background-image: url(img/Baby5-min.jpg)");
 document.getElementById ("item6").style.cssText = ("background-image: url(img/Baby6-min.jpg)");
})
BtnFamille.addEventListener("click", function () {
    BtnGrossesse.style.backgroundColor = "transparent"
 BtnBaby.style.backgroundColor = "transparent"
 BtnMariage.style.backgroundColor = "transparent"
 BtnCouple.style.backgroundColor = "transparent"
 BtnCrist.style.backgroundColor = "transparent"
 BtnPortrait.style.backgroundColor = "transparent"
    BtnFamille.style.backgroundColor = "white"
  document.getElementById ("item1").style.cssText = ("background-image: url(img/Famille1-min.jpg)");
  document.getElementById ("item2").style.cssText = ("background-image: url(img/Famille2-min.jpg)");
  document.getElementById ("item3").style.cssText = ("background-image: url(img/Famille3-min.jpg)");
  document.getElementById ("item4").style.cssText = ("background-image: url(img/Famille4.jpg)");
  document.getElementById ("item5").style.cssText = ("background-image: url(img/Famille5.jpg)");
  document.getElementById ("item6").style.cssText = ("background-image: url(img/Famille6.jpg)");
})
BtnCouple.addEventListener("click", function () {
    BtnGrossesse.style.backgroundColor = "transparent"
 BtnBaby.style.backgroundColor = "transparent"
 BtnFamille.style.backgroundColor = "transparent"
 BtnMariage.style.backgroundColor = "transparent"
 BtnCrist.style.backgroundColor = "transparent"
 BtnPortrait.style.backgroundColor = "transparent"
    BtnCouple.style.backgroundColor = "white"
    document.getElementById ("item1").style.cssText = ("background-image: url(img/couple1-min.jpg)");
    document.getElementById ("item2").style.cssText = ("background-image: url(img/couple2-min.jpg)");
    document.getElementById ("item3").style.cssText = ("background-image: url(img/couple3-min.jpg)");
    document.getElementById ("item4").style.cssText = ("background-image: url(img/couple4-min.jpg)");
    document.getElementById ("item5").style.cssText = ("background-image: url(img/couple5-min.jpg)");
    document.getElementById ("item6").style.cssText = ("background-image: url(img/couple6-min.jpg)");
  })
  BtnCrist.addEventListener("click", function () {
    BtnGrossesse.style.backgroundColor = "transparent"
    BtnBaby.style.backgroundColor = "transparent"
    BtnFamille.style.backgroundColor = "transparent"
    BtnCouple.style.backgroundColor = "transparent"
    BtnMariage.style.backgroundColor = "transparent"
    BtnPortrait.style.backgroundColor = "transparent"
    BtnCrist.style.backgroundColor = "white"
    document.getElementById ("item1").style.cssText = ("background-image: url(img/bateme1-min.jpg)");
    document.getElementById ("item2").style.cssText = ("background-image: url(img/bateme2-min.jpg)");
    document.getElementById ("item3").style.cssText = ("background-image: url(img/bateme3-min.jpg)");
    document.getElementById ("item4").style.cssText = ("background-image: url(img/bateme4-min.jpg)");
    document.getElementById ("item5").style.cssText = ("background-image: url(img/bateme5-min.jpg)");
    document.getElementById ("item6").style.cssText = ("background-image: url(img/bateme6-min.jpg)");
  })

  BtnPortrait.addEventListener("click", function () {
    BtnGrossesse.style.backgroundColor = "transparent"
    BtnBaby.style.backgroundColor = "transparent"
    BtnFamille.style.backgroundColor = "transparent"
    BtnCouple.style.backgroundColor = "transparent"
    BtnCrist.style.backgroundColor = "transparent"
    BtnMariage.style.backgroundColor = "transparent"
    BtnPortrait.style.backgroundColor = "white"
    document.getElementById ("item1").style.cssText = ("background-image: url(img/bateme1-min.jpg)");
    document.getElementById ("item2").style.cssText = ("background-image: url(img/Famille2-min.jpg)");
    document.getElementById ("item3").style.cssText = ("background-image: url(img/mariage3.jpg)");
    document.getElementById ("item4").style.cssText = ("background-image: url(img/couple4-min.jpg)");
    document.getElementById ("item5").style.cssText = ("background-image: url(img/Baby5-min.jpg)");
    document.getElementById ("item6").style.cssText = ("background-image: url(img/Grossese6.jpg)");
  })



















function openlist(){
    document.getElementById("ContentMenu").style.left = "0";
    document.getElementById("ContentMenu").style.opacity = "1";
}
function closelist(){
    document.getElementById("ContentMenu").style.left = "-100%";
    document.getElementById("ContentMenu").style.opacity = "0";
}