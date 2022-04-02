import "./reward.module.css";
import bgimage from './plain-blue-01.jpg';
import wallpaper from './wallpaper.jpg';

const Reward=()=> {
    
    return (<>
        <div className="hea">Heading</div>


<div className="wrap">


  <div className="move move_original" style={{marginLeft:"0px"}}>

    <a href="http://google.com" target="_blank">
      <div className="car internship">
        <img src={wallpaper} alt="Internship Opportunities" className="image"></img>
      </div>
    </a>
    <a href="http://google.com" target="_blank">
      <div className="car discount">
        <img src={wallpaper} alt="Discount Coupons" className="image"></img>
      </div>
    </a>
    <a href="http://google.com" target="_blank">
      <div className="car letter">
        <img src={wallpaper} alt="Letter of Recommendation" className="image"></img>
      </div>
    </a>
    <a href="http://google.com" target="_blank">
      <div className="car courses">
        <img src={wallpaper} alt="Video Courses" className="image"></img>
      </div>
    </a>


    <a href="http://google.com" target="_blank">
      <div className="car internship">
        <img src={wallpaper} alt="Internship Opportunities" className="image"></img>
      </div>
    </a>
    <a href="http://google.com" target="_blank">
      <div className="car discount">
        <img src={wallpaper} alt="Discount Coupons" className="image"></img>
      </div>
    </a>
    <a href="http://google.com" target="_blank">
      <div className="car letter">
        <img src={wallpaper} alt="Letter of Recommendation" className="image"></img>
      </div>
    </a>
    <a href="http://google.com" target="_blank">
      <div className="car courses">
        <img src={wallpaper} alt="Video Courses" className="image"></img>
      </div>
    </a>

  </div>
</div>

    </>);
}

export default Reward;