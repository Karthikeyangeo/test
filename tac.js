var pl=["X","O"];
var val_obj={};

var flag=true;

function game(id){
    var player = playerassign();
    document.getElementById(id).innerHTML=player;
    value_assign();
    val_obj[id]=player;
    document.getElementById(id).disabled = true;
    let win_play = winner(val_obj);
    document.getElementById("win").innerHTML=player+"Won";
    console.log(val_obj);

}

function playerassign(){
    if(flag){
        var plr=pl[0];
        flag = false;
    }
    else{
        var plr = pl[1];
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
   
}

function reset(){
    /*var cell_val = ["a1,","a2","a3","b1","b2","b3","c1","c2","c3"];
    for(let i=0;i<9;i++)
    {
        
        document.getElementById(cell_val[i]).innerHTML="";
        document.getElementById(cell_val[i]).disabled = false;
    }*/
    flag = true;
    document.getElementById("a1").innerHTML="";
    document.getElementById("a1").disabled = false;
    document.getElementById("a2").innerHTML="";
    document.getElementById("a2").disabled = false;
    document.getElementById("a3").innerHTML="";
    document.getElementById("a3").disabled = false;
    document.getElementById("b1").innerHTML="";
    document.getElementById("b1").disabled = false;
    document.getElementById("b2").innerHTML="";
    document.getElementById("b2").disabled = false;
    document.getElementById("b3").innerHTML="";
    document.getElementById("b3").disabled = false;
    document.getElementById("c1").innerHTML="";
    document.getElementById("c1").disabled = false;
    document.getElementById("c2").innerHTML="";
    document.getElementById("c2").disabled = false;
    document.getElementById("c3").innerHTML="";
    document.getElementById("c3").disabled = false;
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
    let bool = false;
    for(let i=0;i<7;i++)
    {
        var myArray=combination[i];
        let a = val_obj[myArray[0]];
        let b = val_obj[myArray[1]];
        let c= val_obj[myArray[2]];
        console.log(my_obj[myArray[0]]);
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            bool = true;
            break;

    }
    if(bool)
    {
        return true;
    }

}

}