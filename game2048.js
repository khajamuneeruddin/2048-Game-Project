let arr;
let mainBox = document.getElementById("mainBox");
function mainloop(){
    for(let i=0;i<arr.length;i++){
        for(let j=0 ; j<arr.length;j++){
            
            let divTag = document.createElement("div")
            if (arr[i][j]!=0){
                divTag.textContent = arr[i][j];
            }
            divTag.classList.add("box")
            mainBox.appendChild(divTag);
        }
    }
}
function main(){
    arr = [
        [2,8,8,2],
        [2,2,2,2],
        [16,8,8,32],
        [0,0,0,0]
    ];
    mainloop()
    
}
main()

function merge(row){
    
    for(let i=0 ; i<row.length-1;i++){
        if(row[i] === row[i+1]){
            row[i]*=2;
            row[i+1] =0
            
        }
    }
    // console.log(row)
    return row
}

function moveLeft(row){
    let l = []
    for(let i of row){
        if (i!=0){
            l.push(i)
        }
    }
    return l
}

function addZeros(row){
    while(row.length < arr.length){
        row.push(0)
    }
    return row
}

function swipLeft(){
    for(let i=0; i<arr.length;i++){
        let row1 =moveLeft(arr[i])
        
        let row = merge(row1)
        row = moveLeft(row)
        row = addZeros(row)
        arr[i]=row
        console.log(arr[i])
    }
    mainBox.innerHTML = ""
    mainloop()
}


document.addEventListener("keyup",(e)=>{
    if(e.key ==="ArrowLeft"){
        swipLeft()
    }
})




