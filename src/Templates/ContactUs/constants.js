import email from "./img/email.svg";
import phone from "./img/phone.svg";
import geolocation from "./img/geolocation.svg";

export const CONTACT_DATA = {
  sectionTitle: {
    title: "Contact Us",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,",
    titleClass: "section-title section-title_light",
  },
  contacts: [
    { icon: geolocation, data: ["Nobinagar savar, Dhaka Bangladesh"] },
    { icon: phone, data: ["+8801743331996", "+8801928737807"] },
    { icon: email, data: ["quickmasud@gmail.com", "quickmasud@yahoo.com"] },
  ],
};
