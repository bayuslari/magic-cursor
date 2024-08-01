"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./styles.css");
var MagicCursor = function () {
    (0, react_1.useEffect)(function () {
        var magicCursorOne = document.querySelector(".magic-cursor-one");
        var magicCursorTwo = document.querySelector(".magic-cursor-two");
        var cursorLabel = document.querySelector(".magic-cursor-label");
        var hoverElements = document.querySelectorAll('[data-cursor="hover"]');
        document.addEventListener("mousemove", function (e) {
            if (magicCursorOne && magicCursorTwo && cursorLabel) {
                magicCursorOne.style.left = "".concat(e.clientX, "px");
                magicCursorOne.style.top = "".concat(e.clientY, "px");
                magicCursorTwo.style.left = "".concat(e.clientX, "px");
                magicCursorTwo.style.top = "".concat(e.clientY, "px");
                cursorLabel.style.left = "".concat(e.clientX, "px");
                cursorLabel.style.top = "".concat(e.clientY, "px");
            }
        });
        document.addEventListener("mouseleave", function () {
            magicCursorOne === null || magicCursorOne === void 0 ? void 0 : magicCursorOne.classList.add("document-out");
            magicCursorTwo === null || magicCursorTwo === void 0 ? void 0 : magicCursorTwo.classList.add("document-out");
        });
        document.addEventListener("mouseenter", function () {
            magicCursorOne === null || magicCursorOne === void 0 ? void 0 : magicCursorOne.classList.remove("document-out");
            magicCursorTwo === null || magicCursorTwo === void 0 ? void 0 : magicCursorTwo.classList.remove("document-out");
        });
        hoverElements.forEach(function (el) {
            el.addEventListener("mouseenter", function () {
                var label = el.getAttribute("data-cursor-label");
                if (label) {
                    cursorLabel.textContent = label;
                    magicCursorOne === null || magicCursorOne === void 0 ? void 0 : magicCursorOne.classList.add("has-magic-cursor-label");
                    magicCursorTwo === null || magicCursorTwo === void 0 ? void 0 : magicCursorTwo.classList.add("has-magic-cursor-label");
                }
                magicCursorOne === null || magicCursorOne === void 0 ? void 0 : magicCursorOne.classList.add("hover");
                magicCursorTwo === null || magicCursorTwo === void 0 ? void 0 : magicCursorTwo.classList.add("hover");
            });
            el.addEventListener("mouseleave", function () {
                magicCursorOne === null || magicCursorOne === void 0 ? void 0 : magicCursorOne.classList.remove("hover");
                magicCursorTwo === null || magicCursorTwo === void 0 ? void 0 : magicCursorTwo.classList.remove("hover");
                cursorLabel.textContent = "";
                magicCursorOne === null || magicCursorOne === void 0 ? void 0 : magicCursorOne.classList.remove("has-magic-cursor-label");
                magicCursorTwo === null || magicCursorTwo === void 0 ? void 0 : magicCursorTwo.classList.remove("has-magic-cursor-label");
            });
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "magic-cursor-label" }),
        react_1.default.createElement("div", { className: "magic-cursor-one" }),
        react_1.default.createElement("div", { className: "magic-cursor-two" })));
};
exports.default = MagicCursor;
