
var likesCount = 0;
setInterval(function(){
    window.scrollBy(0,1000);
    var likes = document.getElementsByClassName('coreSpriteHeartOpen');
    for(var i=0; i < likes.length; i++) {
        console.log('Likes count: '+likesCount);
        likesCount++;
        likes[i].closest('a').click(); 
    }
}, 100);