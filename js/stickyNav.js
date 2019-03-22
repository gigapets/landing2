window.onscroll = () => {
    let navBar = document.getElementById('nav-bar');
    var stick = navBar.offsetTop;
    if (window.pageYOffset >= stick) {
        navBar.classList.add("sticky")
    } else {
        navBar.classList.remove("sticky");
    }
}