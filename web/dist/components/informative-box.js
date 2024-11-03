import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const InformativeBox = ({ children }) => {
    return (_jsxs("div", { className: "flex items-start bg-[#535353] leading-snug rounded-3xl px-3 py-2.5", children: [_jsx("i", { className: "fa-sharp fa-regular fa-circle-info text-xl mr-1.5" }), _jsx("p", { children: children })] }));
};
export default InformativeBox;
