import tour1 from "./images/tour-1.jpeg";
import tour2 from "./images/tour-2.jpeg";
import tour3 from "./images/tour-3.jpeg";
import tour4 from "./images/tour-4.jpeg";
export const dataLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },

  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];
export const socialLinks = [
  {
    id: 1,
    href: "https://www.facebook.com",
    className: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    className: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.squarespace.com",
    className: "fab fa-squarespace",
  },
];
export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
  {
    id: 2,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia",
  },
];

export const tours = [
  {
    id: 1,
    date: "august 26th, 2020",
    image: tour1,
    title: "Tibet Adventure",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    date: "october 1th, 2020",
    image: tour2,
    title: "best of java",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    date: "september 15th, 2020",
    image: tour3,
    title: "Explore Hong Kong",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "Hong Kong",
    duration: "8 days",
    price: "from $5000",
  },
  {
    id: 4,
    date: "December 5th, 2019",
    image: tour4,
    title: "Kenya Highlights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    location: "Kenya",
    duration: "20 days",
    price: "from $3300",
  },
];
