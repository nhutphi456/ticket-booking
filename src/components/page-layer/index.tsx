import React, { useEffect, useState } from "react";
import * as Styled from "./styled";

const Layer = () => {
  const [isLayerOn, setIsLayerOn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLayerOn(false);
    }, 1000);
  }, []);

  if (!isLayerOn) return <></>;
  return <Styled.Layer></Styled.Layer>;
};

export default Layer;
