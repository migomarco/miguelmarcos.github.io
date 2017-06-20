// this line of code sets up your canvas
var r = new Rune({
  container: "body",
  width: '100%',
  height: '100%'
});
// write your own code below this line

//r.line(50, 100, 1000, 1000);
//r.rect(12, 100, 100, 50);
//r.triangle(0, 0, 100, 0, 100, 100);
//r.circle(150 ,200, 75);
//r.ellipse(50, 60, 70, 100);
//r.polygon(100, 300)

//var potato = r.group(100,500);
//r.rect(100, 100, 100, 100, potato)
//	.rotate(30, 150, 150);


r.image('images/icon.gif', 240, 240, 0, 0)
.width(800, true)
.height(200, true);

r.on('update', function(){});


r.play();


// r.rect(100, 100, 100, 100)
// 	.rotate(45, 150, 150)
// 	.move(100, 100)
// 	.move(20, 20, true);
// 	r.play



// and ab;ove this line
// this line of code draws your shapes
r.draw();
