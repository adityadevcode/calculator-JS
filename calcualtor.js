//we need to add event listners for all buttons 1 step
let buttons =document.getElementsByTagName('button');
//result id we need to store in varible, in paragraph0 we have this
let result = document.getElementById('result');

//only buttons ni click chesi napudu events add cheyali
//buttons ni iterate chesam
for(i=0;i<buttons.length;i++){
    buttons[i].onclick = function(){
//buttons click cheste ok function jaragali, element select chesi property onclick
//anonymous function rasam    
//this deniki point out chesthundi ante e button click chesamo dani pointout chestham inner text
let input = this.innerText;
//manamu button meda vunna numbers and other thing kanipichadaniki updatedisplay use chesanu
        updateDisplay(input) 
    }
}
//result block lo something vundo ledo check cheyali ante black box
function updateDisplay(input){
    let currentDisplay = result.innerText
//current dispaly 0 vunte apudu manamu em cheyali, user click chesina input (c,d,= kakunda)inka edaina ayithe apudu 
//zero ni kuda empty petali
    if(currentDisplay=="0"){
        if(input!="C"&&input!="DEL" && input!="="){
//user vere number click chesinapudu 0 ni empty peti
            result.innerText=""
//result lo vuna value ni add chesthuna, user value click chesinapudu
            result.innerText=input
        }

    }
    else{
       
        if(input=="DEL"){
//last ki edi ayithe enter chesthamo adi delete cheyali
//0 to 9 substring ki pass cheste ot08 e values vunte avi output vasthai
            result.innerText = currentDisplay.substring(0,currentDisplay.length-1)
            // if(result.innerText==""){
            //     result.innerText="0"
            // }
        }
//user c ani click chesthe motham empty avali ante 0
        if(input=="C"){
            result.innerText="0"
        }
// user c del == button click cheyaledu then 
//already vunadaniki means 7+8-3 or something we need to add
        if(input!="C"&&input!="DEL"&&input!="="){
//below increment petamu (innertext ki add chesthunam num or content)
 //prevoiusly em vundo daniki add chesthunam
result.innerText+=input
            x = x+6
            x+=7
        }
//ipudu manaku = ayithe em cheyali
//js lo eval ane method vundi. oka equation kani expression kani tisukoni dani
//compute chesthadi, result.innerText evaluate chesthundi
        if(input=="="){          
            let display = result.innerText
//current display lo e method vundo dani parse chesi, eval ane method dwara calculate chesi result lo chuspisthundi
            result.innerText= eval(display)
        }
    }

}


