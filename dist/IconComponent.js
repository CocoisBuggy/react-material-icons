"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function IconComponent(props) {
    return (react_1.default.createElement("i", { "aria-label": `icon: ${props.iconName}`, className: `material-icons-outlined ${props.className}}` }, props.iconName));
}
exports.default = IconComponent;
//# sourceMappingURL=IconComponent.js.map