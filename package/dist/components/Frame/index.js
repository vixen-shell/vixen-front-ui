import { jsx as s } from "react/jsx-runtime";
function x(e, t) {
  return `${e}${t ? "-reverse" : ""}`;
}
function r(e) {
  return typeof e == "number" ? `${e}px` : typeof e == "object" && "ratio" in e ? `${e.ratio}%` : "100%";
}
function g({
  children: e,
  className: t,
  direction: f = "column",
  reverse: i = !1,
  justifyContent: a = "center",
  alignItems: n = "center",
  width: o,
  height: u,
  padding: l = 0,
  gap: c = 0,
  overflow: p = !1
}) {
  return /* @__PURE__ */ s(
    "div",
    {
      className: `ui_frame ${t}`,
      style: {
        display: "flex",
        flexDirection: x(f, i),
        width: r(o),
        height: r(u),
        justifyContent: a,
        alignItems: n,
        padding: `${l}px`,
        gap: `${c}px`,
        overflow: p ? "auto" : "hidden"
      },
      children: e
    }
  );
}
export {
  g as default
};
