
import React from "react";

const HoverImage = ({ src, hoverSrc, style, disabled, onClick, className }) => {
  const [imageSrc, setImageSrc] = React.useState(src);

  const mouseOver = React.useCallback(() => {
    setImageSrc(hoverSrc);
  }, []);

  const mouseOut = React.useCallback(() => {
    setImageSrc(src);
  }, []);

  const handleClick = (e) => {
    if (!onClick) return;
    if (!disabled) {
      onClick(e);
    }
  };

  return (
    <img
      src={imageSrc}
      style={style}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      onClick={handleClick}
      className={className}
    />
  );
};

export default HoverImage;