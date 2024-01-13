import booksIcon from "../../assets/icons/book1.png";
import collegeIcon from "../../assets/icons/gradcap1.png";
import webIcon from "../../assets/icons/web2.png";

const EducationStructure = ({ contentSection }) => {
  const booksEducation = [
    {
      title: "Eloquent Javascript",
      subtitle: "A modern Introduction to Programming, 3rd edition",
      source: "Haverbeke",
      id: "book1",
    },
    {
      title: "Javascript Programming",
      subtitle: "A Brain-Friendly Guide",
      source: "Freeman & Robson",
      id: "book2",
    },
    {
      title: "Arduino for Dummies",
      subtitle: "2nd edition",
      source: "Nussey",
      id: "book3",
    },
    {
      title: "Arduino for Musicians",
      subtitle: "A Complete Guide to Arduino and Teensy Microcontrollers",
      source: "Edstrom",
      id: "book4",
    },
    {
      title: "Atomic Habits",
      subtitle: "Tiny Changes, Remarkable Results",
      source: "Clear",
      id: "book5",
    },
    {
      title: "Deep Work",
      subtitle: "Rules for Focused Success in a Distracted World",
      source: "Newport",
      id: "book6",
    },
  ];

  const onlineEducation = [
    {
      title: "The Odin Project",
      source: "theodinproject.com",
      id: "online1",
      stillWorking: false,
    },
    {
      title: "freeCodeCamp",
      source: "freecodecamp.org",
      id: "online2",
      stillWorking: false,
    },
    {
      title: "UI/UX Design",
      source: "generalassembly.com",
      id: "online3",
      stillWorking: true,
    },
    {
      title: "Intro to Excel",
      source: "generalassembly.com",
      id: "online4",
      stillWorking: true,
    },
  ];

  const collegeEdu = {
    title: "University",
    icon: collegeIcon,
    id: "college-edu",
    specialStruct: true,
    key: "collegeEducation",
    content: [],
  };

  const bookEdu = {
    title: "Books",
    icon: booksIcon,
    id: "books-edu",
    specialStruct: false,
    key: "booksEducation",
    content: booksEducation,
  };

  const webEdu = {
    title: "Web",
    icon: webIcon,
    id: "web-edu",
    specialStruct: false,
    key: "webEducation",
    content: onlineEducation,
  };

  const DivsOrList = ({ obj }) => {
    return obj.specialStruct ? (
      <div className="lg-about-content" key={obj.key}>
        <h3 className="lg-about-heading">{obj.title}</h3>
        <div className="bolded-item">Florida State University</div>
        <div className="item-description">BS, Marketing</div>
        <div className="item-description">BS, Criminology</div>
        <span className="college-ec-title">
          Golden Key International Honour Society
        </span>
        <span className="college-ec-title">
          PR Secretary for Alpha Phi Omega
        </span>
      </div>
    ) : (
      <div className="lg-about-content" key={obj.key}>
        <h3 className="lg-about-heading">{obj.title}</h3>
        <ul className="about-unordered-list">
          {obj.content.map((item) => (
            <li className="education-list-item">
              <div className="edu-item-container" key={item.id}>
                <div className="bolded-item">{item.title}</div>
                {item.stillWorking && (
                  <div className="item-progress">(in progress)</div>
                )}
                {item.subtitle && (
                  <span className="item-subtitle">{item.subtitle}, </span>
                )}
                <span className="item-source">{item.source}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const whichEdu = () => {
    if (contentSection === "books") {
      return bookEdu;
    } else if (contentSection === "web") {
      return webEdu;
    } else {
      return collegeEdu;
    }
  };
  return <DivsOrList obj={whichEdu()} />;
};

export default EducationStructure;
