import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap , FaLightbulb, FaCheckDouble, FaWrench, FaCalendarCheck, FaPuzzlePiece, FaRegArrowAltCircleUp} from "react-icons/fa";

const Timeline = () => {
  return(
    <div className="timeline">
      <VerticalTimeline lineColor="black">
        <VerticalTimelineElement className="vertical-timeline-element--education"
        iconStyle={{background:"#000",color:'#fff'}}
        icon={<FaLightbulb/>}
        contentStyle={{backgroundColor: '#96ff7b',backgroundImage: 'linear-gradient(90deg, #96ff7b 0%, #3ce63b 100%)'}}
        contentArrowStyle={{borderRight:'7px solid #38e338'}}
        
        >         
          <h3 style={{fontFamily:'Lato',fontSize:'35px'}}>Define</h3>
          <p style={{fontStyle:'italic',color:'#7c5252',fontSize:'18px',fontFamily:'sans-serif'}}>We first work on the idea and make a layout on how to approach the solution</p>
        
        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        iconStyle={{background:"#000",color:'#fff'}}
        icon={<FaCalendarCheck/>}
        contentStyle={{backgroundColor: '#d8bdff',backgroundImage: 'linear-gradient(90deg, #d8bdff 0%, #8ab3fb 100%)'}}
        contentArrowStyle={{borderRight:'7px solid rgb(211 187 255)'}}
        >
          <h3 style={{fontFamily:'Lato',fontSize:'35px'}}>Plan</h3>
          <p style={{fontStyle:'italic',color:'#7c5252',fontSize:'18px',fontFamily:'sans-serif'}}>We make a plan for a specifed timespan so as to work efficiently and complete the assigned task within the deadline</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        iconStyle={{background:"#000",color:'#fff'}}
        icon={<FaWrench/>}
        contentStyle={{backgroundColor: '#f7a3a4',backgroundImage: 'linear-gradient(90deg, #f7a3a4 0%, #ffdea9 100%)'}}
        contentArrowStyle={{borderRight:'7px solid rgb(255 216 180)'}}
        >
          <h3 style={{fontFamily:'Lato',fontSize:'35px'}}>Build</h3>
          <p style={{fontStyle:'italic',color:'#7c5252',fontSize:'18px',fontFamily:'sans-serif'}}>Using our experienced workforce with Latest Technology we start developing the product</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        iconStyle={{background:"#000",color:'#fff'}}
        icon={<FaPuzzlePiece/>}
        contentStyle={{backgroundColor: '#a3d1fb',backgroundImage: 'linear-gradient(90deg, #a3d1fb 0%, #a8ffb6 100%)'}}
        contentArrowStyle={{borderRight:'7px solid rgb(146 211 227)'}}
        >
          <h3 style={{fontFamily:'Lato',fontSize:'35px'}}>Evaluate</h3>
          <p style={{fontStyle:'italic',color:'#7c5252',fontSize:'18px',fontFamily:'sans-serif'}}>Evaluate the product step after step so as to ensure the quaulity of the final product </p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        iconStyle={{background:"#000",color:'#fff'}}
        icon={<FaRegArrowAltCircleUp/>}
        contentStyle={{backgroundColor: '#96ff7b',backgroundImage: 'linear-gradient(90deg, #96ff7b 0%, #3ce63b 100%)'}}
        contentArrowStyle={{borderRight:'7px solid #38e338'}}
        >
          <h3 style={{fontFamily:'Lato',fontSize:'35px'}}>Iterate</h3>
          <p style={{fontStyle:'italic',color:'#7c5252',fontSize:'18px',fontFamily:'sans-serif'}}>During development stages of the product we revisit them so that their is no chance of an error in the later stages</p>

        </VerticalTimelineElement>
        <VerticalTimelineElement className="vertical-timeline-element--education"
        iconStyle={{background:"#000",color:'#fff'}}
        icon={<FaCheckDouble/>}
        contentStyle={{backgroundColor: '#72f9eb',backgroundImage: 'linear-gradient(90deg, #72f9eb 0%, #81d0f7 100%)'}}

        contentArrowStyle={{borderRight:'7px solid rgb(113 254 255)'}}
        
        >
          <h3 style={{fontFamily:'Lato',fontSize:'35px'}}>Goal</h3>
          <p style={{fontStyle:'italic',color:'#7c5252',fontSize:'18px',fontFamily:'sans-serif'}}>After achieving all the goals the final product is ready to provide its services in the appropriate industry</p>

        </VerticalTimelineElement>
      </VerticalTimeline>
      

    </div>
  )

}
export default Timeline