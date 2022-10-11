// let tl0;
// let tl1;
// let tl2;
// let tl3;
// let tl4;
// let tl5;
// let tl6;
// let tl7;
// let tl8;
// let tl9;

// let tr0;
// let tr1;
// let tr2;
// let tr3;
// let tr4;
// let tr5;
// let tr6;
// let tr7;
// let tr8;
// let tr9;

// let bl0;
// let bl1;
// let bl2;
// let bl3;
// let bl4;
// let bl5;
// let bl6;
// let bl7;
// let bl8;
// let bl9;

// let br0;
// let br1;
// let br2;
// let br3;
// let br4;
// let br5;
// let br6;
// let br7;
// let br8;
// let br9;

let electricityIsOn = true;
let isActive = false;
let isLocked = false;

$(document).ready(function(){
    console.log('document ready triggered.');

    /* tl0 = document.getElementById("tl0"); */

    $("#plug").click(function(){

        if(electricityIsOn){
            electricityOff();
        } else {
            electricityOn();
        }

        // electricityIsOn = !electricityIsOn;
    });

    $("#power-switch").click(function(){

        if(!electricityIsOn) return;

        if(isLocked) return;

        if(isActive){
            turnOff();
        } else {
            turnOn();
        }

        // if(electricityIsOn){

        //     if(isActive){
        //         turnOff();

        //         // turnOffButtons();
        //         // $("#power-switch").attr('src', 'power-switch-white.png');
        //         // $("#lock").attr('src', 'padlock-white.png');
        //     } else {
        //         turnOn();

        //         // turnOnButtons();
        //         // $("#power-switch").attr('src', 'power-switch-lime.png');
        //         // $("#lock").attr('src', 'padlock-gray.png');
        //     }

        //     // isActive = !isActive;

        // }

    });

    $("#lock").click(function(){

        if(!electricityIsOn) return;

        if(isActive) return;

        if(isLocked){
            unlock();
        } else {
            lock();
        }

        // if(electricityIsOn){

        //     if(!isActive){

        //         if(isLocked){
        //             unlock();
        //         } else {
        //             lock();
        //         }

        //     }

        // }

    });

    // Top Left:

    $('#tl0').click(function(){
        // console.log('clicked on tl0.');
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl0').css('color', 'red');
        setTopLeftValue('0');
    })
    $("#tl1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl1').css('color', 'red');
        setTopLeftValue('1');
    })
    $("#tl2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl2').css('color', 'red');
        setTopLeftValue('2');
    })
    $("#tl3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl3').css('color', 'red');
        setTopLeftValue('3');
    })
    $("#tl4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl4').css('color', 'red');
        setTopLeftValue('4');
    })
    $("#tl5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl5').css('color', 'red');
        setTopLeftValue('5');
    })
    $("#tl6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl6').css('color', 'red');
        setTopLeftValue('6');
    })
    $("#tl7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl7').css('color', 'red');
        setTopLeftValue('7');
    })
    $("#tl8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl8').css('color', 'red');
        setTopLeftValue('8');
    })
    $("#tl9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopLeft();
        $('#tl9').css('color', 'red');
        setTopLeftValue('9');
    })

    // Top Right:

    $("#tr0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr0').css('color', 'red');
        setTopRightValue('0');
    })
    $("#tr1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr1').css('color', 'red');
        setTopRightValue('1');
    })
    $("#tr2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr2').css('color', 'red');
        setTopRightValue('2');
    })
    $("#tr3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr3').css('color', 'red');
        setTopRightValue('3');
    })
    $("#tr4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr4').css('color', 'red');
        setTopRightValue('4');
    })
    $("#tr5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr5').css('color', 'red');
        setTopRightValue('5');
    })
    $("#tr6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr6').css('color', 'red');
        setTopRightValue('6');
    })
    $("#tr7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr7').css('color', 'red');
        setTopRightValue('7');
    })
    $("#tr8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr8').css('color', 'red');
        setTopRightValue('8');
    })
    $("#tr9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetTopRight();
        $('#tr9').css('color', 'red');
        setTopRightValue('9');
    })

    // Bottom Left:

    $("#bl0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl0').css('color', 'red');
        setBottomLeftValue('0');
    })
    $("#bl1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl1').css('color', 'red');
        setBottomLeftValue('1');
    })
    $("#bl2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl2').css('color', 'red');
        setBottomLeftValue('2');
    })
    $("#bl3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl3').css('color', 'red');
        setBottomLeftValue('3');
    })
    $("#bl4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl4').css('color', 'red');
        setBottomLeftValue('4');
    })
    $("#bl5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl5').css('color', 'red');
        setBottomLeftValue('5');
    })
    $("#bl6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl6').css('color', 'red');
        setBottomLeftValue('6');
    })
    $("#bl7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl7').css('color', 'red');
        setBottomLeftValue('7');
    })
    $("#bl8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl8').css('color', 'red');
        setBottomLeftValue('8');
    })
    $("#bl9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomLeft();
        $('#bl9').css('color', 'red');
        setBottomLeftValue('9');
    })

    // Bottom Right:

    $("#br0").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br0').css('color', 'red');
        setBottomRightValue('0');
    })
    $("#br1").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br1').css('color', 'red');
        setBottomRightValue('1');
    })
    $("#br2").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br2').css('color', 'red');
        setBottomRightValue('2');
    })
    $("#br3").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br3').css('color', 'red');
        setBottomRightValue('3');
    })
    $("#br4").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br4').css('color', 'red');
        setBottomRightValue('4');
    })
    $("#br5").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br5').css('color', 'red');
        setBottomRightValue('5');
    })
    $("#br6").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br6').css('color', 'red');
        setBottomRightValue('6');
    })
    $("#br7").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br7').css('color', 'red');
        setBottomRightValue('7');
    })
    $("#br8").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br8').css('color', 'red');
        setBottomRightValue('8');
    })
    $("#br9").click(function(){
        if(!electricityIsOn || !isActive || isLocked) return;
        resetBottomRight();
        $('#br9').css('color', 'red');
        setBottomRightValue('9');
    })


});

function resetTopLeft(){
    $('#tl0').css('color', 'white');
    $('#tl1').css('color', 'white');
    $('#tl2').css('color', 'white');
    $('#tl3').css('color', 'white');
    $('#tl4').css('color', 'white');
    $('#tl5').css('color', 'white');
    $('#tl6').css('color', 'white');
    $('#tl7').css('color', 'white');
    $('#tl8').css('color', 'white');
    $('#tl9').css('color', 'white');
}

function resetTopRight(){
    $('#tr0').css('color', 'white');
    $('#tr1').css('color', 'white');
    $('#tr2').css('color', 'white');
    $('#tr3').css('color', 'white');
    $('#tr4').css('color', 'white');
    $('#tr5').css('color', 'white');
    $('#tr6').css('color', 'white');
    $('#tr7').css('color', 'white');
    $('#tr8').css('color', 'white');
    $('#tr9').css('color', 'white');
}

function resetBottomLeft(){
    $('#bl0').css('color', 'white');
    $('#bl1').css('color', 'white');
    $('#bl2').css('color', 'white');
    $('#bl3').css('color', 'white');
    $('#bl4').css('color', 'white');
    $('#bl5').css('color', 'white');
    $('#bl6').css('color', 'white');
    $('#bl7').css('color', 'white');
    $('#bl8').css('color', 'white');
    $('#bl9').css('color', 'white');
}

function resetBottomRight(){
    $('#br0').css('color', 'white');
    $('#br1').css('color', 'white');
    $('#br2').css('color', 'white');
    $('#br3').css('color', 'white');
    $('#br4').css('color', 'white');
    $('#br5').css('color', 'white');
    $('#br6').css('color', 'white');
    $('#br7').css('color', 'white');
    $('#br8').css('color', 'white');
    $('#br9').css('color', 'white');
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
    resetTopLeft();
    resetTopRight();
    resetBottomLeft();
    resetBottomRight();
}

// When the power is off, all buttons are gray.

function turnOffButtons(){

    $('#tl0').css('color', 'grey');
    $('#tl1').css('color', 'grey');
    $('#tl2').css('color', 'grey');
    $('#tl3').css('color', 'grey');
    $('#tl4').css('color', 'grey');
    $('#tl5').css('color', 'grey');
    $('#tl6').css('color', 'grey');
    $('#tl7').css('color', 'grey');
    $('#tl8').css('color', 'grey');
    $('#tl9').css('color', 'grey');

    $('#tr0').css('color', 'grey');
    $('#tr1').css('color', 'grey');
    $('#tr2').css('color', 'grey');
    $('#tr3').css('color', 'grey');
    $('#tr4').css('color', 'grey');
    $('#tr5').css('color', 'grey');
    $('#tr6').css('color', 'grey');
    $('#tr7').css('color', 'grey');
    $('#tr8').css('color', 'grey');
    $('#tr9').css('color', 'grey');

    $('#bl0').css('color', 'grey');
    $('#bl1').css('color', 'grey');
    $('#bl2').css('color', 'grey');
    $('#bl3').css('color', 'grey');
    $('#bl4').css('color', 'grey');
    $('#bl5').css('color', 'grey');
    $('#bl6').css('color', 'grey');
    $('#bl7').css('color', 'grey');
    $('#bl8').css('color', 'grey');
    $('#bl9').css('color', 'grey');

    $('#br0').css('color', 'grey');
    $('#br1').css('color', 'grey');
    $('#br2').css('color', 'grey');
    $('#br3').css('color', 'grey');
    $('#br4').css('color', 'grey');
    $('#br5').css('color', 'grey');
    $('#br6').css('color', 'grey');
    $('#br7').css('color', 'grey');
    $('#br8').css('color', 'grey');
    $('#br9').css('color', 'grey');
}

function turnOn(){
    turnOnButtons();
    $("#power-switch").attr('src', 'power-switch-lime.png');
    $("#lock").attr('src', 'padlock-gray.png');

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
    $("#power-switch").attr('src', 'power-switch-white.png');
    $("#lock").attr('src', 'padlock-white.png');

    isActive = false;
}

function lock(){
    isLocked = true;
    $("#power-switch").attr('src', 'power-switch-gray.png');
    $("#lock").attr('src', 'padlock-lime.png');
}

function unlock(){
    isLocked = false;
    $("#power-switch").attr('src', 'power-switch-white.png');
    $("#lock").attr('src', 'padlock-white.png');
}

function setTopLeftValue(val){
    if(val == '0'){
        hideTopLeftValue();
        // $("#value-tl").css('color', 'black');
    } else {
        // $("#value-tl").css('color', 'red');
        $("#value-tl").css('color', 'tomato');
        $("#value-tl").text(val);
    }
}

function setTopRightValue(val){
    if(val == '0'){
        hideTopRightValue();
        // $("#value-tr").css('color', 'black');
    } else {
        // $("#value-tr").css('color', 'red');
        $("#value-tr").css('color', 'tomato');
        $("#value-tr").text(val);
    }
}

function setBottomLeftValue(val){
    if(val == '0'){
        hideBottomLeftValue();
        // $("#value-bl").css('color', 'black');
    } else {
        // $("#value-bl").css('color', 'red');
        $("#value-bl").css('color', 'tomato');
        $("#value-bl").text(val);
    }
}

function setBottomRightValue(val){
    if(val == '0'){
        hideBottomRightValue();
        // $("#value-br").css('color', 'black');
    } else {
        // $("#value-br").css('color', 'red');
        $("#value-br").css('color', 'tomato');
        $("#value-br").text(val);
    }
}

function hideTopLeftValue(){
    $("#value-tl").css('color', 'black');
    $("#value-tl").text('');
}

function hideTopRightValue(){
    $("#value-tr").css('color', 'black');
    $("#value-tr").text('');
}

function hideBottomLeftValue(){
    $("#value-bl").css('color', 'black');
    $("#value-bl").text('');
}

function hideBottomRightValue(){
    $("#value-br").css('color', 'black');
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

    $("#power-switch").attr('src', 'power-switch-white.png');
    $("#lock").attr('src', 'padlock-white.png');

    // turnOnButtons();

    electricityIsOn = true;
}

function electricityOff(){
    $("#plug").attr('src', 'rounded-plug-gray.png');
    $("#plug-desc").text("Power is off");

    $("#power-switch").attr('src', 'power-switch-gray.png');
    $("#lock").attr('src', 'padlock-gray.png');

    turnOffButtons();
    hideValues();

    electricityIsOn = false;
    isActive = false;
    isLocked = false;
}

