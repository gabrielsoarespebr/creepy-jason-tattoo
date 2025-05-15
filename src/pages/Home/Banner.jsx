import "./Banner.css";
import creepyJason from "/src/assets/images/creepyJason1NoBackground.png";
import creepyJasonText from "/src/assets/images/creepyJasonText.png";
import greenSmokeBackground from "/src/assets/videos/greenSmokeBackground3.mp4";

export const Banner = () => {
  return (
    <div id="banner">
      <video src={greenSmokeBackground} autoPlay loop muted playsInline></video>
      <div className="flex justify-around">
        <img src={creepyJasonText} alt="Creepy Jason's name" id="text" />
        <img src={creepyJason} alt="Creepy Jason tattoo artist" id="photo" />
      </div>
    </div>
  );
};
