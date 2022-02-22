(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2102b7"],{b76b:function(e,l,t){"use strict";t.r(l);var a=function(){var e=this,l=e.$createElement,t=e._self._c||l;return t("div",[t("p",{staticClass:"tip"},[e._v(" 通过 "),t("table-column-api-link",{attrs:{prop:"visible"}}),e._v(" 属性设置默认是否显示，也可以通过函数式调用 "),t("table-api-link",{attrs:{prop:"showColumn"}}),e._v("、"),t("table-api-link",{attrs:{prop:"hideColumn"}}),e._v(" 操作列的显示/隐藏"),t("br"),e._v(" 还可以通过动态修改列的 visible 属性，可以实现远程读取配置后控制是否显示，最后调用 "),t("table-api-link",{attrs:{prop:"refreshColumn"}}),e._v(" 刷新列 ")],1),t("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[t("vxe-button",{on:{click:function(l){e.$refs.xTable1.hideColumn(e.$refs.xTable1.getColumnByField("role"))}}},[e._v("隐藏role")]),t("vxe-button",{on:{click:function(l){e.$refs.xTable1.showColumn(e.$refs.xTable1.getColumnByField("role"))}}},[e._v("显示role")]),t("vxe-button",{on:{click:function(l){e.$refs.xTable1.showColumn(e.$refs.xTable1.getColumnByField("sex"))}}},[e._v("显示sex")]),t("vxe-button",{on:{click:function(l){return e.$refs.xTable1.resetColumn()}}},[e._v("重置")])]},proxy:!0}])}),t("vxe-table",{ref:"xTable1",attrs:{border:"",height:"200",data:e.tableData}},[t("vxe-table-column",{attrs:{field:"name",title:"Name"}}),t("vxe-table-column",{attrs:{field:"role",title:"Role"}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex",visible:!1}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),t("p",{staticClass:"tip"},[e._v("如果是根据服务端数据控制显示/隐藏列，在获取到配置信息后动态更改列的 "),t("table-column-api-link",{attrs:{prop:"visible"}}),e._v(" 属性，然后调用 "),t("table-api-link",{attrs:{prop:"refreshColumn"}}),e._v(" 属性列即可")],1),t("p",[e._l(e.columns2,(function(l,a){return[t("vxe-checkbox",{key:a,on:{change:function(l){return e.$refs.xTable2.refreshColumn()}},model:{value:l.visible,callback:function(t){e.$set(l,"visible",t)},expression:"column.visible"}},[e._v(e._s(l.title))])]}))],2),t("vxe-table",{ref:"xTable2",attrs:{border:"",height:"200",loading:e.loading,data:e.tableData}},[t("vxe-table-column",{attrs:{type:"seq",title:"序号",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name"}}),t("vxe-table-column",{attrs:{field:"role",title:"Role"}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex"}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")]),t("p",{staticClass:"tip"},[e._v("通过 "),t("table-column-api-link",{attrs:{prop:"visible"}}),e._v(" 属性设置默认是否显示，通过 "),t("table-api-link",{attrs:{prop:"resetColumn"}}),e._v(" 函数重置全部列为可视状态")],1),t("p",[e._l(e.columns3,(function(l,a){return[l.title?t("vxe-checkbox",{key:a,model:{value:l.visible,callback:function(t){e.$set(l,"visible",t)},expression:"column.visible"}},[e._v(e._s(l.title))]):e._e()]})),t("vxe-button",{on:{click:function(l){return e.$refs.xTable3.refreshColumn()}}},[e._v("刷新列信息")]),t("vxe-button",{on:{click:function(l){return e.$refs.xTable3.resetColumn()}}},[e._v("重置自定义列")])],2),t("vxe-table",{ref:"xTable3",attrs:{border:"",height:"300",data:e.tableData}},[t("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name",visible:!1}}),t("vxe-table-column",{attrs:{field:"role",title:"Role"}}),t("vxe-table-column",{attrs:{title:"基本信息"}},[t("vxe-table-column",{attrs:{field:"sex",title:"Sex",visible:!1}}),t("vxe-table-column",{attrs:{field:"age",title:"Age"}}),t("vxe-table-column",{attrs:{title:"其他信息"}},[t("vxe-table-column",{attrs:{field:"rate",title:"Rate"}}),t("vxe-table-column",{attrs:{field:"flag",title:"Flag"}})],1)],1)],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[4]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[5]))]),e._v("\n  ")]),t("p",{staticClass:"tip"},[e._v("实现折叠列")]),t("vxe-table",{ref:"xTable4",attrs:{border:"",height:"200",data:e.tableData}},[t("vxe-table-column",{attrs:{type:"checkbox",width:"60"}}),t("vxe-table-column",{attrs:{field:"name",title:"Name",width:"200"},scopedSlots:e._u([{key:"header",fn:function(){return[t("i",{class:e.collapsable1?"fa fa-minus-square":"fa fa-plus-square",on:{click:e.collapsable1Event}}),t("span",[e._v("Name")])]},proxy:!0}])}),t("vxe-table-column",{attrs:{field:"role",title:"Role",visible:!1,width:"200"}}),t("vxe-table-column",{attrs:{field:"sex",title:"Sex",visible:!1,width:"200"}}),t("vxe-table-column",{attrs:{field:"age",title:"Age",width:"200"},scopedSlots:e._u([{key:"header",fn:function(){return[t("i",{class:e.collapsable2?"fa fa-minus-square":"fa fa-plus-square",on:{click:e.collapsable2Event}}),t("span",[e._v("Age")])]},proxy:!0}])}),t("vxe-table-column",{attrs:{field:"rate",title:"Rate",visible:!1,width:"200"}}),t("vxe-table-column",{attrs:{field:"address",title:"Address",visible:!1,width:"200"}})],1),t("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),t("pre",[e._v("    "),t("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[6]))]),e._v("\n    "),t("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[7]))]),e._v("\n  ")])],1)},n=[],s=(t("fb6a"),t("d3b7"),t("159b"),t("caad"),t("a630"),t("3ca3"),t("1487")),o=t.n(s),i={data:function(){return{loading:!1,collapsable1:!1,collapsable2:!1,columns2:[],columns3:[],tableData:[{id:10001,name:"Test1",role:"Develop",sex:"Man",age:28,address:"test abc"},{id:10002,name:"Test2",role:"Test",sex:"Women",age:22,address:"Guangzhou"},{id:10003,name:"Test3",role:"PM",sex:"Man",age:32,address:"Shanghai"},{id:10004,name:"Test4",role:"Designer",sex:"Women ",age:23,address:"test abc"},{id:10005,name:"Test5",role:"Develop",sex:"Women ",age:30,address:"Shanghai"},{id:10006,name:"Test6",role:"Designer",sex:"Women ",age:21,address:"test abc"},{id:10007,name:"Test7",role:"Test",sex:"Man ",age:29,address:"test abc"},{id:10008,name:"Test8",role:"Develop",sex:"Man ",age:35,address:"test abc"}],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="$refs.xTable1.hideColumn($refs.xTable1.getColumnByField(\'role\'))">隐藏role</vxe-button>\n            <vxe-button @click="$refs.xTable1.showColumn($refs.xTable1.getColumnByField(\'role\'))">显示role</vxe-button>\n            <vxe-button @click="$refs.xTable1.showColumn($refs.xTable1.getColumnByField(\'sex\'))">显示sex</vxe-button>\n            <vxe-button @click="$refs.xTable1.resetColumn()">重置</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          ref="xTable1"\n          height="200"\n          :data="tableData">\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="role" title="Role"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" :visible="false"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          }\n        }\n        ",'\n        <p>\n          <template v-for="(column,index) in columns2">\n            <vxe-checkbox v-model="column.visible" :key="index" @change="$refs.xTable2.refreshColumn()">{{ column.title }}</vxe-checkbox>\n          </template>\n        </p>\n\n        <vxe-table\n          border\n          ref="xTable2"\n          height="200"\n          :loading="loading"\n          :data="tableData">\n          <vxe-table-column type="seq" title="序号" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name"></vxe-table-column>\n          <vxe-table-column field="role" title="Role"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex"></vxe-table-column>\n          <vxe-table-column field="age" title="Age"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              columns: [],\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          created () {\n            // 获取所有列配置\n            this.$nextTick(() => {\n              this.columns = this.$refs.xTable2.getColumns()\n            })\n            this.loading = true\n            setTimeout(() => {\n              // 将指定列设置为隐藏状态\n              this.columns.forEach(column => {\n                if (['name'].includes(column.property)) {\n                  column.visible = false\n                }\n              })\n              if (this.$refs.xTable2) {\n                this.$refs.xTable2.refreshColumn()\n              }\n              this.loading = false\n            }, 800)\n          }\n        }\n        ",'\n        <p>\n          <template v-for="(column,index) in columns3">\n            <vxe-checkbox v-if="column.title" v-model="column.visible" :key="index">{{ column.title }}</vxe-checkbox>\n          </template>\n          <vxe-button @click="$refs.xTable3.refreshColumn()">刷新列信息</vxe-button>\n          <vxe-button @click="$refs.xTable3.resetColumn()">重置自定义列</vxe-button>\n        </p>\n\n        <vxe-table\n          border\n          ref="xTable3"\n          height="300"\n          :data="tableData">\n          <vxe-table-column type="checkbox" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" :visible="false"></vxe-table-column>\n          <vxe-table-column field="role" title="Role"></vxe-table-column>\n          <vxe-table-column title="基本信息">\n            <vxe-table-column field="sex" title="Sex" :visible="false"></vxe-table-column>\n            <vxe-table-column field="age" title="Age"></vxe-table-column>\n            <vxe-table-column title="其他信息">\n              <vxe-table-column field="rate" title="Rate"></vxe-table-column>\n              <vxe-table-column field="flag" title="Flag"></vxe-table-column>\n            </vxe-table-column>\n          </vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              columns: [],\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          created () {\n            // 获取所有列配置\n            this.$nextTick(() => {\n              this.columns = this.$refs.xTable3.getColumns()\n            })\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          ref="xTable4"\n          height="200"\n          :data="tableData">\n          <vxe-table-column type="checkbox" width="60"></vxe-table-column>\n          <vxe-table-column field="name" title="Name" width="200">\n            <template v-slot:header>\n              <i :class="collapsable1 ? \'fa fa-minus-square\' : \'fa fa-plus-square\'" @click="collapsable1Event"></i>\n              <span>Name</span>\n            </template>\n          </vxe-table-column>\n          <vxe-table-column field="role" title="Role" :visible="false" width="200"></vxe-table-column>\n          <vxe-table-column field="sex" title="Sex" :visible="false" width="200"></vxe-table-column>\n          <vxe-table-column field="age" title="Age" width="200">\n            <template v-slot:header>\n              <i :class="collapsable2 ? \'fa fa-minus-square\' : \'fa fa-plus-square\'" @click="collapsable2Event"></i>\n              <span>Age</span>\n            </template>\n          </vxe-table-column>\n          <vxe-table-column field="rate" title="Rate" :visible="false" width="200"></vxe-table-column>\n          <vxe-table-column field="address" title="Address" :visible="false" width="200"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              columns: [],\n              tableData: [\n                { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'test abc' },\n                { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },\n                { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },\n                { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'test abc' },\n                { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },\n                { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'test abc' },\n                { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'test abc' },\n                { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'test abc' }\n              ]\n            }\n          },\n          methods: {\n            collapsable1Event () {\n              const fields = ['role', 'sex']\n              this.collapsable1 = !this.collapsable1\n              const xTable4 = this.$refs.xTable4\n              fields.forEach(field => {\n                const column = xTable4.getColumnByField(field)\n                column.visible = this.collapsable1\n              })\n              xTable4.refreshColumn()\n            },\n            collapsable2Event () {\n              const fields = ['rate', 'address']\n              this.collapsable2 = !this.collapsable2\n              const xTable4 = this.$refs.xTable4\n              fields.forEach(field => {\n                const column = xTable4.getColumnByField(field)\n                column.visible = this.collapsable2\n              })\n              xTable4.refreshColumn()\n            }\n          }\n        }\n        "]}},created:function(){var e=this;this.$nextTick((function(){e.columns2=e.$refs.xTable2.getColumns(),e.columns3=e.$refs.xTable3.getColumns()})),this.loading=!0,this.tableData=window.MOCK_DATA_LIST.slice(0,8),setTimeout((function(){e.columns2.forEach((function(e){["name"].includes(e.property)&&(e.visible=!1)})),e.$refs.xTable2&&e.$refs.xTable2.refreshColumn(),e.loading=!1}),800)},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){o.a.highlightBlock(e)}))},methods:{collapsable1Event:function(){var e=this,l=["role","sex"];this.collapsable1=!this.collapsable1;var t=this.$refs.xTable4;l.forEach((function(l){var a=t.getColumnByField(l);a.visible=e.collapsable1})),t.refreshColumn()},collapsable2Event:function(){var e=this,l=["rate","address"];this.collapsable2=!this.collapsable2;var t=this.$refs.xTable4;l.forEach((function(l){var a=t.getColumnByField(l);a.visible=e.collapsable2})),t.refreshColumn()}}},r=i,d=t("2877"),c=Object(d["a"])(r,a,n,!1,null,null,null);l["default"]=c.exports}}]);