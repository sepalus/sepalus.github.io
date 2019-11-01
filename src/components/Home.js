import React, { useState, useRef, useEffect } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";

export default function Home() {
  const [previousYOffset, setPreviousYOffset] = useState(0);
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [nextViewport, setNextViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial', 1 === 'digital'
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const [isButtonSticky, setIsButtonSticky] = useState(false);

  const designerRef = useRef(null);
  const projectRef = useRef(null);

  useEffect(() => {
    const detectViewportOnScroll = () => {
      // Set button stickyness
      if (window.pageYOffset < window.innerHeight - 200)
        setIsButtonSticky(false);
      else setIsButtonSticky(true);

      // Set viewport
      const currentYOffset = window.pageYOffset;
      setPreviousYOffset(currentYOffset);

      if (currentViewport === 0 && currentYOffset > previousYOffset)
        setNextViewport(1);
      else if (currentViewport === 1 && currentYOffset < previousYOffset)
        setNextViewport(0);

      if (currentViewport !== nextViewport) {
        setShouldAnimate(true);
        selectViewport(nextViewport);
        setCurrentViewport(nextViewport);
      }
    };
    window.addEventListener("scroll", detectViewportOnScroll);
    return () => window.removeEventListener("scroll", detectViewportOnScroll);
  }, [currentViewport, nextViewport, previousYOffset]);

  const scrollToRef = ref =>
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth"
    });

  const selectViewport = viewport =>
    scrollToRef(viewport === 0 ? designerRef : projectRef);

  const selectDesignArea = (area, animateOnChange) => {
    setCurrentDesignArea(area);
    setShouldAnimate(animateOnChange);
    selectViewport(1);
  };

  return (
    <div>
      <DesignerSection
        designerRef={designerRef}
        currentDesignArea={currentDesignArea}
        selectDesignArea={selectDesignArea}
        isButtonSticky={isButtonSticky}
      />
      <ProjectSection
        projectRef={projectRef}
        currentViewport={currentViewport}
        shouldAnimate={shouldAnimate}
        currentDesignArea={currentDesignArea}
        selectViewport={selectViewport}
        selectDesignArea={selectDesignArea}
        setIsButtonSticky={setIsButtonSticky}
      />
    </div>
  );
}
