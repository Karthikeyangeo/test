var pl=["X","O"];
var val_obj={};
var bool=false, check = false;
var flag=true;

function game(id){
    var player = playerassign();
    document.getElementById(id).innerHTML=player;
    value_assign();
    val_obj[id]=player;
    document.getElementById(id).disabled = true;
    let win_play = winner(val_obj);
    
    if(win_play)
    {
        var win=document.getElementById("win").innerHTML
        document.getElementById("win").innerHTML=player+"Won";
               
    }

    

}

function playerassign(){
    let plr;
    if(flag){
        plr=pl[0];
        flag = false;
    }
    else{
        plr = pl[1];
        flag=true;
        
    }
    return plr;
}

function value_assign()
{
    var a1= document.getElementById("a1").innerHTML;
    var a2= document.getElementById("a2").innerHTML;
    var a3= document.getElementById("a3").innerHTML;
    var b1= document.getElementById("b1").innerHTML;
    var b2= document.getElementById("b2").innerHTML;
    var b3= document.getElementById("b3").innerHTML;
    var c1= document.getElementById("c1").innerHTML;
    var c2= document.getElementById("c2").innerHTML;
    var c3= document.getElementById("c3").innerHTML;
    console.log(a1,a2,a3);
   
}

//resetting the buttons
function reset(){
    let  cell_val = ["a1","a2","a3","b1","b2","b3","c1","c2","c3"];
    for(let i=0;i<9;i++)
    {
        document.getElementById(cell_val[i]).innerHTML="";
        document.getElementById(cell_val[i]).disabled = false;
    }
    flag = true;
    document.getElementById("win").innerHTML="";
    bool=false;
    
}

function winner(val_obj)
{
    
    var combination =[
        ["a1","a2","a3"],
        ["b1","b2","b3"],
        ["c1","c2","c3"],
        ["a1","b1","c1"],
        ["a2","b2","c2"],
        ["a3","b3","c3"],
        ["a1","b2","c3"],
        ["a3","b2","c1"]
    ]
    
    for(let i=0;i<8;i++)
    {
        
        var myArray=combination[i];
        let a =document.getElementById(myArray[0]).innerHTML;
        let b = document.getElementById(myArray[1]).innerHTML;
        let c= document.getElementById(myArray[2]).innerHTML;

        if (a === '' || b === '' || c === '')
        {
            continue;
        }
       if (a === b && b === c) 
        {
            bool = true;
            break;
            
            
        }
        

    }
    if(bool)
    {
        return true;

    }
    
    //Match Drawn condition
    var size = Object.keys(val_obj).length;
    if(size == 9)
    {
        for (let key in val_obj)
    {
        if(val_obj[key]!="")
        {
            check=true;
        }
        else
        {
            check=false;
        }
    Object.keys(val_obj).forEach(k => delete val_obj[k]);           //deleting the object to avoid obj len meeting the if condition
    }
    if(check)
    {
        document.getElementById("win").innerHTML="Match Drawn"      
        check = false;
        
    }
    
    }
    
        
}
