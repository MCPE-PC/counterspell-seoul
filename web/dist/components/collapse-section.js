import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const CollapseSection = ({ children, title }) => {
    return (_jsxs("div", { children: [title !== undefined && (_jsx("h3", { className: "text-2xl font-bold leading-[33.60px] mb-2", children: title })), _jsx("div", { className: "text-sm font-normal leading-tight", children: children })] }));
};
export default CollapseSection;
