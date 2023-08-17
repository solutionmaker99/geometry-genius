function triangleArea(){
    // step-1: get base number

    const baseValue = document.getElementById('triangle-base');
    const baseValueString = baseValue.value;
    const baseValueNumber = parseFloat(baseValueString);
   


    // step-2: get height number

    const heightValue = document.getElementById('triangle-height');
    const heightValueString = heightValue.value;
    const heightValueNumber = parseFloat(heightValueString);

    // step-2: get area of this triangle

    const triangleArea = document.getElementById('triangle-area');

    triangleArea.innerText = 0.5 * baseValueNumber * heightValueNumber;

}

function rectangleArea(){
    // step-1: get width number

    const widthValue = document.getElementById('rectangle-width');
    const widthValueString = widthValue.value;
    const widthValueNumber = parseFloat(widthValueString);

    // step-2: get length number

    const lengthValue = document.getElementById('rectangle-length');
    const lengthValueString = lengthValue.value;
    const lengthValueNumber = parseFloat(lengthValueString);

    // step-2: get area of this triangle

    const rectangleArea = document.getElementById('rectangle-area');

    rectangleArea.innerText = widthValueNumber * lengthValueNumber;
}

function parallelogramArea(){
    // step-1: get base number

    const baseValue = document.getElementById('parallelogram-base');
    const baseValueString = baseValue.value;
    const baseValueNumber = parseFloat(baseValueString);
   


    // step-2: get height number

    const heightValue = document.getElementById('parallelogram-height');
    const heightValueString = heightValue.value;
    const heightValueNumber = parseFloat(heightValueString);

    // step-2: get area of this parallelogram

    const parallelogramArea = document.getElementById('parallelogram-area');

    parallelogramArea.innerText = baseValueNumber * heightValueNumber;

}