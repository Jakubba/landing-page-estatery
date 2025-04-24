interface MenuItem {
    name: string;
    path: string;
  }
  
  export interface NavbarData {
    loginLink: string;
    signUpLink: string;
    loginText: string;
    signUpText: string;
    menuItems: MenuItem[];
    logoSrc: string;
    logoText: string;
  }
  