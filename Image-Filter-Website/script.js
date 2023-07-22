var img, grayimg, redimg, greenimg, blueimg, rainbowimg;

function upload(){
    var can = document.getElementById("canvas");
    var inp = document.getElementById("finput");
    img = new SimpleImage(inp);
    grayimg = new SimpleImage(inp);
    redimg = new SimpleImage(inp);
    greenimg = new SimpleImage(inp);
    blueimg = new SimpleImage(inp);
    rainbowimg = new SimpleImage(inp);
    img.drawTo(can);
}

function makeGray(){
    if(imageloaded(grayimg)){
        for(var pixel of grayimg.values()){
            var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
            pixel.setRed(avg); pixel.setGreen(avg); pixel.setBlue(avg);
        }
        var canvas = document.getElementById("canvas");
        grayimg.drawTo(canvas);
    }
}

function makeRed(){
    if(imageloaded(redimg)){
        for(var pixel of redimg.values()){
            pixel.setRed(255);
        }
        var canvas = document.getElementById("canvas");
        redimg.drawTo(canvas);
    }
}

function makeGreen(){
    if(imageloaded(greenimg)){
        for(var pixel of greenimg.values()){
            pixel.setGreen(255);
        }
        var canvas = document.getElementById("canvas");
        greenimg.drawTo(canvas);
    }
}

function makeBlue(){
    if(imageloaded(blueimg)){
        for(var pixel of blueimg.values()){
            pixel.setBlue(255);
        }
        var canvas = document.getElementById("canvas");
        blueimg.drawTo(canvas);
    }
}

function makeRainbow(){
    if(imageloaded(rainbowimg)){
        var strip = rainbowimg.height/7;
        for(var pixel of rainbowimg.values()){
            var pix_y = pixel.getY();
            if(pix_y < strip){
                pixel.setRed(148); pixel.setBlue(211);
            } 
            else if (pix_y >= strip && pix_y < strip * 2){
                pixel.setRed(75); pixel.setBlue(130);
            }
            else if (pix_y >= strip*2 && pix_y < strip*3) pixel.setBlue(255);
            else if (pix_y >= strip*3 && pix_y < strip*4) pixel.setGreen(255);
            else if (pix_y >= strip*4 && pix_y < strip*5){
                pixel.setRed(255); pixel.setGreen(255);
            }
            else if (pix_y >= strip*5 && pix_y < strip*6){
                pixel.setRed(255); pixel.setGreen(127);
            }
            else pixel.setRed(255);
        }
        var canvas = document.getElementById("canvas");
        rainbowimg.drawTo(canvas);
    }
}

function resetImage(){
    if(imageloaded(img)){
        var canvas = document.getElementById("canvas");
        img.drawTo(canvas);
    }
}

function imageloaded(img){
    if(img == null || !img.complete()){
        alert("Image has not loaded yet");
        return false;
    }
    else return true;
}