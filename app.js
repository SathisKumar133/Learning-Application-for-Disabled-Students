const menu= document.querySelector('.menu');
const feature = document.querySelector('nav');
feature.value=0;
const sub2 = document.querySelector('.sub2');
const dis = document.querySelector('.sub3');
let val =0;
const icon = document.querySelector('#icon');
menu.addEventListener('click',()=>{
    feature.value++;
    // feature.classList.toggle('showmenu');
    if(feature.style.display=='none'){
        feature.style.display='block';
        feature.style.width=feature.scrollWidth+"px";
    }
    else{
        feature.style.display='none';
        feature.style.width=0;
    }
    
    console.log("top "+feature.value)
    if(feature.value!=1){
        if(feature.value%2==0){
            dis.style.display="none";
            icon.style.transform='rotate(360deg)'
        }
        
    }
   
    
})
const diss = document.querySelector('p');
sub2.addEventListener('click',()=>{
    if(val%2==0){
        console.log("down "+val)
        dis.style.display="block";
        dis.style.height="200px";
        dis.style.margin='-15px auto -35px 55px';
        diss.style.backgroundcolor='blue';
        diss.style.color='white';
        diss.style.height='50px'
        diss.style.borderradius='6px'
        icon.style.transform='rotate(180deg)'
    }
    if(val%2!=0){
        console.log("down "+val)
        dis.style.display="none";
        dis.style.height=0;
        icon.style.transform='rotate(360deg)'
    }
    
    
    val++;
    
    // dis.classList.toggle('showmenu1');
})