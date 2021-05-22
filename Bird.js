class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = []

  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    super.display();
    console.log(this.body.velocity);

    if(this.body.velocity.x > 5 && this.body.position.x > 200) {
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
    

    //this.trajectory = [[200, 100], [220, 120], [230, 130],......]

    for(var i = 0; i < this.trajectory.length; i++) {
      image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1]);
    }

  }
}
