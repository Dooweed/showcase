var korea      = document.getElementById("korea"),
    china      = document.getElementById("china"),
    koreaBlock = document.getElementById("korea-block"),
    chinaBlock = document.getElementById("china-block"),
    toggler    = true;
korea.addEventListener("click", toggleContent);
china.addEventListener("click", toggleContent);
function toggleContent() {
  if(toggler){
    var obj1 = china, obj2 = korea;
    koreaBlock.style.display = "none";
    chinaBlock.style.display = "block";
  }
  else{
    var obj1 = korea, obj2 = china;
    koreaBlock.style.display = "block";
    chinaBlock.style.display = "none";
  }
  obj1.classList.add("active-switch_manufacturer_button-normal");
  obj1.classList.remove("inactive-switch_manufacturer_button-normal");
  obj2.classList.add("inactive-switch_manufacturer_button-normal");
  obj2.classList.remove("active-switch_manufacturer_button-normal");
  toggler = !toggler;
}








var bPic   = document.getElementsByClassName("bigPic"),
    sPic_1 = document.getElementsByClassName("smlPic-1"),
    sPic_2 = document.getElementsByClassName("smlPic-2"),
    sPic_3 = document.getElementsByClassName("smlPic-3"),
    zBlock = document.getElementById("zoom_block"),
    zImage = document.getElementById("zoom_image"),
    imageIndex, zoomBlockActive = false;
for (var i = sPic_1.length - 1; i >= 0; i--) {
  bPic[i].addEventListener("click", zoom);
  sPic_1[i].addEventListener("click", exchangeScrs);
  sPic_2[i].addEventListener("click", exchangeScrs);
  sPic_3[i].addEventListener("click", exchangeScrs);
}
zBlock.addEventListener("click", zoom);

function deleteAnimClasses(event, index){
    bPic[index].classList.remove("image-change-animation-class");
    event.target.classList.remove("image-change-animation-class");
}

function exchangeScrs(event){
  if(toggler){
    bPic[0].classList.add("image-change-animation-class");
    event.target.classList.add("image-change-animation-class");
    var temp = bPic[0].src
    bPic[0].src = event.target.src
    event.target.src = temp
    setTimeout(deleteAnimClasses, 400, event, 0)
  }
  else{
    bPic[1].classList.add("image-change-animation-class");
    event.target.classList.add("image-change-animation-class");
    var temp = bPic[1].src
    bPic[1].src = event.target.src
    event.target.src = temp
    setTimeout(deleteAnimClasses, 400, event, 1)
  }
}
function zoom(){
  if (zoomBlockActive)
    zBlock.style.display = "none"
  else{
    zBlock.style.display = "block"
    if(toggler)
      zImage.src = bPic[0].src
    else
      zImage.src = bPic[1].src
  }
  zoomBlockActive = !zoomBlockActive
}