(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd035"],{8029:function(e,n,t){"use strict";t.r(n);var o=t("7a23"),r={class:"tip"},a=Object(o["l"])(" 工具栏-左侧按钮 "),l=Object(o["l"])("，查看 "),s=Object(o["j"])("a",{class:"link",href:"https://github.com/x-extends/vxe-table-docs/tree/main/v4/src/plugins/table/renderer",target:"_blank"},"示例的源码",-1),d=Object(o["j"])("span",{class:"red"},"（具体请自行实现，该示例仅供参考）",-1),c=Object(o["j"])("br",null,null,-1),i=Object(o["l"])(" 配置参数："),b=Object(o["j"])("br",null,null,-1),u=Object(o["l"])(" renderToolbarButton (renderOpts: any, params: { button, $table }) 左侧按钮"),m=Object(o["j"])("br",null,null,-1),f=Object(o["l"])(" renderToolbarTool (renderOpts: any, params: { tool, $table }) 右侧工具"),p=Object(o["j"])("br",null,null,-1),x={class:"demo-code"},j=Object(o["l"])("      "),g=Object(o["l"])("\r\n      "),O=Object(o["l"])("\r\n      "),h=Object(o["l"])("\r\n    ");function T(e,n,t,T,v,D){var w=Object(o["L"])("grid-api-link"),y=Object(o["L"])("vxe-grid"),S=Object(o["L"])("pre-code");return Object(o["D"])(),Object(o["i"])("div",null,[Object(o["j"])("p",r,[a,Object(o["m"])(w,{prop:"buttonRender"}),l,s,d,c,i,b,u,m,f,p]),Object(o["m"])(y,{border:"",resizable:"",ref:"xGrid",height:"400","export-config":{},"toolbar-config":e.demo1.tableToolbar,"proxy-config":e.demo1.tableProxy,columns:e.demo1.tableColumn},null,8,["toolbar-config","proxy-config","columns"]),Object(o["j"])("p",x,Object(o["O"])(e.$t("app.body.button.showCode")),1),Object(o["j"])("pre",null,[j,Object(o["m"])(S,{class:"typescript"},{default:Object(o["V"])((function(){return[Object(o["l"])(Object(o["O"])(e.demoCodes[0]),1)]})),_:1}),g,Object(o["m"])(S,{class:"xml"},{default:Object(o["V"])((function(){return[Object(o["l"])(Object(o["O"])(e.demoCodes[1]),1)]})),_:1}),O,Object(o["m"])(S,{class:"typescript"},{default:Object(o["V"])((function(){return[Object(o["l"])(Object(o["O"])(e.demoCodes[2]),1)]})),_:1}),h])])}t("d3b7");var v=Object(o["n"])({setup:function(){var e=Object(o["I"])({}),n=function(){return new Promise((function(e){setTimeout((function(){var n=[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"Shenzhen"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"Shenzhen"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"Shenzhen"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"Shenzhen"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"Shenzhen"}];e(n)}),200)}))},t=function(){var n=e.value;n.exportData()},r=Object(o["H"])({tableColumn:[{type:"seq",width:50},{field:"name",title:"Name"},{field:"age",title:"Age"},{field:"sex",title:"Sex"},{field:"role",title:"Role"}],tableToolbar:{export:!0,custom:!0,buttons:[{name:"刷新",code:"reload",icon:"fa fa-refresh"},{name:"自定义1",code:"custom1",icon:"fa fa-bell"},{buttonRender:{name:"ToolbarButtonDownload",events:{click:t}}}],tools:[{name:"自定义2",code:"custom2",icon:"fa fa-bug"},{toolRender:{name:"ToolbarToolPrint"}}]},tableProxy:{ajax:{query:function(){return n()}}}});return{demo1:r,xGrid:e,demoCodes:["\n        import VXETable from 'vxe-table'\n\n        // 创建一个简单的工具栏-左侧按钮渲染\n        VXETable.renderer.add('ToolbarButtonDownload', {\n          renderToolbarButton (renderOpts, params) {\n            const { events = {} } = renderOpts\n            const { button } = params\n            return [\n              <vxe-button circle icon=\"fa fa-cloud-download\" onClick={\n                () => {\n                  events.click(button)\n                }\n              }></vxe-button>\n            ]\n          }\n        })\n\n        // 创建一个简单的工具栏-右侧工具渲染\n        VXETable.renderer.add('ToolbarToolPrint', {\n          renderToolbarTool (renderOpts, params) {\n            const { $table } = params\n            return [\n              <vxe-button circle icon=\"fa fa-print\" onClick={\n                () => {\n                  $table.print()\n                }\n              }></vxe-button>\n            ]\n          }\n        })\n        ",'\n        <vxe-grid\n          border\n          resizable\n          ref="xGrid"\n          height="400"\n          :export-config="{}"\n          :toolbar-config="tableToolbar"\n          :proxy-config="tableProxy"\n          :columns="tableColumn">\n        </vxe-grid>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeGridInstance } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const xGrid = ref({} as VxeGridInstance)\n\n            const findList = () => {\n              return new Promise(resolve => {\n                setTimeout(() => {\n                  const rest = [\n                    { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'Shenzhen' },\n                    { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                    { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                    { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'Shenzhen' },\n                    { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                    { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'Shenzhen' },\n                    { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'Shenzhen' },\n                    { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'Shenzhen' }\n                  ]\n                  resolve(rest)\n                }, 200)\n              })\n            }\n\n            const btnDownEvent = () => {\n              const $grid = xGrid.value\n              $grid.exportData()\n            }\n\n            const demo1 = reactive({\n              tableColumn: [\n                { type: 'seq', width: 50 },\n                { field: 'name', title: 'Name' },\n                { field: 'age', title: 'Age' },\n                { field: 'sex', title: 'Sex' },\n                { field: 'role', title: 'Role' }\n              ],\n              tableToolbar: {\n                export: true,\n                custom: true,\n                buttons: [\n                  { name: '刷新', code: 'reload', icon: 'fa fa-refresh' },\n                  { name: '自定义1', code: 'custom1', icon: 'fa fa-bell' },\n                  { buttonRender: { name: 'ToolbarButtonDownload', events: { click: btnDownEvent } } }\n                ],\n                tools: [\n                  { name: '自定义2', code: 'custom2', icon: 'fa fa-bug' },\n                  { toolRender: { name: 'ToolbarToolPrint' } }\n                ]\n              },\n              tableProxy: {\n                ajax: {\n                  query: () => findList()\n                }\n              }\n            })\n\n            return {\n              demo1,\n              xGrid\n            }\n          }\n        })\n        "]}}}),D=t("6b0d"),w=t.n(D);const y=w()(v,[["render",T]]);n["default"]=y}}]);