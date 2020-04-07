"use strict"
// массивы для русской клавы 
 let keyboardNameRu = [">", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "Enter", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "ё", "Shift", "]", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", "/","&uarr;", "Shift",  "Ctrl", "Alt", "cmd", " ", "cmd", "Alt", "&larr;", "&darr;", "&rarr;"];

 let keyboardActive=["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Enter", "CapsLock","KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "ShiftLeft", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp","ShiftRight", "ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight", "ArrowLeft",  "ArrowDown", "ArrowRight"];

 let altKeyboard =['<', '!', '&quot;', '№', '%', ':', ',', '.', ';', '(', ')', '_', '+', '[', '?'];
 let numberAltKeyRu = ['1','2','3','4','5','6','7','8','9','10','11','12','13','43','53'];
 
 //массивы для eng клавы 

 let keyboardNameEn =["§", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "Enter", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", '\\', "Shift", "`", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "&uarr;","Shift", "Ctrl", "Alt", "cmd", " ", "cmd", "Alt", "&larr;", "&darr;", "&rarr;"];

 let keyboardActiveEn=["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Enter", "CapsLock","KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "ShiftLeft", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp","ShiftRight", "ControlLeft", "AltLeft", "MetaLeft", "Space", "MetaRight", "AltRight", "ArrowLeft",  "ArrowDown", "ArrowRight"];

 let altKeyboardEn=["±", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "{", "}", ":", '"', "|", "~", "<", ">", "?"];
 let numberAltKeyEn = ['1','2','3','4','5','6','7','8','9','10','11','12','13','26','27','39','40','41','43','51','52','53'];


// массивы для англ клавы 
let recheckKeyboards =true;



                                //Создание первой клавитатуры 




if (recheckKeyboards){   

let wrapper = document.createElement('div');
wrapper.className='wrapper';
document.body.append(wrapper);

let textArea=document.createElement('textarea');
textArea.className='textArea';
document.body.querySelector('.wrapper').append(textArea);

let wrapperRu = document.createElement('div');
wrapperRu.className='wrapperRu';
document.body.querySelector('.wrapper').append(wrapperRu);


keyboardNameRu.forEach(function(elem,index){
    let key= document.createElement('div');
    key.className=`key`;
    key.id=`${keyboardActive[index]}`;
   
   
    document.body.querySelector('.wrapperRu').append(key);
    key.innerHTML=elem;
    
})



numberAltKeyRu.forEach(function(index){
    let secondKey = document.createElement('div');
    secondKey.className='secondKey';
    document.body.querySelectorAll('.key')[index-1].append(secondKey);
    secondKey.innerHTML=altKeyboard[index-1];
    })
document.body.querySelectorAll('.secondKey')[13].innerHTML='[';
document.body.querySelectorAll('.secondKey')[14].innerHTML='?';

document.addEventListener('keydown',function(event){
    if(event.code=='cmd'&& event.code=='Space'){
        if(recheckKeyboards){
            recheckKeyboards=false;
        }
        else{
            recheckKeyboards=true;
        }
    }
   
    if(event.key=='Backspace'){
        let newText= document.querySelector('.textArea').value;
        newText=newText.slice(0,(newText.length-1));
        console.log(newText);
        document.querySelector('.textArea').value=newText;
      }
    if(event.code=='Tab'){
        event.preventDefault();
        document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\t';
    }
    if(event.code=='ArrowUp'){
        event.preventDefault();
        document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2191';
    }
    if(event.code=='ArrowDown'){
        event.preventDefault();
        document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2193';
    }
    if(event.code=='ArrowRight'){
        event.preventDefault();
        document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2192';
    }
    if(event.code=='ArrowLeft'){
        event.preventDefault();
        document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2190';
    }
    document.querySelectorAll('.key').forEach(function(key){
    if(event.code==key.id){ if(key.id=='CapsLock'){
        key.classList.toggle('activeKey');
    }else{
    key.classList.add('activeKey');
     }}})
});

document.addEventListener('keyup',function(event){
    document.querySelectorAll('.key').forEach(function(key){
    if(event.code==key.id){
    key.classList.remove('activeKey');
     }})
});


document.addEventListener('keypress', function(event){

if (event.key!=='Enter'){
document.querySelector('.textArea').value=document.querySelector('.textArea').value+event.key;}
else{
    if(event.key=='Enter'){
        document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\n';
    }
}


console.log(document.querySelector('.textArea').value);
});

document.querySelectorAll('.key').forEach(function(key){
 key.addEventListener('mousedown',function(event){
    event.currentTarget.classList.toggle('activeKey');
    if(key.innerText=='cmd'||key.innerText=='CapsLock'||key.innerText=='Shift'||key.innerText=='Ctrl'||key.innerText=='Alt'){
        document.querySelector('.textArea').value=document.querySelector('.textArea').value;
    }
    else{
        if(key.innerText=='Backspace'){
            document.querySelector('.textArea').value=document.querySelector('.textArea').value.slice(0,(document.querySelector('.textArea').value.length-1));
        } else {
            if(key.innerText=='Tab'){
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\t';
            }
            else{
                if (key.innerText=='Enter'){
                    document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\n';
                }
                else{
                    if(key.id=='Space'){
                        event.preventDefault();
                        document.querySelector('.textArea').value=document.querySelector('.textArea').value+' ';
                    }
                    else{
                        if(document.querySelector('#CapsLock').className=='key activeKey'){   document.querySelector('.textArea').value=document.querySelector('.textArea').value+key.innerText[0].toUpperCase();     
                        }
                        else{
                            
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+key.innerText[0];}}}}
        }
    
    }
    
 });

 key.addEventListener('mouseup',function(event){
     if(key.innerText!=='CapsLock'){
    event.currentTarget.classList.remove('activeKey');}
 });
 key.addEventListener('mouseout',function(event){
    if(key.innerText!=='CapsLock'){
    event.currentTarget.classList.remove('activeKey');}
 });

});

}
   //                Вторая клавиатура // 
else {
    let wrapper = document.createElement('div');
    wrapper.className='wrapper';
    document.body.append(wrapper);
    
    let textArea=document.createElement('textarea');
    textArea.className='textArea';
    document.body.querySelector('.wrapper').append(textArea);
    
    let wrapperRu = document.createElement('div');
    wrapperRu.className='wrapperRu';
    document.body.querySelector('.wrapper').append(wrapperRu);
    
    
    keyboardNameEn.forEach(function(elem,index){
        let key= document.createElement('div');
        key.className=`key`;
        key.id=`${keyboardActiveEn[index]}`;
       
       
        document.body.querySelector('.wrapperRu').append(key);
        key.innerHTML=elem;
        
    })
    
    
    
    numberAltKeyEn.forEach(function(index){
        let secondKey = document.createElement('div');
        secondKey.className='secondKey';
        document.body.querySelectorAll('.key')[index-1].append(secondKey);
        secondKey.innerHTML=altKeyboardEn[index-1];
        }) 
    document.body.querySelectorAll('.secondKey')[13].innerText='{';
    document.body.querySelectorAll('.secondKey')[14].innerHTML='}';
    document.body.querySelectorAll('.secondKey')[15].innerHTML=":";
    document.body.querySelectorAll('.secondKey')[16].innerHTML='"';
    document.body.querySelectorAll('.secondKey')[17].innerHTML="|";
    document.body.querySelectorAll('.secondKey')[18].innerHTML="~";
    document.body.querySelectorAll('.secondKey')[19].innerHTML="<";
    document.body.querySelectorAll('.secondKey')[20].innerHTML=">";
    document.body.querySelectorAll('.secondKey')[21].innerHTML="?";
    
    
    document.addEventListener('keydown',function(event){
       
        if(event.key=='Backspace'){
            let newText= document.querySelector('.textArea').value;
            newText=newText.slice(0,(newText.length-1));
            console.log(newText);
            document.querySelector('.textArea').value=newText;
          }
        if(event.code=='Tab'){
            event.preventDefault();
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\t';
        }
        if(event.code=='ArrowUp'){
            event.preventDefault();
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2191';
        }
        if(event.code=='ArrowDown'){
            event.preventDefault();
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2193';
        }
        if(event.code=='ArrowRight'){
            event.preventDefault();
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2192';
        }
        if(event.code=='ArrowLeft'){
            event.preventDefault();
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+ '\u2190';
        }
        document.querySelectorAll('.key').forEach(function(key){
        if(event.code==key.id){ if(key.id=='CapsLock'){
            key.classList.toggle('activeKey');
        }else{
        key.classList.add('activeKey');
         }}})
    });
    
    document.addEventListener('keyup',function(event){
        document.querySelectorAll('.key').forEach(function(key){
        if(event.code==key.id){
        key.classList.remove('activeKey');
         }})
    });
    
    
    document.addEventListener('keypress', function(event){
    
    if (event.key!=='Enter'){
    document.querySelector('.textArea').value=document.querySelector('.textArea').value+event.key;}
    else{
        if(event.key=='Enter'){
            document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\n';
        }
    }
    
    
    console.log(document.querySelector('.textArea').value);
    });
    
    document.querySelectorAll('.key').forEach(function(key){
     key.addEventListener('mousedown',function(event){
        event.currentTarget.classList.toggle('activeKey');
        if(key.innerText=='cmd'||key.innerText=='CapsLock'||key.innerText=='Shift'||key.innerText=='Ctrl'||key.innerText=='Alt'){
            document.querySelector('.textArea').value=document.querySelector('.textArea').value;
        }
        else{
            if(key.innerText=='Backspace'){
                document.querySelector('.textArea').value=document.querySelector('.textArea').value.slice(0,(document.querySelector('.textArea').value.length-1));
            } else {
                if(key.innerText=='Tab'){
                document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\t';
                }
                else{
                    if (key.innerText=='Enter'){
                        document.querySelector('.textArea').value=document.querySelector('.textArea').value+'\n';
                    }
                    else{
                        if(key.id=='Space'){
                            event.preventDefault();
                            document.querySelector('.textArea').value=document.querySelector('.textArea').value+' ';
                        }
                        else{
                            if(document.querySelector('#CapsLock').className=='key activeKey'){   document.querySelector('.textArea').value=document.querySelector('.textArea').value+key.innerText[0].toUpperCase();     
                            }
                            else{
                                
                document.querySelector('.textArea').value=document.querySelector('.textArea').value+key.innerText[0];}}}}
            }
        
        }
        
     });
    
     key.addEventListener('mouseup',function(event){
         if(key.innerText!=='CapsLock'){
        event.currentTarget.classList.remove('activeKey');}
     });
     key.addEventListener('mouseout',function(event){
        if(key.innerText!=='CapsLock'){
        event.currentTarget.classList.remove('activeKey');}
     });
    
    });
    
    }