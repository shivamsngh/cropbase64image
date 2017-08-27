/**
   * Crop image to particular size and 
   * pass callback function with new base64
   * @param imgUri 
   * @param width 
   * @param height 
   */

function cropImage(imgUri, width = 400, height = 300, callback) {
    try {

        let resize_canvas = document.createElement('canvas');
        let orig_src = new Image();
        orig_src.src = imgUri;
        orig_src.onload = function () {
            resize_canvas.width = width;
            resize_canvas.height = height;
            let cnv = resize_canvas.getContext('2d');
            cnv.drawImage(orig_src, 110, 490, width, height, 0, 0, width, height);
            let newimgUri = resize_canvas.toDataURL("image/png").toString();
            callback(newimgUri);
        }
    }
    catch (e) {
        console.log("Couldn't crop image due to", e);
        window.alert("Couldn't crop image due to", e);
        callback(imgUri);
    }
}