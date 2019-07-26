<template>
<div class="markdown">
    <h1 class="title">{{info.title}}</h1>
    <pre class="markdown-body" v-html="mdData"></pre>
</div>
</template>

<script>
import testMd from './Vue组件开发props验证.md';
export default {
    data() {
        return {
        };
    },
    computed: {
        info() {
            let obj = {};
            let infoStr = testMd.slice(testMd.indexOf('<pre><code>'), testMd.indexOf('</code></pre>')).slice(11);
            let arrDate = infoStr.replace(/\s/g, '').split(',');
            arrDate && arrDate.length && arrDate.forEach(item => {
                let arr = item.split(':');
                obj[arr[0]] = arr[1].trim();
            });
            return obj;
        },
        mdData() {
            let data = testMd && testMd.slice(testMd.indexOf('</code></pre>')).slice(18);
            return data;
        }
    }
};
</script>

<style>
.markdown {
    margin-top: 75px;
}
.markdown-body blockquote {
    height: auto;
    position: relative;
    background: #f4fafc;
    border-left: 5px solid #dcedf5;
    color: #8b9597;
    border-radius: 0 2px 2px 0;
    transition: .2s .1s;
}
.markdown-body {
    box-sizing: border-box;
    min-width: 200px;
    max-width: 920px;
    padding: 0 40px;
    margin: 0 auto;
    box-shadow: 0 10px 25px rgba(56,56,56,.2);
    border-radius: 20px;
    
}
.markdown-body .hljs-params {
    color: blue;
}
.hljs-addition, .hljs-attribute, .hljs-meta-string, .hljs-regexp, .hljs-string {
    color: #98c379;
}
.hljs-doctag, .hljs-formula, .hljs-keyword {
    color: #c678dd;
}
.language-js {
    color:bisque;
}
.markdown-body pre {
    position: relative;
    background: #21252b;
    border-radius: 5px;
    font: 15px/22px "Microsoft YaHei","Arial",Sans-Serif;
    line-height: 1.6;
    margin-bottom: 1.6em;
    max-width: 100%;
    overflow: auto;
    text-shadow: none;
    color: #000;
    padding-top: 30px;
    box-shadow: 0 10px 30px 0 rgba(0,0,0,.4);
}
@media (max-width: 767px) {
    .markdown-body {
        padding: 15px;
    }
}
.markdown-body h4,
.markdown-body h3 {
    font-size: 130%;
    transition: all .3s;
    line-height: 40px;
    /* text-shadow: 3px 3px 0 rgba(0,0,0,.1); */
    border-bottom: 4px dashed #efefef;
    color: #737373;
    white-space: pre-wrap;
    word-break: break-all;
}
.markdown-body h4 span {
    word-break: break-all;
}
.title {
    text-align: center;
    text-shadow: #4e4d4d 0 0 1px;
    letter-spacing: 4px;
    font-size: 28px;
    line-height: 50px;
    font-family: Comic Sans MS,Helvetica Neue,Microsoft Yahei,-apple-system,sans-serif;
}
</style>
