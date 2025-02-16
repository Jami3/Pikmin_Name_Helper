let globalColor = `#000`;

function sliderOnClick(sliderNumber,val){
  globalColor = globalColor.substring(0,sliderNumber) + getBase16(val) + globalColor.substring(sliderNumber + 1,globalColor.length);
  changeDisplayNameColor(globalColor);
}
function refreshDisplayName(){
  let dn = document.getElementById("displayName");
  //let textColor = document.getElementById("currentColor");
  let nameInCode = document.getElementById("nameInCode");
  
  nameInCode.value = `<color=${globalColor}>${dn.innerText}</color>`;
  document.getElementById("charLimit").innerText=`${nameInCode.value.length}/30`;


  dn.style.color = globalColor;
}

function changeDisplayNameColor(color){
  globalColor = color;
  //let textColor = document.getElementById("currentColor");
  //textColor.innerText = `Current Font Color: ${globalColor}`;
  refreshDisplayName();
  document.body.scrollTop = document.documentElement.scrollTop = 0;
}

function clipboardHelper(){
  let copyText = document.getElementById("nameInCode");

  copyText.select();
  copyText.setSelectionRange(0,99999);

  navigator.clipboard.writeText(copyText.value);
  //alert(`${copyText.value} was copied to the clipboard`)
}


function getBase16(num){
  if(num == 0)return "0";
  if(num == 1)return "1";
  if(num == 2)return "2";
  if(num == 3)return "3";
  if(num == 4)return "4";
  if(num == 5)return "5";
  if(num == 6)return "6";
  if(num == 7)return "7";
  if(num == 8)return "8";
  if(num == 9)return "9";
  if(num == 10)return "a";
  if(num == 11)return "b";
  if(num == 12)return "c";
  if(num == 13)return "d";
  if(num == 14)return "e";
  if(num == 15)return "f";

}

function checkboxHelper(val){
  
    let dn = document.getElementById("displayName");
  if(val){
    dn.style.backgroundImage= 'linear-gradient(to right, #d787e3 , #a55ad8)';
  }else{

    dn.style.backgroundImage='';
  }
}


function toggleColorSwatches(){
  let elem = document.getElementById('colorSwatchContainer');
  elem.visible = !elem.visible;
  if (elem.style.visibility == ''){
    elem.style.visibility = 'hidden';
  }else{
    elem.style.visibility = '';
  }
}
/*
function initializeShortSwatches(){
  for( let i = 0; i < 16; i++){
    for(let k = 0; k < 16; k++){
      for(let j = 0; j < 16; j++){
        let newElem = document.createElement("div");
        let colorStr = `#${getBase16(i)+getBase16(j)+getBase16(k)}`
        newElem.classList.add("swatch");
        newElem.style = `background-color: ${colorStr};`
        newElem.onclick = ()=>{changeDisplayNameColor(colorStr);}
        document.getElementById('colorSwatchContainer').appendChild(newElem);
      }
    }
  }
}
*/
// initializeShortSwatches();

function initializeSliders() {
  
}
