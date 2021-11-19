const gallery = document.querySelectorAll(".gallery .image");
modalBox =document.querySelector(".modal-box");
modalImg = modalBox.querySelector("img"); //div img
closeIcon = modalBox.querySelector(".iconexit");

clickModal();
function clickModal(){
    window.onload = function() {
        for(let i = 0; i < gallery.length; i++){
            // Khi click vào 1 phần tử tương ứng tại vị trí con trỏ
            gallery[i].onclick = function(){
                console.log(i);
                // Lấy ra link hình ảnh.
                function modalImage(){
                    let selectImg = gallery[i].querySelector("img").src;
                    modalImg.src = selectImg;
                    console.log(selectImg);
                }
                modalImage();
                modalBox.classList.add("show");

                closeIcon.onclick = function(){
                    modalBox.classList.remove('show');
                }
            }
        }
    }
}