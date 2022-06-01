// var opacity = 0;
//         var intervalID = 0;
//         window.onload = fadeIn;
  
//         function fadeIn() {
//             setInterval(show, 200);
//         }
  
//         function show() {
//             var body = document.getElementById("body");
//             opacity = Number(window.getComputedStyle(body)
//                              .getPropertyValue("opacity"));
//             if (opacity < 1) {
//                 opacity = opacity + 0.1;
//                 body.style.opacity = opacity
//             } else {
//                 clearInterval(intervalID);
//             }
//         }
let searchInput = document.getElementById('search-input')
let searchIcon = document.getElementById('search-icon')
let topMenu = document.getElementById('top-menu')
let searchInputOpacity = getComputedStyle(searchInput).opacity
searchIcon.onclick = function(){
    this.style.transform = 'rotate(45deg)'
    this.style.transition = 'all .5s'
    setTimeout(() => {
        searchInput.focus()
    }, 500);
}
topMenu.onmouseleave = function(){
    searchIcon.style.transform = 'rotate(-45deg)'
    searchIcon.style.transition = 'all .5s'
    //remove active from current active element
    document.activeElement.blur();
}
