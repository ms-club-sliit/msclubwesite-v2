import React,{useState,useEffect} from "react";
import items from "../../data/WhatWeDoData.json"
import { Card } from "../../components";
import { ICard } from '../../interfaces/CardInterface';


const WhatWeDoSection: React.FC = () => {

  const [itemList, setitemList] = useState<ICard[]>([]);

  useEffect(() => {
    setitemList(items);
  }, [])

  return(
    <div>
    <h1 className="text-center mt-4 title">What We Do?</h1>
    <div className="row mt-4">
      {itemList.map((item) => (
        <div className="col-md-3 mb-4">
            <Card id={item.id} title={item.title} icon={item.icon} />
        </div>
      ))}
    </div>
  </div>
  )
          }

export default WhatWeDoSection;
