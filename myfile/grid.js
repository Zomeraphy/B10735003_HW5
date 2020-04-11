window.onload = function(){
  // 基本型
  // document.getElementById("cards").innerHTML = "New text!";
  // 定義 htnl 的內容
  var str="";
  for(var i=0;i<3;i+=1){
    str+=
      '<div class="col-4">'+
        '<div class="card">'+
          '<div id="sketch'+i+'"></div>'+ // sketch 將會塞入這裡 
          '<div class="card-body">'+
            '<p>'+i+'</p>'+
          '</div>'+
        '</div>'+
      '</div>';
  }  
  // 將資料放入 id 為 cards 的 tag 裡面
  document.getElementById("cards").innerHTML = str;
  
  //sketch
  var brushSketch = function(p5j){
    // inital of p5j(processing) structure
    // add all function with p5j header
    p5j.setup = function(){
      p5j.createCanvas(300, 300);
      p5j.colorMode(p5j.HSB,360,100,100,100);
    }
    // update of sketch
    p5j.draw = function(){
      var c = p5j.map(p5j.mouseX, 0, p5j.width, 0, 360); // !!! replace float !!!
      // 基本型
      p5j.background(100);
      p5j.push();
      p5j.translate(p5j.mouseX,p5j.mouseY);
      p5j.rotate(p5j.radians(p5j.frameCount*3));
      p5j.fill(c,80,80,50);
      p5j.circle(50,0,30);
      p5j.pop();
    }
  }

  new p5(brushSketch, 'sketch0');
  new p5(brushSketch, 'sketch1');
  new p5(brushSketch, 'sketch2');

}