let _1 = document.getElementById("_1");
let _1c= document.getElementById("_1c");
let _2 = document.getElementById("_2");
let _2c= document.getElementById("_2c");
let _3 = document.getElementById("_3");
let _3c= document.getElementById("_3c");
let _4 = document.getElementById("_4");
let _4c= document.getElementById("_4c");
let _5 = document.getElementById("_5");
let _5c= document.getElementById("_5c");
let _6 = document.getElementById("_6");
let _6c= document.getElementById("_6c");
let _7 = document.getElementById("_7");
let _7c= document.getElementById("_7c");
let _8 = document.getElementById("_8");
let _8c= document.getElementById("_8c");
let allimgs =document.querySelectorAll("img");
let allP = document.querySelectorAll("h2");
let contanerBoxs = document.querySelector(".contaner")
let boxs = document.querySelectorAll(".fbox")
let selcted = 0 ;
setTimeout( function(){
    document.getElementById('backgroundMusic').play() ;
} , 1000 )
rand() ;
_1.onclick = function() {
    document.querySelector(".p1").style.cssText="display:none;";
    document.querySelector(".i1").style.cssText="display:block;";
    document.querySelector(".i1").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i2").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i1").classList.add("done");
        document.querySelector(".i2").classList.add("done");
        document.querySelector(".p1").classList.add("done");
        document.querySelector(".p2").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
        setTimeout(()=> {
    document.querySelector(".p1").style.cssText="display:block;";
    document.querySelector(".i1").style.cssText="display:none;";
    removeSelectClassFromAll();
    backface() ;
    donefliper();
}, 400)
    }
}
_1c.onclick = function() {
    document.querySelector(".p2").style.cssText="display:none;";
    document.querySelector(".i2").style.cssText="display:block;";
    document.querySelector(".i2").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i1").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i1").classList.add("done");
        document.querySelector(".i2").classList.add("done");
        document.querySelector(".p1").classList.add("done");
        document.querySelector(".p2").classList.add("done");
        document.getElementById('correctAns').play() ;
        }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
            setTimeout(()=>{
                document.querySelector(".p2").style.cssText="display:block;";
                document.querySelector(".i2").style.cssText="display:none;";
                removeSelectClassFromAll();
                backface() ;
                donefliper();
            } ,400)
        }
}
_2.onclick = function() {
    document.querySelector(".p3").style.cssText="display:none;";
    document.querySelector(".i3").style.cssText="display:block;";
    document.querySelector(".i3").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i4").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i3").classList.add("done");
        document.querySelector(".i4").classList.add("done");
        document.querySelector(".p3").classList.add("done");
        document.querySelector(".p4").classList.add("done");
        document.getElementById('correctAns').play() ;
        }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
            setTimeout(()=>{
                document.querySelector(".p3").style.cssText="display:block;";
                document.querySelector(".i3").style.cssText="display:none;";
                removeSelectClassFromAll();
                backface() ;
                donefliper();
            } ,400 )
        }
}
_2c.onclick = function() {
    document.querySelector(".p4").style.cssText="display:none;";
    document.querySelector(".i4").style.cssText="display:block;";
    document.querySelector(".i4").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i3").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i3").classList.add("done");
        document.querySelector(".i4").classList.add("done");
        document.querySelector(".p3").classList.add("done");
        document.querySelector(".p4").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
        setTimeout(()=>{
        document.querySelector(".p4").style.cssText="display:block;";
        document.querySelector(".i4").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
            } ,400 )
        }
}
_3.onclick = function() {
    document.querySelector(".p5").style.cssText="display:none;";
    document.querySelector(".i5").style.cssText="display:block;";
    document.querySelector(".i5").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i6").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i5").classList.add("done");
        document.querySelector(".i6").classList.add("done");
        document.querySelector(".p5").classList.add("done");
        document.querySelector(".p6").classList.add("done");
        document.getElementById('correctAns').play() ;
        }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
        setTimeout(()=>{
        document.querySelector(".p5").style.cssText="display:block;";
        document.querySelector(".i5").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
            },400)
        }
}
_3c.onclick = function() {
    document.querySelector(".p6").style.cssText="display:none;";
    document.querySelector(".i6").style.cssText="display:block;";
    document.querySelector(".i6").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i5").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i5").classList.add("done");
        document.querySelector(".i6").classList.add("done");
        document.querySelector(".p5").classList.add("done");
        document.querySelector(".p6").classList.add("done");
        document.getElementById('correctAns').play() ;
        }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
            setTimeout(()=>{
                document.querySelector(".p6").style.cssText="display:block;";
                document.querySelector(".i6").style.cssText="display:none;";
                removeSelectClassFromAll();
                backface() ;
                donefliper();
            },400)
        }
}
_4.onclick = function() {
    document.querySelector(".p7").style.cssText="display:none;";
    document.querySelector(".i7").style.cssText="display:block;";
    document.querySelector(".i7").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i8").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i7").classList.add("done");
        document.querySelector(".i8").classList.add("done");
        document.querySelector(".p7").classList.add("done");
        document.querySelector(".p8").classList.add("done");
        document.getElementById('correctAns').play() ;
        }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
            setTimeout(()=>{
                document.querySelector(".p7").style.cssText="display:block;";
                document.querySelector(".i7").style.cssText="display:none;";
                removeSelectClassFromAll();
                backface() ;
                donefliper();
            } ,400 )
        }
}
_4c.onclick = function() {
    document.querySelector(".p8").style.cssText="display:none;";
    document.querySelector(".i8").style.cssText="display:block;";
    document.querySelector(".i8").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i7").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i7").classList.add("done");
        document.querySelector(".i8").classList.add("done");
        document.querySelector(".p7").classList.add("done");
        document.querySelector(".p8").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
            setTimeout(()=>{
            document.querySelector(".p8").style.cssText="display:block;";
            document.querySelector(".i8").style.cssText="display:none;";
            removeSelectClassFromAll();
            backface() ;
            donefliper();
        },400)
        }
}
_5.onclick = function() {
    document.querySelector(".p9").style.cssText="display:none;";
    document.querySelector(".i9").style.cssText="display:block;";
    document.querySelector(".i9").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i10").classList.contains("selcted") ){
        selcted = 0 ;
        document.querySelector(".i9").classList.add("done");
        document.querySelector(".i10").classList.add("done");
        document.querySelector(".p9").classList.add("done");
        document.querySelector(".p10").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
        setTimeout(()=>{
        document.querySelector(".p9").style.cssText="display:block;";
        document.querySelector(".i9").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
            },400)
    }
}
_5c.onclick = function() {
    document.querySelector(".p10").style.cssText="display:none;";
    document.querySelector(".i10").style.cssText="display:block;";
    document.querySelector(".i10").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i9").classList.contains("selcted")){
        selcted = 0 ;
        document.querySelector(".i9").classList.add("done");
        document.querySelector(".i10").classList.add("done");
        document.querySelector(".p9").classList.add("done");
        document.querySelector(".p10").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
        else if(selcted === 1 ){
            selcted = 1 ; 
        }
        else{
            selcted = 0 ;
            document.getElementById('wrongAns').play() ;
            setTimeout(()=>{
                document.querySelector(".p10").style.cssText="display:block;";
                document.querySelector(".i10").style.cssText="display:none;";
                removeSelectClassFromAll();
                backface() ;
                donefliper();
            } ,400 )
        }
}
_6.onclick = function() {
    document.querySelector(".p11").style.cssText="display:none;";
    document.querySelector(".i11").style.cssText="display:block;";
    document.querySelector(".i11").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i12").classList.contains("selcted") ){
        selcted = 0 ;
        document.querySelector(".i11").classList.add("done");
        document.querySelector(".i12").classList.add("done");
        document.querySelector(".p11").classList.add("done");
        document.querySelector(".p12").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
        setTimeout(()=>{
        document.querySelector(".p11").style.cssText="display:block;";
        document.querySelector(".i11").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
                },400)
    }
}
_6c.onclick = function() {
    document.querySelector(".p12").style.cssText="display:none;";
    document.querySelector(".i12").style.cssText="display:block;";
    document.querySelector(".i12").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i11").classList.contains("selcted") ){
        selcted = 0 ;
        document.querySelector(".i11").classList.add("done");
        document.querySelector(".i12").classList.add("done");
        document.querySelector(".p11").classList.add("done");
        document.querySelector(".p12").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
    setTimeout(()=>{
        document.querySelector(".p12").style.cssText="display:block;";
        document.querySelector(".i12").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
                },400)
    }
}
_7.onclick = function() {
    document.querySelector(".p13").style.cssText="display:none;";
    document.querySelector(".i13").style.cssText="display:block;";
    document.querySelector(".i13").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i14").classList.contains("selcted") ){
        selcted = 0 ;
        document.querySelector(".i13").classList.add("done");
        document.querySelector(".i14").classList.add("done");
        document.querySelector(".p13").classList.add("done");
        document.querySelector(".p14").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
    setTimeout(()=>{
    document.querySelector(".p13").style.cssText="display:block;";
    document.querySelector(".i13").style.cssText="display:none;";
    removeSelectClassFromAll();
    backface() ;
    donefliper();
},400)
    }
}
_7c.onclick = function() {
    document.querySelector(".p14").style.cssText="display:none;";
    document.querySelector(".i14").style.cssText="display:block;";
    document.querySelector(".i14").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i13").classList.contains("selcted") ){
        selcted = 0 ;
        document.querySelector(".i13").classList.add("done");
        document.querySelector(".i14").classList.add("done");
        document.querySelector(".p13").classList.add("done");
        document.querySelector(".p14").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
        setTimeout(()=>{
        document.querySelector(".p14").style.cssText="display:block;";
        document.querySelector(".i14").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
                } ,400 )
    }
}
_8.onclick = function() {
    document.querySelector(".p15").style.cssText="display:none;";
    document.querySelector(".i15").style.cssText="display:block;";
    document.querySelector(".i15").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i16").classList.contains("selcted") ){
        selcted = 0 ;
        document.querySelector(".i15").classList.add("done");
        document.querySelector(".i16").classList.add("done");
        document.querySelector(".p15").classList.add("done");
        document.querySelector(".p16").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
        setTimeout(()=>{
        document.querySelector(".p15").style.cssText="display:block;";
        document.querySelector(".i15").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
        },400)
    }
}
_8c.onclick = function() {
    document.querySelector(".p16").style.cssText="display:none;";
    document.querySelector(".i16").style.cssText="display:block;";
    document.querySelector(".i16").classList.add("selcted");
    selcted+=1 ;
    if(selcted===2 && document.querySelector(".i15").classList.contains("selcted") ){
        selcted = 0 ;
        document.querySelector(".i15").classList.add("done");
        document.querySelector(".i16").classList.add("done");
        document.querySelector(".p15").classList.add("done");
        document.querySelector(".p16").classList.add("done");
        document.getElementById('correctAns').play() ;
    }
    else if(selcted === 1 ){
        selcted = 1 ; 
    }
    else{
        selcted = 0 ;
        document.getElementById('wrongAns').play() ;
        setTimeout(()=>{
        document.querySelector(".p16").style.cssText="display:block;";
        document.querySelector(".i16").style.cssText="display:none;";
        removeSelectClassFromAll();
        backface() ;
        donefliper();
            },400)
    }
}


function removeSelectClassFromAll(){
allimgs.forEach(function(ele){
ele.classList.remove("selcted")
})
}
function donefliper(){
    allimgs.forEach(function(ele){
        if(ele.classList.contains("done")){
            ele.style.cssText="display:block;"
        }
    })
    allP.forEach(function(ele){
        if(ele.classList.contains("done")){
            ele.style.cssText="display:none;"
        }
    })
}
function backface(){
    allimgs.forEach(function(ele){
        ele.style.cssText="display:none;"
    })
    
    allP.forEach(function(ele){
        ele.style.cssText="display:block;"
    })
}
function rand() {
        let range = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        let arrshuffled = shuffle(range) ;
        for(let i=0 ; i < 16 ; i++){
            boxs[i].style.order = arrshuffled[i] ;
            allimgs[i].style.order = arrshuffled[i] ;
            allP[i].style.order = arrshuffled[i] ;
        }
}

function shuffle(array){
    let current = array.length ,
    temp , 
    random ;
    while(current > 0 ){
        random = Math.floor(Math.random()*current) ;
        current-- ;
        temp = array[current];
        array[current] = array[random] ;
        array[random] = temp ;
    }
    return array ;
}