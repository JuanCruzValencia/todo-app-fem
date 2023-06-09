import { useState } from "react";

const useDrag = () => {
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const handleDrag = (dragging: boolean) => {
    setIsDragging(dragging);
  };

  return {
    isDragging,
    handleDrag,
  };
};

export default useDrag;
