import { Gift } from "iconsax-react";
import { NotificationCard } from "../notification-card";
import { motion } from "framer-motion";
import { memo, useEffect, useRef } from "react";
import Matter from "matter-js";

const HeroNotificationCards = () => {
  const sceneRef = useRef(null!);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const { current: Engine } = useRef(Matter.Engine);
  const { current: Render } = useRef(Matter.Render);
  const { current: Runner } = useRef(Matter.Runner);
  const { current: Bodies } = useRef(Matter.Bodies);
  const { current: Constraint } = useRef(Matter.Constraint);
  const { current: Mouse } = useRef(Matter.Mouse);
  const { current: MouseConstraint } = useRef(Matter.MouseConstraint);
  const { current: Composite } = useRef(Matter.Composite);

  //   CONSTANTS
  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenOffset = 50; //Hardcoded, haven;t thought of a way to offset the way i want;
  const cardHeight = 200;
  const cardSpacing = 100;
  const noOfCards = 6;

  useEffect(() => {
    if (
      !Engine ||
      !Render ||
      !Runner ||
      !Bodies ||
      !Constraint ||
      !Mouse ||
      !MouseConstraint ||
      !Composite
    ) {
      return console.warn("MATTER-JS PROPERTIES NOT LOADED");
    }

    const engine = Engine.create();
    const world = engine.world;
    const render = Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height: height - screenOffset,
        // showDebug: true,
        wireframes: false,
        hasBounds: true,
        background: "transparent",
      },
    });

    // MATTER OBJECTS RENDER:
    const walls = {
      left: Bodies.rectangle(0, 300, 1, 1200, {
        isStatic: true,
        render: {
          visible: false,
        },
      }),
    };

    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.9,
        render: { visible: false },
      },
    });

    const anchor = Bodies.circle(400, 100, 5, { isStatic: true });

    const cards: Matter.Body[] = [];
    const constraints = [];
    // @ts-ignore
    let prevBody = anchor;

    for (let i = 0; i < noOfCards; i++) {
      const angle = 0; // Want to tilt a bit so it falls dues to gravity, but not working;
      const yPos = 80 + i * cardSpacing;

      const cardBody = Bodies.rectangle(400, yPos, 300, 100, {
        restitution: 0.8,
        friction: 0,
        // density: 10,
        angle,
        isStatic: false,
        render: {
          visible: false,
        },
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

    Composite.add(world, [
      anchor,
      ...cards,
      walls.left,
      ...constraints,
      mouseConstraint,
    ]);
    render.mouse = mouse;

    // RUNNER

    let runner = Runner.create();
    Runner.run(runner, engine);
    Render.run(render);

    const update = () => {
      // ballRef.current.style.transform = `translate(${ball.position.x-50}px, ${ball.position.y-130}px) rotate(${ball.angle}rad)`
      cards.forEach((card, index) => {
        if (cardRefs.current[index]) {
          const { x, y } = card.position;
          cardRefs.current[index].style.transform = `translate(${
            x * 0.8
          }px, ${y-screenOffset*0.6}px) rotate(${card.angle}rad)`;
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
  }, [sceneRef]);

  return (
    <>
      <motion.div ref={sceneRef} className="md:translate-0 translate-x-[-20%]">
        {Array(noOfCards)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              ref={(el) => {
                if (el) cardRefs.current[index] = el;
              }}
              className="absolute pointer-events-none md:z-[10] w-[200px] h-[50px] flex items-center justify-center "
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
    </>
  );
};

export default memo(HeroNotificationCards);