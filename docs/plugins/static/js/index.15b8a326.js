(function(t){function e(e){for(var a,s,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},i={index:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vxe-table/plugins/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01e9":function(t,e,n){"use strict";n("398b")},"0951":function(t,e,n){t.exports=n.p+"static/img/proKeyboard.0651d51d.gif"},"0ec3":function(t,e,n){},1:function(t,e){},1623:function(t,e,n){t.exports=n.p+"static/img/proContextmenu.1a477a09.gif"},"1f06":function(t,e,n){t.exports=n.p+"static/img/proFNR.e02548dc.gif"},2:function(t,e){},"2cec":function(t,e,n){t.exports=n.p+"static/img/FilterComplexInput.837afbf5.gif"},"30dd":function(t,e,n){},3227:function(t,e,n){t.exports=n.p+"static/img/proMerge.c4002bc9.gif"},"398b":function(t,e,n){},"559d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"page-header"},[t._m(0),t.loginToken&&t.loginInfo?n("div",{staticClass:"login-info"},[n("span",[t._v(t._s(t.loginInfo.no))])]):t._e(),n("div",{staticClass:"right"},[t._m(1),n("button",{staticClass:"pay-btn",on:{click:t.payEvent}},[t._v("扫码付款")]),t.loginToken?n("button",{staticClass:"login-btn",on:{click:t.logoutEvent}},[t._v("退出")]):n("button",{staticClass:"login-btn",attrs:{disabled:t.loading},on:{click:t.loginEvent}},[t._v("登录")])])]),n("div",{staticClass:"page-nav"},[n("router-link",{staticClass:"link",attrs:{to:{name:"Support"}}},[t._v("技术支持群")]),t._v(" | "),n("router-link",{staticClass:"link",attrs:{to:{name:"Pro"}}},[t._v("PRO扩展")]),t._v(" | "),n("router-link",{staticClass:"link",attrs:{to:{name:"ProAuth"}}},[t._v("PRO 授权查询")]),t._v(" | "),n("router-link",{staticClass:"link",attrs:{to:{name:"Filter"}}},[t._v("筛选扩展")]),t._v(" | ")],1),n("div",{staticClass:"page-body"},[n("router-view")],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"left"},[n("a",{attrs:{href:"/vxe-table/"}},[n("img",{attrs:{src:"/vxe-table/logo.png",width:"18"}}),n("span",{staticClass:"title"},[t._v("vxe-table")])]),n("a",{attrs:{href:"https://gitee.com/xuliangzhan_admin/vxe-table/stargazers"}},[n("img",{attrs:{src:"https://gitee.com/xuliangzhan_admin/vxe-table/badge/star.svg?theme=dark",alt:"star"}})]),n("a",{attrs:{href:"https://github.com/x-extends/vxe-table/stargazers"}},[n("img",{attrs:{src:"https://img.shields.io/github/stars/xuliangzhan/vxe-table.svg"}})]),n("a",{attrs:{href:"http://npm-stat.com/charts.html?package=vxe-table"}},[n("img",{attrs:{src:"https://img.shields.io/npm/dm/vxe-table.svg"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"get-contact"},[t._v("购买授权与定制化插件，请先联系邮件咨询："),n("a",{staticClass:"link",attrs:{href:"mailto:xu_liangzhan@163.com"}},[t._v("xu_liangzhan@163.com")])])}],s=(n("4160"),n("caad"),n("ac1f"),n("2532"),n("1276"),n("498a"),n("159b"),n("5530")),r=n("628a"),c=n.n(r),l=n("c695"),p=n.n(l),u=n("2f62");n("99af"),n("fb6a"),n("d3b7"),n("25f0"),n("3ca3"),n("ddb0"),n("2b3d");a["a"].use(u["a"]);var d=new u["a"].Store({state:{loginToken:sessionStorage.getItem("AUTH_TOKEN"),loginInfo:null},mutations:{setLoginToken:function(t,e){t.loginToken=e},setLoginInfo:function(t,e){t.loginInfo=e}},actions:{},modules:{}}),g=d,f=n("acff"),v=[],h=alert;function m(t){return t&&t[0]&&p.a.isString(t[0])?p.a.toStringJSON(f["a"].ungzip(p.a.toStringJSON(t[0]),{to:"string"})):t}function b(t,e){var n=g.state.loginInfo,a=g.state.loginToken;if(n&&a)if(v.includes("".concat(t,"_").concat(e,"_").concat(a)))h(decodeURIComponent("%E6%97%A0%E6%9D%83%E9%99%90%E6%93%8D%E4%BD%9C"));else{var i="wabpcdoefghijklmnzyt".split(""),o={};p.a.sample(i,6).forEach((function(t){o[t]=p.a.random(10,999)})),o[0]=p.a.toString(n.key).substring(10,20),c.a.fetchPost("/api/pub/vxetable/download/".concat(t,"_").concat(encodeURIComponent(e),"/").concat(encodeURIComponent(a)),{n:Date.now(),l:t,t:a.slice(30,80),k:n.key},{params:o}).then((function(n){200===n.status?n.blob().then((function(n){var a=document.createElement("a");a.target="_blank",a.download="".concat(t,"_v").concat(e,".rar"),a.href=URL.createObjectURL(n),document.body.appendChild(a),a.click(),document.body.removeChild(a)})):n.json().then((function(n){var i=m(n);i?(i.code>10&&v.push("".concat(t,"_").concat(e,"_").concat(a)),h(i.message)):h(decodeURIComponent("%E6%97%A0%E6%9D%83%E9%99%90%E6%93%8D%E4%BD%9C"))}))}))}else h(decodeURIComponent("%E6%97%A0%E6%9D%83%E9%99%90%E6%93%8D%E4%BD%9C"))}var C=prompt,_=alert;c.a.setup({origin:"https://api.xuliangzhan.com:10443"}),c.a.interceptors.request.use((function(t,e){t.headers.set("path",location.href),t.headers.set("name","vxetable"),t.headers.set("now",Date.now()),e()}));var x={data:function(){return{loading:!1,invalidCode:[]}},computed:Object(s["a"])({},Object(u["c"])(["loginToken","loginInfo"])),created:function(){this.vaildLogin()},methods:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["setLoginToken","setLoginInfo"])),{},{payEvent:function(){this.$router.push({name:"Pay"}).catch((function(t){return t}))},vaildLogin:function(){var t=this;if(this.loginToken){var e="ijkoefgcdlmnphzytwab".split(""),n={};p.a.sample(e,2).forEach((function(t){n[t]=p.a.random(15,999)})),c.a.get("/api/pub/vxetable/vaild/".concat(this.loginToken),n).then((function(e){var n=m(e);n&&(0===n.code&&p.a.isArray(n.result.compList)?t.setLoginInfo(n.result):t.logoutEvent())})).catch((function(e){e&&e.code&&t.logoutEvent()}))}},logoutEvent:function(){this.setLoginToken(null),this.setLoginInfo(null),sessionStorage.removeItem("AUTH_TOKEN")},loginEvent:function(){var t=this,e=C(decodeURIComponent("%E8%AF%B7%E8%BE%93%E5%85%A5%E7%99%BB%E5%BD%95%E7%9A%84%E7%94%A8%E6%88%B7%EF%BC%9A"));if(e&&(e=e.trim()),e)if(this.invalidCode.includes(e))_(decodeURIComponent("%E6%97%A0%E6%9D%83%E9%99%90%E6%93%8D%E4%BD%9C"));else{var n="zytwabphijklmncdoefg".split(""),a={};p.a.sample(n,4).forEach((function(t){a[t]=p.a.random(15,999)})),this.loading=!0,c.a.post("/api/pub/vxetable/login/".concat(encodeURIComponent(e)),{n:Date.now(),c:e},{params:a}).then((function(e){var n=m(e);t.loading=!1,n&&n.result&&n.result.token?(t.setLoginToken(n.result.token),t.setLoginInfo(Object.assign({},n.result,{token:void 0})),sessionStorage.setItem("AUTH_TOKEN",n.result.token)):(t.logoutEvent(),_(decodeURIComponent("%E6%97%A0%E6%9D%83%E9%99%90%E6%93%8D%E4%BD%9C")))})).catch((function(n){if(n){var a=m(n);t.loading=!1,t.invalidCode.push(e),n.code&&t.logoutEvent(),_(a.message)}else _(decodeURIComponent("%E6%97%A0%E6%9D%83%E9%99%90%E6%93%8D%E4%BD%9C"))}))}}})},y=x,E=(n("5c0b"),n("2877")),w=Object(E["a"])(y,i,o,!1,null,null,null),k=w.exports,I=n("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pay-page"},[a("h2",{staticClass:"pay-title"},[t._v("扫码支付"),a("span",{staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v("（不支持开发票！）")])]),a("div",{staticClass:"support-pay"},[a("div",{staticStyle:{padding:"0 0 15px 0"}},[t._v("付款前请先联系邮件咨询："),a("a",{staticClass:"link",attrs:{href:"mailto:xu_liangzhan@163.com"}},[t._v("xu_liangzhan@163.com")])]),a("img",{attrs:{src:n("d5ad")}})])])}],P={data:function(){return{}}},D=P,j=(n("acb1"),Object(E["a"])(D,O,S,!1,null,"0372c4a0",null)),A=j.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"support-page"},[a("h2",{staticClass:"support-title"},[t._v("付费技术支持群"),t.useIssue?a("span",{staticClass:"price-unit"},[t._v("￥"+t._s(t.supportPrice))]):t._e(),a("span",{staticStyle:{"font-size":"12px","font-weight":"400"}},[t._v("（快速解决使用过程中遇到的问题）")])]),a("div",{staticClass:"support-group"},[a("div",{staticClass:"qq-img"},[t.disabledSupport?[t._m(0)]:[t.useIssue?a("img",{staticStyle:{width:"189px",height:"183px"},attrs:{src:n("9a09")}}):a("img",{staticStyle:{width:"189px",height:"183px"},attrs:{src:""}})]],2),a("div",{staticClass:"qq-step"},[a("ul",{staticClass:"step-wrapper"},[a("li",{staticStyle:{"font-size":"15px",color:"red","font-weight":"700"},attrs:{title:"如果不会创建在线演示连接来描述问题，则不能加入该群！"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.useIssue,expression:"useIssue"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.useIssue)?t._i(t.useIssue,null)>-1:t.useIssue},on:{change:function(e){var n=t.useIssue,a=e.target,i=!!a.checked;if(Array.isArray(n)){var o=null,s=t._i(n,o);a.checked?s<0&&(t.useIssue=n.concat([o])):s>-1&&(t.useIssue=n.slice(0,s).concat(n.slice(s+1)))}else t.useIssue=i}}}),t._v("（必须使用 “"),a("a",{staticClass:"link",attrs:{href:"/vxe-table/issues",target:"_blank"}},[t._v("在线连接来演示问题")]),t._v("”） ")]),t.disabledSupport?[t.useIssue?a("li",{attrs:{title:"当前不在支持的时间之内！请在工作日 9:30 ~ 18:00 时间内申请！"}},[t._v("当前不在支持的时间之内，无法加入！")]):t._e()]:[t.useIssue?[t._m(1),a("li",[t._v("点击 "),a("router-link",{staticClass:"link pay-link",attrs:{to:{name:"Pay"}}},[t._v("扫码付款")]),t._v("，付款后点击“联系收款方”，留言QQ号即可")],1)]:t._e()]],2)])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{title:"当前不在支持的时间之内！请在工作日 9:30 ~ 18:00 时间内申请！"}},[n("img",{staticStyle:{width:"189px",height:"183px"},attrs:{src:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v(" 左侧扫码申请加入群或点击"),n("a",{attrs:{target:"_blank",href:"https://qm.qq.com/cgi-bin/qm/qr?k=K0y8dWpsIwFtcpKfb4LlVx44bujw1FaL&jump_from=webapi"}},[n("img",{attrs:{border:"0",src:"//pub.idqqimg.com/wpa/images/group.png",alt:"vxe-table 技术支持群",title:"vxe-table 技术支持群"}})])])}],U={data:function(){return{useIssue:!1,supportPrice:288}},computed:{disabledSupport:function(){var t=new Date,e=t.getDay(),n=t.getHours();return 0===e||!(n>=9&&n<=11||n>=14&&n<=17||n>=19&&n<=21)}}},M=U,z=(n("abfe"),Object(E["a"])(M,L,T,!1,null,"29a18edc",null)),V=z.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pro-page"},[n("div",{staticClass:"pro-desc"},[n("div",{staticClass:"pro-price"},[n("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v("PRO")]),t.proComp?[n("span",{staticClass:"comp-auth",attrs:{title:"插件名称：PRO\n授权方式："+("src"===t.proComp.authType?"源码版":"压缩版")+"\n授权日期："+t.getCompAuthProp(t.proComp,"authDate")+"\n授权期限："+t.getCompAuthProp(t.proComp,"deadline")}},[t._v("-已授权"),"src"===t.proComp.authType?n("span",[t._v("源码版")]):n("span",[t._v("压缩版")])]),n("router-link",{staticClass:"update-log",attrs:{to:{name:"ProLog"}}},[t._v("查看版本")])]:[n("span",{staticStyle:{"font-size":"12px",cursor:"help"},attrs:{title:"该授权方式没有源码，提供 pro.min.js"}},[t._v(" -压缩版")]),n("span",{staticClass:"price-unit"},[t._v("￥1000")]),n("span",{staticStyle:{"font-size":"12px",cursor:"help"},attrs:{title:"永久使用 + 永久更新 + 多部署"}},[t._v("/永久")]),t._v(" + "),n("span",{staticStyle:{"font-size":"12px",cursor:"help"},attrs:{title:"提供1年技术支持"}},[t._v("支持群")]),n("router-link",{staticClass:"update-log",attrs:{to:{name:"ProLog"}}},[t._v("更新日志")])]],2),n("div",{staticClass:"pro-features"},[n("span",[n("i",{staticClass:"help-icon",attrs:{title:t.proFeatures.mouse}},[t._v("?")]),t._v("鼠标操作")]),n("span",[n("i",{staticClass:"help-icon",attrs:{title:t.proFeatures.keyboard}},[t._v("?")]),t._v("按键操作")])])]),n("div",{staticClass:"pro-preview"},t._l(t.proList,(function(e){return n("div",{key:e.code,staticClass:"preview-item"},[n("div",{staticClass:"preview-contnet"},[n("h3",{staticClass:"preview-title"},[t._v(t._s(e.title))]),n("img",{staticClass:"preview-img",attrs:{src:e.previewUrl}})])])})),0)])},F=[],$=(n("7db0"),n("a15b"),{data:function(){return{version:"1.0.12",proList:[{title:"鼠标区域选取",code:"proArea",previewUrl:n("fce1")},{title:"鼠标多重区域选取、延伸扩大区域",code:"proMultiArea",previewUrl:n("70e3")},{title:"固定列区域选取",code:"proFixedAera",previewUrl:n("6debe")},{title:"复制、剪贴、粘贴",code:"proClip",previewUrl:n("bb4b")},{title:"合并、取消合并",code:"proMerge",previewUrl:n("3227")},{title:"查找和替换",code:"proFNR",previewUrl:n("1f06")},{title:"常用的快捷键",code:"proKeyboard",previewUrl:n("0951")},{title:"右键快捷菜单",code:"proContextmenu",previewUrl:n("1623")},{title:"集成 echarts 图表渲染",code:"proCharts",previewUrl:n("8d21")},{title:"同时支持区域选取、虚拟滚动",code:"proVirtualScroll",previewUrl:n("8171")},{title:"同时支持区域选取、虚拟滚动、虚拟合并",code:"proVirtualMergeScroll",previewUrl:n("c75b")}],proFeatures:{mouse:["支持 MouseLeft 选取选取指定区域的单元格","支持 Ctrl + MouseLeft 选取多重区域的单元格","支持 MouseLeft 按住右下角延伸按钮，将区域横向或纵向扩大"].join("\n"),keyboard:["支持 Ctrl + MouseLeft 选取多重区域的单元格","支持 Ctrl + A 选择全部单元格","支持 Ctrl + X 将单元格标记为剪贴状态并将内容复制到剪贴板，支持 Excel 和 WPS","支持 Ctrl + C 将单元格标记为复制状态并将内容复制到剪贴板，支持 Excel 和 WPS","支持 Ctrl + V 将剪贴板的内容粘贴到指定区域中，支持 Excel 和 WPS","支持 Ctrl + M 将选取的单元格合并或取消合并","支持 Ctrl + F 查找数据，全表或指定区域查找数据","支持 Ctrl + H 替换数据，全表或指定区域替换数据","支持 ArrowUp 如果存在，则移动到上面的单元格","支持 Shift + ArrowUp 如果存在，则往上面延伸单元格区域","支持 ArrowDown 如果存在，则移动到下面的单元格","支持 Shift + ArrowDown 如果存在，则往下面延伸单元格区域","支持 ArrowLeft 如果存在，则移动到左边的单元格","支持 Shift + ArrowLeft 如果存在，则往左边延伸单元格区域","支持 ArrowRight 则移动到右边的单元格","支持 Shift + ArrowRight 如果存在，则往右边延伸单元格区域","支持 Tab 如果存在，则移动到右边单元格；如果存在区域，则在指定区域内移动；如果移动到最后一列，则从下一行开始移到，以此循环","支持 Shift + Tab  如果存在，则移动到左边单元格，则在指定区域内移动；如果移动到第一列，则从上一行开始移到，以此循环","支持 Enter 如果存在，取消单元格编辑并移动到下面的单元格，则在指定区域内移动；如果移动到最后一行，则从下一列开始移到，以此循环","支持 Shift + Enter 如果存在，取消单元格编辑并移动到上面的单元格，则在指定区域内移动；如果移动到第一行，则从上一列开始移到，以此循环","支持 Delete 清空指定区域内单元格内容，如果存在多重区域，则清空多重区域内的单元格内容","支持 Backspace 清空当前活动单元格的内容并激活为编辑状态","支持 F2 键激活当前活动单元格","支持 Esc 键取消激活当前活动的单元格"].join("\n")}}},computed:Object(s["a"])(Object(s["a"])({},Object(u["c"])(["loginToken","loginInfo"])),{},{proComp:function(){return this.loginToken&&this.loginInfo&&this.loginInfo.compList?this.loginInfo.compList.find((function(t){return"PRO"===t.appCode})):null}}),methods:{getCompAuthProp:function(t,e){if(t){var n=t[e];return"deadline"===e?-1===n?"永久使用":"".concat(t.authDate," ~ ").concat(p.a.toDateString(p.a.toStringDate(t.authDate).getTime()+1e3*p.a.toNumber(n),"yyyy-MM-dd")):n}return""},downloadEvent:function(){b("PRO",this.version)}}}),N=$,q=(n("01e9"),Object(E["a"])(N,R,F,!1,null,"7127f19d",null)),B=q.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"log-page"},t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"log-item"},[n("div",{staticClass:"log-version"},[n("span",{staticClass:"log-name"},[t._v("v"+t._s(e.version))]),n("span",{staticClass:"log-date"},[t._v(t._s(e.date))]),t.loginInfo&&t.proComp&&"on"===t.loginInfo.d&&a<5?n("a",{staticClass:"link download-lib",on:{click:function(n){return t.downloadEvent(e.version)}}},[t._v("点击下载")]):t._e()]),n("div",{staticClass:"log-desc"},[n("ul",{staticClass:"log-list"},t._l(e.logs,(function(e,i){return n("li",{key:""+a+i,staticClass:"log-li"},[t._v(t._s(e))])})),0)])])})),0)},H=[],J={data:function(){return{list:[{version:"1.0.18",date:"2020-12-26",logs:["修复列头点击无法清除编辑状态问题","修复分组表头点击后无法选取子列单元格问题","修复查找与替换窗口支持缩放问题"]},{version:"1.0.17",date:"2020-12-21",logs:["修复 edit-config.activeMethod 部分参数缺失问题"]},{version:"1.0.16",date:"2020-12-21",logs:["修复 clip-config 开关导致无法复制粘贴问题"]},{version:"1.0.15",date:"2020-12-18",logs:["支持参数 clip-config.isCopy","支持参数 clip-config.isCut","支持参数 clip-config.isPaste"]},{version:"1.0.14",date:"2020-12-18",logs:["修复浏览器缩放导致单元格选取偏移问题"]},{version:"1.0.13",date:"2020-12-17",logs:["支持参数 keyboard-config.delMethod","支持参数 keyboard-config.backMethod"]},{version:"1.0.12",date:"2020-12-15",logs:["修复虚拟滚动序号复制不正确的问题","修复数据重新加载后快捷键全选报错问题"]},{version:"1.0.11",date:"2020-12-12",logs:["优化方向键扩展区域","支持 Shift+鼠标 点选区域功能"]},{version:"1.0.10",date:"2020-12-09",logs:["修复查找与替换输入框在 v3 中无法输入问题"]},{version:"1.0.9",date:"2020-12-09",logs:["修复粘贴 Excel 数据错误问题","修复单元格格式化值无法复制问题","修复序号、复选框、单选框无法复制与粘贴问题"]},{version:"1.0.8",date:"2020-12-07",logs:["修复筛选弹出后复制与粘贴冲突问题"]},{version:"1.0.7",date:"2020-12-06",logs:["修复点击列头选取整列后未定位到第一行问题"]},{version:"1.0.6",date:"2020-12-01",logs:["增加参数 clip-config.copyMethod 对应旧的 clip-config.getMethod","增加参数 clip-config.beforeCopyMethod 对应旧的 clip-config.beforeGetMethod","增加参数 clip-config.pasteMethod 对应旧的 clip-config.setMethod","增加参数 clip-config.beforePasteMethod 对应旧的 clip-config.beforeSetMethod"]},{version:"1.0.5",date:"2020-11-29",logs:["优化 cell-area-* 相关事件的参数"]},{version:"1.0.4",date:"2020-11-25",logs:["支持查找与替换可自定义显示","支持查找与替换自定义方法"]},{version:"1.0.3",date:"2020-11-23",logs:["修复 MacOS 复制粘贴失效问题"]},{version:"1.0.2",date:"2020-11-10",logs:["增加参数 clip-config","增加事件 cell-area-copy","增加事件 cell-area-cut","增加事件 cell-area-paste","增加事件 cell-area-merge","增加事件 cell-area-selection-start","增加事件 cell-area-selection-end","增加事件 cell-area-extension-start","增加事件 cell-area-extension-end"]},{version:"1.0.1",date:"2019-10-01",logs:["内部优化","小bug修复"]},{version:"1.0.0",date:"2019-06-01",logs:["实现对单元格操作的完整支持"]}]}},computed:Object(s["a"])(Object(s["a"])({},Object(u["c"])(["loginToken","loginInfo"])),{},{proComp:function(){return this.loginToken&&this.loginInfo&&this.loginInfo.compList?this.loginInfo.compList.find((function(t){return"PRO"===t.appCode})):null}}),methods:{downloadEvent:function(t){b("PRO",t)}}},W=J,Q=(n("f1aa"),Object(E["a"])(W,K,H,!1,null,"ea66ef74",null)),G=Q.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"proauth-page"},[n("div",{staticClass:"proauth-form"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.no,expression:"formData.no"}],staticClass:"form-input",attrs:{type:"search",placeholder:"请输入编号查询"},domProps:{value:t.formData.no},on:{input:function(e){e.target.composing||t.$set(t.formData,"no",e.target.value)}}}),n("button",{staticClass:"form-button",attrs:{type:"button"},on:{click:t.searchEvent}},[t._v("搜索")])]),n("div",{staticClass:"proauth-pager"},[n("div",{staticClass:"pager-btns"},[n("button",{staticClass:"prev-page-btn",attrs:{disabled:t.pageVO.currentPage<=1,title:"上一页"},on:{click:t.prevEvent}},[t._v("<")]),n("button",{staticClass:"next-page-btn",attrs:{disabled:t.pageVO.currentPage>=t.pageVO.pageCount,title:"下一页"},on:{click:t.nextEvent}},[t._v(">")])])]),n("div",{staticClass:"proauth-list"},[t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"proauth-item"},[n("div",{staticClass:"proauth-content"},[n("h4",{staticClass:"item-title"},[n("span",{staticStyle:{"margin-right":"0.5em"}},[t._v(t._s(e.no))]),n("span",[t._v(t._s(e.name))])]),n("div",{staticClass:"item-date"},[t._v("授权时间："+t._s(e.date))])])])})),t.list.length?t._e():n("div",{staticClass:"no-data"},[n("span",[t._v("可能编号不正确，找不到对应的记录！")])])],2)])},Y=[],Z={data:function(){return{invalidNOs:[],pageVO:{currentPage:1,pageSize:6,pageCount:1},formData:{no:""},list:[]}},methods:{searchEvent:function(){var t=this,e=this.formData.no.trim();e&&!this.invalidNOs.includes(e)&&c.a.get("/api/pub/vxetable/auth/page/list/".concat(this.pageVO.pageSize,"/").concat(this.pageVO.currentPage,"?no=").concat(e)).then((function(e){var n=m(e);t.list=n.result,t.pageVO.pageCount=n.page.pageCount})).catch((function(n){t.invalidNOs.push(e)}))},prevEvent:function(){this.pageVO.currentPage>1&&(this.pageVO.currentPage--,this.searchEvent())},nextEvent:function(){this.pageVO.currentPage<this.pageVO.pageCount&&(this.pageVO.currentPage++,this.searchEvent())}}},tt=Z,et=(n("9e2e"),Object(E["a"])(tt,X,Y,!1,null,"47f48a54",null)),nt=et.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"filter-page"},[n("div",{staticClass:"filter-preview"},t._l(t.filterList,(function(e){return n("div",{key:e.code,staticClass:"preview-item"},[n("div",{staticClass:"preview-contnet"},[n("div",{staticClass:"preview-title"},[n("i",{staticClass:"help-icon",attrs:{title:e.features}},[t._v("?")]),n("span",{staticStyle:{"font-size":"20px","font-weight":"700"}},[t._v(t._s(e.title))]),t.getCompPrivilege(e)?[n("span",{staticClass:"comp-auth",attrs:{title:"插件名称："+e.code+"\n授权方式："+(t.hasSrcType(e)?"源码版":"压缩版")+"\n授权日期："+t.getCompAuthProp(e,"authDate")+"\n授权期限："+t.getCompAuthProp(e,"deadline")}},[t._v("-已授权"),t.hasSrcType(e)?n("span",[t._v("源码版")]):n("span",[t._v("压缩版")])]),n("a",{staticClass:"update-log",on:{click:function(n){return t.showLog(e)}}},[t._v("查看版本")])]:[n("span",{staticStyle:{"font-size":"13px",cursor:"help"},attrs:{title:"该授权包含完整源码"}},[t._v(" -源码版")]),n("span",{staticClass:"price-unit"},[t._v("￥"+t._s(e.price))]),n("span",{staticStyle:{"font-size":"13px",cursor:"help"},attrs:{title:"永久使用 + 永久更新 + 多部署"}},[t._v("/永久")]),n("a",{staticClass:"update-log",on:{click:function(n){return t.showLog(e)}}},[t._v("更新日志")])]],2),n("img",{staticClass:"preview-img",attrs:{src:e.previewUrl}})])])})),0),n("div",{directives:[{name:"show",rawName:"v-show",value:t.logVisible,expression:"logVisible"}],staticClass:"filter-log-popup",on:{click:function(e){if(e.target!==e.currentTarget)return null;t.logVisible=!1}}},[t.selectItem?n("div",{staticClass:"filter-log-box"},[n("div",{staticClass:"popup-header"},[n("span",{staticClass:"popup-title"},[t._v(t._s(t.selectItem.code))]),n("i",{staticClass:"close-btn",on:{click:function(e){t.logVisible=!1}}},[t._v("x")])]),n("div",{staticClass:"popup-body"},t._l(t.selectItem.logList,(function(e,a){return n("div",{key:a},[n("div",{staticClass:"log-version"},[n("span",{staticClass:"log-name"},[t._v("v"+t._s(e.version))]),n("span",{staticClass:"log-date"},[t._v(t._s(e.date))]),t.loginInfo&&t.getCompPrivilege(t.selectItem)&&"on"===t.loginInfo.d&&a<5?n("a",{staticClass:"link download-lib",attrs:{title:"点击下载 v"+e.version},on:{click:function(n){return t.downloadEvent(t.selectItem,e.version)}}},[t._v("点击下载")]):t._e()]),n("div",{staticClass:"log-desc"},[n("ul",{staticClass:"log-list"},t._l(e.logs,(function(e,i){return n("li",{key:""+a+i,staticClass:"log-li"},[t._v(t._s(e))])})),0)])])})),0)]):t._e()])])},it=[],ot={data:function(){return{logVisible:!1,selectItem:null,filterList:[{title:"输入筛选",price:50,code:"FilterComplexInput",previewUrl:n("2cec"),features:["筛选内容：","支持固定列","支持回车筛选","支持关键字模糊匹配","支持关键字精准匹配","支持匹配已关键字开头","支持匹配已关键字结尾","支持匹配空值"].join("\n"),logList:[{version:"1.0.0",date:"2019-05-01",logs:["支持固定列","支持回车筛选","支持关键字模糊匹配","支持关键字精准匹配","支持匹配已关键字开头","支持匹配已关键字结尾","支持匹配空值"]}]},{title:"组合筛选",price:300,code:"FilterCombination",previewUrl:n("86ec"),features:["组合筛选：","支持排序","支持固定列","支持搜索内容区域虚拟渲染","支持根据单元格的值进行筛选","支持关键字包含匹配","支持关键字不包含匹配","支持关键字等于匹配","支持关键字不等于匹配","支持关键字开头匹配","支持非关键字开头匹配","支持关键字结尾匹配","支持非关键字结尾匹配","支持数值筛选小于指定值","支持数值筛选小于或等于指定值","支持数值筛选大于指定值","支持数值筛选大于或等于指定值","支持匹配空值","通配符：","?（代表任意单个字符）*（代表任意字符）~（用于匹配通配符）","例如：",'输入 "a*" 可查找到 "axxx"','输入 "a?" 可查找到 "ax"','输入 "~?" 可查找到 "?"','输入 "~*" 可查找到 "*"','输入 "~~" 可查找到 "~"'].join("\n"),logList:[{version:"1.0.0",date:"2019-05-15",logs:["支持排序","支持固定列","支持搜索内容区域虚拟渲染","支持根据单元格的值进行筛选","支持关键字包含匹配","支持关键字不包含匹配","支持关键字等于匹配","支持关键字不等于匹配","支持关键字开头匹配","支持非关键字开头匹配","支持关键字结尾匹配","支持非关键字结尾匹配","支持数值筛选小于指定值","支持数值筛选小于或等于指定值","支持数值筛选大于指定值","支持数值筛选大于或等于指定值","支持匹配空值"]}]}]}},computed:Object(s["a"])({},Object(u["c"])(["loginToken","loginInfo"])),methods:{getCompPrivilege:function(t){return this.loginToken&&this.loginInfo&&this.loginInfo.compList&&this.loginInfo.compList.find((function(e){return e.appCode===t.code}))},hasSrcType:function(t){var e=this.getCompPrivilege(t);return e&&"src"===e.authType},getCompAuthProp:function(t,e){var n=this.getCompPrivilege(t);if(n){var a=n[e];return"deadline"===e?-1===a?"永久使用":"".concat(n.authDate," ~ ").concat(p.a.toDateString(p.a.toStringDate(n.authDate).getTime()+1e3*p.a.toNumber(a),"yyyy-MM-dd")):a}return""},downloadEvent:function(t,e){b(t.code,e)},showLog:function(t){this.selectItem=t,this.logVisible=!0}}},st=ot,rt=(n("a38f"),Object(E["a"])(st,at,it,!1,null,"4c4382c5",null)),ct=rt.exports,lt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"edit-page"},[n("h4",[t._v("暂无")])])}],ut=(n("7982"),{}),dt=Object(E["a"])(ut,lt,pt,!1,null,"31c6f1db",null),gt=dt.exports;a["a"].use(I["a"]);var ft=[{path:"/",redirect:{name:"Pro"}},{path:"/pay",name:"Pay",component:A},{path:"/support",name:"Support",component:V},{path:"/pro",name:"Pro",component:B},{path:"/proLog",name:"ProLog",component:G},{path:"/proAuth",name:"ProAuth",component:nt},{path:"/filter",name:"Filter",component:ct},{path:"/edit",name:"Edit",component:gt}],vt=new I["a"]({routes:ft}),ht=vt;a["a"].config.productionTip=!1,document.onkeydown=function(t){"f12"===t.key.toLowerCase()&&(t.preventDefault?t.preventDefault():t.returnValue=!1)},document.oncontextmenu=function(t){t.preventDefault?t.preventDefault():t.returnValue=!1},new a["a"]({router:ht,store:g,render:function(t){return t(k)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"6b68":function(t,e,n){},"6debe":function(t,e,n){t.exports=n.p+"static/img/proFixedAera.a7a9c781.gif"},"70e3":function(t,e,n){t.exports=n.p+"static/img/proMultiArea.e0e2b445.gif"},7982:function(t,e,n){"use strict";n("30dd")},8171:function(t,e,n){t.exports=n.p+"static/img/proVirtualScroll.2a554b15.gif"},"86ec":function(t,e,n){t.exports=n.p+"static/img/FilterCombination.530f96bc.gif"},"8ab4":function(t,e,n){},"8d21":function(t,e,n){t.exports=n.p+"static/img/proCharts.4c754bf5.gif"},"9a09":function(t,e,n){t.exports=n.p+"static/img/qq.ffaa8faf.png"},"9c0c":function(t,e,n){},"9e2e":function(t,e,n){"use strict";n("8ab4")},a38f:function(t,e,n){"use strict";n("6b68")},abfe:function(t,e,n){"use strict";n("559d")},acb1:function(t,e,n){"use strict";n("dac3")},bb4b:function(t,e,n){t.exports=n.p+"static/img/proClip.af9ee3d9.gif"},c75b:function(t,e,n){t.exports=n.p+"static/img/proVirtualMergeScroll.b79336b1.gif"},d5ad:function(t,e,n){t.exports=n.p+"static/img/pay.3e7b5bad.jpg"},dac3:function(t,e,n){},f1aa:function(t,e,n){"use strict";n("0ec3")},fce1:function(t,e,n){t.exports=n.p+"static/img/proArea.b88ba1af.gif"}});
//# sourceMappingURL=index.15b8a326.js.map