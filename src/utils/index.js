// Place this in a utility file or in the same file as your Header component
export const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        block: "start",
        behavior: "smooth",
      });
      if (typeof window !== "undefined") {
        window.location.hash = `#${id}`;
      }
    }
  };

  // In @/utils.js
export const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };