(this.webpackJsonpjira=this.webpackJsonpjira||[]).push([[5],{404:function(e,t,n){"use strict";n.r(t);var r=n(94),c=n(24),a=n(0),i=n.n(a),o=n(31),u=n(42),d=n(380),s=n(381),j=n(158),l=n(408),b=function(e){var t=Object(j.b)();return Object(l.a)(["users",e],(function(){return t("users",{data:e})}))},O=n(159),f=n(108),p=function(e){var t=e.value,n=e.onChange,r=e.defaultOptionName,a=e.options,i=Object(O.a)(e,["value","onChange","defaultOptionName","options"]);return Object(c.jsxs)(f.a,Object(u.a)(Object(u.a)({value:(null===a||void 0===a?void 0:a.length)?v(t):0,onChange:function(e){return null===n||void 0===n?void 0:n(v(e)||void 0)}},i),{},{children:[r?Object(c.jsx)(f.a.Option,{value:0,children:r}):null,null===a||void 0===a?void 0:a.map((function(e){return Object(c.jsx)(f.a.Option,{value:e.id,children:e.name},e.id)}))]}))},v=function(e){return isNaN(Number(e))?0:Number(e)},x=function(e){var t=b().data;return Object(c.jsx)(p,Object(u.a)({options:t||[]},e))},h=function(e){e.users;var t=e.param,n=e.setParam;return Object(c.jsxs)(d.a,{style:{marginBottom:"2rem"},layout:"inline",children:[Object(c.jsx)(d.a.Item,{children:Object(c.jsx)(s.a,{placeholder:"\u9879\u76ee\u540d",type:"text",value:t.name,onChange:function(e){return n(Object(u.a)(Object(u.a)({},t),{},{name:e.target.value}))}})}),Object(c.jsx)(d.a.Item,{children:Object(c.jsx)(x,{defaultOptionName:"\u8d1f\u8d23\u4eba",value:t.personId,onChange:function(e){return n(Object(u.a)(Object(u.a)({},t),{},{personId:e}))}})})]})},m=n(403),g=n(405),C=n(390),L=n(389),k=n(386),y=n.n(k),I=n(160),w=n(410),E=n(120),M=n(18),T=n.n(M),P=n(46),F=n(221),N=function(e){var t=e.fromId,n=e.type,r=e.referenceId,c=e.list,a=Object(E.a)(c),i=a.findIndex((function(e){return e.id===t}));if(!r)return S(Object(E.a)(a),i,a.length-1);var o=a.findIndex((function(e){return e.id===r}));return("after"===n?S:Z)(Object(E.a)(a),i,o)},Z=function(e,t,n){var r=e[n],c=e.splice(t,1)[0],a=e.indexOf(r);return e.splice(a,0,c),e},S=function(e,t,n){var r=e[n],c=e.splice(t,1)[0],a=e.indexOf(r);return e.splice(a+1,0,c),e},D=function(e,t){var n=Object(F.b)();return{onSuccess:function(){return n.invalidateQueries(e)},onMutate:function(r){return Object(P.a)(T.a.mark((function c(){var a;return T.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a=n.getQueryData(e),n.setQueryData(e,(function(e){return t(r,e)})),c.abrupt("return",{previousItems:a});case 3:case"end":return c.stop()}}),c)})))()},onError:function(t,r,c){n.setQueryData(e,c.previousItems)}}},R=function(e){return D(e,(function(e,t){return(null===t||void 0===t?void 0:t.filter((function(t){return t.id!==e.id})))||[]}))},z=function(e){return D(e,(function(e,t){return(null===t||void 0===t?void 0:t.map((function(t){return t.id===e.id?Object(u.a)(Object(u.a)({},t),e):t})))||[]}))},Y=function(e){return D(e,(function(e,t){return t?[].concat(Object(E.a)(t),[e]):[]}))},A=function(e){var t=Object(j.b)();return Object(l.a)(["projects",e],(function(){return t("projects",{data:e})}))},B=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("projects/".concat(e.id),{method:"PATCH",data:e})}),z(e))},V=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("projects",{data:e,method:"POST"})}),Y(e))},q=function(e){var t=Object(j.b)();return Object(l.a)(["project",{id:e}],(function(){return t("projects/".concat(e))}),{enabled:Boolean(e)})},K=n(406),H=function(e){var t=e.checked,n=e.onCheckedChange,r=Object(O.a)(e,["checked","onCheckedChange"]);return Object(c.jsx)(K.a,Object(u.a)({count:1,value:t?1:0,onChange:function(e){return null===n||void 0===n?void 0:n(!!e)}},r))},Q=n(93),W=n(109),G=function(e){var t=Object(I.c)(),n=Object(o.a)(t,1)[0],r=J(),c=Object(a.useState)(e),i=Object(o.a)(c,1)[0];return[Object(a.useMemo)((function(){return Object(W.c)(Object.fromEntries(n),e)}),[n,i]),function(e){return r(e)}]},J=function(){var e=Object(I.c)(),t=Object(o.a)(e,2),n=t[0],r=t[1];return function(e){var t=Object(W.a)(Object(u.a)(Object(u.a)({},Object.fromEntries(n)),e));return r(t)}},U=function(){var e=G(["name","personId"]),t=Object(o.a)(e,2),n=t[0],r=t[1];return[Object(a.useMemo)((function(){return Object(u.a)(Object(u.a)({},n),{},{personId:Number(n.personId)||void 0})}),[n]),r]},X=function(){var e=U();return["projects",Object(o.a)(e,1)[0]]},$=function(){var e=G(["projectCreate"]),t=Object(o.a)(e,2),n=t[0].projectCreate,r=t[1],c=G(["editingProjectId"]),a=Object(o.a)(c,2),i=a[0].editingProjectId,u=a[1],d=J(),s=q(Number(i)),j=s.data,l=s.isLoading;return{projectModalOpen:"true"===n||Boolean(i),open:function(){return r({projectCreate:!0})},close:function(){return d({projectCreate:"",editingProjectId:""})},startEdit:function(e){return u({editingProjectId:e})},editingProject:j,isLoading:l}},_=function(e){var t=e.users,n=Object(O.a)(e,["users"]),r=B(X()).mutate;return Object(c.jsx)(m.a,Object(u.a)({rowKey:"id",pagination:!1,columns:[{title:Object(c.jsx)(H,{checked:!0,disabled:!0}),render:function(e,t){return Object(c.jsx)(H,{checked:t.pin,onCheckedChange:(n=t.id,function(e){return r({id:n,pin:e})})});var n}},{title:"\u540d\u79f0",sorter:function(e,t){return e.name.localeCompare(t.name)},render:function(e,t){return Object(c.jsx)(I.b,{to:String(t.id),children:t.name})}},{title:"\u90e8\u95e8",dataIndex:"organization"},{title:"\u8d1f\u8d23\u4eba",render:function(e,n){var r;return Object(c.jsx)("span",{children:(null===(r=t.find((function(e){return e.id===n.personId})))||void 0===r?void 0:r.name)||"\u672a\u77e5"})}},{title:"\u521b\u5efa\u65f6\u95f4",render:function(e,t){return Object(c.jsx)("span",{children:t.created?y()(t.created).format("YYYY-MM-DD"):"\u65e0"})}},{render:function(e,t){return Object(c.jsx)(ee,{project:t})}}]},n))},ee=function(e){var t,n=e.project,r=$().startEdit,a=function(e){var t=Object(j.b)();return Object(w.a)((function(e){var n=e.id;return t("projects".concat(n),{method:"DELETE"})}),R(e))}(X()).mutate;return Object(c.jsx)(C.a,{overlay:Object(c.jsxs)(L.a,{children:[Object(c.jsx)(L.a.Item,{onClick:(t=n.id,function(){return r(t)}),children:"\u7f16\u8f91"},"edit"),Object(c.jsx)(L.a.Item,{onClick:function(){return function(e){g.a.confirm({title:"\u786e\u5b9a\u5220\u9664\u5417\uff1f",content:"\u70b9\u51fb\u786e\u5b9a\u5220\u9664",onOk:function(){a({id:e})}})}(n.id)},children:"\u5220\u9664"},"delete")]}),children:Object(c.jsx)(Q.a,{type:"link",children:"..."})})},te=function(){Object(W.e)("\u9879\u76ee\u5217\u8868",!1);var e=U(),t=Object(o.a)(e,2),n=t[0],r=t[1],a=$().open,i=A(Object(W.d)(n,200)),u=i.isLoading,d=i.error,s=i.data,j=b().data;return G([""]),Object(c.jsxs)(Q.f,{children:[Object(c.jsxs)(Q.e,{between:!0,children:[Object(c.jsx)("h1",{children:"\u9879\u76ee\u5217\u8868"}),Object(c.jsx)(Q.a,{onClick:a,type:"link",children:"\u521b\u5efa\u9879\u76ee"})]}),Object(c.jsx)(h,{users:j||[],param:n,setParam:r}),Object(c.jsx)(Q.b,{error:d}),Object(c.jsx)(_,{loading:u,users:j||[],dataSource:s||[]})]})},ne=n(20),re=function(e){var t=Object(j.b)();return Object(l.a)(["kanbans",e],(function(){return t("kanbans",{data:e})}))},ce=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("kanbans/reorder",{data:e,method:"POST"})}),function(e){return D(e,(function(e,t){return N(Object(u.a)({list:t},e))}))}(e))},ae=function(e){var t=Object(j.b)();return Object(l.a)(["tasks",e],(function(){return t("tasks",{data:e})}))},ie=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("tasks/reorder",{data:e,method:"POST"})}),function(e){return D(e,(function(e,t){return N(Object(u.a)({list:t},e)).map((function(t){return t.id===e.fromId?Object(u.a)(Object(u.a)({},t),{},{kanbanId:e.toKanbanId}):t}))}))}(e))},oe=function(){var e,t=null===(e=Object(ne.g)().pathname.match(/projects\/(d+)/))||void 0===e?void 0:e[1];return Number(t)},ue=function(){return q(oe())},de=function(){return{projectId:oe()}},se=function(){return["kanbans",de()]},je=function(){var e=G(["name","typeId","processorId","tagId"]),t=Object(o.a)(e,2),n=t[0],r=(t[1],oe()),c=Object(W.d)(n.name,200);return Object(a.useMemo)((function(){return{projectId:r,typeId:Number(n.typeId)||void 0,processorId:Number(n.processorId)||void 0,tagId:Number(n.tagId)||void 0,name:c}}),[r,c])},le=function(){return["tasks",je()]},be=function(){var e=G(["editingTaskId"]),t=Object(o.a)(e,2),n=t[0].editingTaskId,r=t[1],c=function(e){var t=Object(j.b)();return Object(l.a)(["project",{id:e}],(function(){return t("projects/".concat(e))}),{enabled:Boolean(e)})}(Number(n)),i=c.data,u=c.isLoading;return{editingTaskId:n,editingTask:i,startEdit:Object(a.useCallback)((function(e){r({editingTaskId:e})}),[r]),close:Object(a.useCallback)((function(){r({editingTaskId:""})}),[r]),isLoading:u}},Oe=function(){var e=Object(j.b)();return Object(l.a)(["taskType"],(function(){return e("taskTypes")}))},fe=n.p+"static/media/task.1da9b0fd.svg",pe=n.p+"static/media/bug.61d2d6fe.svg",ve=n(95),xe=n(399),he=n(142),me=function(e){var t=e.kanbanId,n=Object(a.useState)(""),r=Object(o.a)(n,2),i=r[0],u=r[1],d=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("tasks",{data:e,method:"POST"})}),Y(e))}(le()).mutateAsync,l=oe(),b=Object(a.useState)(!1),O=Object(o.a)(b,2),f=O[0],p=O[1],v=function(){var e=Object(P.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d({projectId:l,name:i,kanbanId:t});case 2:p(!1),u("");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=function(){return p((function(e){return!e}))};return Object(a.useEffect)((function(){f||u("")}),[f]),f?Object(c.jsx)(xe.a,{children:Object(c.jsx)(s.a,{onBlur:x,placeholder:"\u9700\u8981\u505a\u4e9b\u4ec0\u4e48",autoFocus:!0,onPressEnter:v,value:i,onChange:function(e){return u(e.target.value)}})}):Object(c.jsx)("div",{onClick:x,children:"+\u521b\u5efa\u4e8b\u52a1"})},ge=function(e){var t=e.name,n=e.keyword;if(!n)return Object(c.jsx)(c.Fragment,{children:t});var r=t.split(n);return Object(c.jsx)(c.Fragment,{children:r.map((function(e,t){return Object(c.jsxs)("span",{children:[e,t===r.length-1?null:Object(c.jsx)("span",{style:{color:"#257AFD"},children:n})]},t)}))})},Ce=n(388),Le=function(e){var t=e.children,n=Object(O.a)(e,["children"]);return Object(c.jsx)(Ce.c,Object(u.a)(Object(u.a)({},n),{},{children:function(e){return i.a.isValidElement(t)?i.a.cloneElement(t,Object(u.a)(Object(u.a)({},e.droppableProps),{},{ref:e.innerRef,provided:e})):Object(c.jsx)("div",{})}}))},ke=i.a.forwardRef((function(e,t){var n,r=e.children,a=Object(O.a)(e,["children"]);return Object(c.jsxs)("div",Object(u.a)(Object(u.a)({ref:t},a),{},{children:[r,null===(n=a.provided)||void 0===n?void 0:n.placeholder]}))})),ye=function(e){var t=e.children,n=Object(O.a)(e,["children"]);return Object(c.jsx)(Ce.b,Object(u.a)(Object(u.a)({},n),{},{children:function(e){return i.a.isValidElement(t)?i.a.cloneElement(t,Object(u.a)(Object(u.a)(Object(u.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef})):Object(c.jsx)("div",{})}}))};function Ie(){var e=Object(r.a)(["\n  overflow: scroll;\n  flex: 1;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n"]);return Ie=function(){return e},e}function we(){var e=Object(r.a)(["\n  min-width: 27rem;\n  border-radius: 6px;\n  background-color: rgb(244,245,247);\n  display: flex;\n  flex-direction: column;\n  padding: 0.7rem 0.7rem 0.7rem;\n  margin-right: 1.5rem;\n  "]);return we=function(){return e},e}var Ee=function(e){var t,n=e.id,r=Oe().data,a=null===r||void 0===r||null===(t=r.find((function(e){return e.id===n})))||void 0===t?void 0:t.name;return a?Object(c.jsx)("img",{alt:"task-icon",src:"task"===a?fe:pe}):null},Me=function(e){var t=e.task,n=be().startEdit,r=je().name;return Object(c.jsxs)(xe.a,{onClick:function(){return n(t.id)},style:{marginBottom:"0.5rem",cursor:"pointer"},children:[Object(c.jsx)("p",{children:Object(c.jsx)(ge,{keyword:r,name:t.name})}),Object(c.jsx)(Ee,{id:t.typeId})]},t.id)},Te=i.a.forwardRef((function(e,t){var n=e.kanban,r=Object(O.a)(e,["kanban"]),a=ae(je()).data,i=null===a||void 0===a?void 0:a.filter((function(e){return e.kanbanId===n.id}));return Object(c.jsxs)(Fe,Object(u.a)(Object(u.a)({},r),{},{ref:t,children:[Object(c.jsxs)(Q.e,{between:!0,children:[Object(c.jsx)("h3",{children:n.name}),Object(c.jsx)(Pe,{kanban:n},n.id)]}),Object(c.jsxs)(Ne,{children:[Object(c.jsx)(Le,{type:"ROW",direction:"vertical",droppableId:String(n.id),children:Object(c.jsx)(ke,{children:null===i||void 0===i?void 0:i.map((function(e,t){return Object(c.jsx)(ye,{index:t,draggableId:"task"+e.id,children:Object(c.jsx)("div",{children:Object(c.jsx)(Me,{task:e},e.id)})},e.id)}))})}),Object(c.jsx)(me,{kanbanId:n.id})]})]}))})),Pe=function(e){var t=e.kanban,n=function(e){var t=Object(j.b)();return Object(w.a)((function(e){var n=e.id;return t("kanbans/".concat(n),{method:"DELETE"})}),R(e))}(se()).mutateAsync,r=Object(c.jsx)(L.a,{children:Object(c.jsx)(L.a.Item,{children:Object(c.jsx)(he.a,{type:"link",onClick:function(){g.a.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u5220\u9664\u770b\u677f\u5417",onOk:function(){return n({id:t.id})}})},children:"\u5220\u9664"})})});return Object(c.jsx)(C.a,{overlay:r,children:Object(c.jsx)(he.a,{type:"link",children:"..."})})},Fe=ve.a.div(we()),Ne=ve.a.div(Ie()),Ze=function(e){var t=Oe().data;return Object(c.jsx)(p,Object(u.a)({options:t||[]},e))},Se=function(){var e=je(),t=J();return Object(c.jsxs)(Q.e,{marginBottom:4,gap:!0,children:[Object(c.jsx)(s.a,{style:{width:"20rem"},placeholder:"\u4eba\u7269\u540d",value:t.name,onChange:function(e){return t({name:e.target.value})}}),Object(c.jsx)(x,{defaultOptionName:"\u7ecf\u529e\u4eba",value:e.processorId,onChange:function(e){return t({processorId:e})}}),Object(c.jsx)(Ze,{defaultOptionName:"\u7c7b\u578b",value:e.typeId,onChange:function(e){return t({typeId:e})}}),Object(c.jsx)(he.a,{onClick:function(){t({typeId:void 0,processorId:void 0,tagId:void 0,name:void 0})},children:"Clear filter"})]})},De=n(155),Re=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=oe(),u=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("kanbans",{data:e,method:"POST"})}),Y(e))}(se()).mutateAsync,d=function(){var e=Object(P.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({name:n,projectId:i});case 2:r("");case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsx)(Fe,{children:Object(c.jsx)(s.a,{size:"large",placeholder:"\u65b0\u5efa\u770b\u677f\u540d\u79f0",onPressEnter:d,value:n,onChange:function(e){return r(e.target.value)}})})},ze={labelCol:{span:8},wrapper:{span:16}},Ye=function(){var e=d.a.useForm(),t=Object(o.a)(e,1)[0],n=be(),r=n.editingTaskId,i=n.editingTask,l=n.close,b=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("tasks/".concat(e.id),{method:"PATCH",data:e})}),z(e))}(le()),O=b.mutateAsync,f=b.isLoading,p=function(e){var t=Object(j.b)();return Object(w.a)((function(e){var n=e.id;return t("tasks/".concat(n),{method:"DELETE"})}),R(e))}(le()).mutate,v=function(){var e=Object(P.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(Object(u.a)(Object(u.a)({},i),t.getFieldsValue()));case 2:l();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){t.setFieldsValue(i)}),[t,i]),Object(c.jsxs)(g.a,{forceRender:!0,onCancel:function(){l(),t.resetFields()},onOk:v,okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",confirmLoading:f,title:"\u7f16\u8f91\u4efb\u52a1",visible:!!r,children:[Object(c.jsxs)(d.a,Object(u.a)(Object(u.a)({},ze),{},{initialValues:i,form:t,children:[Object(c.jsx)(d.a.Item,{label:"\u4efb\u52a1\u540d",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u540d"}],children:Object(c.jsx)(s.a,{})}),Object(c.jsx)(d.a.Item,{label:"\u7ecf\u529e\u4eba",name:"processorId",children:Object(c.jsx)(x,{defaultOptionName:"\u7ecf\u529e\u4eba"})}),Object(c.jsx)(d.a.Item,{label:"\u7c7b\u578b",name:"typeId",children:Object(c.jsx)(Ze,{})})]})),Object(c.jsx)("div",{style:{textAlign:"right"},children:Object(c.jsx)(he.a,{onClick:function(){l(),g.a.confirm({okText:"\u786e\u5b9a",cancelText:"\u53d6\u6d88",title:"\u786e\u5b9a\u5220\u9664\u4efb\u52a1\u5417",onOk:function(){return p({id:Number(r)})}})},style:{fontSize:"14px"},size:"small",children:"\u5220\u9664"})})]})};function Ae(){var e=Object(r.a)(["\n  display: flex;\n  overflow-x: scroll;\n"]);return Ae=function(){return e},e}var Be=function(){Object(W.e)("\u770b\u677f\u5217\u8868");var e=ue().data,t=re(de()),n=t.data,r=void 0===n?[]:n,a=t.isLoading,i=ae(je()).isLoading||a,o=Ve();return Object(c.jsx)(Ce.a,{onDragEnd:o,children:Object(c.jsxs)(Q.f,{children:[Object(c.jsxs)("h1",{children:[null===e||void 0===e?void 0:e.name,"\u770b\u677f"]}),Object(c.jsx)(Se,{}),i?Object(c.jsx)(De.a,{size:"large"}):Object(c.jsxs)(qe,{children:[Object(c.jsx)(Le,{type:"COLUMN",direction:"horizontal",droppableId:"kanban",children:Object(c.jsx)(ke,{style:{display:"flex"},children:null===r||void 0===r?void 0:r.map((function(e,t){return Object(c.jsx)(ye,{draggableId:"kanban"+e.id,index:t,children:Object(c.jsx)(Te,{kanban:e},e.id)},e.id)}))})}),Object(c.jsx)(Re,{})]}),Object(c.jsx)(Ye,{})]})})},Ve=function(){var e=re(de()).data,t=ce(se()).mutate,n=ie(le()).mutate,r=ae(je()).data,c=void 0===r?[]:r;return Object(a.useCallback)((function(r){var a=r.source,i=r.destination,o=r.type;if(i){if("COLUMN"===o){var u=null===e||void 0===e?void 0:e[a.index].id,d=null===e||void 0===e?void 0:e[i.index].id;if(!u||!d||u===d)return;var s=i.index>a.index?"after":"before";t({fromId:u,referenceId:d,type:s})}if("ROW"===o){var j=+a.droppableId,l=+i.droppableId;if(j===l)return;var b=c.filter((function(e){return e.kanbanId===j}))[a.index],O=c.filter((function(e){return e.kanbanId===l}))[i.index];if((null===b||void 0===b?void 0:b.id)===(null===O||void 0===O?void 0:O.id))return;n({fromId:null===b||void 0===b?void 0:b.id,referenceId:null===O||void 0===O?void 0:O.id,fromKanbanId:j,toKanbanId:l,type:j===l&&i.index>a.index?"after":"before"})}}}),[e,t,c,n])},qe=ve.a.div(Ae()),Ke=n(384),He=function(){return{projectId:oe()}},Qe=function(){return["epics",He()]},We=n(382);function Ge(){var e=Object(r.a)(["\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return Ge=function(){return e},e}var Je=function(e){var t=function(e){var t=Object(j.b)();return Object(w.a)((function(e){return t("epics",{data:e,method:"POST"})}),Y(e))}(Qe()),n=t.mutate,r=t.isLoading,i=t.error,l=d.a.useForm(),b=Object(o.a)(l,1)[0],O=oe(),f=function(){var t=Object(P.a)(T.a.mark((function t(r){return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n(Object(u.a)(Object(u.a)({},r),{},{projectId:O}));case 2:e.onClose();case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){b.resetFields()}),[b,e.visible]),Object(c.jsx)(We.a,{visible:e.visible,onClose:e.onClose,forceRender:!0,destroyOnClose:!0,width:"100%",children:Object(c.jsx)(Ue,{children:r?Object(c.jsx)(De.a,{size:"large"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:"\u521b\u5efa\u4efb\u52a1\u7ec4"}),Object(c.jsx)(Q.b,{error:i}),Object(c.jsxs)(d.a,{form:b,layout:"vertical",style:{width:"40rem"},onFinish:f,children:[Object(c.jsx)(d.a.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4efb\u52a1\u7ec4\u540d"}],children:Object(c.jsx)(s.a,{placeholder:"\u8bf7\u8f93\u5165\u4efb\u52a1\u7ec4\u540d\u79f0"})}),Object(c.jsx)(d.a.Item,{style:{textAlign:"right"},children:Object(c.jsx)(he.a,{loading:r,type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]})]})})})},Ue=ve.a.div(Ge()),Xe=function(){var e=ue().data,t=function(e){var t=Object(j.b)();return Object(l.a)(["epics",e],(function(){return t("epics",{data:e})}))}(He()).data,n=ae({projectId:null===e||void 0===e?void 0:e.id}).data,r=function(e){var t=Object(j.b)();return Object(w.a)((function(e){var n=e.id;return t("epics/".concat(n),{method:"DELETE"})}),R(e))}(Qe()).mutate,i=Object(a.useState)(!1),u=Object(o.a)(i,2),d=u[0],s=u[1];return Object(c.jsxs)(Q.f,{children:[Object(c.jsxs)(Q.e,{between:!0,children:[Object(c.jsxs)("h1",{children:[null===e||void 0===e?void 0:e.name,"\u4efb\u52a1\u7ec4"]}),Object(c.jsx)(he.a,{onClick:function(){return s(!0)},type:"link",children:"\u521b\u5efa\u4efb\u52a1\u7ec4"})]}),Object(c.jsx)(Ke.b,{style:{overflow:"scroll"},dataSource:t,itemLayout:"vertical",renderItem:function(t){return Object(c.jsxs)(Ke.b.Item,{children:[Object(c.jsx)(Ke.b.Item.Meta,{title:Object(c.jsxs)(Q.e,{between:!0,children:[Object(c.jsx)("span",{children:t.name}),Object(c.jsx)(he.a,{onClick:function(){return function(e){g.a.confirm({title:"\u786e\u5b9a\u5220\u9664\u9879\u76ee\u7ec4\uff1a".concat(e.name),content:"\u70b9\u51fb\u786e\u5b9a\u5220\u9664",okText:"\u786e\u5b9a",onOk:function(){r({id:e.id})}})}(t)},type:"link",children:"\u5220\u9664"})]}),description:Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{children:["\u5f00\u59cb\u65f6\u95f4\uff1a",y()(t.start).format("YYYY-MM-DD")]}),Object(c.jsxs)("div",{children:["\u7ed3\u675f\u65f6\u95f4\uff1a",y()(t.end).format("YYYY-MM-DD")]})]})}),Object(c.jsx)("div",{children:null===n||void 0===n?void 0:n.filter((function(e){return e.epicId===t.id})).map((function(t){return Object(c.jsx)(I.b,{to:"/projects/".concat(null===e||void 0===e?void 0:e.id,"/kanban?editingTaskId=").concat(t.id),children:t.name},t.id)}))})]})}}),Object(c.jsx)(Je,{onClose:function(){return s(!1)},visible:d})]})};function $e(){var e=Object(r.a)(["\n    display: grid;\n    grid-template-columns: 16rem 1fr;\n  overflow: hidden;\n  "]);return $e=function(){return e},e}function _e(){var e=Object(r.a)(["\n    box-shadow: -5px 0 5px -5px rgba(0,0,0,0.1);\n    display: flex;\n    "]);return _e=function(){return e},e}function et(){var e=Object(r.a)(["\n    background-color: rgb(244,245,247);\n    display: flex;\n    "]);return et=function(){return e},e}var tt=function(){var e=function(){var e=Object(ne.g)().pathname.split("./");return e[e.length-1]}();return Object(c.jsxs)(ct,{children:[Object(c.jsx)(nt,{children:Object(c.jsxs)(L.a,{mode:"inline",selectedKeys:[e],children:[Object(c.jsx)(L.a.Item,{children:Object(c.jsx)(I.b,{to:"kanban",children:"\u770b\u677f"})},"kanban"),Object(c.jsx)(L.a.Item,{children:Object(c.jsx)(I.b,{to:"epic",children:"\u4efb\u52a1\u7ec4"})},"epic")]})}),Object(c.jsx)(rt,{children:Object(c.jsxs)(ne.d,{children:[Object(c.jsx)(ne.b,{path:"/kanban",element:Object(c.jsx)(Be,{})}),Object(c.jsx)(ne.b,{path:"/epic",element:Object(c.jsx)(Xe,{})}),Object(c.jsx)(ne.a,{to:window.location.pathname+"/kanban",replace:!0})]})})]})},nt=ve.a.aside(et()),rt=ve.a.div(_e()),ct=ve.a.div($e()),at=n(74);function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ot(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var ut=a.createElement("defs",null,a.createElement("linearGradient",{x1:"97.6553341%",y1:"35.6591143%",x2:"37.202032%",y2:"75.4891864%",id:"uid392-1"},a.createElement("stop",{stopColor:"#0052CC",offset:"7%"}),a.createElement("stop",{stopColor:"#2684FF",offset:"100%"})),a.createElement("linearGradient",{x1:"8.43371138%",y1:"60.1495759%",x2:"64.1161517%",y2:"23.5790285%",id:"uid392-2"},a.createElement("stop",{stopColor:"#0052CC",offset:"0%"}),a.createElement("stop",{stopColor:"#2684FF",offset:"100%"}))),dt=a.createElement("g",{stroke:"none",strokeWidth:1,fillRule:"nonzero"},a.createElement("path",{d:"M11.3881081,27.9242105 C12.4881804,26.8071817 13.1062496,25.2917664 13.1062496,23.7115789 C13.1062496,22.1313915 12.4881804,20.6159762 11.3881081,19.4989474 L11.3881081,19.4989474 L3.74837838,11.7621053 L0.273513514,15.2926316 C-0.0900771727,15.6625064 -0.0900771727,16.2617042 0.273513514,16.6315789 L11.3881081,27.9242105 L11.3881081,27.9242105 Z",fill:"currentColor",fillRule:"nonzero"}),a.createElement("path",{d:"M22.5027027,15.2926316 L11.3881081,4 L11.3881081,4 L11.3539189,4.03473684 L11.3539189,4.03473684 C9.08852466,6.36456187 9.09963243,10.1156459 11.3787838,12.4315789 L19.0247297,20.1652632 L22.5027027,16.6315789 C22.8662934,16.2617042 22.8662934,15.6625064 22.5027027,15.2926316 Z",fill:"currentColor",fillRule:"nonzero"}),a.createElement("path",{d:"M11.3881081,12.4252632 C9.10895676,10.1093301 9.09784899,6.35824608 11.3632432,4.02842105 L3.43445946,12.0810526 L7.58067568,16.2936842 L11.3881081,12.4252632 Z",fill:"url(#uid392-1)",fillRule:"nonzero"}),a.createElement("path",{d:"M15.1893243,15.6368421 L11.3881081,19.4989474 C12.4881804,20.6159762 13.1062496,22.1313915 13.1062496,23.7115789 C13.1062496,25.2917664 12.4881804,26.8071817 11.3881081,27.9242105 L19.3355405,19.8494737 L15.1893243,15.6368421 Z",fill:"url(#uid392-2)",fillRule:"nonzero"}),a.createElement("path",{d:"M36.07,18.956 C36.07,20.646 35.394,21.842 33.418,21.842 C32.56,21.842 31.702,21.686 31,21.4 L31,23.662 C31.65,23.896 32.586,24.104 33.808,24.104 C37.032,24.104 38.41,21.946 38.41,18.8 L38.41,6.918 L36.07,6.918 L36.07,18.956 Z M41.894,7.568 C41.894,8.556 42.544,9.128 43.454,9.128 C44.364,9.128 45.014,8.556 45.014,7.568 C45.014,6.58 44.364,6.008 43.454,6.008 C42.544,6.008 41.894,6.58 41.894,7.568 Z M42.31,24 L44.546,24 L44.546,11 L42.31,11 L42.31,24 Z M47.926,24 L50.11,24 L50.11,16.33 C50.11,13.574 51.852,12.716 54.712,13.002 L54.712,10.818 C52.164,10.662 50.864,11.754 50.11,13.288 L50.11,11 L47.926,11 L47.926,24 Z M65.45,24 L65.45,21.66 C64.618,23.376 63.058,24.26 61.056,24.26 C57.598,24.26 55.856,21.322 55.856,17.5 C55.856,13.834 57.676,10.74 61.316,10.74 C63.214,10.74 64.67,11.598 65.45,13.288 L65.45,11 L67.686,11 L67.686,24 L65.45,24 Z M58.092,17.5 C58.092,20.62 59.34,22.18 61.654,22.18 C63.656,22.18 65.45,20.906 65.45,18.02 L65.45,16.98 C65.45,14.094 63.812,12.82 61.914,12.82 C59.392,12.82 58.092,14.484 58.092,17.5 Z M86.926,19.294 C86.926,16.226 84.898,15.056 81.284,14.146 C78.268,13.392 77.176,12.69 77.176,11.286 C77.176,9.726 78.502,8.946 80.738,8.946 C82.506,8.946 84.352,9.258 86.068,10.246 L86.068,7.906 C84.898,7.256 83.312,6.658 80.842,6.658 C76.864,6.658 74.836,8.634 74.836,11.286 C74.836,14.094 76.552,15.42 80.4,16.356 C83.65,17.136 84.586,17.942 84.586,19.45 C84.586,20.958 83.624,21.972 81.05,21.972 C78.788,21.972 76.344,21.374 74.758,20.542 L74.758,22.934 C76.084,23.61 77.618,24.26 80.92,24.26 C85.158,24.26 86.926,22.258 86.926,19.294 Z M95.09,24.26 C91.19,24.26 88.902,21.374 88.902,17.474 C88.902,13.574 91.19,10.74 95.09,10.74 C98.964,10.74 101.226,13.574 101.226,17.474 C101.226,21.374 98.964,24.26 95.09,24.26 Z M95.09,12.82 C92.308,12.82 91.086,15.004 91.086,17.474 C91.086,19.944 92.308,22.18 95.09,22.18 C97.846,22.18 99.042,19.944 99.042,17.474 C99.042,15.004 97.846,12.82 95.09,12.82 Z M106.92,9.622 C106.92,8.452 107.596,7.646 108.974,7.646 C109.494,7.646 109.988,7.698 110.378,7.776 L110.378,5.722 C109.988,5.618 109.546,5.514 108.87,5.514 C106.088,5.514 104.736,7.152 104.736,9.57 L104.736,11 L102.63,11 L102.63,13.08 L104.736,13.08 L104.736,24 L106.92,24 L106.92,13.08 L110.274,13.08 L110.274,11 L106.92,11 L106.92,9.622 Z M115.786,19.892 L115.786,13.08 L119.244,13.08 L119.244,11 L115.786,11 L115.786,8.244 L113.602,8.244 L113.602,11 L111.496,11 L111.496,13.08 L113.602,13.08 L113.602,19.944 C113.602,22.362 114.954,24 117.736,24 C118.412,24 118.854,23.896 119.244,23.792 L119.244,21.634 C118.854,21.712 118.36,21.816 117.84,21.816 C116.462,21.816 115.786,21.036 115.786,19.892 Z M125.432,24 L128.292,24 L130.528,17.708 L131.724,13.704 L132.92,17.708 L135.156,24 L138.016,24 L142.8,11 L140.33,11 L136.586,22.024 L132.79,11 L130.658,11 L126.862,22.024 L123.118,11 L120.648,11 L125.432,24 Z M153.538,24 L153.538,21.66 C152.706,23.376 151.146,24.26 149.144,24.26 C145.686,24.26 143.944,21.322 143.944,17.5 C143.944,13.834 145.764,10.74 149.404,10.74 C151.302,10.74 152.758,11.598 153.538,13.288 L153.538,11 L155.774,11 L155.774,24 L153.538,24 Z M146.18,17.5 C146.18,20.62 147.428,22.18 149.742,22.18 C151.744,22.18 153.538,20.906 153.538,18.02 L153.538,16.98 C153.538,14.094 151.9,12.82 150.002,12.82 C147.48,12.82 146.18,14.484 146.18,17.5 Z M159.154,24 L161.338,24 L161.338,16.33 C161.338,13.574 163.08,12.716 165.94,13.002 L165.94,10.818 C163.392,10.662 162.092,11.754 161.338,13.288 L161.338,11 L159.154,11 L159.154,24 Z M178.108,23.48 C177.042,24.052 175.404,24.26 174.078,24.26 C169.216,24.26 167.084,21.452 167.084,17.474 C167.084,13.548 169.268,10.74 173.22,10.74 C177.224,10.74 178.836,13.522 178.836,17.474 L178.836,18.488 L169.346,18.488 C169.658,20.698 171.088,22.128 174.156,22.128 C175.664,22.128 176.938,21.842 178.108,21.426 L178.108,23.48 Z M173.116,12.768 C170.75,12.768 169.554,14.302 169.32,16.564 L176.574,16.564 C176.444,14.146 175.352,12.768 173.116,12.768 Z",fill:"inherit",fillRule:"evenodd"}));function st(e,t){var n=e.title,r=e.titleId,c=ot(e,["title","titleId"]);return a.createElement("svg",it({viewBox:"0 0 179 32",xmlns:"http://www.w3.org/2000/svg",focusable:"false","aria-hidden":"true",className:"css-sq9aeg-Logo",ref:t,"aria-labelledby":r},c),n?a.createElement("title",{id:r},n):null,ut,dt)}var jt=a.forwardRef(st);n.p;function lt(){var e=Object(r.a)(["\n  height: 80vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return lt=function(){return e},e}var bt=function(){var e=$(),t=e.projectModalOpen,n=e.close,r=e.editingProject,i=e.isLoading,j=(r?B:V)(X()),l=j.mutateAsync,b=j.error,O=j.isLoading,f=d.a.useForm(),p=Object(o.a)(f,1)[0],v=r?"\u7f16\u8f91\u9879\u76ee":"\u521b\u5efa\u9879\u76ee";return Object(a.useEffect)((function(){p.setFieldsValue(r)}),[r,p]),Object(c.jsx)(We.a,{forceRender:!0,onClose:function(){p.resetFields(),n()},visible:t,width:"100%",children:Object(c.jsx)(Ot,{children:i?Object(c.jsx)(De.a,{size:"large"}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{children:v}),Object(c.jsx)(Q.b,{error:b}),Object(c.jsxs)(d.a,{form:p,layout:"vertical",style:{width:"40rem"},onFinish:function(e){l(Object(u.a)(Object(u.a)({},r),e)).then((function(){p.resetFields(),n()}))},children:[Object(c.jsx)(d.a.Item,{label:"\u540d\u79f0",name:"name",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d"}],children:Object(c.jsx)(s.a,{placeholder:"\u8bf7\u8f93\u5165\u9879\u76ee\u540d\u79f0"})}),Object(c.jsx)(d.a.Item,{label:"\u90e8\u95e8",name:"organization",rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u90e8\u95e8\u540d"}],children:Object(c.jsx)(s.a,{placeholder:"\u8bf7\u8f93\u5165\u90e8\u95e8\u540d"})}),Object(c.jsx)(d.a.Item,{label:"\u8d1f\u8d23\u4eba",name:"personId",children:Object(c.jsx)(x,{defaultOptionName:"\u8d1f\u8d23\u4eba"})}),Object(c.jsx)(d.a.Item,{style:{textAlign:"right"},children:Object(c.jsx)(he.a,{loading:O,type:"primary",htmlType:"submit",children:"\u63d0\u4ea4"})})]})]})})})},Ot=ve.a.div(lt()),ft=n(377),pt=n(397),vt=n(409);function xt(){var e=Object(r.a)(["\n  min-width: 30rem;\n"]);return xt=function(){return e},e}var ht=function(){var e=$().open,t=A(),n=t.data,r=t.refetch,a=null===n||void 0===n?void 0:n.filter((function(e){return e.pin})),i=Object(c.jsxs)(mt,{children:[Object(c.jsx)(ft.a.Text,{type:"secondary",children:"\u6536\u85cf\u9879\u76ee"}),Object(c.jsx)(Ke.b,{children:null===a||void 0===a?void 0:a.map((function(e){return Object(c.jsx)(Ke.b.Item,{children:Object(c.jsx)(Ke.b.Item.Meta,{title:e.name})})}))}),Object(c.jsx)(pt.a,{}),Object(c.jsx)(Q.a,{onClick:e,type:"link",children:"\u521b\u5efa\u9879\u76ee"})]});return Object(c.jsx)(vt.a,{onVisibleChange:function(){return r()},placement:"bottom",content:i,children:Object(c.jsx)("span",{children:"\u9879\u76ee"})})},mt=ve.a.div(xt());function gt(){var e=Object(r.a)(["\n  min-width: 30rem;\n"]);return gt=function(){return e},e}var Ct=function(){var e=b(),t=e.data,n=e.refetch,r=Object(c.jsxs)(Lt,{children:[Object(c.jsx)(ft.a.Text,{type:"secondary",children:"\u7ec4\u5458\u5217\u8868"}),Object(c.jsx)(Ke.b,{children:null===t||void 0===t?void 0:t.map((function(e){return Object(c.jsx)(Ke.b.Item,{children:Object(c.jsx)(Ke.b.Item.Meta,{title:e.name})},e.id)}))}),Object(c.jsx)(pt.a,{})]});return Object(c.jsx)(vt.a,{onVisibleChange:function(){return n()},placement:"bottom",content:r,children:Object(c.jsx)("span",{children:"\u7ec4\u5458"})})},Lt=ve.a.div(gt());function kt(){var e=Object(r.a)(["\n  //display: flex;\n  overflow: hidden;\n"]);return kt=function(){return e},e}function yt(){var e=Object(r.a)([""]);return yt=function(){return e},e}function It(){var e=Object(r.a)([""]);return It=function(){return e},e}function wt(){var e=Object(r.a)(["\n  padding: 3.2rem;\n  box-shadow: 0 0 5px 0 rgba(0,0,0,0);\n  z-index: 1;\n"]);return wt=function(){return e},e}function Et(){var e=Object(r.a)(["\n  display: grid;\n  grid-template-rows: 6rem 1fr;\n  height: 100vh;\n"]);return Et=function(){return e},e}t.default=function(){return Object(c.jsxs)(Pt,{children:[Object(c.jsx)(Mt,{}),Object(c.jsx)(St,{children:Object(c.jsxs)(ne.d,{children:[Object(c.jsx)(ne.b,{path:"/projects",element:Object(c.jsx)(te,{})}),Object(c.jsx)(ne.b,{path:"/projects/:projectId/*",element:Object(c.jsx)(tt,{})}),Object(c.jsx)(ne.a,{to:"/projects"})]})}),Object(c.jsx)(bt,{})]})};var Mt=function(){return Object(c.jsxs)(Ft,{between:!0,children:[Object(c.jsxs)(Nt,{gap:!0,children:[Object(c.jsx)(Q.a,{type:"link",onClick:W.b,children:Object(c.jsx)(jt,{width:"18rem",color:"rgb(38, 132, 255)"})}),Object(c.jsx)(ht,{}),Object(c.jsx)(Ct,{})]}),Object(c.jsx)(Zt,{children:Object(c.jsx)(Tt,{})})]})},Tt=function(){var e=Object(at.b)(),t=e.logout,n=e.user;return Object(c.jsx)(C.a,{overlay:Object(c.jsx)(L.a,{children:Object(c.jsx)(L.a.Item,{children:Object(c.jsx)(he.a,{onClick:t,type:"link",children:"\u767b\u51fa"})},"logout")}),children:Object(c.jsxs)(he.a,{type:"link",onClick:function(e){return e.preventDefault()},children:["Hi, ",null===n||void 0===n?void 0:n.name]})})},Pt=ve.a.div(Et()),Ft=Object(ve.a)(Q.e)(wt()),Nt=Object(ve.a)(Q.e)(It()),Zt=ve.a.div(yt()),St=ve.a.main(kt())}}]);
//# sourceMappingURL=5.5ee0b4ed.chunk.js.map