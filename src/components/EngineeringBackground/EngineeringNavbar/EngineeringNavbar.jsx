import {
  Home,
  User,
  Code2,
  FolderGit2,
  Mail
} from "lucide-react";



function EngineeringNavbar() {
  const navItems = [
    {
      id: "home",
      label: "HOME",
      icon: Home,
    },
    {
      id: "about",
      label: "ABOUT",
      icon: User,
    },
    {
      id: "skills",
      label: "SKILLS",
      icon: Code2,
    },
    {
      id: "projects",
      label: "PROJECTS",
      icon: FolderGit2,
    },
    {
      id: "contact",
      label: "CONTACT",
      icon: Mail,
    },
  ];

  return (
    <nav className="engineering-navbar">
      <div className="engineering-navbar__inner">

        <div className="engineering-navbar__status">
          <span className="status-light" />
          <span className="status-text">SYSTEM ONLINE</span>
        </div>

        <div className="engineering-navbar__items">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <a
                href={`#${item.id}`}
                className={`engineering-nav-item ${
                  item.id === "home" ? "active" : ""
                }`}
                key={item.id}
              >
                <span className="engineering-nav-item__icon">
                  <Icon size={18} strokeWidth={1.7} />
                </span>

                <span className="engineering-nav-item__label">
                  {item.label}
                </span>

                <span className="engineering-nav-item__indicator" />
              </a>
            );
          })}
        </div>

        <div className="engineering-navbar__line" />

        <span className="engineering-navbar__version">
          v1.0.0
        </span>

      </div>
    </nav>
  );
}

export default EngineeringNavbar;