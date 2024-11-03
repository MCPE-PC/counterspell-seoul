import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
const Faq = ({ children, title, }) => {
    return (_jsxs("div", { children: [_jsxs("h3", { className: "text-2xl font-bold mb-1", children: ["Q. ", title] }), _jsx("span", { className: "text-sm", children: children })] }));
};
export default Faq;
