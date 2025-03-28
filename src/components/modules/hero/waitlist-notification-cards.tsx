import Matter from "matter-js";
import { useEffect, useRef } from "react";
import { NotificationCard } from "../notification-card";
import { Gift } from "iconsax-react";

const WaitlistNotificationCards = () => {
  const sceneRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const engineRef = useRef<Matter.Engine | null>(null);
  const renderRef = useRef<Matter.Render | null>(null);

  const width = window.innerWidth;
  const height = window.innerHeight;
  const screenOffset = 50;
  const cardWidth = 350;
  const cardHeight = 120;
  const noOfCards = Math.floor(Math.random() * 50);

  useEffect(() => {
    if (!sceneRef.current) return;

    const engine = Matter.Engine.create();
    engineRef.current = engine;
    const world = engine.world;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine: engine,
      options: {
        width,
        height: height - screenOffset,
        wireframes: false,
        background: "transparent",
      },
    });
    renderRef.current = render;

    const wallOptions = {
      isStatic: true,
      render: { visible: false },
    };

    const walls = {
      left: Matter.Bodies.rectangle(0, height / 2, 20, height, wallOptions),
      right: Matter.Bodies.rectangle(
        width,
        height / 2,
        20,
        height,
        wallOptions
      ),
      top: Matter.Bodies.rectangle(width / 2, 0, width, 20, wallOptions),
      bottom: Matter.Bodies.rectangle(
        width / 2,
        height - 50,
        width,
        20,
        wallOptions
      ),
    };

    const cards = Array.from({ length: noOfCards }, (_, i) => {
      return Matter.Bodies.rectangle(
        Math.random() * (width - cardWidth),
        100 + i * 150,
        cardWidth,
        cardHeight,
        {
          restitution: 0.6,
          friction: 0.3,
          angle: (Math.random() - 0.5) * 0.5,
          render: { visible: false },
        }
      );
    });

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });
    render.mouse = mouse;
    Matter.Composite.add(world, [
      ...cards,
      walls.left,
      walls.right,
      walls.top,
      walls.bottom,
      mouseConstraint,
    ]);

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const updateCardPositions = () => {
      cards.forEach((card, index) => {
        const cardElement = cardRefs.current[index];
        if (cardElement) {
          const { x, y } = card.position;
          cardElement.style.transform = `translate(${x - cardWidth / 2}px, ${
            y - cardHeight / 2
          }px) rotate(${card.angle}rad)`;
        }
      });
      requestAnimationFrame(updateCardPositions);
    };

    updateCardPositions();
    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(world, false);
      Matter.Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="fixed md:z[10] z-[1] opacity-30 md:opacity-100 inset-0 overflow-hidden pointer-events-none"
    >
      {Array.from({ length: noOfCards }).map((_, index) => (
        <div
          key={index}
          ref={(el: any) => (cardRefs.current[index] = el)}
          className="absolute w-[200px] h-[120px] origin-center"
        >
          <NotificationCard
            icon={<Gift size={30} color="#fff" />}
            text={`💖x${(index + 1) * 500}`}
            user="Xing"
            time="today at 09:24am"
          />
        </div>
      ))}
    </div>
  );
};

export default WaitlistNotificationCards;
