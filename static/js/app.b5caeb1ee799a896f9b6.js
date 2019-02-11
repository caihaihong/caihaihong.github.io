webpackJsonp([2],{"0nQ+":function(E,n){},"991W":function(E,n){},NHnr:function(E,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=t("7+uW"),i={render:function(){var E=this.$createElement,n=this._self._c||E;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var A=t("VU/8")({name:"App"},i,!1,function(E){t("kqPt")},null,null).exports,B=t("/ocq"),o=t("HKE2"),a=t.n(o),r=t("h2j0"),l=t.n(r),h={data:function(){return{md:l.a,html:""}},components:{showdown:a.a},mounted:function(){var E=new a.a.Converter,n=this.md.toString();this.html=E.makeHtml(n)}},c={render:function(){var E=this.$createElement,n=this._self._c||E;return n("div",{staticClass:"hello"},[n("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"content",domProps:{innerHTML:this._s(this.html)}})])},staticRenderFns:[]};t("VU/8")(h,c,!1,function(E){t("h61Y")},"data-v-f84e4c6e",null).exports;e.a.use(B.a);var C=new B.a({routes:[{path:"/",name:"HelloWorld",component:function(){return t.e(0).then(t.bind(null,"Pt1D"))}}]}),s=t("EFqf"),D=t.n(s),u=(t("7t+N"),t("991W"),t("qb6w"),t("Bb4J"),t("V8mf")),p=t.n(u);t("q6r0"),t("0nQ+");e.a.config.productionTip=!1,e.a.directive("highlight",function(E){E.querySelectorAll("pre code").forEach(function(E){p.a.highlightBlock(E)})}),D.a.setOptions({renderer:new D.a.Renderer,gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,smartLists:!0,smartypants:!1,highlight:function(E,n){return n&&p.a.getLanguage(n)?p.a.highlight(n,E,!0).value:p.a.highlightAuto(E).value}}),new e.a({el:"#app",router:C,components:{App:A},template:"<App/>"})},h2j0:function(E,n){E.exports='<h4 id="dns-">DNS域名解析</h4>\n<p>过程：</p>\n<ol>\n<li>网络客户端打开浏览器，输入一个域名。比如输入<a href="http://www.163.com%EF%BC%8C%E8%BF%99%E6%97%B6%EF%BC%8C%E4%BD%A0%E4%BD%BF%E7%94%A8%E7%9A%84%E7%94%B5%E8%84%91%E4%BC%9A%E5%8F%91%E5%87%BA%E4%B8%80%E4%B8%AADNS%E8%AF%B7%E6%B1%82%E5%88%B0%E6%9C%AC%E5%9C%B0DNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E3%80%82%E6%9C%AC%E5%9C%B0DNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%80%E8%88%AC%E9%83%BD%E6%98%AF%E4%BD%A0%E7%9A%84%E7%BD%91%E7%BB%9C%E6%8E%A5%E5%85%A5%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%95%86%E6%8F%90%E4%BE%9B%EF%BC%8C%E6%AF%94%E5%A6%82%E4%B8%AD%E5%9B%BD%E7%94%B5%E4%BF%A1%EF%BC%8C%E4%B8%AD%E5%9B%BD%E7%A7%BB%E5%8A%A8%E3%80%82">www.163.com，这时，你使用的电脑会发出一个DNS请求到本地DNS服务器。本地DNS服务器一般都是你的网络接入服务器商提供，比如中国电信，中国移动。</a></li>\n<li>查询<a href="http://www.163.com%E7%9A%84DNS%E8%AF%B7%E6%B1%82%E5%88%B0%E8%BE%BE%E6%9C%AC%E5%9C%B0DNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B9%8B%E5%90%8E%EF%BC%8C%E6%9C%AC%E5%9C%B0DNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BC%9A%E9%A6%96%E5%85%88%E6%9F%A5%E8%AF%A2%E5%AE%83%E7%9A%84%E7%BC%93%E5%AD%98%E8%AE%B0%E5%BD%95%EF%BC%8C%E5%A6%82%E6%9E%9C%E7%BC%93%E5%AD%98%E4%B8%AD%E6%9C%89%E6%AD%A4%E6%9D%A1%E8%AE%B0%E5%BD%95%EF%BC%8C%E5%B0%B1%E5%8F%AF%E4%BB%A5%E7%9B%B4%E6%8E%A5%E8%BF%94%E5%9B%9E%E7%BB%93%E6%9E%9C%E3%80%82%E5%A6%82%E6%9E%9C%E6%B2%A1%E6%9C%89%EF%BC%8C%E6%9C%AC%E5%9C%B0DNS%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%98%E8%A6%81%E5%90%91DNS%E6%A0%B9%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9B%E8%A1%8C%E6%9F%A5%E8%AF%A2%E3%80%82">www.163.com的DNS请求到达本地DNS服务器之后，本地DNS服务器会首先查询它的缓存记录，如果缓存中有此条记录，就可以直接返回结果。如果没有，本地DNS服务器还要向DNS根服务器进行查询。</a></li>\n<li>根DNS服务器没有记录具体的域名和IP地址的对应关系，而是告诉本地DNS服务器，你可以到域服务器上去继续查询，并给出域服务器的地址。</li>\n<li>本地DNS服务器继续向域服务器发出请求，在这个例子中，请求的对象是.com域服务器。.com域服务器收到请求之后，也不会直接返回域名和IP地址的对应关系，而是告诉本地DNS服务器，你的域名的解析服务器的地址。</li>\n<li>最后，本地DNS服务器向域名的解析服务器发出请求，这时就能收到一个域名和IP地址对应关系，本地DNS服务器不仅要把IP地址返回给用户电脑，还要把这个对应关系保存在缓存中，以备下次别的用户查询时，可以直接返回结果，加快网络访问。</li>\n</ol>\n<h4 id="-dns-ttl-">于DNS解析的TTL参数：</h4>\n<p>Time To Live</p>\n<ul>\n<li>TTL这个参数告诉本地DNS服务器，域名缓存的最长时间。用阿里云解析来举例，阿里云解析默认的TTL是10分钟，10分钟的含义是，本地DNS服务器对于域名的缓存时间是10分钟，10分钟之后，本地DNS服务器就会删除这条记录，删除之后，如果有用户访问这个域名，就要重复一遍上述复杂的流程。</li>\n<li>如果网站已经进入稳定发展的状态，不会轻易更换IP地址，我们完全可以将TTL设置到协议最大值，即24小时。带来的好处是，让域名解析记录能够更长时间的存放在本地DNS服务器中，以加快所有用户的访问。设置成24小时，其实，还解决了Googlebot在全球部署的服务器抓取网站可能带来的问题。</li>\n</ul>\n<p><img src="https://github.com/caihaihong/caihaihong.github.io/blob/master/imgs/internet/1.jpg?raw=true" alt="image"></p>\n'},h61Y:function(E,n){},kqPt:function(E,n){},q6r0:function(E,n){},qb6w:function(E,n){}},["NHnr"]);
//# sourceMappingURL=app.b5caeb1ee799a896f9b6.js.map