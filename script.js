
    const rLab = document.getElementById("r-label");
    const gLab = document.getElementById("g-label");
    const bLab = document.getElementById("b-label");
    const rgbLab = document.getElementById("rgb-label-main");
    let Rslide = document.getElementById("r");
    let Gslide = document.getElementById("g");
    let Bslide = document.getElementById("b");


    //change slider values live

    Rslide.oninput = () =>  rLab.innerHTML = Rslide.value;
    Gslide.oninput = () =>  gLab.innerHTML = Gslide.value;
    Bslide.oninput = () =>  bLab.innerHTML = Bslide.value;
    

function changeRange() {
    // Get R,G,B values & Convert string into integer.
    var r = parseInt(document.getElementById("r").value);
    var g = parseInt(document.getElementById("g").value);
    var b = parseInt(document.getElementById("b").value);

    // Generate color. Example: #20b9ff
    var colour = rgbToHex(r,g,b);
    //"#" + hex(r) + hex(g) + hex(b);
     
    // Change background color and text.
    document.body.style.backgroundColor = colour
    document.getElementById("hex-label").innerText = colour;
    rLab.textContent = r;
    gLab.textContent = g;
    bLab.textContent = b;
    rgbLab.textContent = '(rgb) '+ r + ','+ g + ',' +b;
     
    if (r < 120 && g < 120 && b < 120) {
        document.querySelectorAll(".rgb-label, .tHeader, #hex-label").forEach(e => e.style.color = "white");
        
        
    } else {
        document.querySelectorAll(".rgb-label, .tHeader, #hex-label").forEach(e => e.style.color = "black");
    }
}

//make textbox work and do reverse hex to rbg

const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

console.log(rgbToHex(0, 255, 0)); // #ffffff


function hexToRGBA(hex, opacity) {
    return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).concat(isFinite(opacity) ? opacity : 1).join(',') + ')';
}

console.log(hexToRGBA("#ffffff",1));

