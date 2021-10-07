
let gridvalue=16;
let color='black';

function clearbackground(){
    makegrid();
}

function changegridvalue(){
   
    if(document.getElementById('gridinput').value>100 || document.getElementById('gridinput').value<2)
    {
        window.alert('value not allowed');
    }
    else{
        gridvalue=document.getElementById('gridinput').value;
        document.getElementById('gridsize').innerHTML=`${gridvalue}X${gridvalue}`;
    }
}



function changecolor(x){
    if(x.innerHTML=='Black')
    {
        color='black';
    }
   
    else if(x.innerHTML=='RGB')
    {
        color='rainbow';
    }
}

function cleargrid(){
    document.getElementById('grid').innerHTML="";
}

function makegrid()
{
    cleargrid();
    console.log(gridvalue);
    let width=document.getElementById('grid').offsetWidth-10;
    let height=width;
    console.log(height,width);
    
    for(let i=0;i<gridvalue;i++)
    {
        let divparent=document.createElement('div');
        divparent.style.display='flex';
        divparent.style.width='100%';
        //divparent.style.backgroundColor='blue';
        document.getElementById('grid').appendChild(divparent);
        for(let j=0;j<gridvalue;j++)
        {
            let divchild=document.createElement('div');
            divchild.style.width=`${width/gridvalue}px`;
            divchild.style.height=`${height/gridvalue}px`;
            divchild.style.flex='1 1 auto';
            //divchild.style.backgroundColor='blue';
            divchild.setAttribute('class','block');
            divchild.addEventListener('mouseover',function(){
                changebackground(this);
            })
            divparent.append(divchild);
        }

    }


}
function changebackground(x){
    if(color=='rainbow')
    {
        let r=Math.floor(Math.random()*256);
        let g=Math.floor(Math.random()*256);
        let b=Math.floor(Math.random()*256);
        x.style.backgroundColor=`rgb(${r},${g},${b})`;
    }
    else{
        x.style.backgroundColor=color;
    }
   
}


window.addEventListener('resize',function(){
    makegrid();

})
makegrid();