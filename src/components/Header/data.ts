
export type MenuItem = {
  name: string;
  url: string;
};

export let menuItems: MenuItem[] = [
  {name: "Features", url: "#features"},
  {name: "Pricing", url: "#pricing"},
  {name: "Resources", url: "#resources"},
 ];


 export type ModalContent = {
  title: string;
  body: string;
  fields: string[];
};

export type ModalContentType = {
  login: ModalContent;
  signUp: ModalContent; 
};

 export let modal: ModalContentType = {
  login: { 
    title: "Login", 
    body: "To get access to web-site, please enter your login and password here.",
    fields: ["Login", "Password"]
  },
  signUp: { 
    title: "Sign Up", 
    body: "To get authorization to web-site, please enter your data here.",
    fields: ["Name", "Surname", "Email", "Login", "Password"]
  }
};