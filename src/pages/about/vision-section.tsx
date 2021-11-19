import React from "react";
import { CardScreen } from "../../components";
import content from "../../data/MissionVisionData.json";

const VisionSection: React.FC = () => (
  <div>
    <CardScreen
      title={content.mission.title}
      description={content.mission.description}
      imageUrl={content.mission.imageUrl}
      rightSide={false}
      emoji="our-mission-emoji"
    />
    <CardScreen
      title={content.vision.title}
      description={content.vision.description}
      imageUrl={content.vision.imageUrl}
      rightSide={true}
      emoji="our-vision-emoji"
    />
    <CardScreen
      title={content.strategy.title}
      description={content.strategy.description}
      imageUrl={content.strategy.imageUrl}
      rightSide={false}
      emoji="our-strategy-emoji"
    />
  </div>
);

export default VisionSection;
