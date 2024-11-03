import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Collapse = ({ children, title, iconClassName }) => {
    return (_jsxs("section", { className: "relative", children: [_jsx("input", { className: "peer absolute top-0 inset-x-0 h-[3.75rem] opacity-0", type: "checkbox", "aria-hidden": "true" }), _jsxs("h2", { className: "flex items-center text-xl font-medium bg-[#383838] peer-checked:bg-white peer-checked:text-black rounded-3xl px-5 py-3.5", children: [_jsx("i", { className: `${iconClassName} mr-1.5` }), title, _jsx("i", { className: "fa-sharp fa-regular fa-chevron-down ml-auto" })] }), _jsx("div", { className: "hidden peer-checked:flex flex-col gap-10 mt-5 mb-10", children: children })] }));
};
export default Collapse;
