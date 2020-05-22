class RainDropLetters extends BaseClass {
    constructor(x, y, width, height){
      super(x, y, width, height);
        var rand = Math.round(random(1,26));
        var a  = loadImage("Matrix Letters/A.JPG");
        var b  = loadImage("Matrix Letters/B.JPG");
        var c  = loadImage("Matrix Letters/C.JPG");
        var d  = loadImage("Matrix Letters/D.JPG");
        var e  = loadImage("Matrix Letters/E.JPG");
        var f  = loadImage("Matrix Letters/F.JPG");
        var g  = loadImage("Matrix Letters/G.JPG");
        var h  = loadImage("Matrix Letters/H.JPG");
        var i  = loadImage("Matrix Letters/I.JPG");
        var j  = loadImage("Matrix Letters/J.JPG");
        var k  = loadImage("Matrix Letters/K.JPG");
        var l  = loadImage("Matrix Letters/L.JPG");
        var m  = loadImage("Matrix Letters/M.JPG");
        var n  = loadImage("Matrix Letters/N.JPG");
        var o  = loadImage("Matrix Letters/O.JPG");
        var p  = loadImage("Matrix Letters/P.JPG");
        var q  = loadImage("Matrix Letters/Q.JPG");
        var r  = loadImage("Matrix Letters/R.JPG");
        var s  = loadImage("Matrix Letters/S.JPG");
        var t  = loadImage("Matrix Letters/T.JPG");
        var u  = loadImage("Matrix Letters/U.JPG");
        var v  = loadImage("Matrix Letters/V.JPG");
        var w  = loadImage("Matrix Letters/W.JPG");
        var x  = loadImage("Matrix Letters/X.JPG");
        var y  = loadImage("Matrix Letters/Y.JPG");
        var z  = loadImage("Matrix Letters/Z.JPG");

        switch(rand){
            case 1:
              this.image = a;
              break;
              
            case 2:
              this.image = b;
              break;

            case 3:
              this.image = c;
              break;

            case 4:
              this.image = d;
              break;

            case 5:
              this.image = e;
              break;
                
            case 6:
              this.image = f;
              break;
  
            case 7:
              this.image = g;
              break;
  
            case 8:
              this.image = h;
              break;

            case 9:
              this.image = i;
              break;
              
            case 10:
              this.image = j;
              break;

            case 11:
              this.image = k;
              break;
                
            case 12:
              this.image = l;
              break;
  
            case 13:
              this.image = m;
              break;
  
            case 14:
              this.image = n;
              break;
  
            case 15:
              this.image = o;
              break;
                  
            case 16:
              this.image = p;
              break;
    
            case 17:
              this.image = q;
              break;
    
            case 18:
              this.image = r;
              break;
  
            case 19:
              this.image = s;
              break;
                
            case 20:
              this.image = t;
              break;

            case 21:
              this.image = u;
              break;
                  
            case 22:
              this.image = v;
              break;
    
            case 23:
              this.image = w;
              break;
    
            case 24:
              this.image = x;
              break;
    
            case 25:
              this.image = y;
              break;
                    
            case 26:
              this.image = z;
              break;
              
            default:
              break;
          }
        }
}