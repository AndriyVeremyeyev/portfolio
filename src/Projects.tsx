import React, { Fragment } from "react";
import battleShipImage from "./assets/battleship.png";
import westSeattleImage from "./assets/west-seattle.jpg";
import nurseSchedulerImage from "./assets/nurse-scheduler.jpg";
import zineMakerImage from "./assets/zine-maker.png";
import { links, projectImageData } from "./util/database";
import strings from "./util/strings";
import Content from "./components/Content";

const Projects: React.FC = () => {
  const projectsData = [
    {
      contentText: [strings.westSeattleAbout],
      image: westSeattleImage,
      imageData: projectImageData,
      link: links.westSeattle,
      title: strings.westSeattleTitle,
    },
    {
      contentText: [strings.battleShipAbout],
      image: battleShipImage,
      imageData: projectImageData,
      link: links.battleship,
      title: strings.battleShipTitle,
    },
    {
      contentText: [strings.zineMakerAboutOne, strings.zineMakerAboutTwo],
      image: zineMakerImage,
      imageData: projectImageData,
      link: links.zineClient,
      title: strings.zineMakerTitle,
    },
    {
      contentText: [strings.nurseSchedulerAboutOne, strings.zineMakerAboutTwo],
      image: nurseSchedulerImage,
      imageData: projectImageData,
      link: links.nurScheduler,
      title: strings.nurseSchedulerTitle,
    },
  ];

  return (
    <Fragment>
      {projectsData.map((data, index) => (
        <Content data={data} key={`project${index}`} />
      ))}
    </Fragment>
  );
};

export default Projects;
