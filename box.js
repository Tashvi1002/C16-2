class Box
  {
    constructor(){
      this.x= 100;
      this.y= 100;
      this.width= 40;
      this.height= 40;
    }

    display(){
      rect(this.x,this.y,this.width,this.height)
    }

    setSpeed(v){
      this.x= this.x+v
    }

    setWidth(){
      this.width= 6
    }
  }

  
