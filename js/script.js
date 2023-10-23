// coding implementation
// end coding implementation
function checkEmail(){
    var email= document.getElementById("email");
    var filter= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) { 
        alert('Hay nhap email mot cach hop le. Vi Du: \nExample@gmail.com');
        email.focus; 
        return false; 
    }
    else{ 
        alert('Ok! Email da duoc xac dinh'); 
    } 
}
function checkRating(){
    var rate= document.getElementById("rate");
    var filter= /[0-5]/
    if(!filter.test(rate.value)){
        alert('Hay nhap phan hang tu 0 den 5. VD: 5');
        rate.focus;
        return false;
    }
    else{
        alert('Ok! Muc do danh gia da duoc ghi nhan');
    }
}
function checkNULL(){
    var email=document.getElementById("email");
    var rate= document.getElementById("rate");
    var comment= document.getElementById("com");
    if(email.value=="" && rate.value=="" && comment.value==""){
        alert('Xin hay nhap day du thong tin! Vi du \n Example@gmail.com \n abc \n 5');
        return false;
    }
    else{
        alert('Cam on ban!');
    }
}