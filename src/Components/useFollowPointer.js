import { useState, useEffect } from "react";

function useFollowPointer(ref) {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.clientX - ref.current.offsetWidth / 2,
                y: e.clientY - ref.current.offsetHeight / 2
            });
        };

        document.addEventListener("mousemove", handleMouseMove);

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
        };
    }, [ref]);

    return position;
}

export default useFollowPointer;