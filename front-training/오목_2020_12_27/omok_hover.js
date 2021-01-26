function hover_on(x,y){
    if(pan[x][y]==0){
        var selectedItem = document.querySelector(" .x_" + x + "> .y_" + y); 
        if(color=="black")
            selectedItem.style.backgroundColor = "#00000056";
        else
            selectedItem.style.backgroundColor = "#d8d8d891";
        selectedItem.style.borderRadius = "30px";
    }
}
function hover_off(x,y){
    if(pan[x][y]==0){
        var selectedItem = document.querySelector(" .x_" + x + "> .y_" + y); 
        selectedItem.style.backgroundColor = "rgba(0,0,0,0)";
        selectedItem.style.borderRadius = "0px";
    }
}