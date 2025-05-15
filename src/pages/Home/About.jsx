import "./About.css";

import tvIcon from "/src/assets/icons/tvIcon.png";
import tattooMachineIcon from "/src/assets/icons/tattooMachineIcon.png";
import pinIcon from "/src/assets/icons/pinIcon.png";

export const About = () => {
  return (
    <div id="about">
      <ul>
        <li>
          <img src={tvIcon} alt="TV icon" />
          <p>
            Yeah, I'm that weirdo you saw on seasons 12 and 14 of Ink Master.
          </p>
        </li>
        <li>
          <img src={tattooMachineIcon} alt="Tattoo Machine icon" />

          <p>Tattoo styles: Color, Black n Grey, Realism, New School...</p>
        </li>
        <li>
          <img src={pinIcon} alt="Pin icon" />
          <p>Current tattoo studio: House of Madness Tattoos (Hampstead, US)</p>
        </li>
      </ul>
    </div>
  );
};
