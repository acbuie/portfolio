import { h } from "hastscript";

export const ExternalLinkIcon = h(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    class: "size-4",
  },
  [
    h("path", {
      fill: "none",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWdith: "2",
      d: "M17 7L7 17M8 7h9v9",
    }),
  ],
);
