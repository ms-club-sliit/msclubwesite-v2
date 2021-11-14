import React from "react";
import CardScreen from "../../components/card-screen";
import content from "../../data/MissionVisionData.json";

const VisionSection: React.FC = () => (
  <div>
    <CardScreen
      title={content.mission.title}
      description={content.mission.description}
      imageUrl={content.mission.imageUrl}
      rightSide={false}
    />
    <CardScreen
      title={content.vision.title}
      description={content.vision.description}
      imageUrl={content.vision.imageUrl}
      rightSide={true}
    />
    <CardScreen
      title={content.strategy.title}
      description={content.strategy.description}
      imageUrl={content.strategy.imageUrl}
      rightSide={false}
    />
  </div>
);

export default VisionSection;
