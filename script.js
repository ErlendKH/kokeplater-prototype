
// Variable for colors?
let colorBackground = '#111111';
// let colorButtonActive = 'red';
let colorButtonActive = 'tomato';
let colorButtonOn = 'darkgray';
let colorButtonOff = 'grey';
// let colorValueOn = 'tomato';
let colorValueOn = 'red';

let electricityIsOn = true;
let isActive = false;
let isLocked = false;

// Simulere "er varm"
let topLeftWasOn = false;
let topRightWasOn = false;
let bottomLeftWasOn =  false;
let bottomRightWasOn = false;

$(document).ready(function(){
    console.log('document ready triggered.');

    /* tl0 = document.getElementById("tl0"); */

    $("#plug").click(function(){

        if(electricityIsOn){
            electricityOff();
        } else {
            electricityOn();
        }

    });

    $("#power-switch").click(function(){

        if(!electricityIsOn) return;

        if(isLocked) return;

        if(isActive){
            turnOff();
        } else {
            turnOn();
        }

    });

    $("#lock").click(function(){

        if(!electricityIsOn) return;

        if(isActive) return;

        if(isLocked){
            unlock();
        } else {
            lock();
        }

    });

    // Top Left:

    $('#tl0').click(function(){
        // console.log('clicked on tl0.');
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl0').css('color', 'red');
        setTopLeftValue('0');
    })
    $("#tl1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl1').css('color', 'red');
        setTopLeftValue('1');
        topLeftWasOn = true;
    })
    $("#tl2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl2').css('color', 'red');
        setTopLeftValue('2');
        topLeftWasOn = true;
    })
    $("#tl3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl3').css('color', 'red');
        setTopLeftValue('3');
        topLeftWasOn = true;
    })
    $("#tl4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl4').css('color', 'red');
        setTopLeftValue('4');
        topLeftWasOn = true;
    })
    $("#tl5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl5').css('color', 'red');
        setTopLeftValue('5');
        topLeftWasOn = true;
    })
    $("#tl6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl6').css('color', 'red');
        setTopLeftValue('6');
        topLeftWasOn = true;
    })
    $("#tl7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl7').css('color', 'red');
        setTopLeftValue('7');
        topLeftWasOn = true;
    })
    $("#tl8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl8').css('color', 'red');
        setTopLeftValue('8');
        topLeftWasOn = true;
    })
    $("#tl9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl9').css('color', 'red');
        setTopLeftValue('9');
        topLeftWasOn = true;
    })

    // Top Right:

    $("#tr0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr0').css('color', 'red');
        setTopRightValue('0');
    })
    $("#tr1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr1').css('color', 'red');
        setTopRightValue('1');
        topRightWasOn = true;
    })
    $("#tr2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr2').css('color', 'red');
        setTopRightValue('2');
        topRightWasOn = true;
    })
    $("#tr3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr3').css('color', 'red');
        setTopRightValue('3');
        topRightWasOn = true;
    })
    $("#tr4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr4').css('color', 'red');
        setTopRightValue('4');
        topRightWasOn = true;
    })
    $("#tr5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr5').css('color', 'red');
        setTopRightValue('5');
        topRightWasOn = true;
    })
    $("#tr6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr6').css('color', 'red');
        setTopRightValue('6');
        topRightWasOn = true;
    })
    $("#tr7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr7').css('color', 'red');
        setTopRightValue('7');
        topRightWasOn = true;
    })
    $("#tr8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr8').css('color', 'red');
        setTopRightValue('8');
        topRightWasOn = true;
    })
    $("#tr9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr9').css('color', 'red');
        setTopRightValue('9');
        topRightWasOn = true;
    })

    // Bottom Left:

    $("#bl0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl0').css('color', 'red');
        setBottomLeftValue('0');
    })
    $("#bl1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl1').css('color', 'red');
        setBottomLeftValue('1');
        bottomLeftWasOn = true;
    })
    $("#bl2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl2').css('color', 'red');
        setBottomLeftValue('2');
        bottomLeftWasOn = true;
    })
    $("#bl3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl3').css('color', 'red');
        setBottomLeftValue('3');
        bottomLeftWasOn = true;
    })
    $("#bl4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl4').css('color', 'red');
        setBottomLeftValue('4');
        bottomLeftWasOn = true;
    })
    $("#bl5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl5').css('color', 'red');
        setBottomLeftValue('5');
        bottomLeftWasOn = true;
    })
    $("#bl6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl6').css('color', 'red');
        setBottomLeftValue('6');
        bottomLeftWasOn = true;
    })
    $("#bl7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl7').css('color', 'red');
        setBottomLeftValue('7');
        bottomLeftWasOn = true;
    })
    $("#bl8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl8').css('color', 'red');
        setBottomLeftValue('8');
        bottomLeftWasOn = true;
    })
    $("#bl9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl9').css('color', 'red');
        setBottomLeftValue('9');
        bottomLeftWasOn = true;
    })

    // Bottom Right:

    $("#br0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br0').css('color', 'red');
        setBottomRightValue('0');
    })
    $("#br1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br1').css('color', 'red');
        setBottomRightValue('1');
        bottomRightWasOn = true;
    })
    $("#br2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br2').css('color', 'red');
        setBottomRightValue('2');
        bottomRightWasOn = true;
    })
    $("#br3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br3').css('color', 'red');
        setBottomRightValue('3');
        bottomRightWasOn = true;
    })
    $("#br4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br4').css('color', 'red');
        setBottomRightValue('4');
        bottomRightWasOn = true;
    })
    $("#br5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br5').css('color', 'red');
        setBottomRightValue('5');
        bottomRightWasOn = true;
    })
    $("#br6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br6').css('color', 'red');
        setBottomRightValue('6');
        bottomRightWasOn = true;
    })
    $("#br7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br7').css('color', 'red');
        setBottomRightValue('7');
        bottomRightWasOn = true;
    })
    $("#br8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br8').css('color', 'red');
        setBottomRightValue('8');
        bottomRightWasOn = true;
    })
    $("#br9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br9').css('color', 'red');
        setBottomRightValue('9');
        bottomRightWasOn = true;
    })

});

// function resetTopLeft(){
//     $('#tl0').css('color', 'white');
//     $('#tl1').css('color', 'white');
//     $('#tl2').css('color', 'white');
//     $('#tl3').css('color', 'white');
//     $('#tl4').css('color', 'white');
//     $('#tl5').css('color', 'white');
//     $('#tl6').css('color', 'white');
//     $('#tl7').css('color', 'white');
//     $('#tl8').css('color', 'white');
//     $('#tl9').css('color', 'white');
// }

// function resetTopRight(){
//     $('#tr0').css('color', 'white');
//     $('#tr1').css('color', 'white');
//     $('#tr2').css('color', 'white');
//     $('#tr3').css('color', 'white');
//     $('#tr4').css('color', 'white');
//     $('#tr5').css('color', 'white');
//     $('#tr6').css('color', 'white');
//     $('#tr7').css('color', 'white');
//     $('#tr8').css('color', 'white');
//     $('#tr9').css('color', 'white');
// }

// function resetBottomLeft(){
//     $('#bl0').css('color', 'white');
//     $('#bl1').css('color', 'white');
//     $('#bl2').css('color', 'white');
//     $('#bl3').css('color', 'white');
//     $('#bl4').css('color', 'white');
//     $('#bl5').css('color', 'white');
//     $('#bl6').css('color', 'white');
//     $('#bl7').css('color', 'white');
//     $('#bl8').css('color', 'white');
//     $('#bl9').css('color', 'white');
// }

// function resetBottomRight(){
//     $('#br0').css('color', 'white');
//     $('#br1').css('color', 'white');
//     $('#br2').css('color', 'white');
//     $('#br3').css('color', 'white');
//     $('#br4').css('color', 'white');
//     $('#br5').css('color', 'white');
//     $('#br6').css('color', 'white');
//     $('#br7').css('color', 'white');
//     $('#br8').css('color', 'white');
//     $('#br9').css('color', 'white');
// }

// Kan velge farge:
function setColorsTopLeft(color){
    $('#tl0').css('color', color);
    $('#tl1').css('color', color);
    $('#tl2').css('color', color);
    $('#tl3').css('color', color);
    $('#tl4').css('color', color);
    $('#tl5').css('color', color);
    $('#tl6').css('color', color);
    $('#tl7').css('color', color);
    $('#tl8').css('color', color);
    $('#tl9').css('color', color);
}

function setColorsTopRight(color){
    $('#tr0').css('color', color);
    $('#tr1').css('color', color);
    $('#tr2').css('color', color);
    $('#tr3').css('color', color);
    $('#tr4').css('color', color);
    $('#tr5').css('color', color);
    $('#tr6').css('color', color);
    $('#tr7').css('color', color);
    $('#tr8').css('color', color);
    $('#tr9').css('color', color);
}

function setColorsBottomLeft(color){
    $('#bl0').css('color', color);
    $('#bl1').css('color', color);
    $('#bl2').css('color', color);
    $('#bl3').css('color', color);
    $('#bl4').css('color', color);
    $('#bl5').css('color', color);
    $('#bl6').css('color', color);
    $('#bl7').css('color', color);
    $('#bl8').css('color', color);
    $('#bl9').css('color', color);
}

function setColorsBottomRight(color){
    $('#br0').css('color', color);
    $('#br1').css('color', color);
    $('#br2').css('color', color);
    $('#br3').css('color', color);
    $('#br4').css('color', color);
    $('#br5').css('color', color);
    $('#br6').css('color', color);
    $('#br7').css('color', color);
    $('#br8').css('color', color);
    $('#br9').css('color', color);
}

// 

function resetAll(){
    resetTopLeft();
    resetTopRight();
    resetBottomLeft();
    resetBottomRight();
}

// When the power is on, all buttons are white by default.

function turnOnButtons(){
    // resetTopLeft();
    // resetTopRight();
    // resetBottomLeft();
    // resetBottomRight();

    setColorsTopLeft(colorButtonOn);
    setColorsTopRight(colorButtonOn);
    setColorsBottomLeft(colorButtonOn);
    setColorsBottomRight(colorButtonOn);
}

// When the power is off, all buttons are gray.

function turnOffButtons(){

    setColorsTopLeft(colorButtonOff);
    setColorsTopRight(colorButtonOff);
    setColorsBottomLeft(colorButtonOff);
    setColorsBottomRight(colorButtonOff);

    // $('#tl0').css('color', 'grey');
    // $('#tl1').css('color', 'grey');
    // $('#tl2').css('color', 'grey');
    // $('#tl3').css('color', 'grey');
    // $('#tl4').css('color', 'grey');
    // $('#tl5').css('color', 'grey');
    // $('#tl6').css('color', 'grey');
    // $('#tl7').css('color', 'grey');
    // $('#tl8').css('color', 'grey');
    // $('#tl9').css('color', 'grey');

    // $('#tr0').css('color', 'grey');
    // $('#tr1').css('color', 'grey');
    // $('#tr2').css('color', 'grey');
    // $('#tr3').css('color', 'grey');
    // $('#tr4').css('color', 'grey');
    // $('#tr5').css('color', 'grey');
    // $('#tr6').css('color', 'grey');
    // $('#tr7').css('color', 'grey');
    // $('#tr8').css('color', 'grey');
    // $('#tr9').css('color', 'grey');

    // $('#bl0').css('color', 'grey');
    // $('#bl1').css('color', 'grey');
    // $('#bl2').css('color', 'grey');
    // $('#bl3').css('color', 'grey');
    // $('#bl4').css('color', 'grey');
    // $('#bl5').css('color', 'grey');
    // $('#bl6').css('color', 'grey');
    // $('#bl7').css('color', 'grey');
    // $('#bl8').css('color', 'grey');
    // $('#bl9').css('color', 'grey');

    // $('#br0').css('color', 'grey');
    // $('#br1').css('color', 'grey');
    // $('#br2').css('color', 'grey');
    // $('#br3').css('color', 'grey');
    // $('#br4').css('color', 'grey');
    // $('#br5').css('color', 'grey');
    // $('#br6').css('color', 'grey');
    // $('#br7').css('color', 'grey');
    // $('#br8').css('color', 'grey');
    // $('#br9').css('color', 'grey');
}

function turnOn(){
    turnOnButtons();
    // $("#power-switch").attr('src', 'power-switch-lime.png');
    // $("#lock").attr('src', 'padlock-gray.png');

    $("#power-indicator").attr('src', 'circle-small-red.png');

    // By default, set all values to 0:
    $('#tl0').css('color', 'red');
    $('#tr0').css('color', 'red');
    $('#bl0').css('color', 'red');
    $('#br0').css('color', 'red');

    isActive = true;
}

function turnOff(){
    turnOffButtons();
    hideValues();
    // $("#power-switch").attr('src', 'power-switch-white.png');
    // $("#lock").attr('src', 'padlock-white.png');

    $("#power-indicator").attr('src', 'circle-small.png');

    isActive = false;
}

function lock(){
    isLocked = true;
    // $("#power-switch").attr('src', 'power-switch-gray.png');
    // $("#lock").attr('src', 'padlock-lime.png');

    $("#lock-indicator").attr('src', 'circle-small-red.png');
}

function unlock(){
    isLocked = false;
    // $("#power-switch").attr('src', 'power-switch-white.png');
    // $("#lock").attr('src', 'padlock-white.png');

    $("#lock-indicator").attr('src', 'circle-small.png');
}

function setTopLeftValue(val){
    if(val == '0'){

        if(!topLeftWasOn){
            hideTopLeftValue();
        } else {
            // Vis indikator på varme...
            $("#value-tl").css('color', colorValueOn);
            $("#value-tl").text('.');
        }

        // hideTopLeftValue();
        // $("#value-tl").css('color', 'black');
    } else {
        // $("#value-tl").css('color', 'red');

        // $("#value-tl").css('color', 'tomato');
        $("#value-tl").css('color', colorValueOn);
        $("#value-tl").text(val);
    }
}

function setTopRightValue(val){
    if(val == '0'){

        if(!topRightWasOn){
            hideTopRightValue(); 
        } else {
            $("#value-tr").css('color', colorValueOn);
            $("#value-tr").text('.');
        }

        // hideTopRightValue();
        // $("#value-tr").css('color', 'black');
    } else {
        // $("#value-tr").css('color', 'red');
        // $("#value-tr").css('color', 'tomato');
        $("#value-tr").css('color', colorValueOn);
        $("#value-tr").text(val);
    }
}

function setBottomLeftValue(val){
    if(val == '0'){

        if(!bottomLeftWasOn){
            hideBottomLeftValue();
        } else {
            $("#value-bl").css('color', colorValueOn);
            $("#value-bl").text('.');
        }

        // hideBottomLeftValue();
        // $("#value-bl").css('color', 'black');
    } else {
        // $("#value-bl").css('color', 'red');
        // $("#value-bl").css('color', 'tomato');
        $("#value-bl").css('color', colorValueOn);
        $("#value-bl").text(val);
    }
}

function setBottomRightValue(val){
    if(val == '0'){

        if(!bottomRightWasOn){
            hideBottomRightValue();
        } else {
            $("#value-br").css('color', colorValueOn);
            $("#value-br").text('.');
        }

        // hideBottomRightValue();
        // $("#value-br").css('color', 'black');
    } else {
        // $("#value-br").css('color', 'red');
        // $("#value-br").css('color', 'tomato');
        $("#value-br").css('color', colorValueOn);
        $("#value-br").text(val);
    }
}

function hideTopLeftValue(){
    // $("#value-tl").css('color', 'black');
    $("#value-tl").css('color', colorBackground);
    $("#value-tl").text('');
}

function hideTopRightValue(){
    // $("#value-tr").css('color', 'black');
    $("#value-tr").css('color', colorBackground);
    $("#value-tr").text('');
}

function hideBottomLeftValue(){
    // $("#value-bl").css('color', 'black');
    $("#value-bl").css('color', colorBackground);
    $("#value-bl").text('');
}

function hideBottomRightValue(){
    // $("#value-br").css('color', 'black');
    $("#value-br").css('color', colorBackground);
    $("#value-tr").text('');
}

function hideValues(){
    hideTopLeftValue();
    hideTopRightValue();
    hideBottomLeftValue();
    hideBottomRightValue();
    // $("#value-tl").css('color', 'black');
    // $("#value-tr").css('color', 'black');
    // $("#value-bl").css('color', 'black');
    // $("#value-br").css('color', 'black');
}

function electricityOn(){
    $("#plug").attr('src', 'rounded-plug-yellow.png');
    $("#plug-desc").text("Power is on");

    // $("#power-switch").attr('src', 'power-switch-white.png');
    // $("#lock").attr('src', 'padlock-white.png');

    // turnOnButtons();

    electricityIsOn = true;
}

function electricityOff(){
    $("#plug").attr('src', 'rounded-plug-gray.png');
    $("#plug-desc").text("Power is off");

    // $("#power-switch").attr('src', 'power-switch-gray.png');
    // $("#lock").attr('src', 'padlock-gray.png');

    $("#power-indicator").attr('src', 'circle-small.png');
    $("#lock-indicator").attr('src', 'circle-small.png');

    turnOffButtons();
    hideValues();

    electricityIsOn = false;
    isActive = false;
    isLocked = false;

    topLeftWasOn = false;
    topRightWasOn = false;
    bottomLeftWasOn = false;
    bottomRightWasOn = false;
}

