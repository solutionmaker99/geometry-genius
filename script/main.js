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

    const width = getInputVlaue('rectangle-width')

    // step-2: get length number

    const length = getInputVlaue('rectangle-length');

    // step-2: get area of this triangle

    const area = width * length;

    setElementInnerText('rectangle-area', area);
}

function parallelogramArea(){
     const base = getInputVlaue('parallelogram-base')
     
     const height = getInputVlaue('parallelogram-height');

     const area = base * height;

     setElementInnerText('parallelogram-area', area);
}


// reduce get input field dinamic value

function getInputVlaue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputFieldValue = inputField.value;
    const value = parseFloat(inputFieldValue);

    return value;
}

// calculate area with dynamic function

function setElementInnerText(textArea, area){
    const element = document.getElementById(textArea);
    element.innerText = area;
}