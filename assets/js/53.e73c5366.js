(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{225:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("LegacyWarning"),t._v(" "),s("MavenBadge",{attrs:{artifact:"syntax-highlight"}}),t._v(" "),s("p",[t._v("This is a simple module to add "),s("strong",[t._v("syntax highlight")]),t._v(" functionality to your markdown rendered with "),s("code",[t._v("Markwon")]),t._v(" library. It is based on "),s("a",{attrs:{href:"https://github.com/noties/Prism4j",target:"_blank",rel:"noopener noreferrer"}},[t._v("Prism4j"),s("OutboundLink")],1),t._v(" so lead there to understand how to configure "),s("code",[t._v("Prism4j")]),t._v(" instance.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/art/markwon-syntax-default.png"),alt:"theme-default",width:"80%"}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/art/markwon-syntax-darkula.png"),alt:"theme-darkula",width:"80%"}}),t._v(" "),s("hr"),t._v(" "),t._m(1),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("But of cause nothing is stopping you from defining your own theme:")]),t._v(" "),t._m(12),t._m(13)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"syntax-highlight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#syntax-highlight","aria-hidden":"true"}},[this._v("#")]),this._v(" Syntax highlight")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("First, we need to obtain an instance of "),a("code",[this._v("Prism4jSyntaxHighlight")]),this._v(" which implements Markwon's "),a("code",[this._v("SyntaxHighlight")]),this._v(":")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" SyntaxHighlight highlight "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n    Prism4jSyntaxHighlight"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Prism4j"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Prism4jTheme"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("we also can obtain an instance of "),a("code",[this._v("Prism4jSyntaxHighlight")]),this._v(" that has a "),a("em",[this._v("fallback")]),this._v(" option (if a language is not defined in "),a("code",[this._v("Prism4j")]),this._v(" instance, fallback language can be used):")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" SyntaxHighlight highlight "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n    Prism4jSyntaxHighlight"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("create")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Prism4j"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Prism4jTheme"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" String"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Generally obtaining a "),a("code",[this._v("Prism4j")]),this._v(" instance is pretty easy:")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("final")]),t._v(" Prism4j prism4j "),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Prism4j")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("GrammarLocatorDef")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Where "),a("code",[this._v("GrammarLocatorDef")]),this._v(" is a generated grammar locator (if you use "),a("code",[this._v("prism4j-bundler")]),this._v(" annotation processor)")])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[a("code",[this._v("Prism4jTheme")]),this._v(" is a specific type that is defined in this module ("),a("code",[this._v("prism4j")]),this._v(" doesn't know anything about rendering). It has 2 implementations:")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("Prism4jThemeDefault")])]),this._v(" "),a("li",[a("code",[this._v("Prism4jThemeDarkula")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("Both of them can be obtained via factory method "),a("code",[this._v("create")]),this._v(":")])},function(){var t=this.$createElement,a=this._self._c||t;return a("ul",[a("li",[a("code",[this._v("Prism4jThemeDefault.create()")])]),this._v(" "),a("li",[a("code",[this._v("Prism4jThemeDarkula.create()")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("Prism4jTheme")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@ColorInt")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("background")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@ColorInt")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("textColor")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("apply")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" String language"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" Prism4j"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Syntax syntax"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@NonNull")]),t._v(" SpannableStringBuilder builder"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" start"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{attrs:{class:"token keyword"}},[t._v("int")]),t._v(" end\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),a("p",[this._v("You can extend "),a("code",[this._v("Prism4jThemeBase")]),this._v(" which has some helper methods")])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);