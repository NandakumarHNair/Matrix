class BaseClass{
    constructor(x, y, width, height){

        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }

    display(){
        fill ("green");
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }
}