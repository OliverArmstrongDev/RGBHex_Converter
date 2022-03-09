
    const rLab = document.getElementById("r-label");
    const gLab = document.getElementById("g-label");
    const bLab = document.getElementById("b-label");
    const rgbBtn = document.getElementById("copyRGB");
    const hexBtn = document.getElementById("copyHex");
    const convertBtn = document.getElementById("rgbHexConvert");
    const rgbHexInp = document.getElementById("RGBHex-input");
    const sliderLab = document.getElementById("sliderLabel");
    const rgbLab = document.getElementById("rgb-label-main");
    const hexLab = document.getElementById("hex-label");
    let Rslide = document.getElementById("r");
    let Gslide = document.getElementById("g");
    let Bslide = document.getElementById("b");
    let rgbReturn = [[],[]];


    //change slider values live

    Rslide.oninput = () =>  changeRange();
    Gslide.oninput = () =>  changeRange();
    Bslide.oninput = () =>  changeRange();
    
  
   //Functions...

const changeRange = (colour,colType) => {
    // Get R,G,B values & Convert string into integer.
    // 
    let r;
    let g;
    let b;
    let _colour;

    

    if(colType === "RGB" || colType === "HEX" ){
        
        console.table(colour);
        r = colour[1][0];
        g = colour[1][1];
        b = colour[1][2];
    }
    else{
        r = parseInt(document.getElementById("r").value);
        g = parseInt(document.getElementById("g").value);
        b = parseInt(document.getElementById("b").value);
    }


         colour === undefined || colour[0].length === 0 ? _colour = rgbToHex(r,g,b) : _colour = colour[0].toString(); //check rgb
        // _colour = rgbToHex(r,g,b);
        // Change background color and text.
        document.body.style.backgroundColor = _colour;
        document.getElementById("hex-label").innerText = _colour;
        rLab.textContent = r;
        gLab.textContent = g;
        bLab.textContent = b;
        rgbLab.textContent = '(rgb)'+ r + ','+ g + ',' +b;
        Rslide.value = r;
        Gslide.value = g;
        Bslide.value = b;
   
     
    if (r < 150 && g < 150 && b < 150) {
        document.querySelectorAll(".heading-main, .rgb-label, .sliderLabel, #hex-label, #rgb-label-main").forEach(e => e.style.color = "white");
        
        
    } else {
        document.querySelectorAll(".heading-main, .rgb-label, .sliderLabel, #hex-label, #rgb-label-main").forEach(e => e.style.color = "black");
    }
}

const isRGB =(_Val) => {
    rgbReturn = [[],[]]; // clear array
   if(_Val.includes(',') || _Val.toUpperCase().includes('RGB')) 
    {
        
        let rgbvals = _Val.toUpperCase().replace("(RGB)", "").split(',').map(v => parseInt(v));
        rgbReturn[0].push(rgbToHex(rgbvals[0],rgbvals[1],rgbvals[2])); //hex
        rgbReturn[1].push(rgbvals[0],rgbvals[1],rgbvals[2]); //rgb
        changeRange(rgbReturn, "HEX");
    }
    else{
        rgbReturn[0].push(_Val);
        rgbReturn[1].push(...hexToRGB(_Val));
        changeRange(rgbReturn, "RGB");
    }
   
}
const rgbToHex = (r, g, b) => {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    
}
const hexToRGB = (hexVal) => {
    if(hexVal.length > 3){
        var r = parseInt(hexVal.substr(1,2),16);
        var g = parseInt(hexVal.substr(3,2),16);
        var b = parseInt(hexVal.substr(5,2),16);    
        return [r,g,b];
      }    
      
}
const copyToClipboard = (element) => {
    
    var copyText = element.textContent;
    navigator.clipboard.writeText(copyText).then(() => {
        console.log("successfully copied");
      })
      .catch(() => {
        console.log("something went wrong");
      });
}

//Event Listeners

convertBtn.addEventListener("click", () => {
    isRGB(rgbHexInp.value)
    convertBtn.textContent = "Converted!"; 
    setTimeout(() => convertBtn.textContent = "Convert RGB/HEX", 500);
});

rgbBtn.addEventListener("click", () => {
    copyToClipboard(rgbLab);
    rgbBtn.textContent = "Copied!"; 
    setTimeout(() => rgbBtn.textContent = "Copy RGB Value", 1000);
});

hexBtn.addEventListener("click", () => {
    copyToClipboard(hexLab);
    hexBtn.textContent = "Copied!"; 
    setTimeout(() => hexBtn.textContent = "Copy Hex Value", 1000);
});

