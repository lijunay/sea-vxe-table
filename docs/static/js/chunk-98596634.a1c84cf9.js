(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-98596634"],{"9aaa":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o={class:"tip"},s=Object(a["l"])("单选表格，用户手动选中时会触发事件 "),d=Object(a["l"])("，还通过 "),l=Object(a["l"])(" 设置高亮选中行"),r=Object(a["l"])("设置第二行选中"),c=Object(a["l"])("取消选中"),i=Object(a["l"])("获取选中"),b=Object(a["l"])("取消"),m={class:"demo-code"},u=Object(a["l"])("      "),g=Object(a["l"])("\r\n      "),x=Object(a["l"])("\r\n    "),O={class:"tip"},j=Object(a["l"])(" 还可以通过 "),v=Object(a["l"])(" 方法控制 checkbox 是否允许用户手动选中，还可以配置 "),f=Object(a["l"])(" 列显示属性 "),h=Object(a["l"])("设置第一行选中（如果被禁用，不可选中）"),p=Object(a["l"])("设置第二行选中"),T=Object(a["l"])("清除所有行选中"),D={class:"demo-code"},w=Object(a["l"])("      "),C=Object(a["l"])("\r\n      "),R=Object(a["l"])("\r\n    "),M={class:"tip"},W=Object(a["l"])(" 默认选中，通过指定 "),S=Object(a["l"])(" 设置默认选中的行，指定默认值需要有 "),V=Object(a["j"])("br",null,null,-1),k=Object(a["j"])("span",{class:"red"},"（注：默认行为只会在 reload 之后触发一次）",-1),y={class:"demo-code"},E=Object(a["l"])("      "),_=Object(a["l"])("\r\n      "),A=Object(a["l"])("\r\n    "),$={class:"tip"},F=Object(a["l"])("单选的默认行为是不允许取消的，可以通过设置 "),z=Object(a["l"])("."),G=Object(a["l"])("=false 允许取消"),N={class:"demo-code"},P=Object(a["l"])("      "),H=Object(a["l"])("\r\n      "),J=Object(a["l"])("\r\n    "),L=Object(a["j"])("p",{class:"tip"},"两种方式混合使用",-1),I={class:"demo-code"},K=Object(a["l"])("      "),X=Object(a["l"])("\r\n      "),B=Object(a["l"])("\r\n    "),q=Object(a["j"])("p",{class:"tip"},"当然也可以两种方式同时使用",-1),Q={class:"demo-code"},U=Object(a["l"])("      "),Y=Object(a["l"])("\r\n      "),Z=Object(a["l"])("\r\n    ");function ee(e,t,n,ee,te,ne){var ae=Object(a["L"])("table-api-link"),oe=Object(a["L"])("vxe-button"),se=Object(a["L"])("vxe-toolbar"),de=Object(a["L"])("vxe-column"),le=Object(a["L"])("vxe-table"),re=Object(a["L"])("pre-code");return Object(a["D"])(),Object(a["i"])("div",null,[Object(a["j"])("p",o,[s,Object(a["m"])(ae,{prop:"radio-change"}),d,Object(a["m"])(ae,{prop:"highlight"}),l]),Object(a["m"])(se,null,{buttons:Object(a["V"])((function(){return[Object(a["m"])(oe,{onClick:t[0]||(t[0]=function(t){return e.$refs.xTable1.setRadioRow(e.demo1.tableData[1])})},{default:Object(a["V"])((function(){return[r]})),_:1}),Object(a["m"])(oe,{onClick:e.clearRadioRowEevnt1},{default:Object(a["V"])((function(){return[c]})),_:1},8,["onClick"]),Object(a["m"])(oe,{onClick:e.getRadioEvent1},{default:Object(a["V"])((function(){return[i]})),_:1},8,["onClick"])]})),_:1}),Object(a["m"])(le,{border:"",ref:"xTable1",height:"300",data:e.demo1.tableData,"radio-config":{highlight:!0},onCellClick:e.cellClickEvent1,onRadioChange:e.radioChangeEvent1},{default:Object(a["V"])((function(){return[Object(a["m"])(de,{type:"radio",width:"60"},{header:Object(a["V"])((function(){return[Object(a["m"])(oe,{type:"text",onClick:e.clearRadioRowEevnt1,disabled:!e.demo1.selectRow},{default:Object(a["V"])((function(){return[b]})),_:1},8,["onClick","disabled"])]})),_:1}),Object(a["m"])(de,{field:"sex",title:"Sex"}),Object(a["m"])(de,{field:"age",title:"Age"}),Object(a["m"])(de,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data","onCellClick","onRadioChange"]),Object(a["j"])("p",m,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[u,Object(a["m"])(re,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[0]),1)]})),_:1}),g,Object(a["m"])(re,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[1]),1)]})),_:1}),x]),Object(a["j"])("p",O,[j,Object(a["m"])(ae,{prop:"checkMethod"}),v,Object(a["m"])(ae,{prop:"labelField"}),f]),Object(a["m"])(se,null,{buttons:Object(a["V"])((function(){return[Object(a["m"])(oe,{onClick:t[1]||(t[1]=function(t){return e.$refs.xTable2.setRadioRow(e.demo2.tableData[0])})},{default:Object(a["V"])((function(){return[h]})),_:1}),Object(a["m"])(oe,{onClick:t[2]||(t[2]=function(t){return e.$refs.xTable2.setRadioRow(e.demo2.tableData[1])})},{default:Object(a["V"])((function(){return[p]})),_:1}),Object(a["m"])(oe,{onClick:t[3]||(t[3]=function(t){return e.$refs.xTable2.clearRadioRow()})},{default:Object(a["V"])((function(){return[T]})),_:1})]})),_:1}),Object(a["m"])(le,{border:"",ref:"xTable2",height:"300","radio-config":{labelField:"name",checkMethod:e.checkRadioMethod2},data:e.demo2.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(de,{type:"radio",title:"请选择",width:"100"}),Object(a["m"])(de,{field:"sex",title:"Sex"}),Object(a["m"])(de,{field:"age",title:"Age"}),Object(a["m"])(de,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["radio-config","data"]),Object(a["j"])("p",D,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[w,Object(a["m"])(re,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[2]),1)]})),_:1}),C,Object(a["m"])(re,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[3]),1)]})),_:1}),R]),Object(a["j"])("p",M,[W,Object(a["m"])(ae,{prop:"checkRowKey"}),S,Object(a["m"])(ae,{prop:"row-id"}),V,k]),Object(a["m"])(le,{border:"",height:"300","row-id":"id",data:e.demo3.tableData,"radio-config":{checkRowKey:e.demo3.defaultSelecteRow3}},{default:Object(a["V"])((function(){return[Object(a["m"])(de,{type:"radio",width:"60"}),Object(a["m"])(de,{field:"id",title:"ID"}),Object(a["m"])(de,{field:"name",title:"Name"}),Object(a["m"])(de,{field:"sex",title:"Sex"}),Object(a["m"])(de,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data","radio-config"]),Object(a["j"])("p",y,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[E,Object(a["m"])(re,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[4]),1)]})),_:1}),_,Object(a["m"])(re,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[5]),1)]})),_:1}),A]),Object(a["j"])("p",$,[F,Object(a["m"])(ae,{prop:"radio-config"}),z,Object(a["m"])(ae,{prop:"strict"}),G]),Object(a["m"])(le,{border:"",height:"300","radio-config":{strict:!1},data:e.demo4.tableData,onRadioChange:e.radioChangeEvent4},{default:Object(a["V"])((function(){return[Object(a["m"])(de,{type:"radio",width:"60"}),Object(a["m"])(de,{field:"name",title:"Name"}),Object(a["m"])(de,{field:"sex",title:"Sex"}),Object(a["m"])(de,{field:"age",title:"Age"}),Object(a["m"])(de,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data","onRadioChange"]),Object(a["j"])("p",N,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[P,Object(a["m"])(re,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[6]),1)]})),_:1}),H,Object(a["m"])(re,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[7]),1)]})),_:1}),J]),L,Object(a["m"])(le,{border:"",height:"300","row-config":{isCurrent:!0},"radio-config":{labelField:"name"},data:e.demo5.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(de,{type:"radio",title:"还可以这样",width:"120"}),Object(a["m"])(de,{field:"name",title:"Name"}),Object(a["m"])(de,{field:"sex",title:"Sex"}),Object(a["m"])(de,{field:"age",title:"Age"}),Object(a["m"])(de,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data"]),Object(a["j"])("p",I,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[K,Object(a["m"])(re,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[8]),1)]})),_:1}),X,Object(a["m"])(re,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[9]),1)]})),_:1}),B]),q,Object(a["m"])(le,{border:"",height:"300","row-config":{isCurrent:!0,isHover:!0},"radio-config":{labelField:"name",trigger:"row"},data:e.demo6.tableData},{default:Object(a["V"])((function(){return[Object(a["m"])(de,{type:"radio",title:"还可以这样",width:"120"}),Object(a["m"])(de,{field:"name",title:"Name"}),Object(a["m"])(de,{field:"sex",title:"Sex"}),Object(a["m"])(de,{field:"age",title:"Age"}),Object(a["m"])(de,{field:"address",title:"Address","show-overflow":""})]})),_:1},8,["data"]),Object(a["j"])("p",Q,Object(a["O"])(e.$t("app.body.button.showCode")),1),Object(a["j"])("pre",null,[U,Object(a["m"])(re,{class:"xml"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[10]),1)]})),_:1}),Y,Object(a["m"])(re,{class:"typescript"},{default:Object(a["V"])((function(){return[Object(a["l"])(Object(a["O"])(e.demoCodes[11]),1)]})),_:1}),Z])])}n("e9c4");var te=n("55db"),ne=Object(a["n"])({setup:function(){var e=Object(a["H"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}],selectRow:null}),t=Object(a["I"])({}),n=function(){console.log("单元格点击事件")},o=function(t){var n=t.row;e.selectRow=n,console.log("单选事件")},s=function(){var n=t.value;e.selectRow=null,n.clearRadioRow()},d=function(){var e=t.value;te["a"].modal.alert(JSON.stringify(e.getRadioRecord()))},l=Object(a["H"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}]}),r=function(e){var t=e.row;return t.age>26},c=Object(a["H"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}],defaultSelecteRow3:10002}),i=Object(a["H"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}]}),b=function(e){var t=e.newValue,n=e.oldValue;console.log(t,n)},m=Object(a["H"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}]}),u=Object(a["H"])({tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man",age:35,address:"test abc"}]});return{demo1:e,xTable1:t,cellClickEvent1:n,radioChangeEvent1:o,clearRadioRowEevnt1:s,getRadioEvent1:d,demo2:l,checkRadioMethod2:r,demo3:c,demo4:i,radioChangeEvent4:b,demo5:m,demo6:u,demoCodes:['\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="$refs.xTable1.setRadioRow(demo1.tableData[1])">设置第二行选中</vxe-button>\n            <vxe-button @click="clearRadioRowEevnt1">取消选中</vxe-button>\n            <vxe-button @click="getRadioEvent1">获取选中</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTable1"\n          height="300"\n          :data="demo1.tableData"\n          :radio-config="{highlight: true}"\n          @cell-click="cellClickEvent1"\n          @radio-change="radioChangeEvent1">\n          <vxe-column type="radio" width="60">\n            <template #header>\n              <vxe-button type="text" @click="clearRadioRowEevnt1" :disabled="!demo1.selectRow">取消</vxe-button>\n            </template>\n          </vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref } from 'vue'\n        import { VXETable, VxeTableInstance, VxeTableEvents } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo1 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ],\n              selectRow: null as any\n            })\n\n            const xTable1 = ref({} as VxeTableInstance)\n\n            const cellClickEvent1: VxeTableEvents.CellClick = () => {\n              console.log('单元格点击事件')\n            }\n\n            const radioChangeEvent1: VxeTableEvents.RadioChange = ({ row }) => {\n              demo1.selectRow = row\n              console.log('单选事件')\n            }\n\n            const clearRadioRowEevnt1 = () => {\n              const $table = xTable1.value\n              demo1.selectRow = null\n              $table.clearRadioRow()\n            }\n\n            const getRadioEvent1 = () => {\n              const $table = xTable1.value\n              VXETable.modal.alert(JSON.stringify($table.getRadioRecord()))\n            }\n\n            return {\n              demo1,\n              xTable1,\n              cellClickEvent1,\n              radioChangeEvent1,\n              clearRadioRowEevnt1,\n              getRadioEvent1\n            }\n          }\n        })\n        ",'\n        <vxe-toolbar>\n          <template #buttons>\n            <vxe-button @click="$refs.xTable2.setRadioRow(demo2.tableData[0])">设置第一行选中（如果被禁用，不可选中）</vxe-button>\n            <vxe-button @click="$refs.xTable2.setRadioRow(demo2.tableData[1])">设置第二行选中</vxe-button>\n            <vxe-button @click="$refs.xTable2.clearRadioRow()">清除所有行选中</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTable2"\n          height="300"\n          :radio-config="{labelField: \'name\', checkMethod: checkRadioMethod2}"\n          :data="demo2.tableData">\n          <vxe-column type="radio" title="请选择" width="100"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive, ref, Ref } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const demo2 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            })\n\n            const checkRadioMethod2 = ({ row }: any) => {\n              return row.age > 26\n            }\n\n            return {\n              demo2,\n              checkRadioMethod2\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="300"\n          row-id="id"\n          :data="demo3.tableData"\n          :radio-config="{checkRowKey: demo3.defaultSelecteRow3}">\n          <vxe-column type="radio" width="60"></vxe-column>\n          <vxe-column field="id" title="ID"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const demo3 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ],\n              defaultSelecteRow3: 10002\n            })\n\n            return {\n              demo3\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="300"\n          :radio-config="{strict: false}"\n          :data="demo4.tableData"\n          @radio-change="radioChangeEvent4">\n          <vxe-column type="radio" width="60"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n        import { VxeTableEvents } from 'vxe-table'\n\n        export default defineComponent({\n          setup () {\n            const demo4 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            })\n\n            const radioChangeEvent4: VxeTableEvents.CurrentChange = ({ newValue, oldValue }) => {\n              console.log(newValue, oldValue)\n            }\n\n            return {\n              demo4,\n              radioChangeEvent4\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="300"\n          :row-config="{isCurrent: true}"\n          :radio-config="{labelField: \'name\'}"\n          :data="demo5.tableData">\n          <vxe-column type="radio" title="还可以这样" width="120"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const demo5 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            })\n\n            return {\n              demo5\n            }\n          }\n        })\n        ",'\n        <vxe-table\n          border\n          height="300"\n          :row-config="{isCurrent: true, isHover: true}"\n          :radio-config="{labelField: \'name\', trigger: \'row\'}"\n          :data="demo6.tableData">\n          <vxe-column type="radio" title="还可以这样" width="120"></vxe-column>\n          <vxe-column field="name" title="Name"></vxe-column>\n          <vxe-column field="sex" title="Sex"></vxe-column>\n          <vxe-column field="age" title="Age"></vxe-column>\n          <vxe-column field="address" title="Address" show-overflow></vxe-column>\n        </vxe-table>\n        ',"\n        import { defineComponent, reactive } from 'vue'\n\n        export default defineComponent({\n          setup () {\n            const demo6 = reactive({\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man', age: 35, address: 'test abc' }\n              ]\n            })\n\n            return {\n              demo6\n            }\n          }\n        })\n        "]}}}),ae=n("6b0d"),oe=n.n(ae);const se=oe()(ne,[["render",ee]]);t["default"]=se},e9c4:function(e,t,n){var a=n("23e7"),o=n("da84"),s=n("d066"),d=n("2ba4"),l=n("e330"),r=n("d039"),c=o.Array,i=s("JSON","stringify"),b=l(/./.exec),m=l("".charAt),u=l("".charCodeAt),g=l("".replace),x=l(1..toString),O=/[\uD800-\uDFFF]/g,j=/^[\uD800-\uDBFF]$/,v=/^[\uDC00-\uDFFF]$/,f=function(e,t,n){var a=m(n,t-1),o=m(n,t+1);return b(j,e)&&!b(v,o)||b(v,e)&&!b(j,a)?"\\u"+x(u(e,0),16):e},h=r((function(){return'"\\udf06\\ud834"'!==i("\udf06\ud834")||'"\\udead"'!==i("\udead")}));i&&a({target:"JSON",stat:!0,forced:h},{stringify:function(e,t,n){for(var a=0,o=arguments.length,s=c(o);a<o;a++)s[a]=arguments[a];var l=d(i,null,s);return"string"==typeof l?g(l,O,f):l}})}}]);