import { useState, useEffect } from "react";

const FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("effect", { enable });

    const handleMove = (event) => {
      const { clientX, clientY } = event;
      console.log(handleMove, { clientX, clientY });
      setPosition({ x: clientX, y: clientY });
    };

    if (enable) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      removeEventListener("pointermove", handleMove);
    };
  }, [enable]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", enable);

    return () => {
      document.body.classList.remove("no-cursor");
    };
  });
  return (
    <>
      <main>
        <div
          style={{
            position: "absolute",
            backgroundColor: "#09f",
            borderRadius: "50%",
            opacity: "0.8",
            pointerEvents: "none",
            left: -20,
            top: -20,
            width: 40,
            height: 40,
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        />
      </main>
      <button
        onClick={() => {
          setEnable(!enable);
        }}
      >
        {enable ? "Desactivar" : "Activar"} seguimiento
      </button>
    </>
  );
};

export default FollowMouse;
