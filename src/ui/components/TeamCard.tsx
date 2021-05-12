import "../css/TeamCard.css";
import { Fade, Bounce } from "react-reveal";

interface TeamCardProps {
  image: JSX.Element;
  name: string;
  role: string;
  about: string;
}

export const TeamCard = (props: TeamCardProps) => {
  return (
    <Fade>
      <div className="container-t">
        <div className="column">
          <div className="card">
            {props.image}

            <div className="container-team">
              <Bounce>
                <h2>{props.name}</h2>
              </Bounce>
              <p className="role">{props.role}</p>
              <p>{props.about}</p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
