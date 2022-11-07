import { Global, css } from '@emotion/react'
import colors from 'src/constants/colors'

const GlobalStyle = () => (
    <Global
        styles={css`
            /* http://meyerweb.com/eric/tools/css/reset/ 
            v2.0 | 20110126
            License: none (public domain)
            */
            * {
                -webkit-tap-highlight-color: transparent;
                -webkit-box-sizing: border-box;
                -moz-box-sizing: border-box;
                box-sizing: border-box;

                &::before,
                &::after {
                    -webkit-box-sizing: inherit;
                    -moz-box-sizing: inherit;
                    box-sizing: inherit;
                }
            }
            body,
            button,
            input,
            select,
            table,
            textarea {
                font-family: 'Pretendard Std', Pretendard, 'Noto Sans KR',
                    -apple-system, BlinkMacSystemFont, system-ui, Roboto,
                    'Helvetica Neue', 'Segoe UI', 'Apple Color Emoji',
                    'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
            }
            html,
            body,
            div,
            span,
            applet,
            object,
            iframe,
            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            p,
            blockquote,
            pre,
            a,
            abbr,
            acronym,
            address,
            big,
            cite,
            code,
            del,
            dfn,
            em,
            img,
            ins,
            kbd,
            q,
            s,
            samp,
            small,
            strike,
            strong,
            sub,
            sup,
            tt,
            var,
            b,
            u,
            i,
            center,
            dl,
            dt,
            dd,
            ol,
            ul,
            li,
            fieldset,
            form,
            label,
            legend,
            table,
            caption,
            tbody,
            tfoot,
            thead,
            tr,
            th,
            td,
            article,
            aside,
            canvas,
            details,
            embed,
            figure,
            figcaption,
            footer,
            header,
            hgroup,
            menu,
            nav,
            output,
            ruby,
            section,
            summary,
            time,
            mark,
            audio,
            video {
                margin: 0;
                padding: 0;
                border: 0;
                // font-size: 100%;
                // font: inherit;
                vertical-align: baseline;
            }
            body {
                // TODO: color -> theme 만들어서 이동할 것
                background-color: ${colors.mainBackgroundColor};
                color: ${colors.white};
            }
            /* HTML5 display-role reset for older browsers */
            article,
            aside,
            details,
            figcaption,
            figure,
            footer,
            header,
            hgroup,
            menu,
            nav,
            section {
                display: block;
            }
            body {
                line-height: 1;
            }
            ol,
            ul {
                list-style: none;
            }
            blockquote,
            q {
                quotes: none;
            }
            blockquote:before,
            blockquote:after,
            q:before,
            q:after {
                content: '';
                content: none;
            }
            table {
                border-collapse: collapse;
                border-spacing: 0;
            }
            a {
                text-decoration: none;
                outline: none;
                cursor: pointer;
                color: inherit;
            }
            a:hover,
            a:active {
                text-decoration: none;
            }
            button {
                overflow: hidden;
                padding: 0;
                margin: 0;
                background-color: transparent;
                border: none;
                color: inherit;
                outline: none;
                appearance: none;
                cursor: pointer;
            }
            /**
            * 1. Correct font size not being inherited in all browsers.
            * 2. Address margins set differently in IE 6/7, Firefox 3+, Safari 5,
            *    and Chrome.
            * 3. Improve appearance and consistency in all browsers.
            */
            input {
                box-shadow: none;
                font-size: 1em;
                -webkit-appearance: none;
                -moz-appearance: none;
                -o-appearance: none;
                appearance: none;
                color: #ffff;
                border-radius: 6px;
                border: 1px solid #39393b;
                background: #202021;
                transition: all ease 0.5s 0s;
            }
            input:focus {
                outline: none;
                color: #ffff;
                background: #2d2d2e;
                border: 1px solid #666669;
            }
            input::placeholder {
                color: #666669;
            }
            input:disabled {
                background-color: #202021;
            }
            textarea {
                box-shadow: none;
                resize: none;

                font-size: 1em;
                -webkit-appearance: none;
                -moz-appearance: none;
                -o-appearance: none;
                appearance: none;
                color: #ffff;
                border-radius: 6px;
                border: 1px solid #39393b;
                background: #202021;
                transition: all ease 0.5s 0s;
                &:focus {
                    outline: none;
                    color: #ffff;
                    background: #2d2d2e;
                    border: 1px solid #666669;
                }
                &::placeholder {
                    color: #666669;
                }
                &:disabled {
                    background-color: #202021;
                }
            }
            li,
            ul,
            ol {
                list-style: none;
            }
            .freeze {
                overflow: hidden;
                height: 100%;
            }

            .freeze {
                & __next {
                    height: 100%;
                }
            }
        `}
    />
)
export default GlobalStyle
