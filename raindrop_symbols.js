class RainDropSymbols extends BaseClass{
    constructor(x, y, width, height){
      super(x, y, width, height);
        var rand = Math.round(random(1,14));
        var s1  = loadImage("Matrix Letters/S1.JPG");
        var s2  = loadImage("Matrix Letters/S2.JPG");
        var s3  = loadImage("Matrix Letters/S3.JPG");
        var s4  = loadImage("Matrix Letters/S4.JPG");
        var s5  = loadImage("Matrix Letters/S5.JPG");
        var s6  = loadImage("Matrix Letters/S6.JPG");
        var s7  = loadImage("Matrix Letters/S7.JPG");
        var s8  = loadImage("Matrix Letters/S8.JPG");
        var s9  = loadImage("Matrix Letters/S9.JPG");
        var s10 = loadImage("Matrix Letters/S10.JPG");
        var s11 = loadImage("Matrix Letters/S11.JPG");
        var s12 = loadImage("Matrix Letters/S12.JPG");
        var s13 = loadImage("Matrix Letters/S13.JPG");
        var s14 = loadImage("Matrix Letters/S14.JPG");

        switch(rand){
            case 1:
              this.image = s1;
              break;
              
            case 2:
              this.image = s2;
              break;

            case 3:
              this.image = s3;
              break;

            case 4:
              this.image = s4;
              break;

            case 5:
              this.image = s5;
              break;
                
            case 6:
              this.image = s6;
              break;
  
            case 7:
              this.image = s7;
              break;
  
            case 8:
              this.image = s8;
              break;

            case 9:
              this.image = s9;
              break;
              
            case 10:
              this.image = s10;
              break;

            case 11:
              this.image = s11;
              break;
                  
            case 12:
              this.image = s12;
              break;
    
            case 13:
              this.image = s13;
              break;
    
            case 14:
              this.image = s14;
              break;
                         
            default:
              break;
          }
    }
}