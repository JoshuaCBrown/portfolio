import { motion } from "framer-motion";
import { useState } from "react";
import arrow from "../../assets/commonicons/arrow.png";
import booksIcon from "../../assets/icons/book1.png";
import collegeIcon from "../../assets/icons/gradcap1.png";
import webIcon from "../../assets/icons/web2.png";
import "../../style/Education.css";

const Education = () => {
  const [eduSelected, setEduSelected] = useState({
    title: "University",
    icon: collegeIcon,
    id: "college-edu",
    specialStruct: true,
    content: [],
  });

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

  function eduLeftClick() {
    const currentIndex = eduCategories.findIndex(
      (obj) => obj.title === eduSelected.title
    );
    currentIndex === 0
      ? setEduSelected(eduCategories[eduCategories.length - 1])
      : setEduSelected(eduCategories[currentIndex - 1]);
  }

  function eduRightClick() {
    const currentIndex = eduCategories.findIndex(
      (obj) => obj.title === eduSelected.title
    );
    currentIndex === eduCategories.length - 1
      ? setEduSelected(eduCategories[0])
      : setEduSelected(eduCategories[currentIndex + 1]);
  }

  const divsOrList = (obj) => {
    return obj.specialStruct ? (
      <div className="edu-detail-content" key={obj.id}>
        <h3 className="education-heading">{obj.title}</h3>
        <h4 className="college-title">Florida State University</h4>
        <h5 className="college-degree">Bachelor of Science, Marketing</h5>
        <h5 className="college-degree">Bachelor of Science, Criminology</h5>
        <span className="college-accolade">
          Golden Key International Honour Society
        </span>
        <br />
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

  const eduCategories = [collegeEdu, webEdu, bookEdu];

  return (
    <div className="education-container" id="education">
      <h2 className="about-section-heading" id="education-section-heading">
        Education
      </h2>
      <div className="education-content">
        <div className="education-selector">
          <div className="green-top"></div>
          <div className="top-half-education">
            <div id="edu-left-select-div">
              <button id="edu-left-select" onClick={eduLeftClick}>
                <img src={arrow} id="left-arrow" />
              </button>
            </div>
            <motion.img
              className="edu-icon"
              src={eduSelected.icon}
              key={eduSelected.id}
              initial={{ opacity: 0, x: "-100px" }}
              animate={{ opacity: 1, x: 0 }}
            ></motion.img>
            <div id="edu-right-select-div">
              <button id="edu-right-select" onClick={eduRightClick}>
                <img src={arrow} id="right-arrow" />
              </button>
            </div>
          </div>

          <div className="bottom-half-education">{divsOrList(eduSelected)}</div>
        </div>
        {/* <div className="education-books">
          <h3 className="education-heading">Books</h3>
          <ul className="book-list">
            {booksEducation.map((book) => (
              <li>
                <div className="book-item" key={book.id}>
                  <h4 className="book-title">{book.title}</h4>
                  <span className="book-subtitle">{book.subtitle}, </span>
                  <span className="book-author">{book.author}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="education-online">
          <h3 className="education-heading">Web</h3>
          <ul className="online-list">
            {onlineEducation.map((course) => (
              <li>
                <div className="online-item" key={course.id}>
                  <h4 className="online-title">{course.title}</h4>
                  <span className="online-link">{course.link}</span>
                </div>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Education;
