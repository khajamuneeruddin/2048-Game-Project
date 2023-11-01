let arr;
let mainBox = document.getElementById("mainBox");  


// This Funtion Will loop the Boxes inside the Board


function displayTheBoxeses(){
    mainBox.innerHTML = ""
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
//----------------------------------------------------------------



function merge(row){
    
    for(let i=0 ; i<row.length-1;i++){
        if(row[i] === row[i+1]){
            row[i]*=2;
            row[i+1] =0
            
        }
    }
 
    return row
}

function moveLeft(row){
    let filterZeros = row.filter((elem) => elem !==0 )
    return filterZeros
}



// ---------------Rightswip------------------------



function reverse(row){
    return row.reverse()
}

function swipRight(){
    for(let i=0; i<arr.length;i++){
        let row = reverse(arr[i])
        row =moveLeft(row)
        
        row = merge(row)
        row = moveLeft(row)
        row = addZeros(row)
        row = reverse(row)
        arr[i]=row
      
    }
    
    displayTheBoxeses()
}




// -----------------Topswip----------------------
function transpose() {
    const numRows = arr.length;
    const numCols = arr[0].length;
    const transposedArr = [];

    for (let i = 0; i < numCols; i++) {
        transposedArr[i] = [];
        for (let j = 0; j < numRows; j++) {
            transposedArr[i][j] = arr[j][i];
        }
    }

    arr = transposedArr;
}


function Topswip(){
   
    transpose()
    
   
    for(let i=0; i<arr.length;i++){
        let row1 =moveLeft(arr[i])
        
        let row = merge(row1)
        row = moveLeft(row)
        row = addZeros(row)
        arr[i]=row
        
    }
    transpose()
    
    displayTheBoxeses()
}




//----------------Bottom Swipe ---------------------


function Bottomswip(){
   
    transpose()
    
   
    for(let i=0; i<arr.length;i++){
        let row = reverse(arr[i])
        row =moveLeft(row)
        
        row = merge(row)
        row = moveLeft(row)
        row = addZeros(row)
        row = reverse(row)
        arr[i]=row
        
    }
    transpose()
    
    displayTheBoxeses()
}

// -----------------Leftswip----------------------
function addZeros(row){
    while(row.length < arr.length){
        row.push(0)
    }
    return row
}

function swipLeft(){
    for(let i=0; i<arr.length;i++){
        let row1 =moveLeft(arr[i])
        console.log(row1)
        
        let row = merge(row1)
        row = moveLeft(row)
        row = addZeros(row)
        arr[i]=row
        
    }
    
    displayTheBoxeses()
}

//-----------------EventListeners which Helps in Swiping The things in Bord

















document.addEventListener("keyup",(e)=>{
    if(e.key === "ArrowDown"){
        Bottomswip()
    }else if(e.key ==="ArrowUp"){
        Topswip()
    }else if(e.key ==="ArrowRight"){
        
        swipRight()
    }else if(e.key ==="ArrowLeft"){
        swipLeft()
        // move("Up")
    }
})


function initGame(){
    arr = [
        [2,0,0,0],
        [2,0,0,0],
        [2,0,0,0],
        [2,0,0,0]
    ];
    displayTheBoxeses()
    
}
initGame()