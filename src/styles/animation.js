export const getFadeLeftStyles = (isfadeLeftInViewPort) => ({
  transition: "opacity, transform 1s ease-in-out",
  opacity: isfadeLeftInViewPort ? "1" : "0",
  transform: isfadeLeftInViewPort ? "" : "translateX(100%)",
});

export const getFadeRightStyles = (isfadeRightInViewPort) => ({
  transition: "opacity, transform 1s ease-in-out",
  opacity: isfadeRightInViewPort ? "1" : "0",
  transform: isfadeRightInViewPort ? "" : "translateX(-100%)",
});

export const getFadeBottomStyles = (isfadeRightInViewPort) => ({
  transition: "opacity, transform 1s ease-in-out",
  opacity: isfadeRightInViewPort ? "1" : "0",
  transform: isfadeRightInViewPort ? "" : "translateY(100%)",
});

export const getFadeTopStyles = (isfadeRightInViewPort) => ({
  transition: "opacity, transform 1.5s ease-in-out",
  opacity: isfadeRightInViewPort ? "1" : "0",
  transform: isfadeRightInViewPort ? "" : "translateY(-100%)",
});
export const getFadeStyles = (isfadeRightInViewPort) => ({
  transition: "opacity 2s",
  opacity: isfadeRightInViewPort ? "1" : "0",
});
