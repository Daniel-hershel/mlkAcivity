$("#explore").blast({   
  delimiter: "character",
  generateValueClass: true,
  customClass: "letter",
    });


$.Velocity.RegisterUI("explore", {
    defaultDuration: 3000,
    calls: [ 
            
            [ { rotateZ: -90 }, 1 ],
         ]
});


  var $element = $('.letter')
  var $elementWord = $('#explore')


  $element.velocity("explore", {delay:1000})

// $element.velocity({
//     properties: {textShadowBlur: [0,55], textShadowX: [-15,15],  },
//     options: { duration: 2500, loop:true }
// });


var animeTime = 1280;
var animationSequence = []
for (var i = 0; i < alphabet.length; i++){



animateAlphabet =  { e: alphabet[i], p: { opacity: 1} , options: {duration: animeTime}},

   // and then append to animationSequence
   animationSequence.push(animateAlphabet)
   console.log(animationSequence)
}

$.Velocity.RunSequence(animationSequence);
