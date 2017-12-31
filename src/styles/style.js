import {injectGlobal} from 'styled-components'

const style = () => {
    injectGlobal`
    @font-face {
    font-family: 'Source Code Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Source Code Pro'), local('SourceCodePro-Regular'), url(https://fonts.gstatic.com/s/sourcecodepro/v6/mrl8jkM18OlOQN8JLgasD5bPFduIYtoLzwST68uhz_Y.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: local('Montserrat Regular'), local('Montserrat-Regular'), url(https://fonts.gstatic.com/s/montserrat/v10/zhcz-_WihjSQC0oHJ9TCYAzyDMXhdD8sAj6OAJTFsBI.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: local('Montserrat Medium'), local('Montserrat-Medium'), url(https://fonts.gstatic.com/s/montserrat/v10/BYPM-GE291ZjIXBWrtCweteM9fzAXBk846EtUMhet0E.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;
  }

  html, body {
    font-size: 16px;
    line-height: 1.3;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-weight: normal;
    font-style: normal;
    padding: 0;
    margin: 0;
      height: 100%;
    width: 100%;
    background: #282a36;
    color: #f8f8f2;
  }
  .root {
    position: relative;
    overflow: auto;
    min-height: 100vh;
    z-index: 0;
  }

  .prism-code {
    display: block;
    white-space: pre;
    background-color: #1D1F21;
    color: #C5C8C6;
    font-size : 16px;
    padding: 0.5rem;
    margin: 0;
    box-sizing: border-box;
    outline: none;
    text-shadow: none;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    word-wrap: normal;
    word-break: normal;
    text-align: left;
    word-spacing: normal;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    }
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata {
    color: hsl(30, 20%, 50%);
    }

    .token.punctuation {
    opacity: .7;
    }

    .namespace {
    opacity: .7;
    }

    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol {
    color: hsl(350, 40%, 70%);
    }

    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted {
    color: hsl(75, 70%, 60%);
    }

    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string,
    .token.variable {
    color: hsl(40, 90%, 60%);
    }

    .token.atrule,
    .token.attr-value,
    .token.keyword {
    color: hsl(350, 40%, 70%);
    }

    .token.regex,
    .token.important {
    color: #e90;
    }

    .token.important,
    .token.bold {
    font-weight: bold;
    }
    .token.italic {
    font-style: italic;
    }

    .token.entity {
    cursor: help;
    }

    .token.deleted {
    color: red;
    }

  @media (max-width: 1200px) {
    html, body {
      font-size: 14px;
    }
  }

table tr:nth-child(2n) {
  background: #1E2026;
}

th,
td {
  padding: 6px 13px;
  border: 0.25px solid #666;
}

    `
}

export default style;