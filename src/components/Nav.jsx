import React from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="padding-x py-8 fixed z-10 w-full bg-white">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal
              text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={24} height={24} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;

// flex justify-center items-center gap-16 max-lg:hidden

/**
 * 1. The flex utility class is used to create a flex container.
 * 2. The justify-center utility class is used to align the flex items along the main axis at the center. (horizontally)
 * 3. The items-center utility class is used to align the flex items along the cross axis at the center. (vertically)
 * 4. The gap-16 utility class is used to create a gap between the flex items of 16px.
 * 5. The max-lg:hidden utility class is used to hide the flex container on large screens.
 * 6. The font-montserrat utility class is used to apply the Montserrat font family.
 * 7. The leading-normal utility class is used to set the line height to normal.
 * 8. The text-lg utility class is used to set the font size to 1.125rem (18px).
 */
