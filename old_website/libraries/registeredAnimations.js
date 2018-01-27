// var randomMaker = Math.floor(Math.random() *255)

// console.log(randomMaker)

$.Velocity.RegisterUI("posterize", {
    defaultDuration: 3000,
    calls: [ 
            // [ {backgroundColor:'#1E60A2' }, 0.80, { easing: "spring" }  ],
            // [ {  borderWidth: "1rem"}, 0.50, {easing: "spring"} ],
      // [ { scaleX: .5 }, 0.25, { easing: "spring" } ],
      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
            [ {  borderTopWidth: "1rem"}, 0.50, {easing: "spring"} ],
    [ { letterSpacing: -9 }, .314, { easing: "easeOutSine" } ],
    [ { letterSpacing: 15 },  .8, { easing: "easeOutSine" }],

      // [ { padding: [55,0] }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});
$.Velocity.RegisterUI("exitHarsh", {
    defaultDuration: 3000,
    calls: [ 
            [ { scale: 0.1 }, 0.60, { easing: "easeOutSine" }  ],
            [ { top: -600}, 0.60, { easing: "easeOutSine" }],
            [ { paddingBottom: "+=50px"}, 0.60, { easing: "easeOutSine" }],

      // [ { scaleX: .5 }, 0.25, { easing: "spring" } ],
      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});





$.Velocity.RegisterUI("entrancePoster", {
    defaultDuration: 3000,
    calls: [ 
            [ { opacity: 1 }, 2 ],
            [ { paddingBottom: '+=25px' }, .1,  {easing: "easeOutSine"} ],

            [ { scale: 0.6 }, 1 , {easing: "easeOutSine"}],
            [ { height: 0.8 }, 1,  {easing: "easeOutSine"} ],
            // [ { letterSpacing: 1  }, .5,  {easing: "easeOutSine"} ],
            // [ { opacity: 7 }, 2 ],
   //          [ { opacity: 1 }, 1 ],

   //          [ { scale: 0.6 }, .55 ],
   //          [ { height: 0.7 }, .25 ],

   //          // [ { translateZ: '-=250px' }, 1 ],
   //         [ { translateY: '-=50px' }, 1 ],
   //          // [ { padding: -155 }, 1 ],
   //         // [ { margin: -5 }, 1 ],
            
   //         // [{translateY: 100}, 1]
   //         // [{translateY: 100}, 1]

      // // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
      // // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: .8 }, 0.25, { easing: "spring" } ]
    ]
});



$.Velocity.RegisterUI("hoverStage", {
    defaultDuration: 3000,
    calls: [ 
            
            
            [ { translateY: '-=300px' }, .7 ],
            [ { scale: 0.7 }, .2 ],
            // [ { height: 0.8 }, 1 ],
            // [ { padding: "+=50" }, 1 ],
            
            // [{translateY: 100}, 1]
            // [{translateY: 100}, 1]

      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});


$.Velocity.RegisterUI("entranceNarrator", {
    defaultDuration: 3000,
    calls: [ 
            
            [ { opacity: 1 }, 1 ],
            [ { scale: 0.4 }, 1 ],
            [ { height: 0.7 }, 1 ],
            // [ { padding: "+=50" }, 1 ],
            
            // [{translateY: 100}, 1]
            // [{translateY: 100}, 1]

      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});

$.Velocity.RegisterUI("chaosIn", {
    defaultDuration: 3000,
    calls: [ 
            
            [ { opacity: 1 }, 1 ],
            [ { scale: 0.4 }, 1 ],
            [ { height: 0.7 }, 1 ],
            // [ { padding: "+=50" }, 1 ],
            
            // [{translateY: 100}, 1]
            // [{translateY: 100}, 1]

      // [ { scaleY: .6 }, 0.25, { easing: "spring" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});



$.Velocity.RegisterUI("titleSequence", {
    defaultDuration: 3000,
    calls: [ 
            // [ { opacity: 1 }, 0.50 ],
            [ { scale: 1.6 }, 1, { easing: "easeInCubic" } ],

            // [ { scale: .6 }, 0.50 ],
            // [ { scale: 1 }, 0.50 ],
      [ { translateX: -80 }, 1, { easing: "easeInCubic" } ],
      // [ { lineHeight: 3.5 }, 0.50 ],
      // [ { scaleY: 1 }, 0.25, { easing: "spring" } ]
    ]
});


$.Velocity.RegisterUI("transition.spreadIn", {
    defaultDuration: 2000,
    calls: [ 
            [ { letterSpacing: -55 } ],
            [ { scale: .2 } ],


            [ { opacity: 1 } ],
    ],
                 // reset: { letterSpacing: 90 }
});


$.Velocity.RegisterUI("transition.spreadEven", {
    defaultDuration: 2000,
    calls: [ 
            [ { letterSpacing: 2.5  } ],
            [ { scale: 1  } ],
            [ { padding: -15  } ],
    ],
                 // reset: { letterSpacing: 90 }
});

$.Velocity.RegisterUI("transition.quickInOut", {
    defaultDuration: 2000,
    calls: [ 
            [ { opacity:1 } ],
            [ { letterSpacing: 2.5  } ],
            [ { scale: function(i, element){return i*.01}  } ],
            [ { padding: -15  } ],
    ],
                 // reset: { letterSpacing: 90 }
});


$.Velocity.RegisterUI("transition.mixItUp", {
    defaultDuration: 2000,
    calls: [ 
            [ { opacity:1 } ],
            // [ { letterSpacing: 2.5  } ],
            // [ { translateX: function(i, total) { return i * 100; } } ],
            
        
            // [ { translateX: -90} ],
            [ { rotateZ: -90} ],
            // [ { scale: .4 } ],

    ],
                 // reset: { letterSpacing: 90 }
});

$.Velocity.RegisterUI("transition.ladderIn", {
    defaultDuration: 2000,
    calls: [ 
            // [ { opacity:1 } ],
            // [ { translateX: function(i, total) { return i * 100; } } ],        
            // [ { translateX: -90} ],
            [ { rotateZ: -90} ],
            // [ { scale: .4 } ],

    ],
                 // reset: { letterSpacing: 90 }
});


$.Velocity.RegisterUI("transition.defaultIn", {
    defaultDuration: 2000,
    calls: [ 
            // [ { translateX: function(i, total) { return i * 100; } } ],        
            [ { scale:.005 }],
            [ { opacity:1 } ],
            [ { scale:1} ],

            // [ { rotateZ: -90} ],
            // [ { scale: .4 } ],

    ],
                 // reset: { letterSpacing: 90 }
});

$.Velocity.RegisterUI("transition.defaultOut", {
    defaultDuration: 2000,
    calls: [ 
            // [ { translateX: function(i, total) { return i * 100; } } ],        
            [ { scale:.005 }],
           

            // [ { rotateZ: -90} ],
            // [ { scale: .4 } ],

    ],
                 // reset: { letterSpacing: 90 }
});


$.Velocity.RegisterUI("transition.soultrainIn", {
    defaultDuration: 2000,
    calls: [ 
            // [ { translateX: function(i, total) { return i * 100; } } ],        
            [ { opacity:1 }],
            [ { rotateZ:45 }],
            [ { padding:25 }],
           
           

            // [ { rotateZ: -90} ],
            // [ { scale: .4 } ],

    ],
                 // reset: { letterSpacing: 90 }
});



$.Velocity
   .RegisterEffect("shadowIn", {
      defaultDuration: 1000,
      calls: [
        [ { opacity: 1, scale: 1 }, 0.4 ] ,
        [ { boxShadowBlur: 50 }, 0.6 ]
       ]
   })
   .RegisterEffect("shadowOut", {
      defaultDuration: 800,
      calls: [
        // We reverse the order to mirror the "In" direction
        [ { boxShadowBlur: 50 }, 0.2 ],
        [ { opacity: 0, scale: 0 }, 0.8 ]
       ]
   });