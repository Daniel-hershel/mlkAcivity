
//create one grouped icon and title

var canvasTwo =new fabric.Canvas('canvasTwo')

//make the fabric canvas the full width of the window
window.addEventListener('resize', resizeCanvas, false);

  function resizeCanvas() {
    // canvasTwo.setHeight(window.innerHeight);
    canvasTwo.setWidth(window.innerWidth);
    canvasTwo.renderAll();
  }

  // resize on init
  resizeCanvas();



var yDown = 200;





var iconArray = ["style/images/icons/lulu-eye.png", "style/images/icons/lulu-bell.png", "style/images/icons/lulu-link.png", "style/images/icons/lulu-link.png" ]
// var wordArray = [app4.todos[0], app4.todos[1], app4.todos[2], app4.todos[3]]

//first try iterating through both at same time. When that doesn't work might have to do it without a loop

for (i = 0; i < 3; i++) {

var text = new fabric.Text(app4.todos[i].text, {
fontFamily:  'Alfa Slab One',
fontSize:40,
fill: '#FEFD95',
left: yDown,
top: 150*i });


var myImage = fabric.Image.fromURL(iconArray, function(oImg) {
  canvas.add(oImg);
});
// var imgElement = document.getElementById('my-image');
// var imgInstance = new fabric.Image(iconArray[i], {
//   left: 100,
//   top: 100,
//   angle: 30,
//   opacity: 0.85
// });

canvasTwo.add(text)
canvasTwo.add(myImage);
// console.log(yDown)
}

canvasTwo.selectionColor = 'rgba(0,255,0,0.3)';
canvasTwo.selectionBorderColor = 'red';
canvasTwo.selectionLineWidth = 5;




    var x = document.getElementById("words").value;
var text = new fabric.Text(x, {
fontFamily:  'Alfa Slab One',
fontSize:80,
fill: '#F5DD9D',
  left: 100,
  top: 100 });

  var y = document.getElementById("words").value;
var textToo = new fabric.Text(y, {
fontFamily:  'Modak',
fontSize:10,
originX: 'center',
originY: 'center'
});

var fontTitle = new fabric.Text("change font", {
  fontFamily:  'Orbitron',
  fontSize:16,
  top: -50,
  originX: 'center',
  originY: 'center'
})

      var circElem =  new fabric.Circle({
        radius: 30,
        fill: '#f55',
        originX: 'center',
originY: 'center'
      });

      var group = new fabric.Group([  circElem, fontTitle, textToo ], {
        left: 0,
        top: 350,
        // angle: -10
      });


      group.on('selected', function() {

  text.fontFamily = 'Modak'
});
// canvas.add(circElem)
canvas.add(text);
// canvas.add(textToo);
canvas.add(group)


      }
