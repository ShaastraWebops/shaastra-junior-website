import React from "react";
import { ReactComponent as DiceAloneLightOutline } from "./../../images/logo/animated/looped/Dice_Alone_Outline_Light_animated.svg";
import { ReactComponent as DiceAloneBlackOutline } from "./../../images/logo/animated/looped/Dice_Alone_Outline_Black_animated.svg";

interface Props {}

const Loader = (props: Props) => {
  return (
    <div className="loader">
      {localStorage.getItem("chakra-ui-color-mode") === "dark" ||
      !localStorage.getItem("chakra-ui-color-mode") ? (
        <DiceAloneLightOutline height="100" width="auto" />
        ) : (
          <DiceAloneBlackOutline height="100" width="auto" />
      )}
    </div>
  );
};

export default Loader;
