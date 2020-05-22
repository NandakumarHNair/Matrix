class RainDropNumbers extends BaseClass{
    constructor(x, y, width, height){
      super(x, y, width, height);
        var rand = Math.round(random(1,10));
        var n1  = loadImage("Matrix Letters/1.JPG");
        var n2  = loadImage("Matrix Letters/2.JPG");
        var n3  = loadImage("Matrix Letters/3.JPG");
        var n4  = loadImage("Matrix Letters/4.JPG");
        var n5  = loadImage("Matrix Letters/5.JPG");
        var n6  = loadImage("Matrix Letters/6.JPG");
        var n7  = loadImage("Matrix Letters/7.JPG");
        var n8  = loadImage("Matrix Letters/8.JPG");
        var n9  = loadImage("Matrix Letters/9.JPG");
        var n0  = loadImage("Matrix Letters/0.JPG");

        switch(rand){
            case 1:
              this.image = n1;
              break;
              
            case 2:
              this.image = n2;
              break;

            case 3:
              this.image = n3;
              break;

            case 4:
              this.image = n4;
              break;

            case 5:
              this.image = n5;
              break;
                
            case 6:
              this.image = n6;
              break;
  
            case 7:
              this.image = n7;
              break;
  
            case 8:
              this.image = n8;
              break;

            case 9:
              this.image = n9;
              break;
              
            case 10:
              this.image = n0;
              break;
              
            default:
              break;
          }
        }
}
