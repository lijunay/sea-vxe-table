(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f1135"],{"9ea4":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),l=Object(a["j"])("p",{class:"tip"},"将右键菜单注册成全局可复用的",-1),c=Object(a["j"])("h2",null,"示例",-1),i=Object(a["l"])("      "),d=Object(a["l"])("\r\n      "),o=Object(a["l"])("\r\n      "),r=Object(a["l"])("\r\n    ");function s(e,t,n,s,m,b){var p=Object(a["L"])("vxe-column"),u=Object(a["L"])("vxe-table"),j=Object(a["L"])("pre-code");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("h1",null,Object(a["O"])(e.$t("app.aside.nav.menus")),1),l,Object(a["m"])(u,{resizable:"","highlight-current-row":"","highlight-hover-row":"","highlight-current-column":"",data:e.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(p,{field:"name",title:"app.api.title.prop","min-width":"280","tree-node":""}),Object(a["m"])(p,{field:"desc",title:"app.api.title.desc","min-width":"200"}),Object(a["m"])(p,{field:"type",title:"app.api.title.type","min-width":"140"}),Object(a["m"])(p,{field:"enum",title:"app.api.title.enum","min-width":"150"}),Object(a["m"])(p,{field:"defVal",title:"app.api.title.defVal","min-width":"160"})]})),_:1},8,["data"]),c,Object(a["j"])("pre",null,[i,Object(a["m"])(j,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[0]),1)]})),_:1}),d,Object(a["m"])(j,{class:"html"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[1]),1)]})),_:1}),o,Object(a["m"])(j,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[2]),1)]})),_:1}),r])])}var m=Object(a["n"])({setup:function(){var e=Object(a["I"])([{name:"add(code, callback)",desc:"添加一个",type:"",enum:"",defVal:"code: string, callback: (params, event) => any",list:[]},{name:"mixin(options)",desc:"添加多个",type:"",enum:"",defVal:"options: { [code: string]: (params, event) => any }",list:[]},{name:"delete(code)",desc:"删除",type:"",enum:"",defVal:"code: string",list:[]}]);return{tableData:e,demoCodes:["\n        import VXETable from 'vxe-table'\n        \n        VXETable.menus.add('exportData', (params, event) => {\n          let { $table } = params\n          $table.exportData()\n        })\n        ",'\n        <vxe-table\n          border\n          :menu-config="tableMenu"\n          :data="tableData">\n          <vxe-column type="seq" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, ref } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const tableMenu = ref({\n              body: {\n                options: [\n                  [\n                    { code: 'exportData', name: '导出.csv' }\n                  ]\n                ]\n              }\n            })\n            const tableData = ref([\n              { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n              { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n              { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n              { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 24, address: 'Shanghai' }\n            ])\n            return {\n              tableMenu,\n              tableData\n            }\n          }\n        })\n        "]}}}),b=n("6b0d"),p=n.n(b);const u=p()(m,[["render",s]]);t["default"]=u}}]);