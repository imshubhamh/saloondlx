


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";

import Logo from "./Logo.jsx";
import Button from "./Button.jsx";
import { NAV_LINKS } from "../constants/nav.js";

function NavItem({ href, children, className = "", onClick }) {
  if (href.startsWith("/")) {
    return (
      <Link
        to={href}
        onClick={onClick}
        className={className}
      >
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      onClick={onClick}
      className={className}
    >
      {children}
    </a>
  );
}

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`
        fixed
        inset-x-0
        top-0
        z-50
        transition-all
        duration-300
        ${scrolled ? "py-2.5" : "py-4"}
      `}
    >
      <div
        className={`
          mx-auto
          flex
          max-w-7xl
          items-center
          justify-between
          rounded-2xl
          px-5
          py-2.5
          transition-all
          duration-300
          sm:px-6

          ${
            scrolled
              ? `
                border
                border-[--c-border]
                bg-[--c-surface]/85
                shadow-card
                backdrop-blur-xl
              `
              : `
                border
                border-transparent
                bg-black/10
                backdrop-blur-[2px]
              `
          }
        `}
      >

        {/* =====================================================
            LOGO
        ====================================================== */}

        <div
          className={`
            transition-colors
            duration-300
            ${
              scrolled
                ? "text-[--c-ink]"
                : "text-white drop-shadow-lg"
            }
          `}
        >
          <Logo />
        </div>


        {/* =====================================================
            DESKTOP NAV
        ====================================================== */}

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((l) => (
            <NavItem
              key={l.label}
              href={l.href}
              className={`
                text-sm
                font-medium
                transition-colors
                duration-200

                ${
                  scrolled
                    ? "text-[--c-muted] hover:text-[--c-ink]"
                    : "text-white/90 drop-shadow-md hover:text-white"
                }
              `}
            >
              {l.label}
            </NavItem>
          ))}
        </nav>


        {/* =====================================================
            DESKTOP ACTIONS
        ====================================================== */}

        <div className="hidden items-center gap-3 lg:flex">

          {/* Dark mode */}
          <button
            aria-label="Toggle dark mode"
            onClick={() => setDark((d) => !d)}
            className={`
              grid
              h-9
              w-9
              place-items-center
              rounded-full
              transition-all

              ${
                scrolled
                  ? `
                    text-[--c-muted]
                    ring-1
                    ring-inset
                    ring-[--c-border]
                    hover:text-[--c-ink]
                  `
                  : `
                    text-white
                    ring-1
                    ring-white/30
                    hover:bg-white/10
                  `
              }
            `}
          >
            {dark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>


          {/* Login */}
          {/* <button
            className={`
              text-sm
              font-semibold
              transition-colors

              ${
                scrolled
                  ? "text-[--c-ink] hover:text-[--c-primary]"
                  : "text-white drop-shadow-md hover:text-white/70"
              }
            `}
          >
            Login
          </button> */}


          {/* Register */}
          {/* <Button
            variant="primary"
            className="!px-5 !py-2.5 text-sm"
          >
            Register
          </Button> */}

        </div>


        {/* =====================================================
            MOBILE MENU BUTTON
        ====================================================== */}

        {/* <button
          className={`
            grid
            h-9
            w-9
            place-items-center
            rounded-full
            transition-colors
            lg:hidden

            ${
              scrolled
                ? "text-[--c-ink]"
                : "text-white drop-shadow-lg"
            }
          `}
          onClick={() => setMenuOpen((m) => !m)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button> */}

      </div>


      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
{/* 
      <div
        className={`
          mx-4
          overflow-hidden
          rounded-2xl
          border
          border-[--c-border]
          bg-[--c-surface]/95
          backdrop-blur-xl
          transition-all
          duration-300
          lg:hidden

          ${
            menuOpen
              ? "mt-2 max-h-[420px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <div className="flex flex-col gap-1 p-4">

          {NAV_LINKS.map((l) => (
            <NavItem
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="
                rounded-lg
                px-3
                py-2.5
                text-sm
                font-medium
                text-[--c-muted]
                transition-colors
                hover:bg-[--c-primary]/5
                hover:text-[--c-ink]
              "
            >
              {l.label}
            </NavItem>
          ))}

          <div
            className="
              mt-2
              flex
              items-center
              gap-3
              border-t
              border-[--c-border]
              pt-4
            "
          >

            <button
              onClick={() => setDark((d) => !d)}
              aria-label="Toggle dark mode"
              className="
                grid
                h-9
                w-9
                place-items-center
                rounded-full
                text-[--c-muted]
                ring-1
                ring-inset
                ring-[--c-border]
              "
            >
              {dark ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <button className="flex-1 text-sm font-semibold text-[--c-ink]">
              Login
            </button>

            <Button
              variant="primary"
              className="flex-1 !px-4 !py-2.5 text-sm"
            >
              Register
            </Button>

          </div>
        </div>
      </div> */}
    </header>
  );
}