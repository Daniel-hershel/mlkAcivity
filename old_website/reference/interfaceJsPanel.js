
// variables for length of buttons
var buttonLength = .6;
//y placement of buttons
var y = .05;
// create controls for text color
//make a new panel to hold controls
panelText = new Interface.Panel({
// bounds:[.5,.5,.5,.5],
container:  document.getElementById("controlsText")
});
//create button
f= new Interface.Button({
bounds:[.01,y,.15,buttonLength],
mode:'contact',
ontouchmouseup: function() {
textHolder[0].set({fill: '#000'})

for (i = 0; i < textHolder.length; i++) {

textHolder[i].set({fill: '#000'})

}
canvas.renderAll();
}
});

g= new Interface.Button({
bounds:[.2,y,.15,buttonLength],
mode:'contact',
ontouchmouseup: function() {
// textHolder[0].set({fill: '#F87E7B'})

for (i = 0; i < textHolder.length; i++) {
//if selected-for each button
textHolder[i].set({fill: '#F87E7B'})

}
canvas.renderAll();
}
});

h= new Interface.Button({
bounds:[.4,y,.15,buttonLength],
mode:'contact',
ontouchmouseup: function() {

for (i = 0; i < textHolder.length; i++) {

textHolder[i].set({fill: '#00A8C6'})

}
canvas.renderAll();
}
});

j= new Interface.Button({
bounds:[.6,y,.15,buttonLength],
mode:'contact',
ontouchmouseup: function() {


for (i = 0; i < textHolder.length; i++) {

textHolder[i].set({fill: '#B9D7D9'})

}
canvas.renderAll();
}
});

k= new Interface.Button({
bounds:[.8,y,.15,buttonLength],
mode:'contact',
ontouchmouseup: function() {

for (i = 0; i < textHolder.length; i++) {

textHolder[i].set({fill: '#E4E391'})

}
canvas.renderAll();
}
});
g.background = '#F87E7B';
h.background = '#00A8C6';
j.background = '#B9D7D9';
k.background = '#E4E391';
panelText.add(f);
panelText.add(g);
panelText.add(h);
panelText.add(j);
panelText.add(k);

// panelText.background = '#3baacf';


var x = document.getElementById("canvas");

// second panel
panel = new Interface.Panel({

container:  document.getElementById("controls")
});
// create buttons
// !issue I need to figure out how to make the button dimensions responsive
a = new Interface.Button({
bounds:[.01,y,.15,buttonLength],
mode:'contact',
// label:'red' ,
ontouchmouseup: function() {
x.style.backgroundColor = "#05676E";
}
});
b = new Interface.Button({
bounds:[.2,y,.15,buttonLength],
mode:'contact',
// label:'#489C79' ,
stroke: 'white',
ontouchmouseup: function() {
x.style.backgroundColor = "#331327";
}
});
c = new Interface.Button({
bounds:[.4,y,.15,buttonLength],
mode:'contact',
// label:'blue' ,
stroke: 'white',
ontouchmouseup: function() {
x.style.backgroundColor = "#fffff8";
}
});
d= new Interface.Button({
bounds:[.6,y,.15,buttonLength],
mode:'contact',
// label:'pink' ,
stroke: 'white',
ontouchmouseup: function() {
x.style.backgroundColor = "#26251C";
}
});
e = new Interface.Button({
bounds:[.8,y,.15,buttonLength],
mode:'contact',
// label:'yellow' ,
stroke: 'white',
ontouchmouseup: function() {
x.style.backgroundColor = "#951F2B";
}
});


a.stroke = 'white';
a.background = '#05676E';
b.background = '#331327';
c.background = '#fffff8';
d.background = '#26251C';
e.background = '#951F2B';
// panel.add(menu);
panel.add(a);
panel.add(b);
panel.add(c);
panel.add(d);
panel.add(e);