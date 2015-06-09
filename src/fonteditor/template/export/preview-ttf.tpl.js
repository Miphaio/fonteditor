define(function () {return '<style>{%=previewCss%}</style>\r\n<style>\r\n    @font-face {\r\n        font-family: \'{%=fontFamily%}\';\r\n        {%if(fontFormat==\'eot\'){%}\r\n        src: url({%=fontData%});\r\n        {%} else if(fontFormat==\'ttf\') {%}\r\n        src: url({%=fontData%}) format(\'truetype\');\r\n        {%} else {%}\r\n        src: url({%=fontData%}) format(\'{%=fontFormat%}\');\r\n        {%}%}\r\n    }\r\n    .icon {\r\n        font-family: \'{%=fontFamily%}\';\r\n    }\r\n</style>\r\n<div class="main">\r\n    <h1>${lang.preview_title}</h1>\r\n    <ul class="iconfont-list">\r\n        {%glyfList.forEach(function(glyf) {%}\r\n        <li>\r\n            <i class="icon">{%=glyf.code%}</i>\r\n            <div class="code">{%=glyf.codeName%}</div>\r\n            <div class="name">{%=glyf.name%}</div>\r\n        </li>\r\n        {%});%}\r\n    </ul>\r\n    <div class="helps">${lang.preview_first_step}\r\n<pre>\r\n@font-face {\r\n    font-family: \'{%=fontFamily%}\';\r\n    src: url(\'{%=fontFamily%}.eot\'); /* IE9*/\r\n    src: url(\'{%=fontFamily%}.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */\r\n    url(\'{%=fontFamily%}.woff\') format(\'woff\'), /* chrome、firefox */\r\n    url(\'{%=fontFamily%}.ttf\') format(\'truetype\'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/\r\n    url(\'{%=fontFamily%}.svg#ux{%=fontFamily%}\') format(\'svg\'); /* iOS 4.1- */\r\n}\r\n</pre>\r\n${lang.preview_second_step}\r\n<pre>\r\n.{%=fontFamily%} {\r\n    font-family:"{%=fontFamily%}" !important;\r\n    font-size:16px;font-style:normal;\r\n    -webkit-font-smoothing: antialiased;\r\n    -webkit-text-stroke-width: 0.2px;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n</pre>\r\n${lang.preview_third_step}\r\n<pre>\r\n    &lt;i class="{%=fontFamily%}"&gt;&amp;#x33&lt;/i&gt;\r\n</pre>\r\n</div>\r\n</div>\r\n';});