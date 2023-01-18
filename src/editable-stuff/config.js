// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Oluwaseun",
  middleName: "",
  lastName: "Oyewole",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/oyewoleoluwaseun",
    },
    {
      image: "fa-facebook",
      url: "https://www.facebook.com/oyewoleoluwaseun22",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/oluwathanksarts/",
    },
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/oyewole-oluwaseun-08611694/",
    },
    {
      image: "fa-twitter",
      url: "https://twitter.com/OluwaseunOyew11/",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/my_picture.jpg"),
  imageSize: 375,
  message:
    "My name is Oyewole Oluwaseun Gabriel. I am a graduate of 2016 from Obafemi Awolowo University, Ile-Ife, Nigeria. I am a meticulous, dedicated and a proactive person who loves to explore new technologies and passionate about learning. An optimistic person who is always energetic and hungry in learning new skills with eagerness to succeed and enthusiasm to compete. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of Technology.",
  resume: "https://drive.google.com/file/d/1DfdBJNThRUfjX2QhHaLGAC1OHGUbI4ga/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "oyewoleoluwaseun", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    {
      img: require("../editable-stuff/my_picture.jpg"),
      label: "First slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
    {
      img: require("../editable-stuff/my_picture.jpg"),
      label: "Second slide label",
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum."
    },
  ],
  imageSize: {
    width: "615",
    height: "450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    {name: "Python", value: 80},
    {name: "SQL", value: 65},
    {name: "Angular", value: 65},
    {name: "GDScript", value: 85},
    {name: "JavaScript", value: 80},
    {name: "React", value: 55},
    {name: "HTML/CSS", value: 85},
    {name: "Java", value: 70},
  ],
  softSkills: [
    {name: "Goal-Oriented", value: 75},
    {name: "Collaboration", value: 85},
    {name: "Positivity", value: 70},
    {name: "Adaptability", value: 85},
    {name: "Problem Solving", value: 75},
    {name: "Empathy", value: 85},
    {name: "Organization", value: 70},
    {name: "Creativity", value: 85},
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for opportunities! In my free time I like working on open source projects. If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "oyewoleseun22@gmail.com",
};

const experiences = {
  show: true,
  heading: "Experiences",
  data: [
    {
      role: 'Software Developer - Lumos Studio Integrated Ltd',// Here Add Company Name
      companylogo: require('../assets/img/logo.png'),
      date: 'June 2020 – Present',
    },
    // {
    //   role: 'Front-End Developer',
    //   companylogo: require('../assets/img/boeing.png'),
    //   date: 'May 2017 – May 2018',
    // },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export {navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences};
