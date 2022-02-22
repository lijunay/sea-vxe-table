(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22b935"],{f00e:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"tip"},[e._v(" 树表格的懒加载，通过配置 "),a("table-api-link",{attrs:{prop:"row-id"}}),e._v(" 和 "),a("table-api-link",{attrs:{prop:"tree-config"}}),e._v("={"),a("table-api-link",{attrs:{prop:"lazy"}}),e._v(", "),a("table-api-link",{attrs:{prop:"loadMethod"}}),e._v("} 加载方法来开启树形懒加载"),a("br"),e._v(" 当启用懒加载后，必须通过 "),a("table-api-link",{attrs:{prop:"hasChild"}}),e._v(" 属性来标识是否存在子节点，从而控制该节点是否允许被点击"),a("br"),a("span",{staticClass:"red"},[e._v("（注：懒加载启用后一次只允许异步加载一层根节点）")])],1),a("vxe-toolbar",{scopedSlots:e._u([{key:"buttons",fn:function(){return[a("vxe-button",{on:{click:function(t){return e.$refs.xTree.toggleTreeExpand(e.tableData[1])}}},[e._v("切换第二行展开")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTree.setTreeExpand([e.tableData[1],e.tableData[3]],!0)}}},[e._v("设置第二、四行展开")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTree.setAllTreeExpand(!0)}}},[e._v("展开所有")]),a("vxe-button",{on:{click:function(t){return e.$refs.xTree.clearTreeExpand()}}},[e._v("关闭所有")])]},proxy:!0}])}),a("vxe-table",{ref:"xTree",attrs:{border:"",resizable:"","row-id":"id","tree-config":{lazy:!0,children:"children",hasChild:"hasChild",loadMethod:e.loadChildrenMethod},data:e.tableData}},[a("vxe-table-column",{attrs:{field:"name",title:"Name",width:"400","tree-node":""}}),a("vxe-table-column",{attrs:{field:"size",title:"Size"}}),a("vxe-table-column",{attrs:{field:"type",title:"Type"}}),a("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[0]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[1]))]),e._v("\n  ")]),a("p",{staticClass:"tip"},[e._v("通过设置 "),a("table-api-link",{attrs:{prop:"expandRowKeys"}}),e._v(" 属性默认展开指定节点")],1),a("vxe-table",{attrs:{border:"",resizable:"","row-id":"id","checkbox-config":{labelField:"name"},"tree-config":{lazy:!0,children:"children",hasChild:"hasChild",expandRowKeys:e.defaultExpandRowKeys,loadMethod:e.loadChildrenMethod,iconOpen:"fa fa-minus-square-o",iconClose:"fa fa-plus-square-o"},data:e.tableData2}},[a("vxe-table-column",{attrs:{type:"checkbox",title:"Name",width:"400","tree-node":""}}),a("vxe-table-column",{attrs:{field:"size",title:"Size"}}),a("vxe-table-column",{attrs:{field:"type",title:"Type"}}),a("vxe-table-column",{attrs:{field:"date",title:"Date"}})],1),a("p",{staticClass:"demo-code"},[e._v(e._s(e.$t("app.body.button.showCode")))]),a("pre",[e._v("    "),a("code",{staticClass:"xml"},[e._v(e._s(e.demoCodes[2]))]),e._v("\n    "),a("code",{staticClass:"javascript"},[e._v(e._s(e.demoCodes[3]))]),e._v("\n  ")])],1)},l=[],i=(a("d3b7"),a("159b"),a("a630"),a("3ca3"),a("628a")),o=a.n(i),d=a("1487"),r=a.n(d),s={data:function(){return{tableData:[],tableData2:[],defaultExpandRowKeys:[],demoCodes:['\n        <vxe-toolbar>\n          <template v-slot:buttons>\n            <vxe-button @click="$refs.xTree.toggleTreeExpand(tableData[1])">切换第二行展开</vxe-button>\n            <vxe-button @click="$refs.xTree.setTreeExpand([tableData[1], tableData[3]], true)">设置第二、四行展开</vxe-button>\n            <vxe-button @click="$refs.xTree.setAllTreeExpand(true)">展开所有</vxe-button>\n            <vxe-button @click="$refs.xTree.clearTreeExpand()">关闭所有</vxe-button>\n          </template>\n        </vxe-toolbar>\n\n        <vxe-table\n          border\n          resizable\n          ref="xTree"\n          row-id="id"\n          :tree-config="{lazy: true, children: \'children\', hasChild: \'hasChild\', loadMethod: loadChildrenMethod}"\n          :data="tableData">\n          <vxe-table-column field="name" title="Name" width="400" tree-node></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: []\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              XEAjax.get('/api/file/node/list', { parentId: null }).then(data => {\n                this.tableData = data\n              })\n            },\n            loadChildrenMethod ({ row }) {\n              // 异步加载子节点\n              return XEAjax.get('/api/file/node/list', { parentId: row.id })\n            }\n          }\n        }\n        ",'\n        <vxe-table\n          border\n          resizable\n          row-id="id"\n          :checkbox-config="{labelField: \'name\'}"\n          :tree-config="{lazy: true, children: \'children\', hasChild: \'hasChild\', expandRowKeys: defaultExpandRowKeys, loadMethod: loadChildrenMethod, iconOpen: \'fa fa-minus-square-o\', iconClose: \'fa fa-plus-square-o\'}"\n          :data="tableData">\n          <vxe-table-column type="checkbox" title="Name" width="400" tree-node></vxe-table-column>\n          <vxe-table-column field="size" title="Size"></vxe-table-column>\n          <vxe-table-column field="type" title="Type"></vxe-table-column>\n          <vxe-table-column field="date" title="Date"></vxe-table-column>\n        </vxe-table>\n        ',"\n        export default {\n          data () {\n            return {\n              tableData: [],\n              defaultExpandRowKeys: []\n            }\n          },\n          created () {\n            this.findList()\n          },\n          methods: {\n            findList () {\n              XEAjax.get('/api/file/node/list', { parentId: null }).then(data => {\n                // 默认展开的节点必须在数据初始化之前赋值且只会执行一次\n                this.defaultExpandRowKeys = ['10000', '40000']\n                this.tableData = data\n              })\n            },\n            loadChildrenMethod ({ row }) {\n              // 异步加载子节点\n              return XEAjax.get('/api/file/node/list', { parentId: row.id })\n            }\n          }\n        }\n        "]}},created:function(){this.findList(),this.findList2()},mounted:function(){Array.from(this.$el.querySelectorAll("pre code")).forEach((function(e){r.a.highlightBlock(e)}))},methods:{findList:function(){var e=this;o.a.get("/api/file/node/list",{parentId:null}).then((function(t){e.tableData=t}))},findList2:function(){var e=this;o.a.get("/api/file/node/list",{parentId:null}).then((function(t){e.defaultExpandRowKeys=["10000","40000"],e.tableData2=t}))},loadChildrenMethod:function(e){var t=e.row;return o.a.get("/api/file/node/list",{parentId:t.id})}}},c=s,u=a("2877"),b=Object(u["a"])(c,n,l,!1,null,null,null);t["default"]=b.exports}}]);