import React,{useEffect} from 'react'

const Canvas = ({children},{props}) =>{
    useEffect(() => {
        class ObjectInit {
            // constructor is Initialization of object

            initShape (args) {
                var box = document.getElementById('canvas');
                let x = args[0];
                let y = args[1];
                let w = args[2];
                let h = args[3];
                let color = args[4];
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = color;
                ctx.fillRect(x, y, w, h);
            }

            initText (text) {
                var ctx = document.getElementById('canvas').getContext('2d');
                let font = text[0];
                let strings = text[1];
                let x = text[2];
                let y = text[3];
                ctx.font = font;
                ctx.fillText(strings, 10, 50);
            }

            }

        // x-padding,y-padding, width,height,color

        let c = new ObjectInit();
        let text = 'do you like VR?'
        c.initShape([20,60,222,296,'#226']);
        c.initShape([120,100,200,200,'#000']);
        c.initShape([10,40,222,256,'#926']);
        c.initText(['21px serif', text,50,20]);
    })
    // object output
    return(
        <>
            <canvas id="canvas" width="400" height="200" ></canvas>
        </>
    )
}

export default Canvas
