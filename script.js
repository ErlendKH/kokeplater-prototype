
// Variable for colors?
let colorBackground = '#111111';
// let colorButtonActive = 'red';
let colorButtonActive = 'tomato';
// let colorButtonOn = 'darkgray';
let colorButtonOn = 'grey';
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
        $('#tl0').css('color', colorButtonActive);
        setTopLeftValue('0');
    })
    $("#tl1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl1').css('color', colorButtonActive);
        setTopLeftValue('1');
        topLeftWasOn = true;
    })
    $("#tl2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl2').css('color', colorButtonActive);
        setTopLeftValue('2');
        topLeftWasOn = true;
    })
    $("#tl3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl3').css('color', colorButtonActive);
        setTopLeftValue('3');
        topLeftWasOn = true;
    })
    $("#tl4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl4').css('color', colorButtonActive);
        setTopLeftValue('4');
        topLeftWasOn = true;
    })
    $("#tl5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl5').css('color', colorButtonActive);
        setTopLeftValue('5');
        topLeftWasOn = true;
    })
    $("#tl6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl6').css('color', colorButtonActive);
        setTopLeftValue('6');
        topLeftWasOn = true;
    })
    $("#tl7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl7').css('color', colorButtonActive);
        setTopLeftValue('7');
        topLeftWasOn = true;
    })
    $("#tl8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl8').css('color', colorButtonActive);
        setTopLeftValue('8');
        topLeftWasOn = true;
    })
    $("#tl9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopLeft(colorButtonOn);
        $('#tl9').css('color', colorButtonActive);
        setTopLeftValue('9');
        topLeftWasOn = true;
    })

    // Top Right:

    $("#tr0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr0').css('color', colorButtonActive);
        setTopRightValue('0');
    })
    $("#tr1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr1').css('color', colorButtonActive);
        setTopRightValue('1');
        topRightWasOn = true;
    })
    $("#tr2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr2').css('color', colorButtonActive);
        setTopRightValue('2');
        topRightWasOn = true;
    })
    $("#tr3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr3').css('color', colorButtonActive);
        setTopRightValue('3');
        topRightWasOn = true;
    })
    $("#tr4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr4').css('color', colorButtonActive);
        setTopRightValue('4');
        topRightWasOn = true;
    })
    $("#tr5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr5').css('color', colorButtonActive);
        setTopRightValue('5');
        topRightWasOn = true;
    })
    $("#tr6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr6').css('color', colorButtonActive);
        setTopRightValue('6');
        topRightWasOn = true;
    })
    $("#tr7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr7').css('color', colorButtonActive);
        setTopRightValue('7');
        topRightWasOn = true;
    })
    $("#tr8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr8').css('color', colorButtonActive);
        setTopRightValue('8');
        topRightWasOn = true;
    })
    $("#tr9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsTopRight(colorButtonOn);
        $('#tr9').css('color', colorButtonActive);
        setTopRightValue('9');
        topRightWasOn = true;
    })

    // Bottom Left:

    $("#bl0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl0').css('color', colorButtonActive);
        setBottomLeftValue('0');
    })
    $("#bl1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl1').css('color', colorButtonActive);
        setBottomLeftValue('1');
        bottomLeftWasOn = true;
    })
    $("#bl2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl2').css('color', colorButtonActive);
        setBottomLeftValue('2');
        bottomLeftWasOn = true;
    })
    $("#bl3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl3').css('color', colorButtonActive);
        setBottomLeftValue('3');
        bottomLeftWasOn = true;
    })
    $("#bl4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl4').css('color', colorButtonActive);
        setBottomLeftValue('4');
        bottomLeftWasOn = true;
    })
    $("#bl5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl5').css('color', colorButtonActive);
        setBottomLeftValue('5');
        bottomLeftWasOn = true;
    })
    $("#bl6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl6').css('color', colorButtonActive);
        setBottomLeftValue('6');
        bottomLeftWasOn = true;
    })
    $("#bl7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl7').css('color', colorButtonActive);
        setBottomLeftValue('7');
        bottomLeftWasOn = true;
    })
    $("#bl8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl8').css('color', colorButtonActive);
        setBottomLeftValue('8');
        bottomLeftWasOn = true;
    })
    $("#bl9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomLeft(colorButtonOn);
        $('#bl9').css('color', colorButtonActive);
        setBottomLeftValue('9');
        bottomLeftWasOn = true;
    })

    // Bottom Right:

    $("#br0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br0').css('color', colorButtonActive);
        setBottomRightValue('0');
    })
    $("#br1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br1').css('color', colorButtonActive);
        setBottomRightValue('1');
        bottomRightWasOn = true;
    })
    $("#br2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br2').css('color', colorButtonActive);
        setBottomRightValue('2');
        bottomRightWasOn = true;
    })
    $("#br3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br3').css('color', colorButtonActive);
        setBottomRightValue('3');
        bottomRightWasOn = true;
    })
    $("#br4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br4').css('color', colorButtonActive);
        setBottomRightValue('4');
        bottomRightWasOn = true;
    })
    $("#br5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br5').css('color', colorButtonActive);
        setBottomRightValue('5');
        bottomRightWasOn = true;
    })
    $("#br6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br6').css('color', colorButtonActive);
        setBottomRightValue('6');
        bottomRightWasOn = true;
    })
    $("#br7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br7').css('color', colorButtonActive);
        setBottomRightValue('7');
        bottomRightWasOn = true;
    })
    $("#br8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br8').css('color', colorButtonActive);
        setBottomRightValue('8');
        bottomRightWasOn = true;
    })
    $("#br9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        setColorsBottomRight(colorButtonOn);
        $('#br9').css('color', colorButtonActive);
        setBottomRightValue('9');
        bottomRightWasOn = true;
    })

});

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

// When the power is on, all buttons are white by default.

function turnOnButtons(){
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

}

function turnOn(){
    turnOnButtons();

    $("#power-indicator").attr('src', 'circle-small-red.png');

    // By default, set all values to 0:
    $('#tl0').css('color', colorButtonActive);
    $('#tr0').css('color', colorButtonActive);
    $('#bl0').css('color', colorButtonActive);
    $('#br0').css('color', colorButtonActive);

    isActive = true;
}

function turnOff(){
    turnOffButtons();
    hideValues();

    $("#power-indicator").attr('src', 'circle-small.png');

    isActive = false;
}

function lock(){
    isLocked = true;
    $("#lock-indicator").attr('src', 'circle-small-red.png');
}

function unlock(){
    isLocked = false;
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

    } else {
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

    } else {
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

    } else {
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

    } else {
        $("#value-br").css('color', colorValueOn);
        $("#value-br").text(val);
    }
}

function hideTopLeftValue(){
    $("#value-tl").css('color', colorBackground);
    $("#value-tl").text('');
}

function hideTopRightValue(){
    $("#value-tr").css('color', colorBackground);
    $("#value-tr").text('');
}

function hideBottomLeftValue(){
    $("#value-bl").css('color', colorBackground);
    $("#value-bl").text('');
}

function hideBottomRightValue(){
    $("#value-br").css('color', colorBackground);
    $("#value-tr").text('');
}

function hideValues(){
    hideTopLeftValue();
    hideTopRightValue();
    hideBottomLeftValue();
    hideBottomRightValue();
}

function electricityOn(){
    $("#plug").attr('src', 'rounded-plug-yellow.png');
    $("#plug-desc").text("Power is on");

    electricityIsOn = true;
}

function electricityOff(){
    $("#plug").attr('src', 'rounded-plug-gray.png');
    $("#plug-desc").text("Power is off");

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

