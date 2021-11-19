const gallery = document.querySelectorAll(".gallery .image"); //danh sach các ảnh
modalBox =document.querySelector(".modal-box"); //content box
modalImg = modalBox.querySelector("img"); //div img
closeIcon = modalBox.querySelector(".iconexit");//Nút thoát

clickModal();
function clickModal(){
    window.onload = function() {
        for(let i = 0; i < gallery.length; i++){
            // Khi click vào 1 phần tử tương ứng tại vị trí con trỏ
            gallery[i].onclick = function(){
                console.log(i); //iN ra số lượng phần tử
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