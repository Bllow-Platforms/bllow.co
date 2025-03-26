import { Gift } from "iconsax-react";
import { NotificationCard } from "../notification-card";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import * as Matter from "matter-js";

const HeroNotificationCards = () => {
  const sceneRef = useRef(null!);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const total = 6;

  useEffect(() => {
    let Engine = Matter.Engine,
      Render = Matter.Render,
      Runner = Matter.Runner,
      Bodies = Matter.Bodies,
      Constraint = Matter.Constraint,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Composite = Matter.Composite;

      let engine = Engine.create();
    let world = engine.world;

    let render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width: window.innerWidth,
        height: window.innerHeight-50,
        showDebug:true,
        wireframes: false,
        background: "transparent",
      },
    });

    let ground = Bodies.rectangle(400, 880, 1800, 40, { isStatic: true });

    let ball = Bodies.circle(150, -10, 50, {
      isStatic: false, 
      restitution: 0.8,
      friction: 0.01,
    });

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.9,
        render: { visible: false }, 
      },
    });

    let anchor = Bodies.circle(400, 100, 5, { isStatic: true });

    let cards = [];
    let constraints = [];
    let prevBody = anchor;
    let cardHeight = 110;
    let cardSpacing = 300;

    for (let i = 0; i < total; i++) {
      let initialAngle = -0.000000;
      let yPos = 100 + i * cardSpacing;

      let cardBody = Bodies.rectangle(400, yPos, 150, 100, {
        restitution: 0.8,
        density: 10,
        angle:initialAngle,
        isStatic:false,
        render:{
          visible:false
        }
      });


      let constraint = Constraint.create({
        bodyA: i === 0 ? anchor : cards[i - 1],
        bodyB: cardBody,
        length: cardHeight,
        stiffness: 0.5,
      });

      cards.push(cardBody);
      constraints.push(constraint);
      prevBody = cardBody;
    }

    Composite.add(world, [anchor, ...cards, ...constraints, ball, mouseConstraint]);
render.mouse=mouse
    
    let runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const update = () => {
      cards.forEach((card, index) => {
        if (cardRefs.current[index]) {
          const { x, y } = card.position;
          cardRefs.current[index].style.transform = `translate(${x}px, ${y}px) rotate(${card.angle}rad)`;
        }
      });
      requestAnimationFrame(update);
    };
    update();

    return () => {
      Render.stop(render);
      Composite.clear(world, false);
      Engine.clear(engine);
    };
  }, []);

  return (
    <motion.div ref={sceneRef} className="">

      {Array(total)
        .fill(null)
        .map((_, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            className="absolute pointer-events-none z-[10] w-[200px] h-[50px] flex items-center justify-center "
          >
            <NotificationCard
              icon={<Gift size={30} color="#fff" />}
              text={`💖x${(index + 1) * 500}`}
              user="Xing"
              time="today at 09:24am"
            />
          </div>
        ))}
    </motion.div>
  );
};

export default HeroNotificationCards;
// const TestPhysics () => {
//   const sceneRef = useRef(null!);
//   const engineRef = useRef(null!);
//   const renderRef = useRef(null!);
//   const ballRef = useRef(null!);

//   useEffect(() => {
//     // Module aliases
//     const Engine = Matter.Engine;
//     const Render = Matter.Render;
//     const World = Matter.World;
//     const Bodies = Matter.Bodies;
//     const Mouse = Matter.Mouse;
//     const MouseConstraint = Matter.MouseConstraint;

//     // Create an engine
//     const engine = Engine.create();
//     engineRef.current = engine;

//     // Create a renderer
//     const render = Render.create({
//       element: sceneRef.current,
//       engine: engine,
//       options: {
//         width: 600,
//         height: 400,
//         wireframes: false,
//         background: '#f4f4f4'
//       }
//     });
//     renderRef.current = render;

//     // Create ball
//     const ball = Bodies.circle(300, 50, 30, {
//       restitution: 0.8,
//       render: {
//         fillStyle: 'blue'
//       }
//     });
//     ballRef.current = ball;

//     // Create ground
//     const ground = Bodies.rectangle(300, 390, 600, 20, {
//       isStatic: true,
//       render: {
//         fillStyle: 'green'
//       }
//     });

//     // Add mouse control
//     const mouse = Mouse.create(render.canvas);
//     const mouseConstraint = MouseConstraint.create(engine, {
//       mouse: mouse,
//       constraint: {
//         stiffness: 0.2,
//         render: {
//           visible: false
//         }
//       }
//     });

//     // Add all bodies to the world
//     World.add(engine.world, [ball, ground, mouseConstraint]);

//     // Run the renderer
//     Render.run(render);

//     // Create runner
//     const runner = Matter.Runner.create();
//     Matter.Runner.run(runner, engine);

//     // Cleanup function
//     return () => {
//       Render.stop(render);
//       World.clear(engine.world);
//       Engine.clear(engine);
//       render.canvas.remove();
//     };
//   }, []);

//   return (
//     <div className="w-full h-[400px] flex justify-center items-center">
//       <div 
//         ref={sceneRef} 
//         className="border-2 border-gray-300"
//       />
//     </div>
//   );
// }