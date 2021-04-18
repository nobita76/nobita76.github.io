function checkLogin(){
    if(sessionStorage.getItem("username") != null){
        document.location = "home.html";
        return true;
    }
    return false;
}