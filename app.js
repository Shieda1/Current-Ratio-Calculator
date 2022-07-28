// https://calculator.swiftutors.com/current-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const currentRatioRadio = document.getElementById('currentRatioRadio');
const currentAssetsRadio = document.getElementById('currentAssetsRadio');
const currentLiabilitiesRadio = document.getElementById('currentLiabilitiesRadio');

let currentRatio;
let currentAssets = v1;
let currentLiabilities = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

currentRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Current Assets';
  variable2.textContent = 'Current Liabilities';
  currentAssets = v1;
  currentLiabilities = v2;
  result.textContent = '';
});

currentAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Current Ratio';
  variable2.textContent = 'Current Liabilities';
  currentRatio = v1;
  currentLiabilities = v2;
  result.textContent = '';
});

currentLiabilitiesRadio.addEventListener('click', function() {
  variable1.textContent = 'Current Ratio';
  variable2.textContent = 'Current Assets';
  currentRatio = v1;
  currentAssets = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(currentRatioRadio.checked)
    result.textContent = `Current Ratio = ${computeCurrentRatio().toFixed(2)}`;

  else if(currentAssetsRadio.checked)
    result.textContent = `Current Assets = ${computeCurrentAssets().toFixed(2)}`;

  else if(currentLiabilitiesRadio.checked)
    result.textContent = `Current Liabilities = ${computeCurrentLiabilities().toFixed(2)}`;
})

// calculation

function computeCurrentRatio() {
  return Number(currentAssets.value) / Number(currentLiabilities.value);
}

function computeCurrentAssets() {
  return Number(currentRatio.value) * Number(currentLiabilities.value);
}

function computeCurrentLiabilities() {
  return Number(currentAssets.value) / Number(currentRatio.value);
}