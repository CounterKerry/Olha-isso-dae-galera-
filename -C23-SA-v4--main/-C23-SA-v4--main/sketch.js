// Constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Criando butão
var button;
var button2;

// Retângulo aleatório
var rectangle;

// Solo
var ground2;

// Restrição
var restriction

function preload() {

}

function setup() {
  createCanvas(700, 700);

  // Criando universo e adicionando o mundo a ele
  engine = Engine.create();
  world = engine.world;

  // Esqueci o nome
  var ball_options = {
    restitution: 0.95,
		frictionAir: 0.01,
  }

  var ground_option = {
    isStatic: true,
  }

  // Criar botão vermelho
  button = createImg('images/button.png');
  button.position(20, 30);
  button.size(50, 50);
  button.mouseClicked(vForce);


  // Criar botão verde
  button2 = createImg('images/greenButton.png');
  button2.position(635, 35);
  button2.size(35, 35);
  button2.mouseClicked(hForce);

  ground2 = new Ground(350, 50, 60, 20);
  // rectangle = new Rectangle(750, 750, 70, 20);  Recomendado: não descomentar
  
  ball = Bodies.circle(350, 350, 20, ball_options);
  World.add(world, ball);

  ball2 = Bodies.circle(350, 200, 20, ball_options);
  World.add(world, ball2);

  ground = Bodies.rectangle(350, 650, 500, 20, ground_option);
  World.add(world, ground);

  restriction = Matter.Constraint.create(
    {
      pointA: {x: 350, y: 50},
      bodyB: ball2,
      pointB: {x: 0, y: 0},
      length: 100,
      stiffness: 0.1,
    }
  );
  World.add(world, restriction);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() { 
  background(51);

  Engine.update(engine);

  ground2.show();
  // rectangle.showMichaelJackson();  Recomendado: não descomentar

  ellipse(ball.position.x, ball.position.y, 20);
  
  rect(ground.position.x, ground.position.y, 500, 20,);

  push();
  strokeWeight(2);
  stroke(255);
  line(restriction.pointA.x, restriction.pointB.y, ball2.position.x, ball2.position.y);
  ellipse(ball2.position.x, ball2.position.y, 20)
  pop();
}

function vForce() {
  Matter.Body.applyForce(ball, {x: 0, y: 0}, {x: 0, y: -0.05});
}

function hForce() {
  Matter.Body.applyForce(ball, {x: 0, y: 0},{x: -0.01, y: 0})
}