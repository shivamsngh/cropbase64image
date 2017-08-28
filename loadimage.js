(function () {
    console.log("Ready");
    var sourceImage = document.getElementById('sourceImage');
    var croppedImage = document.getElementById('croppedImage');
    var sourceImageString = document.getElementById('sourceImageTextBox');
    var croppedImageString = document.getElementById('croppedImageTextBox');
    var width = document.getElementById('width');
    var height = document.getElementById('height');
})();

/**
 * Tap crop button handler
 */
function crop() {
    console.log("Crop Clicked");
    croppedImageString = document.getElementById('croppedImageTextBox');
    let xstart = document.getElementById('xstart').value;
    let ystart = document.getElementById('ystart').value;
    cropImage(sourceImage.src, width.value, height.value, xstart, ystart, (imgUri) => {
        console.log(imgUri);
        console.log(width, height);
        croppedImageString.value = imgUri;
        croppedImage.src = imgUri;
    });

}

/**
 * Show image on update of base64 string in textarea
 */
function updateImageSrc() {
    sourceImageString = document.getElementById('sourceImageTextBox');
    try {
        sourceImage.src = sourceImageString.value;
    }
    catch (e) {
        console.log("Wrong String", e);
    }
}

/**
 * Reads image as base64 string
 * @param {*} input 
 */
function readImage(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            let img = document.getElementById('sourceImage');
            img.src = e.target.result;
            img.onload = function () {
                document.getElementById('sourceImageTextBox').value = e.target.result.toString();
                document.getElementById('resolution').innerHTML = `Resolution(widthXheight)-: ${img.naturalWidth}X${img.naturalHeight}`;
            }
        };
        reader.readAsDataURL(input.files[0]);
    }
}