import "../../style/AboutDetail.css";
import visualImg from "../../assets/icons/eye2.png";
import Listerine from "./Listerine";
import { allInterestsArray } from "./AllInterests";

const InterestsLeft = () => {
  return (
    <>
      <div className="interests-spacey-spacer"></div>
      <div className="interests-parent-container">
        <div className="large-about-container" id="interests-right">
          <div className="lg-about-content">
            <h2 className="lg-about-heading" id="lg-interests-heading">
              Interests
            </h2>
            <div className="lg-about-twocol">
              {allInterestsArray.map((item) => (
                <div className="lg-about-subsection">
                  <Listerine
                    listTitle={item.title}
                    listClass={item.class}
                    listId={item.id}
                    listContent={item.content}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterestsLeft;
