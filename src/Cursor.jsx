import jquery from "jquery";
import React, { useEffect } from "react";
function Cursor() {
  useEffect(() => {
    if (document.querySelector(".cursor-helper")) {
      const cursor = document.querySelector(".cursor-helper-outer");
      const cursorinner = document.querySelector(".cursor-helper-inner");
      const links = document.querySelectorAll("a");
      const footers = document.querySelectorAll("footer");
      const carousels = document.querySelectorAll(".owl-carousel");

      const moveCursor = (e) => {
        const x = e.clientX;
        const y = e.clientY;
        cursor.style.transform = `translate3d(calc(${x}px - 50%), calc(${y}px - 50%), 0)`;
        cursorinner.style.left = `${x}px`;
        cursorinner.style.top = `${y}px`;
      };

      const handleMouseDown = () => {
        cursor.classList.add("click");
        cursorinner.classList.add("cursor-helper-innerhover");
      };

      const handleMouseUp = () => {
        cursor.classList.remove("click");
        cursorinner.classList.remove("cursor-helper-innerhover");
      };

      const addCursorStyle = (element, style) => {
        element.addEventListener("mouseover", () =>
          cursor.classList.add(style)
        );
        element.addEventListener("mouseleave", () =>
          cursor.classList.remove(style)
        );
      };

      document.addEventListener("mousemove", moveCursor);
      document.addEventListener("mousedown", handleMouseDown);
      document.addEventListener("mouseup", handleMouseUp);

      links.forEach((link) => addCursorStyle(link, "cursor-link"));
      footers.forEach((footer) => addCursorStyle(footer, "cursor-light"));
      carousels.forEach((carousel) =>
        addCursorStyle(carousel, "cursor-slider")
      );

      // Cleanup function
      return () => {
        document.removeEventListener("mousemove", moveCursor);
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mouseup", handleMouseUp);
        links.forEach((link) => {
          link.removeEventListener("mouseover", () =>
            cursor.classList.add("cursor-link")
          );
          link.removeEventListener("mouseleave", () =>
            cursor.classList.remove("cursor-link")
          );
        });
        footers.forEach((footer) => {
          footer.removeEventListener("mouseover", () =>
            cursor.classList.add("cursor-light")
          );
          footer.removeEventListener("mouseleave", () =>
            cursor.classList.remove("cursor-light")
          );
        });
        carousels.forEach((carousel) => {
          carousel.removeEventListener("mouseover", () =>
            cursor.classList.add("cursor-slider")
          );
          carousel.removeEventListener("mouseleave", () =>
            cursor.classList.remove("cursor-slider")
          );
        });
      };
    }
  }, []);
  return (
    <div>
      <div className="cursor-helper">
        <div className="cursor-helper-outer"></div>
        <div className="cursor-helper-inner"></div>
      </div>
    </div>
  );
}

export default Cursor;
