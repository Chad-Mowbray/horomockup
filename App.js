const logo = document.getElementById('circle')

const tm = new TweenMax()

// tw.to(logo, 4, {rotation:360, transformOrigin:"40px -100px", repeat:10, ease:Linear.easeNone});


tw.to(circle, 2, {backgroundColor:"#ff0000", width:"50%", top:"100px", ease:Power2.easeInOut});