import collegeIcon from "../../assets/icons/gradcap1.png";
import booksIcon from "../../assets/icons/book1.png";
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
    },
    {
      title: "freeCodeCamp",
      source: "freecodecamp.org",
      id: "online2",
    },
    {
      title: "UI/UX Design",
      source: "generalassembly.com",
      id: "online3",
    },
    {
      title: "Intro to Excel",
      source: "generalassembly.com",
      id: "online4",
    },
  ];

  const collegeEdu = {
    title: "University",
    icon: collegeIcon,
    id: "college-edu",
    specialStruct: true,
    content: [],
  };

  const bookEdu = {
    title: "Books",
    icon: booksIcon,
    id: "books-edu",
    specialStruct: false,
    content: booksEducation,
  };

  const webEdu = {
    title: "Web",
    icon: webIcon,
    id: "web-edu",
    specialStruct: false,
    content: onlineEducation,
  };

  const DivsOrList = ({obj}) => {
    return obj.specialStruct ? (
      <div className="edu-detail-content" key={obj.id}>
        <h3 className="education-heading">{obj.title}</h3>
        <h4 className="college-title">Florida State University</h4>
        <h5 className="college-degree">Bachelor of Science, Business Marketing</h5>
        <h5 className="college-degree">Bachelor of Science, Criminology</h5>
        <span className="college-accolade">
          Golden Key International Honour Society
        </span>
        <span className="college-accolade">
          PR Secretary for Alpha Phi Omega
        </span>
      </div>
    ) : (
      <div className="edu-detail">
        <h3 className="education-heading">{obj.title}</h3>
        <ul className="edu-list">
          {obj.content.map((item) => (
            <li>
              <div className="edu-item-container" key={item.id}>
                <h4 className="edu-item-title">{item.title}</h4>
                {item.subtitle && (
                  <span className="edu-item-subtitle">{item.subtitle}, </span>
                )}
                <span className="edu-item-source">{item.source}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  
  };

  const whichEdu = () => {
    if (contentSection === 'left') {
      return bookEdu;
    } else if (contentSection === 'right') {
      return webEdu;
    } else {
      return collegeEdu;
    }
  }
  return (
    <DivsOrList obj={whichEdu()} />
  )
};

export default EducationStructure;
