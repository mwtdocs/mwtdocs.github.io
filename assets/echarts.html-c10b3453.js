import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as t,c,a as e,b as n,d as r,f as a,e as o}from"./app-87c32e9f.js";const l={},h=o(`<h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h2><h3 id="使用-json" tabindex="-1"><a class="header-anchor" href="#使用-json" aria-hidden="true">#</a> 使用 JSON</h3><p>如果你可以很轻松的生成数据，你可以直接通过一个 JSON 代码块来提供 Echarts 配置:</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts 标题

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">json</span>
<span class="token code-block language-json">{
  // 此处为 ECharts 图表配置
}</span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用脚本" tabindex="-1"><a class="header-anchor" href="#使用脚本" aria-hidden="true">#</a> 使用脚本</h3><p>如果你需要通过脚本来获取数据，你可以使用 <code>js</code> 和 <code>javascript</code> 的代码块。</p><p>我们将通过 <code>myChart</code> 变量暴露 Echarts 实例，并且你应该将 Echart 配置赋值给 <code>option</code> 变量。同时，你也可以赋值 <code>width</code> 和 <code>height</code> 来设置图表大小。</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>::: echarts Title

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">js</span>
<span class="token code-block language-js"><span class="token keyword">const</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 此处为 ECharts 图表配置</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="token punctuation">\`\`\`</span></span>

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>你可以使用顶级 await 和 <code>fetch</code> 来从网络请求中获取数据。</p></div><h2 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h2>`,10),p={href:"https://echarts.apache.org/handbook/zh/get-started/",target:"_blank",rel:"noopener noreferrer"},u=e("h2",{id:"案例",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#案例","aria-hidden":"true"},"#"),n(" 案例")],-1),m=e("h3",{id:"线图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#线图","aria-hidden":"true"},"#"),n(" 线图")],-1),_=e("details",{class:"hint-container details"},[e("summary",null,"代码"),a(" @include: @echarts/line.snippet.md ")],-1),v=e("h3",{id:"柱状图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#柱状图","aria-hidden":"true"},"#"),n(" 柱状图")],-1),b=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/bar.snippet.md ")],-1),k=e("h3",{id:"饼图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#饼图","aria-hidden":"true"},"#"),n(" 饼图")],-1),f=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/pie.snippet.md ")],-1),x=e("h3",{id:"散点图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#散点图","aria-hidden":"true"},"#"),n(" 散点图")],-1),g=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/scatter.snippet.md ")],-1),C=e("h3",{id:"极坐标图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#极坐标图","aria-hidden":"true"},"#"),n(" 极坐标图")],-1),y=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/polar.snippet.md ")],-1),E=e("h3",{id:"烛台图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#烛台图","aria-hidden":"true"},"#"),n(" 烛台图")],-1),j=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/candlestick.snippet.md ")],-1),w=e("h3",{id:"雷达图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#雷达图","aria-hidden":"true"},"#"),n(" 雷达图")],-1),N=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/radar.snippet.md ")],-1),V=e("h3",{id:"热力图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#热力图","aria-hidden":"true"},"#"),n(" 热力图")],-1),B=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/heat-map.snippet.md ")],-1),S=e("h3",{id:"树图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#树图","aria-hidden":"true"},"#"),n(" 树图")],-1),I=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/tree.snippet.md ")],-1),J=e("h3",{id:"多图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#多图","aria-hidden":"true"},"#"),n(" 多图")],-1),L=e("details",{class:"hint-container details"},[e("summary",null,"Code"),a(" @include: @echarts/multiple.snippet.md ")],-1);function O(T,z){const s=i("ExternalLinkIcon");return t(),c("div",null,[h,e("p",null,[n("相关详情，详见 "),e("a",p,[n("ECharts 文档"),r(s)]),n(".")]),u,m,a(" @include: @echarts/line.snippet.md#demo "),_,v,a(" @include: @echarts/bar.snippet.md#demo "),b,k,a(" @include: @echarts/pie.snippet.md#demo "),f,x,a(" @include: @echarts/scatter.snippet.md#demo "),g,C,a(" @include: @echarts/polar.snippet.md#demo "),y,E,a(" @include: @echarts/candlestick.snippet.md#demo "),j,w,a(" @include: @echarts/radar.snippet.md#demo "),N,V,a(" @include: @echarts/heat-map.snippet.md#demo "),B,S,a(" @include: @echarts/tree.snippet.md#demo "),I,J,a(" @include: @echarts/multiple.snippet.md#demo "),L])}const D=d(l,[["render",O],["__file","echarts.html.vue"]]);export{D as default};
