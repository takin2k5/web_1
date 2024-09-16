var currentPagePath = window.location.pathname;
let lastPathSegment = new URL(currentPagePath, window.location.origin).pathname.split('/').pop(); // Lấy phần tử cuối cùng  
let id_check = lastPathSegment.split('.')[0]; // Tách tên tệp theo dấu chấm và lấy phần đầu tiên  
if(id_check == 'index'){
    id_check = 'home'
}

console.log(id_check);
function loadHeader() {  
    fetch('header/header.html')  
        .then(response => {  
            if (!response.ok) {  
                throw new Error('Network response was not ok');  
            }  
            return response.text();  
        })  
        .then(data => {  
            data = data.replace(id_check, id_check+" active");
            document.querySelector('header').innerHTML = data;  
        })  
        .catch(error => {  
            console.error('Có lỗi xảy ra khi tải header:', error);  
        });
    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="header/header.css">'
    document.querySelector('head').innerHTML += '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
}
loadHeader();
