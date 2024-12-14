"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/btns/index.tsx
var btns_exports = {};
__export(btns_exports, {
  BtnFreya: () => BtnFreya_default,
  BtnLoki: () => BtnLoki_default,
  BtnNormalBasic: () => BtnNormalBasic_default,
  BtnRowCircle: () => BtnRowCircle_default,
  BtnSubmitBasic: () => BtnSubmitBasic_default,
  BtnText: () => BtnText_default,
  BtnThor: () => BtnThor_default,
  CheckBoxBasic: () => CheckboxBasic_default
});
module.exports = __toCommonJS(btns_exports);

// src/components/btns/hamburguesa/BtnLoki.tsx
var import_react = __toESM(require("react"));
var BtnLoki = ({
  fn,
  isActive,
  setIsActive,
  className = ""
}) => {
  return /* @__PURE__ */ import_react.default.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `
                  btn-loki btn-menu 
                  ${className} 
                  ${isActive ? "active" : ""}
                `
    },
    /* @__PURE__ */ import_react.default.createElement("span", null),
    /* @__PURE__ */ import_react.default.createElement("span", null),
    /* @__PURE__ */ import_react.default.createElement("span", null)
  );
};
var BtnLoki_default = BtnLoki;

// src/components/btns/hamburguesa/BtnFreya.tsx
var import_react2 = __toESM(require("react"));
var BtnFreya = ({
  fn,
  isActive,
  setIsActive,
  className = ""
}) => {
  return /* @__PURE__ */ import_react2.default.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `btn-freya ${className} ${isActive ? "active" : ""}`
    },
    /* @__PURE__ */ import_react2.default.createElement("span", null)
  );
};
var BtnFreya_default = BtnFreya;

// src/components/btns/hamburguesa/BtnThor.tsx
var import_react3 = __toESM(require("react"));
var BtnThor = ({
  fn,
  isActive,
  setIsActive,
  className = " "
}) => {
  return /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: () => {
        setIsActive(!isActive);
        fn && fn();
      },
      className: `btn-thor ${className} ${isActive ? "active" : ""}`
    },
    /* @__PURE__ */ import_react3.default.createElement("span", { className: "hamburguer" }, /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar bar-1" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar bar-2" }), /* @__PURE__ */ import_react3.default.createElement("span", { className: "bar bar-3" }))
  );
};
var BtnThor_default = BtnThor;

// src/components/btns/basic/BtnSubmitBasic.tsx
var import_react4 = __toESM(require("react"));
var BtnSubmitBasic = ({
  text,
  className = "",
  id,
  disable = false,
  onClick
}) => {
  return /* @__PURE__ */ import_react4.default.createElement("div", { className: `btn-submit-basic ${className}`, id }, /* @__PURE__ */ import_react4.default.createElement("button", { disabled: disable, onClick: onClick && (() => onClick()) }, text));
};
var BtnSubmitBasic_default = BtnSubmitBasic;

// src/components/btns/basic/BtnNormalBasic.tsx
var import_react5 = __toESM(require("react"));
var BtnNormalBasic = ({
  children,
  onClick,
  className = "",
  id
}) => {
  return /* @__PURE__ */ import_react5.default.createElement("div", { className: `btn-normal-basic ${className}`, id }, /* @__PURE__ */ import_react5.default.createElement("button", { onClick }, children));
};
var BtnNormalBasic_default = BtnNormalBasic;

// src/components/btns/basic/BtnText.tsx
var import_react6 = __toESM(require("react"));
var BtnText = ({ text, onClick }) => {
  return /* @__PURE__ */ import_react6.default.createElement("div", { className: "btn-text" }, /* @__PURE__ */ import_react6.default.createElement("button", { type: "button", onClick }, /* @__PURE__ */ import_react6.default.createElement("span", null, text)));
};
var BtnText_default = BtnText;

// src/components/btns/checkbox/CheckboxBasic.tsx
var import_react9 = __toESM(require("react"));

// src/components/nano/A.tsx
var import_react7 = __toESM(require("react"));
var import_link = __toESM(require("next/link"));
var import_router = __toESM(require("next/router"));

// src/components/nano/Icon.tsx
var import_react8 = __toESM(require("react"));
var Icon = ({ icon, className = " " }) => {
  return /* @__PURE__ */ import_react8.default.createElement("span", { className: `icon ${className}` }, icon);
};
var Icon_default = Icon;

// src/components/nano/notify.ts
var import_react_toastify = require("react-toastify");

// src/components/btns/checkbox/CheckboxBasic.tsx
var import_fa6 = require("react-icons/fa6");
var import_im = require("react-icons/im");
var CheckBoxBasic = ({ text, onClick }) => {
  const [isClicked, setIsClicked] = (0, import_react9.useState)(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    onClick();
  };
  return /* @__PURE__ */ import_react9.default.createElement("div", { className: "checkbox-basic", onClick: handleClick }, isClicked ? /* @__PURE__ */ import_react9.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react9.default.createElement(import_fa6.FaSquareCheck, null), className: "animate" }) : /* @__PURE__ */ import_react9.default.createElement(Icon_default, { icon: /* @__PURE__ */ import_react9.default.createElement(import_im.ImCheckboxUnchecked, null) }), /* @__PURE__ */ import_react9.default.createElement("span", { className: "text" }, text));
};
var CheckboxBasic_default = CheckBoxBasic;

// src/components/btns/animte/BtnRowCircle.tsx
var import_react10 = __toESM(require("react"));
var import_fa = require("react-icons/fa");
var BtnRowCircle = ({ icon, id = "", onClick }) => {
  return /* @__PURE__ */ import_react10.default.createElement("div", { className: "container-row-circle", id }, /* @__PURE__ */ import_react10.default.createElement("button", { onClick: () => {
    onClick && onClick();
  } }, /* @__PURE__ */ import_react10.default.createElement(Icon_default, { icon: icon ? icon : /* @__PURE__ */ import_react10.default.createElement(import_fa.FaArrowLeft, null) })));
};
var BtnRowCircle_default = BtnRowCircle;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BtnFreya,
  BtnLoki,
  BtnNormalBasic,
  BtnRowCircle,
  BtnSubmitBasic,
  BtnText,
  BtnThor,
  CheckBoxBasic
});
