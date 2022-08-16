const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() { 
    createCanvas(400,400);

    engine = Engine.create();
    world = engine.world;
    
     var ball_options = {
      restitution: 0.95,
    }
    pelota = Bodies.circle (200,50,10,ball_options);
    World.add (world, pelota);

    btn2 = createImg('up.png');
    btn2.position(20,30);
    btn2.size(50,50);
    btn2.mouseClicked(vForce);

    cuerda = Matter.Constraint.create(
        { pointA:{x:200,y:20},
         bodyB:pelota,
          pointB:{x:0,y:0},
           length:100,
            stiffness:0.1 }); 
            World.add (world, cuerda);
}


function draw() 
{
  background("black");

  Engine.update(engine);
  ellipse (pelota.position.x, pelota.position.y,10);
stroke ("brown");
  line (cuerda.pointA.x,cuerda.pointA.y,pelota.position.x,pelota.position.y);

}

function vForce()
{
  Matter.Body.applyForce(pelota,{x:0.05,y:0},{x:0.05,y:0});
}
  
