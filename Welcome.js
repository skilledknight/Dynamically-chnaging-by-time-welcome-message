const button=document.querySelector("button");
const output=document.querySelector(".output");
//output.setAttribute("style","color:red; width:200px; height:100px; text-align:center;");//
//output.style.cssText="color:red; width:200px; height:100px; text-align:center;"//
console.log(button);
button.addEventListener("click", showOutput);
    function showOutput() {
        const date=new Date();
        let cur=date.getHours();
        let message;
        console.log(cur);
        cur ='e';
        if(cur>17) {
            message="It's Evening";
            output.style.backgroundColor="Skyblue";
        }
        else if(cur>12) {
            message="It's Afternoon";
            output.style.backgroundColor="Yellow";
        }
         else if(cur>0) {
            message="It's Morning";
            output.style.backgroundColor="Orange";
        } else {
            message="something else";
            output.style.backgroundColor="Indigo";

        }
        output.innerHTML="<h1>"+message+"</h1>"; 
    }