















































/*=========== SELECT IMAGE ===========*/
const ProductImg = document.getElementById("ProductImg")
const smallImg = document.getElementsByClassName("small_img")
for (let i=0;i<smallImg.length;i++){
    smallImg[i].onclick = function(){
        ProductImg.src = smallImg[i].src;
    };
}
/*=========== FORM ===========*/