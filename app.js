let choice = document.querySelectorAll(".choice");
let myscore= document.getElementById("myscore");
let compscore= document.getElementById("compscore");
let message= document.getElementById("mymessage");

let finalmyscore=0;
let finalcompscore=0;



let select=choice.forEach(choice=>{
    choice.addEventListener("click",()=>{
        let id=choice.getAttribute("id");
        //console.log(id);
       let z= compselect();


        if(id=="rock"&& z=="paper" || id=="paper" && z=="scissor"){
            //console.log("comp win")
            finalcompscore++;
            compscore.innerText=finalcompscore;
            message.innerText = ` comp win  :  ${id} beated by ${z}`;
        }else if(id==z){
            console.log("draw");
            message.innerText = `its a draw`;
        }else{
            finalmyscore++;
            myscore.innerText=finalmyscore;
            console.log("you win");
            message.innerText = `You win  :  ${z} beated by ${id}`;
        }
    })
})

function compselect (){
    let options=["rock","paper","scissor"]
    let a=[Math.floor(Math.random()*3)];
    let compselected=options[a];
    //console.log(options[a]);
    return compselected;
}

