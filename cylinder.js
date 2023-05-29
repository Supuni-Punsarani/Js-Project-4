
function area(){
    //alert("Button test");
    let r=parseFloat(document.getElementById("radius").value);
    let h=parseFloat(document.getElementById("height").value);
    const pi=22/7;
    document.getElementById("volume").value=(2*pi*r*r)+(2*pi*r*h);
  
}