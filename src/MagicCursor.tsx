import React, { useEffect } from "react";
import "./styles.css";

const MagicCursor = () => {
  useEffect(() => {
    const magicCursorOne = document.querySelector(
      ".magic-cursor-one"
    ) as HTMLElement;
    const magicCursorTwo = document.querySelector(
      ".magic-cursor-two"
    ) as HTMLElement;
    const cursorLabel = document.querySelector(
      ".magic-cursor-label"
    ) as HTMLElement;
    const hoverElements = document.querySelectorAll('[data-cursor="hover"]');

    document.addEventListener("mousemove", (e) => {
      if (magicCursorOne && magicCursorTwo && cursorLabel) {
        magicCursorOne.style.left = `${e.clientX}px`;
        magicCursorOne.style.top = `${e.clientY}px`;
        magicCursorTwo.style.left = `${e.clientX}px`;
        magicCursorTwo.style.top = `${e.clientY}px`;
        cursorLabel.style.left = `${e.clientX}px`;
        cursorLabel.style.top = `${e.clientY}px`;
      }
    });

    document.addEventListener("mouseleave", () => {
      magicCursorOne?.classList.add("document-out");
      magicCursorTwo?.classList.add("document-out");
    });

    document.addEventListener("mouseenter", () => {
      magicCursorOne?.classList.remove("document-out");
      magicCursorTwo?.classList.remove("document-out");
    });

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const label = el.getAttribute("data-cursor-label");
        if (label) {
          cursorLabel!.textContent = label;
          magicCursorOne?.classList.add("has-magic-cursor-label");
          magicCursorTwo?.classList.add("has-magic-cursor-label");
        }
        magicCursorOne?.classList.add("hover");
        magicCursorTwo?.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        magicCursorOne?.classList.remove("hover");
        magicCursorTwo?.classList.remove("hover");
        cursorLabel!.textContent = "";
        magicCursorOne?.classList.remove("has-magic-cursor-label");
        magicCursorTwo?.classList.remove("has-magic-cursor-label");
      });
    });
  }, []);

  return (
    <>
      <div className="magic-cursor-label"></div>
      <div className="magic-cursor-one"></div>
      <div className="magic-cursor-two"></div>
    </>
  );
};

export default MagicCursor;
