(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0465d140"],{"0edb":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=void 0;var o,a=window.document;function i(e){if(!o){o=a.createElement("textarea"),o.id="$XECopy";var n=o.style;n.width="48px",n.height="24px",n.position="fixed",n.zIndex="0",n.left="-500px",n.top="-500px",a.body.appendChild(o)}o.value=null===e||void 0===e?"":""+e}function r(e){var n=!1;try{i(e),o.select(),o.setSelectionRange(0,o.value.length),n=a.execCommand("copy"),o.blur()}catch(t){}return n}function s(e){return r(e)}s.copy=r;var l=s;n["default"]=l},9600:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("p",{staticClass:"tip"},[e._v("右键菜单，实现对按钮的控制，通过 "),t("table-api-link",{attrs:{prop:"visibleMethod"}}),e._v(" 和 "),t("table-api-link",{attrs:{prop:"visible"}}),e._v(" | "),t("table-api-link",{attrs:{prop:"disabled"}}),e._v(" 属性来控制菜单选项的操作权限")],1),t("vxe-grid",e._b({ref:"xGrid",on:{"cell-menu":e.cellContextMenuEvent,"menu-click":e.contextMenuClickEvent}},"vxe-grid",e.gridOptions,!1)),t("pre",[e._v("    "),t("pre-code",[e._v("\n      | Arrow Up ↑ | 移动到上一个菜单选项 |\n      | Arrow Down ↓ | 移动到下一个菜单选项 |\n      | Arrow Left ← | 关闭二级菜单 |\n      | Arrow Right → | 打开二级菜单 |\n      | Esc | 关闭菜单选项 |\n      | Enter | 选中当前菜单选项 |\n      | Spacebar | 选中当前菜单选项 |\n    ")]),e._v("\n  ")],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("pre-code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("pre-code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")],1)],1)},a=[],i=(t("d3b7"),t("159b"),t("caad"),t("a9e3"),t("0edb")),r=t.n(i),s=t("a388"),l=t.n(s),d={data:function(){return{gridOptions:{border:!0,resizable:!0,showFooter:!0,highlightCurrentRow:!0,footerMethod:this.footerMethod,menuConfig:{header:{options:[[{code:"exportAll",name:"导出所有.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},body:{options:[[{code:"copy",name:"复制内容",prefixIcon:"fa fa-copy",visible:!0,disabled:!1},{code:"clear",name:"清除内容",visible:!0,disabled:!1},{code:"reload",name:"刷新表格",visible:!0,disabled:!1}],[{code:"myPrint",name:"打印",prefixIcon:"fa fa-print",visible:!0,disabled:!1},{code:"myExport",name:"导出.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},footer:{options:[[{code:"exportAll",name:"导出所有.csv",prefixIcon:"fa fa-download",visible:!0,disabled:!1}]]},visibleMethod:this.visibleMethod},columns:[{type:"seq",width:50},{field:"name",title:"app.body.label.name"},{field:"age",title:"app.body.label.age"},{field:"nickname",title:"Nickname",showOverflow:!0}],data:[{id:10001,name:"Test1",nickname:"T1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",nickname:"T2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",nickname:"T3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",nickname:"T4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",nickname:"T5",role:"Develop",sex:"Women",age:30,address:"Shanghai"}]},footerData:[["合计","","xx","666"]],demoCodes:['\n        <vxe-grid\n          ref="xGrid"\n          v-bind="gridOptions"\n          @cell-menu="cellContextMenuEvent"\n          @menu-click="contextMenuClickEvent">\n        </vxe-grid>\n        ',"\n        import XEClipboard from 'xe-clipboard'\n        import VXETable from 'vxe-table'\n\n        export default {\n          data () {\n            return {\n              gridOptions: {\n                border: true,\n                resizable: true,\n                showFooter: true,\n                highlightCurrentRow: true,\n                footerMethod: this.footerMethod,\n                menuConfig: {\n                  header: {\n                    options: [\n                      [\n                        { code: 'exportAll', name: '导出所有.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                      ]\n                    ]\n                  },\n                  body: {\n                    options: [\n                      [\n                        { code: 'copy', name: '复制内容', prefixIcon: 'fa fa-copy', visible: true, disabled: false },\n                        { code: 'clear', name: '清除内容', visible: true, disabled: false },\n                        { code: 'reload', name: '刷新表格', visible: true, disabled: false }\n                      ],\n                      [\n                        { code: 'myPrint', name: '打印', prefixIcon: 'fa fa-print', visible: true, disabled: false },\n                        { code: 'myExport', name: '导出.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                      ]\n                    ]\n                  },\n                  footer: {\n                    options: [\n                      [\n                        { code: 'exportAll', name: '导出所有.csv', prefixIcon: 'fa fa-download', visible: true, disabled: false }\n                      ]\n                    ]\n                  },\n                  visibleMethod: this.visibleMethod\n                },\n                columns: [\n                  { type: 'seq', width: 50 },\n                  { field: 'name', title: 'app.body.label.name' },\n                  { field: 'age', title: 'app.body.label.age' },\n                  { field: 'nickname', title: 'Nickname', showOverflow: true }\n                ],\n                data: [\n                  { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                  { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                  { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                  { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                  { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' }\n                ]\n              },\n              footerData: [\n                ['合计', '', 'xx', '666']\n              ]\n            }\n          },\n          methods: {\n            visibleMethod ({ type, options, column }) {\n              // 示例：只有 name 列允许操作，清除按钮只能在 age 才显示\n              // 显示之前处理按钮的操作权限\n              let isDisabled = !column || column.property !== 'name'\n              let isVisible = column && column.property === 'age'\n              options.forEach(list => {\n                list.forEach(item => {\n                  if (['copy'].includes(item.code)) {\n                    item.disabled = isDisabled\n                  }\n                  if (['clear'].includes(item.code)) {\n                    item.visible = isVisible\n                  }\n                })\n              })\n              return true\n            },\n            cellContextMenuEvent ({ row }) {\n              const $grid = this.$refs.xGrid\n              $grid.setCurrentRow(row)\n            },\n            contextMenuClickEvent ({ menu, row, column }) {\n              const $grid = this.$refs.xGrid\n              switch (menu.code) {\n                case 'copy':\n                  if (row && column) {\n                    if (XEClipboard.copy(row[column.property])) {\n                      VXETable.modal.message({ content: '已复制到剪贴板！', status: 'success' })\n                    }\n                  }\n                  break\n                case 'clear':\n                  $grid.clearData(row, column.property)\n                  break\n                case 'myPrint':\n                  $grid.print()\n                  break\n                case 'myExport':\n                  $grid.exportData()\n                  break\n              }\n            },\n            sumNum (list, field) {\n              let count = 0\n              list.forEach(item => {\n                count += Number(item[field])\n              })\n              return count\n            },\n            footerMethod () {\n              return this.footerData\n            }\n          }\n        }\n        "]}},methods:{visibleMethod:function(e){var n=e.options,t=e.column,o=!t||"name"!==t.property,a=t&&"age"===t.property;return n.forEach((function(e){e.forEach((function(e){["copy"].includes(e.code)&&(e.disabled=o),["clear"].includes(e.code)&&(e.visible=a)}))})),!0},cellContextMenuEvent:function(e){var n=e.row,t=this.$refs.xGrid;t.setCurrentRow(n)},contextMenuClickEvent:function(e){var n=e.menu,t=e.row,o=e.column,a=this.$refs.xGrid;switch(n.code){case"copy":t&&o&&r.a.copy(t[o.property])&&l.a.modal.message({content:"已复制到剪贴板！",status:"success"});break;case"clear":a.clearData(t,o.property);break;case"myPrint":a.print();break;case"myExport":a.exportData();break}},sumNum:function(e,n){var t=0;return e.forEach((function(e){t+=Number(e[n])})),t},footerMethod:function(){return this.footerData}}},c=d,p=t("2877"),u=Object(p["a"])(c,o,a,!1,null,null,null);n["default"]=u.exports},a9e3:function(e,n,t){"use strict";var o=t("83ab"),a=t("da84"),i=t("e330"),r=t("94ca"),s=t("6eeb"),l=t("1a2d"),d=t("7156"),c=t("3a9b"),p=t("d9b5"),u=t("c04e"),f=t("d039"),m=t("241c").f,b=t("06cf").f,v=t("9bf2").f,h=t("408a"),x=t("58a8").trim,g="Number",y=a[g],w=y.prototype,E=a.TypeError,k=i("".slice),M=i("".charCodeAt),T=function(e){var n=u(e,"number");return"bigint"==typeof n?n:C(n)},C=function(e){var n,t,o,a,i,r,s,l,d=u(e,"number");if(p(d))throw E("Cannot convert a Symbol value to a number");if("string"==typeof d&&d.length>2)if(d=x(d),n=M(d,0),43===n||45===n){if(t=M(d,2),88===t||120===t)return NaN}else if(48===n){switch(M(d,1)){case 66:case 98:o=2,a=49;break;case 79:case 111:o=8,a=55;break;default:return+d}for(i=k(d,2),r=i.length,s=0;s<r;s++)if(l=M(i,s),l<48||l>a)return NaN;return parseInt(i,o)}return+d};if(r(g,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var I,_=function(e){var n=arguments.length<1?0:y(T(e)),t=this;return c(w,t)&&f((function(){h(t)}))?d(Object(n),t,_):n},N=o?m(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),D=0;N.length>D;D++)l(y,I=N[D])&&!l(_,I)&&v(_,I,b(y,I));_.prototype=w,w.constructor=_,s(a,g,_)}}}]);