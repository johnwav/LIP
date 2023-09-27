import { Icandidate, IdropDownItems, IconItems } from "./types";

export const sideNavItems: IconItems[] = [
  { name: "home", img: "/assets/home.svg" },
  { name: "users", img: "/assets/users.svg" },
  { name: "calender", img: "/assets/calender.svg" },
  { name: "share", img: "/assets/share.svg" },
  { name: "file", img: "/assets/file.svg" },
  { name: "notebook", img: "/assets/notebook.svg" },
  { name: "heart", img: "/assets/heart.svg" },
  { name: "right", img: "/assets/right.svg" },
];

export const filters = [
  "Personal Information",
  "Education",
  "Work Experience",
  "Activity Filter",
  "Advanced Filter",
];

export const candidates: Icandidate[] = [
  {
    name: "Aaliya Sanderson",
    location: "Riyadh, Saudi Arabia",
    education: "Bachelor - Cambridge University (2023-2020)",
    tags: ["top_candidate", "top_candidate"],
    placementTags: ["New York", "Marketing"],
  },
  {
    name: "John Doe",
    location: "Boston, Usa",
    education: "Bachelor - MIT (2023-2020)",
    tags: ["top_candidate", "top_candidate"],
    placementTags: ["New York", "Marketing", "London"],
  },
  {
    name: "John Doe",
    location: "Boston, Usa",
    education: "Bachelor - MIT (2023-2020)",
    tags: ["top_candidate", "top_candidate"],
    placementTags: ["New York", "Marketing", "London"],
  },
  {
    name: "John Doe",
    location: "Boston, Usa",
    education: "Bachelor - MIT (2023-2020)",
    tags: ["top_candidate", "top_candidate"],
    placementTags: ["New York", "Marketing", "London"],
  },
  {
    name: "John Doe",
    location: "Boston, Usa",
    education: "Bachelor - MIT (2023-2020)",
    tags: ["top_candidate", "top_candidate"],
    placementTags: ["New York", "Marketing", "London"],
  },
  {
    name: "John Doe",
    location: "Boston, Usa",
    education: "Bachelor - MIT (2023-2020)",
    tags: ["top_candidate", "top_candidate"],
    placementTags: ["New York", "Marketing", "London"],
  },
];

export const dropDownItems: IdropDownItems[] = [
  { name: "Applied", number: 1745 },
  { name: "Shortlisted", number: 453 },
  { name: "Tehnical Interview", number: 123 },
  { name: "Opportunity Browsing", number: 243 },
  { name: "Video interview I", number: 25 },
  { name: "Video interview II", number: 25 },
  { name: "Video interview III", number: 25 },
  { name: "Offer", number: 25 },
  { name: "Withdrawn", number: 25 },
];

export const headerIcons: IconItems[] = [
  { name: "mail", img: "/assets/mail.svg" },
  { name: "tag", img: "/assets/tag.svg" },
  { name: "user-check", img: "/assets/User_Check.svg" },
  { name: "user-close", img: "/assets/User_Close.svg" },
  { name: "user-voice", img: "/assets/User_Voice.svg" },
];
