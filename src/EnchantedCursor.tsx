import React, { useEffect } from "react";
import "./styles.css";

const EnchantedCursor: React.FC = () => {
  useEffect(() => {
    const enchantedCursorOne = document.querySelector(
      ".enchanted-cursor-one"
    ) as HTMLElement;
    const enchantedCursorTwo = document.querySelector(
      ".enchanted-cursor-two"
    ) as HTMLElement;
    const cursorLabel = document.querySelector(
      ".enchanted-cursor-label"
    ) as HTMLElement;
    const hoverElements = document.querySelectorAll('[data-cursor="hover"]');

    document.addEventListener("mousemove", (e) => {
      if (enchantedCursorOne && enchantedCursorTwo && cursorLabel) {
        enchantedCursorOne.style.left = `${e.clientX}px`;
        enchantedCursorOne.style.top = `${e.clientY}px`;
        enchantedCursorTwo.style.left = `${e.clientX}px`;
        enchantedCursorTwo.style.top = `${e.clientY}px`;
        cursorLabel.style.left = `${e.clientX}px`;
        cursorLabel.style.top = `${e.clientY}px`;
      }
    });

    document.addEventListener("mouseleave", () => {
      enchantedCursorOne?.classList.add("document-out");
      enchantedCursorTwo?.classList.add("document-out");
    });

    document.addEventListener("mouseenter", () => {
      enchantedCursorOne?.classList.remove("document-out");
      enchantedCursorTwo?.classList.remove("document-out");
    });

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        const label = el.getAttribute("data-cursor-label");
        if (label) {
          cursorLabel!.textContent = label;
          enchantedCursorOne?.classList.add("has-enchanted-cursor-label");
          enchantedCursorTwo?.classList.add("has-enchanted-cursor-label");
        }
        enchantedCursorOne?.classList.add("hover");
        enchantedCursorTwo?.classList.add("hover");
      });
      el.addEventListener("mouseleave", () => {
        enchantedCursorOne?.classList.remove("hover");
        enchantedCursorTwo?.classList.remove("hover");
        cursorLabel!.textContent = "";
        enchantedCursorOne?.classList.remove("has-enchanted-cursor-label");
        enchantedCursorTwo?.classList.remove("has-enchanted-cursor-label");
      });
    });
  }, []);

  return (
    <>
      <div className="enchanted-cursor-label"></div>
      <div className="enchanted-cursor-one"></div>
      <div className="enchanted-cursor-two"></div>
    </>
  );
};

export default EnchantedCursor;
