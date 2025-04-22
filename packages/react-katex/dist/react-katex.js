(function(global, factory) {
    if (typeof module === "object" && typeof module.exports === "object") factory(exports, require("react"), require("prop-types"), require("katex"));
    else if (typeof define === "function" && define.amd) define([
        "exports",
        "react",
        "prop-types",
        "katex"
    ], factory);
    else if (global = typeof globalThis !== "undefined" ? globalThis : global || self) factory(global.index = {}, global.react, global.propTypes, global.katex);
})(this, function(exports, _react, _propTypes, _katex) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    function _export(target, all) {
        for(var name in all)Object.defineProperty(target, name, {
            enumerable: true,
            get: all[name]
        });
    }
    _export(exports, {
        BlockMath: ()=>BlockMath,
        InlineMath: ()=>InlineMath
    });
    _react = /*#__PURE__*/ _interopRequireWildcard(_react);
    _propTypes = /*#__PURE__*/ _interopRequireDefault(_propTypes);
    _katex = /*#__PURE__*/ _interopRequireDefault(_katex);
    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }
    function _getRequireWildcardCache(nodeInterop) {
        if (typeof WeakMap !== "function") return null;
        var cacheBabelInterop = new WeakMap();
        var cacheNodeInterop = new WeakMap();
        return (_getRequireWildcardCache = function(nodeInterop) {
            return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
        })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
        if (!nodeInterop && obj && obj.__esModule) {
            return obj;
        }
        if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
            return {
                default: obj
            };
        }
        var cache = _getRequireWildcardCache(nodeInterop);
        if (cache && cache.has(obj)) {
            return cache.get(obj);
        }
        var newObj = {};
        var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for(var key in obj){
            if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
                var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
                if (desc && (desc.get || desc.set)) {
                    Object.defineProperty(newObj, key, desc);
                } else {
                    newObj[key] = obj[key];
                }
            }
        }
        newObj.default = obj;
        if (cache) {
            cache.set(obj, newObj);
        }
        return newObj;
    }
    /**
 * @typedef {import("react").ReactNode} ReactNode
 *
 *
 * @callback ErrorRenderer
 * @param {Error} error
 * @returns {ReactNode}
 *
 *
 * @typedef {object} MathComponentPropsWithMath
 * @property {string} math
 * @property {ReactNode=} children
 * @property {string=} errorColor
 * @property {ErrorRenderer=} renderError
 * @property {boolean} fleqn
 *
 *
 * @typedef {object} MathComponentPropsWithChildren
 * @property {string=} math
 * @property {ReactNode} children
 * @property {string=} errorColor
 * @property {ErrorRenderer=} renderError
 * @property {boolean} fleqn
 *
 * @typedef {MathComponentPropsWithMath | MathComponentPropsWithChildren} MathComponentProps
 */ const createMathComponent = (Component, { displayMode  })=>{
        /**
   *
   * @param {MathComponentProps} props
   * @returns {ReactNode}
   */ const MathComponent = ({ children , errorColor , math , renderError , fleqn  })=>{
            const formula = math !== null && math !== void 0 ? math : children;
            const { html , error  } = (0, _react.useMemo)(()=>{
                try {
                    const html = _katex.default.renderToString(formula, {
                        displayMode,
                        errorColor,
                        throwOnError: !!renderError,
                        fleqn
                    });
                    return {
                        html,
                        error: undefined
                    };
                } catch (error) {
                    if (error instanceof _katex.default.ParseError || error instanceof TypeError) {
                        return {
                            error
                        };
                    }
                    throw error;
                }
            }, [
                formula,
                errorColor,
                renderError
            ]);
            if (error) {
                return renderError ? renderError(error) : /*#__PURE__*/ _react.default.createElement(Component, {
                    html: `${error.message}`
                });
            }
            return /*#__PURE__*/ _react.default.createElement(Component, {
                html: html
            });
        };
        MathComponent.propTypes = {
            children: _propTypes.default.string,
            errorColor: _propTypes.default.string,
            math: _propTypes.default.string,
            renderError: _propTypes.default.func,
            fleqn: _propTypes.default.bool
        };
        return MathComponent;
    };
    const InternalPathComponentPropTypes = {
        html: _propTypes.default.string.isRequired
    };
    const InternalBlockMath = ({ html  })=>{
        return /*#__PURE__*/ _react.default.createElement("div", {
            "data-testid": "react-katex",
            dangerouslySetInnerHTML: {
                __html: html
            }
        });
    };
    InternalBlockMath.propTypes = InternalPathComponentPropTypes;
    const InternalInlineMath = ({ html  })=>{
        return /*#__PURE__*/ _react.default.createElement("span", {
            "data-testid": "react-katex",
            dangerouslySetInnerHTML: {
                __html: html
            }
        });
    };
    InternalInlineMath.propTypes = InternalPathComponentPropTypes;
    const BlockMath = createMathComponent(InternalBlockMath, {
        displayMode: true
    });
    const InlineMath = createMathComponent(InternalInlineMath, {
        displayMode: false
    });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XHJcbmltcG9ydCBLYVRlWCBmcm9tICdrYXRleCc7XHJcblxyXG4vKipcclxuICogQHR5cGVkZWYge2ltcG9ydChcInJlYWN0XCIpLlJlYWN0Tm9kZX0gUmVhY3ROb2RlXHJcbiAqXHJcbiAqXHJcbiAqIEBjYWxsYmFjayBFcnJvclJlbmRlcmVyXHJcbiAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXHJcbiAqIEByZXR1cm5zIHtSZWFjdE5vZGV9XHJcbiAqXHJcbiAqXHJcbiAqIEB0eXBlZGVmIHtvYmplY3R9IE1hdGhDb21wb25lbnRQcm9wc1dpdGhNYXRoXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBtYXRoXHJcbiAqIEBwcm9wZXJ0eSB7UmVhY3ROb2RlPX0gY2hpbGRyZW5cclxuICogQHByb3BlcnR5IHtzdHJpbmc9fSBlcnJvckNvbG9yXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JSZW5kZXJlcj19IHJlbmRlckVycm9yXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmxlcW5cclxuICpcclxuICpcclxuICogQHR5cGVkZWYge29iamVjdH0gTWF0aENvbXBvbmVudFByb3BzV2l0aENoaWxkcmVuXHJcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nPX0gbWF0aFxyXG4gKiBAcHJvcGVydHkge1JlYWN0Tm9kZX0gY2hpbGRyZW5cclxuICogQHByb3BlcnR5IHtzdHJpbmc9fSBlcnJvckNvbG9yXHJcbiAqIEBwcm9wZXJ0eSB7RXJyb3JSZW5kZXJlcj19IHJlbmRlckVycm9yXHJcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZmxlcW5cclxuICpcclxuICogQHR5cGVkZWYge01hdGhDb21wb25lbnRQcm9wc1dpdGhNYXRoIHwgTWF0aENvbXBvbmVudFByb3BzV2l0aENoaWxkcmVufSBNYXRoQ29tcG9uZW50UHJvcHNcclxuICovXHJcblxyXG5jb25zdCBjcmVhdGVNYXRoQ29tcG9uZW50ID0gKENvbXBvbmVudCwgeyBkaXNwbGF5TW9kZSB9KSA9PiB7XHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge01hdGhDb21wb25lbnRQcm9wc30gcHJvcHNcclxuICAgKiBAcmV0dXJucyB7UmVhY3ROb2RlfVxyXG4gICAqL1xyXG4gIGNvbnN0IE1hdGhDb21wb25lbnQgPSAoeyBjaGlsZHJlbiwgZXJyb3JDb2xvciwgbWF0aCwgcmVuZGVyRXJyb3IsIGZsZXFuIH0pID0+IHtcclxuICAgIGNvbnN0IGZvcm11bGEgPSBtYXRoID8/IGNoaWxkcmVuO1xyXG5cclxuICAgIGNvbnN0IHsgaHRtbCwgZXJyb3IgfSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGh0bWwgPSBLYVRlWC5yZW5kZXJUb1N0cmluZyhmb3JtdWxhLCB7XHJcbiAgICAgICAgICBkaXNwbGF5TW9kZSxcclxuICAgICAgICAgIGVycm9yQ29sb3IsXHJcbiAgICAgICAgICB0aHJvd09uRXJyb3I6ICEhcmVuZGVyRXJyb3IsXHJcbiAgICAgICAgICBmbGVxbixcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgaHRtbCwgZXJyb3I6IHVuZGVmaW5lZCB9O1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEthVGVYLlBhcnNlRXJyb3IgfHwgZXJyb3IgaW5zdGFuY2VvZiBUeXBlRXJyb3IpIHtcclxuICAgICAgICAgIHJldHVybiB7IGVycm9yIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgfSwgW2Zvcm11bGEsIGVycm9yQ29sb3IsIHJlbmRlckVycm9yXSk7XHJcblxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiByZW5kZXJFcnJvciA/IHJlbmRlckVycm9yKGVycm9yKSA6IDxDb21wb25lbnQgaHRtbD17YCR7ZXJyb3IubWVzc2FnZX1gfSAvPjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPENvbXBvbmVudCBodG1sPXtodG1sfSAvPjtcclxuICB9O1xyXG5cclxuICBNYXRoQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcclxuICAgIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLFxyXG4gICAgZXJyb3JDb2xvcjogUHJvcFR5cGVzLnN0cmluZyxcclxuICAgIG1hdGg6IFByb3BUeXBlcy5zdHJpbmcsXHJcbiAgICByZW5kZXJFcnJvcjogUHJvcFR5cGVzLmZ1bmMsXHJcbiAgICBmbGVxbjogUHJvcFR5cGVzLmJvb2xcclxuICB9O1xyXG5cclxuICByZXR1cm4gTWF0aENvbXBvbmVudDtcclxufTtcclxuXHJcbmNvbnN0IEludGVybmFsUGF0aENvbXBvbmVudFByb3BUeXBlcyA9IHtcclxuICBodG1sOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5jb25zdCBJbnRlcm5hbEJsb2NrTWF0aCA9ICh7IGh0bWwgfSkgPT4ge1xyXG4gIHJldHVybiA8ZGl2IGRhdGEtdGVzdGlkPVwicmVhY3Qta2F0ZXhcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz47XHJcbn07XHJcblxyXG5JbnRlcm5hbEJsb2NrTWF0aC5wcm9wVHlwZXMgPSBJbnRlcm5hbFBhdGhDb21wb25lbnRQcm9wVHlwZXM7XHJcblxyXG5jb25zdCBJbnRlcm5hbElubGluZU1hdGggPSAoeyBodG1sIH0pID0+IHtcclxuICByZXR1cm4gPHNwYW4gZGF0YS10ZXN0aWQ9XCJyZWFjdC1rYXRleFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaHRtbCB9fSAvPjtcclxufTtcclxuXHJcbkludGVybmFsSW5saW5lTWF0aC5wcm9wVHlwZXMgPSBJbnRlcm5hbFBhdGhDb21wb25lbnRQcm9wVHlwZXM7XHJcblxyXG5leHBvcnQgY29uc3QgQmxvY2tNYXRoID0gY3JlYXRlTWF0aENvbXBvbmVudChJbnRlcm5hbEJsb2NrTWF0aCwgeyBkaXNwbGF5TW9kZTogdHJ1ZSB9KTtcclxuZXhwb3J0IGNvbnN0IElubGluZU1hdGggPSBjcmVhdGVNYXRoQ29tcG9uZW50KEludGVybmFsSW5saW5lTWF0aCwgeyBkaXNwbGF5TW9kZTogZmFsc2UgfSk7XHJcbiJdLCJuYW1lcyI6WyJCbG9ja01hdGgiLCJJbmxpbmVNYXRoIiwiY3JlYXRlTWF0aENvbXBvbmVudCIsIkNvbXBvbmVudCIsImRpc3BsYXlNb2RlIiwiTWF0aENvbXBvbmVudCIsImNoaWxkcmVuIiwiZXJyb3JDb2xvciIsIm1hdGgiLCJyZW5kZXJFcnJvciIsImZsZXFuIiwiZm9ybXVsYSIsImh0bWwiLCJlcnJvciIsInVzZU1lbW8iLCJLYVRlWCIsInJlbmRlclRvU3RyaW5nIiwidGhyb3dPbkVycm9yIiwidW5kZWZpbmVkIiwiUGFyc2VFcnJvciIsIlR5cGVFcnJvciIsIm1lc3NhZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIkludGVybmFsUGF0aENvbXBvbmVudFByb3BUeXBlcyIsImlzUmVxdWlyZWQiLCJJbnRlcm5hbEJsb2NrTWF0aCIsImRpdiIsImRhdGEtdGVzdGlkIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJJbnRlcm5hbElubGluZU1hdGgiLCJzcGFuIl0sIm1hcHBpbmdzIjoiQUFBQTttR0FBK0IsT0FBTyxXQUNoQixZQUFZLFdBQ2hCLE9BQU87OztRQUZNLE9BQU87UUFDaEIsWUFBWTtRQUNoQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7UUEyRlpBLFNBQVMsTUFBVEEsU0FBUztRQUNUQyxVQUFVLE1BQVZBLFVBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUExRnZCLCtyQkF5QkMsR0FF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

//# sourceMappingURL=react-katex.js.map