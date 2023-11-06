const Education = () => {
  const booksEducation = [
    {
      title: "Eloquent Javascript",
      subtitle: "A modern Introduction to Programming, 3rd edition",
      author: "Haverbeke",
      id: "book1",
    },
    {
      title: "Javascript Programming",
      subtitle: "A Brain-Friendly Guide",
      author: "Freeman & Robson",
      id: "book2",
    },
    {
      title: "Arduino for Dummies",
      subtitle: "2nd edition",
      author: "Nussey",
      id: "book3",
    },
    {
      title: "Arduino for Musicians",
      subtitle: "A Complete Guide to Arduino and Teensy Microcontrollers",
      author: "Edstrom",
      id: "book4",
    },
    {
      title: "Atomic Habits",
      subtitle: "Tiny Changes, Remarkable Results",
      author: "Clear",
      id: "book5",
    },
    {
      title: "Deep Work",
      subtitle: "Rules for Focused Success in a Distracted World",
      author: "Newport",
      id: "book6",
    },
  ];

  const onlineEducation = [
    {
      title: "The Odin Project",
      link: "theodinproject.com",
      id: "online1",
    },
    {
      title: "freeCodeCamp",
      link: "freecodecamp.org",
      id: "online2",
    },
    {
      title: "UI/UX Design",
      link: "generalassembly.com",
      id: "online3",
    },
    {
      title: "Intro to Excel",
      link: "generalassembly.com",
      id: "online4",
    },
  ];

  return (
    <div className="education-container" id="education">
      <h2 className="about-section-heading" id="education-section-heading">
        Education
      </h2>
      <div className="education-college">
        <h3 className="education-heading">University</h3>
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
      <div className="education-books">
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
      </div>
    </div>
  );
};

export default Education;
