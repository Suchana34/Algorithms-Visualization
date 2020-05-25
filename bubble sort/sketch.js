
let values = []
let i=0
let j=0

function setup(){
  canvas = createCanvas(800, 500)
  for(let i=0;i<width;i++){
    // can be anything like color, sine graph, audio, perlin noise
    //values.push(random(height))
    values.push(noise(i/100.0)*height) //perlin noise
  }
}

function swap(arr,a,b){
  let t;
  t=arr[a];
  arr[a]=arr[b];
  arr[b]=t;
}


function draw(){
  background(0)

  for(let n =0;n<50;n++){
  //bubble sort implementation
    let a = values[j]
    let b = values[j+1]
    if(a>b){
      swap(values, j,j+1)
    }
    j = j+1;
    if(i<values.length){  
      if(j >= values.length-i-1){
        j=0;
        i = i+1
      }
    }else{
      noLoop()
    }
  }

  for(let i=0; i<values.length; i++){
    stroke(255)
    line(i, height, i, height - values[i])
  }
  
}
