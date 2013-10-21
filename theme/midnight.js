require("./default.js");
require("insert-css")(".cm-s-midnight span.CodeMirror-matchhighlight{background:#494949;}.cm-s-midnight.CodeMirror-focused span.CodeMirror-matchhighlight{background:#314D67 !important;}.cm-s-midnight .CodeMirror-activeline-background{background:#253540 !important;}.cm-s-midnight.CodeMirror{background:#0F192A;color:#D1EDFF;}.cm-s-midnight.CodeMirror{border-top:1px solid black;border-bottom:1px solid black;}.cm-s-midnight div.CodeMirror-selected{background:#314D67 !important;}.cm-s-midnight .CodeMirror-gutters{background:#0F192A;border-right:1px solid;}.cm-s-midnight .CodeMirror-linenumber{color:#D0D0D0;}.cm-s-midnight .CodeMirror-cursor{border-left:1px solid #F8F8F0 !important;}.cm-s-midnight span.cm-comment{color:#428BDD;}.cm-s-midnight span.cm-atom{color:#AE81FF;}.cm-s-midnight span.cm-number{color:#D1EDFF;}.cm-s-midnight span.cm-property,.cm-s-midnight span.cm-attribute{color:#A6E22E;}.cm-s-midnight span.cm-keyword{color:#E83737;}.cm-s-midnight span.cm-string{color:#1DC116;}.cm-s-midnight span.cm-variable{color:#FFAA3E;}.cm-s-midnight span.cm-variable-2{color:#FFAA3E;}.cm-s-midnight span.cm-def{color:#4DD;}.cm-s-midnight span.cm-bracket{color:#D1EDFF;}.cm-s-midnight span.cm-tag{color:#449;}.cm-s-midnight span.cm-link{color:#AE81FF;}.cm-s-midnight span.cm-error{background:#F92672;color:#F8F8F0;}.cm-s-midnight .CodeMirror-matchingbracket{text-decoration:underline;color:white !important;}");
module.exports = require("./index.js").register("midnight");