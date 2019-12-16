import React, { useState, useRef, useEffect } from "react";
import DesignerSection from "./DesignerSection";
import ProjectSection from "./ProjectSection";
import InformationSection from "./InformationSection";

export default function Home() {
  const [previousYOffset, setPreviousYOffset] = useState(0);
  const [isInitialViewPort, setIsInitialViewPort] = useState(true);
  const [currentViewport, setCurrentViewport] = useState(0); // 0 === 'designer', 1 === 'project'
  const [currentDesignArea, setCurrentDesignArea] = useState(0); // 0 === 'industrial', 1 === 'digital'
  const [shouldAnimate, setShouldAnimate] = useState(true);

  const designerRef = useRef(null);
  const projectRef = useRef(null);
  const informationRef = useRef(null);

  useEffect(() => {
    const detectViewportOnScroll = () => {
      // Set viewport
      const currentYOffset = window.pageYOffset;
      setPreviousYOffset(currentYOffset);
      let nextViewport = currentViewport;

      if (currentViewport === 0 && currentYOffset > previousYOffset) {
        nextViewport = 1;
      } else if (currentViewport === 1 && currentYOffset < previousYOffset) {
        nextViewport = 0;
      } else if (currentViewport === 1 && currentYOffset > previousYOffset) {
        nextViewport = 2;
      } else if (currentViewport === 2 && currentYOffset < previousYOffset) {
        nextViewport = 1;
      }

      if (currentViewport !== nextViewport) {
        setShouldAnimate(true);
        selectViewport(nextViewport);
        setCurrentViewport(nextViewport);
        setTimeout(() => setIsInitialViewPort(false), 500);
      }
    };
    window.addEventListener("scroll", detectViewportOnScroll);
    return () => window.removeEventListener("scroll", detectViewportOnScroll);
  }, [currentViewport, previousYOffset]);

  const selectViewport = viewport => {
    const ref =
      viewport === 2
        ? informationRef
        : viewport === 1
        ? projectRef
        : designerRef;

    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth"
    });
    setCurrentViewport(viewport);
  };

  const selectDesignArea = (area, animateOnChange) => {
    setCurrentDesignArea(area);
    setShouldAnimate(animateOnChange);
    selectViewport(1);
  };

  return (
    <div>
      <DesignerSection
        designerRef={designerRef}
        isInitialViewPort={isInitialViewPort}
        selectViewport={selectViewport}
        currentDesignArea={currentDesignArea}
        selectDesignArea={selectDesignArea}
      />
      <ProjectSection
        projectRef={projectRef}
        currentViewport={currentViewport}
        selectViewport={selectViewport}
        currentDesignArea={currentDesignArea}
        selectDesignArea={selectDesignArea}
        shouldAnimate={shouldAnimate}
      />
      <InformationSection informationRef={informationRef} />
    </div>
  );
}
