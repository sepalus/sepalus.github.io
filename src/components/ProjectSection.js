import React, { useState, useEffect } from "react";
import classNames from "classnames";
import ProjectCatalog from "./ProjectCatalog";
import ProjectCard from "./ProjectCard";
import "./ProjectSection.scss";
import {
  aestheticsDesignProjects,
  industrialProjects,
  digitalProjects,
} from "./ProjectData";

function ProjectSection({
  projectRef,
  designArea,
  currentViewport,
  selectViewport,
  firstSectionEntry,
  firstAreaEntry,
  setFirstAreaEntry,
  skipProjectSection,
  isTablet,
}) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [catalogIsCompressed, setCatalogIsCompressed] = useState(false);
  const [toggleCardClass, setToggleCardClass] = useState(0);
  const [toggleDescriptionClass, setToggleDescriptionClass] = useState(0);

  useEffect(() => {
    setToggleCardClass(currentViewport === designArea ? 1 : 0);
    setToggleDescriptionClass(
      currentViewport === designArea && activeImageIndex === 0 ? 1 : 0
    );
  }, [currentViewport]);

  const projects =
    designArea === 3
      ? aestheticsDesignProjects
      : designArea === 2
      ? digitalProjects(catalogIsCompressed)
      : industrialProjects(catalogIsCompressed);

  const activeProject = projects[activeProjectIndex];
  const imageAmount = activeProject.images.length;

  if (activeProjectIndex >= projects.length) setActiveProjectIndex(0);

  const updateImageIndex = (imageIndex) => {
    if (imageIndex < 0) return imageAmount - 1;
    if (imageIndex > imageAmount - 1) return 0;
    return imageIndex;
  };

  const selectProject = (projectIndex) => {
    if (projectIndex === activeProjectIndex && activeImageIndex === 0) return;
    setActiveImageIndex(0);
    setActiveProjectIndex(projectIndex);
    setToggleCardClass(-toggleCardClass);
    setToggleDescriptionClass(toggleDescriptionClass === 1 ? -1 : 1);
  };

  const selectImage = (imageIndex) => {
    const updatedImageIndex = updateImageIndex(imageIndex);
    setActiveImageIndex(updatedImageIndex);
    setToggleCardClass(-toggleCardClass);
    setToggleDescriptionClass(updatedImageIndex === 0 ? 2 : 0);
  };

  if (skipProjectSection)
    return <section ref={projectRef} className="project-section-container" />;

  return (
    <section ref={projectRef} className="project-section-container">
      <div
        className={classNames(
          "project-section",
          {
            "project-section-digital": designArea === 2,
          },
          {
            "project-section-industrial": designArea === 1,
          },
          {
            "project-section-animation-enter": currentViewport === designArea,
          },
          {
            "project-section-animation-exit": currentViewport !== designArea,
          }
        )}
      >
        <ProjectCatalog
          designArea={designArea}
          projects={projects}
          activeProjectIndex={activeProjectIndex}
          catalogIsCompressed={catalogIsCompressed}
          setCatalogIsCompressed={setCatalogIsCompressed}
          selectProject={selectProject}
        />
        <ProjectCard
          currentViewport={currentViewport}
          activeProject={activeProject}
          activeImageIndex={activeImageIndex}
          imageAmount={imageAmount}
          designArea={designArea}
          catalogIsCompressed={catalogIsCompressed}
          toggleCardClass={toggleCardClass}
          toggleDescriptionClass={toggleDescriptionClass}
          setToggleDescriptionClass={setToggleDescriptionClass}
          selectImage={selectImage}
          isTablet={isTablet}
        />
      </div>
    </section>
  );
}

export default ProjectSection;
