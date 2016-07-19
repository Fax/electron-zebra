// Here is the starting point for your application code.
// All stuff below is just to show you how it works. You can delete all of it.

// Use new ES6 modules syntax for everything.
import os from 'os'; // native node.js module
import { remote } from 'electron'; // native electron module
import jetpack from 'fs-jetpack'; // module loaded from npm
import { greet } from './hello_world/hello_world'; // code authored by you in this project
import env from './env';

console.log('Loaded environment variables:', env);

var app = remote.app;
var appDir = jetpack.cwd(app.getAppPath());

// Holy crap! This is browser window with HTML and stuff, but I can read
// here files like it is node.js! Welcome to Electron world :)
console.log('The author of this app is:', appDir.read('package.json', 'json').author);

document.addEventListener('DOMContentLoaded', function () {
   
		
});
		    zebra.ready(function() {
				// import all classes, functions and cosntans from 
				// zebra.ui, zebra.layout packages
				

				// create canvas
			    var root = (new zebra.ui.zCanvas("test2")).root;
			    root.properties({
			    	layout : new zebra.layout.ListLayout(4),
			    	border : new zebra.ui.Border(),
			    	padding: 8,
			    	kids: [
			    		new zebra.ui.BorderPan("Check", new zebra.ui.Panel({
			    			layout : new zebra.layout.ListLayout(), 
			    			padding: 6,
			    			kids: [
			    				new zebra.ui.Checkbox("Checkbox 1").properties({ value:true }),
			    				new zebra.ui.Checkbox("Checkbox 2"),
			    				new zebra.ui.Checkbox("Checkbox 3").properties({ enabled: false })
			    			]
			    		})),

			    		new zebra.ui.BorderPan("Combo", new zebra.ui.Panel({
			    			layout  : new zebra.layout.ListLayout(), 
			    			padding : 6,
			    			kids    : [
			    				new zebra.ui.Combo(["Item 1", "Item 2", "Item 3"])
			    			]
			    		})),

			    		new zebra.ui.BorderPan("Tree", new zebra.ui.Panel({
			    			layout: new zebra.layout.BorderLayout(),
			    			preferredSize: [-1, 75],
				    		kids: { CENTER : new zebra.ui.tree.Tree({ value:"Root", kids : [ { value : "Item 1", kids:[ { value: "Item 2"} ] } ]  }) }
			    		}))
			    	]
                });
                

                 // create Canvas and fill it with content

                var colorTextField = new zebra.ui.TextField();

  new zebra.ui.zCanvas("test").root.properties({
    padding:6,
    border: zebra.ui.borders.plain,
    layout: new zebra.layout.BorderLayout(6,6),
    kids  : {
      BOTTOM: colorTextField,
      // create anonymous class that implements
      // mouse pressed event handler
      CENTER: new zebra.ui.ImagePan("assets/image.jpg", [
        function mousePressed(e) {
          var ctx = this.getCanvas().$context, // get 2d context
              i = ctx.getImageData(e.absX, e.absY, 1, 1).data,
              c = "rgb("+ i[0] + "," + i[1] + "," + i[2] +")";
           // find text field component and fill it with RGB code
          
          
           colorTextField.setValue(c);
        }
      ])
    }
  });
});

