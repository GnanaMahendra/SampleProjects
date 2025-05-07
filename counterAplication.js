let count_num = document.getElementById("num");

function Decrements(){
    let count_number = count_num.textContent;
    let updated_num = parseInt(count_number) - 1;
    count_num.textContent = updated_num;
    if ((document.getElementById("num").textContent) > 0) {
        document.getElementById("num").style.color = "green";
    }
    else if ((document.getElementById("num").textContent) < 0) {
        document.getElementById("num").style.color = "red";
    }
    else{
        document.getElementById("num").style.color = "black";
    }
}
function Resets() {
    count_num.textContent = 0;
    document.getElementById("num").style.color = "black";
}
function Increments() {
    let count_number = count_num.textContent;
    let updated_num = parseInt(count_number) +1;
    count_num.textContent = updated_num;
    if ((document.getElementById("num").textContent) > 0) {
        document.getElementById("num").style.color = "green";
    }
    else if ((document.getElementById("num").textContent) < 0) {
        document.getElementById("num").style.color = "red";
    }
    else{
        document.getElementById("num").style.color = "black";
    }
    
}