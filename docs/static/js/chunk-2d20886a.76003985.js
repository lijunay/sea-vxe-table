(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20886a"],{a4bc:function(e,n,t){"use strict";t.r(n);var a=t("7a23"),d={class:"tip"},i=Object(a["l"])(" 虚拟树表格的懒加载和右键菜单，通过调用 "),l=Object(a["l"])(" 方法清除加载完成状态，通过调用 "),r=Object(a["l"])(" 方法重新加载子节点 "),o={class:"demo-code"},s=Object(a["l"])("      "),c=Object(a["l"])("\r\n      "),p=Object(a["l"])("\r\n    ");function m(e,n,t,m,b,u){var y=Object(a["L"])("table-api-link"),h=Object(a["L"])("vxe-column"),f=Object(a["L"])("vxe-table"),x=Object(a["L"])("pre-code");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("p",d,[i,Object(a["m"])(y,{prop:"clearTreeExpandLoaded"}),l,Object(a["m"])(y,{prop:"reloadTreeExpand"}),r]),Object(a["m"])(f,{border:"",resizable:"",ref:"xTree1",height:"400","row-id":"id","menu-config":e.demo1.tableMenu,"tree-config":e.demo1.treeConfig,data:e.demo1.tableData,onMenuClick:e.contextMenuClickEvent},{default:Object(a["V"])((function(){return[Object(a["m"])(h,{field:"id",title:"Id",width:"400","tree-node":""}),Object(a["m"])(h,{field:"size",title:"Size"}),Object(a["m"])(h,{field:"type",title:"Type"}),Object(a["m"])(h,{field:"date",title:"Date"})]})),_:1},8,["menu-config","tree-config","data","onMenuClick"]),Object(a["j"])("p",o,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[s,Object(a["m"])(x,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[0]),1)]})),_:1}),c,Object(a["m"])(x,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[1]),1)]})),_:1}),p])])}t("d3b7"),t("b0c0"),t("159b");var b=Object(a["n"])({setup:function(){var e=Object(a["I"])({}),n=1,t=Object(a["H"])({treeConfig:{lazy:!0,transform:!0,rowField:"id",parentField:"parentId",hasChild:"hasChild",loadMethod:function(e){var t=e.row;return new Promise((function(e){setTimeout((function(){var a=[{id:++n,parentId:t.id,name:t.name+"Test",type:"mp4",size:null,date:"2021-10-03",hasChild:!0},{id:++n,parentId:t.id,name:t.name+"Test",type:"mp3",size:null,date:"2021-07-09",hasChild:!1},{id:++n,parentId:t.id,name:t.name+"Test",type:"mp3",size:null,date:"2021-07-09",hasChild:!0},{id:++n,parentId:t.id,name:t.name+"Test",type:"mp3",size:null,date:"2021-08-05",hasChild:!1},{id:++n,parentId:t.id,name:t.name+"Test",type:"mp3",size:null,date:"2021-07-01",hasChild:!1},{id:++n,parentId:t.id,name:t.name+"Test",type:"mp3",size:null,date:"2021-07-01",hasChild:!0},{id:++n,parentId:t.id,name:t.name+"Test",type:"mp3",size:null,date:"2021-07-01",hasChild:!1}];e(a)}),500)}))}},tableMenu:{body:{options:[[{code:"clearLoaded",name:"清除加载状态",disabled:!1},{code:"reloadNodes",name:"重新加载子节点",disabled:!1},{code:"expand",name:"展开节点",disabled:!1},{code:"contract",name:"收起节点",disabled:!1}]]},visibleMethod:function(n){var a=n.row,d=n.type,i=n.options,l=e.value,r=t.treeConfig;return"body"===d&&i.forEach((function(e){e.forEach((function(e){if("expand"===e.code||"contract"===e.code)if(a&&r.children&&a[r.children]&&a[r.children].length){var n=l.isTreeExpandByRow(a);e.disabled="expand"===e.code?n:!n}else e.disabled=!0}))})),!0}},tableData:[{id:++n,parentKey:null,name:"vxe-table test abc1",type:"mp3",size:1024,date:"2020-08-01"},{id:++n,parentKey:null,name:"Test2",type:"mp4",size:null,date:"2021-04-01",hasChild:!0},{id:++n,parentKey:null,name:"Test23",type:"mp4",size:null,date:"2021-01-02",hasChild:!0},{id:++n,parentKey:null,name:"vxe-table test abc9",type:"avi",size:224,date:"2020-10-04"},{id:++n,parentKey:null,name:"test abc",type:"avi",size:224,date:"2020-04-01"},{id:++n,parentKey:null,name:"test abc",type:"avi",size:224,date:"2020-10-03"},{id:++n,parentKey:null,name:"test abc",type:"avi",size:224,date:"2020-10-09"},{id:++n,parentKey:null,name:"test abc",type:"avi",size:224,date:"2020-05-01"}]}),d=function(n){var t=n.menu,a=n.row,d=e.value;switch(t.code){case"clearLoaded":d.clearTreeExpandLoaded(a);break;case"reloadNodes":d.reloadTreeExpand(a);break;case"expand":d.setTreeExpand(a,!0);break;case"contract":d.setTreeExpand(a,!1);break}};return{xTree1:e,demo1:t,contextMenuClickEvent:d,demoCodes:['\n        <vxe-table\n          border\n          resizable\n          ref="xTree1"\n          height="400"\n          row-id="id"\n          :menu-config="demo1.tableMenu"\n          :tree-config="demo1.treeConfig"\n          :data="demo1.tableData"\n          @menu-click="contextMenuClickEvent">\n          <vxe-column field="id" title="Id" width="400" tree-node></vxe-column>\n          <vxe-column field="size" title="Size"></vxe-column>\n          <vxe-column field="type" title="Type"></vxe-column>\n          <vxe-column field="date" title="Date"></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VxeTableInstance, VxeTablePropTypes, VxeTableEvents } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const xTree1 = ref({} as VxeTableInstance)\n            let key = 1\n\n            const demo1 = reactive({\n              treeConfig: {\n                lazy: true,\n                transform: true,\n                rowField: 'id',\n                parentField: 'parentId',\n                hasChild: 'hasChild',\n                loadMethod ({ row }) {\n                  // 异步加载子节点\n                  return new Promise(resolve => {\n                    setTimeout(() => {\n                      const childs = [\n                        { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp4', size: null, date: '2021-10-03', hasChild: true },\n                        { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-09', hasChild: false },\n                        { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-09', hasChild: true },\n                        { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-08-05', hasChild: false },\n                        { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: false },\n                        { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: true },\n                        { id: ++key, parentId: row.id, name: row.name + 'Test', type: 'mp3', size: null, date: '2021-07-01', hasChild: false }\n                      ]\n                      resolve(childs)\n                    }, 500)\n                  })\n                }\n              } as VxeTablePropTypes.TreeConfig,\n              tableMenu: {\n                body: {\n                  options: [\n                    [\n                      { code: 'clearLoaded', name: '清除加载状态', disabled: false },\n                      { code: 'reloadNodes', name: '重新加载子节点', disabled: false },\n                      { code: 'expand', name: '展开节点', disabled: false },\n                      { code: 'contract', name: '收起节点', disabled: false }\n                    ]\n                  ]\n                },\n                visibleMethod ({ row, type, options }) {\n                  const $table = xTree1.value\n                  const treeConfig = demo1.treeConfig\n                  if (type === 'body') {\n                    options.forEach(list => {\n                      list.forEach(item => {\n                        if (item.code === 'expand' || item.code === 'contract') {\n                          if (row && treeConfig.children && row[treeConfig.children] && row[treeConfig.children].length) {\n                            const isExpand = $table.isTreeExpandByRow(row)\n                            item.disabled = item.code === 'expand' ? isExpand : !isExpand\n                          } else {\n                            item.disabled = true\n                          }\n                        }\n                      })\n                    })\n                  }\n                  return true\n                }\n              } as VxeTablePropTypes.MenuConfig,\n              tableData: [\n                { id: ++key, parentKey: null, name: 'vxe-table test abc1', type: 'mp3', size: 1024, date: '2020-08-01' },\n                { id: ++key, parentKey: null, name: 'Test2', type: 'mp4', size: null, date: '2021-04-01', hasChild: true },\n                { id: ++key, parentKey: null, name: 'Test23', type: 'mp4', size: null, date: '2021-01-02', hasChild: true },\n                { id: ++key, parentKey: null, name: 'vxe-table test abc9', type: 'avi', size: 224, date: '2020-10-04' },\n                { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-04-01' },\n                { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-10-03' },\n                { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-10-09' },\n                { id: ++key, parentKey: null, name: 'test abc', type: 'avi', size: 224, date: '2020-05-01' }\n              ] as any[]\n            })\n\n            const contextMenuClickEvent: VxeTableEvents.MenuClick = ({ menu, row }) => {\n              const $table = xTree1.value\n              switch (menu.code) {\n                case 'clearLoaded':\n                  $table.clearTreeExpandLoaded(row)\n                  break\n                case 'reloadNodes':\n                  $table.reloadTreeExpand(row)\n                  break\n                case 'expand':\n                  $table.setTreeExpand(row, true)\n                  break\n                case 'contract':\n                  $table.setTreeExpand(row, false)\n                  break\n              }\n            }\n\n            return {\n              xTree1,\n              demo1,\n              contextMenuClickEvent\n            }\n          }\n        })\n        "]}}}),u=t("6b0d"),y=t.n(u);const h=y()(b,[["render",m]]);n["default"]=h}}]);