import{_ as k}from"./treestump-XxUp1eMM.js";import{_ as R,r as s,o as c,c as i,a as t,t as n,e as H,u as l,d as u,F as G,f as z,p as P,g as U}from"./index-DPyJZU1f.js";const B=[{Q:"如何通过id获取元素",AN:"A",A:"document.getElementById('id')",B:"document.querySelector('#id')",C:"$('#id')",D:"document.getElementsByClassName('id')[0]"},{Q:"如何获取元素内部的文本",AN:"C",A:"document.getElementById('id').value",B:"document.getElementById('id').innerHTML",C:"document.getElementById('id').innerText",D:"document.getElementById('id').textContent"},{Q:"如何获取元素内部的标签",AN:"D",A:"document.getElementById('id').outerHTML",B:"document.getElementById('id').children",C:"document.getElementById('id').innerText",D:"document.getElementById('id').innerHTML"},{Q:"如何定义一个变量",AN:"C",A:"a = 1",B:"const a = 1",C:"var a = 1",D:"let a = 1"},{Q:"如何获取一个0~1之间的随机数",AN:"B",A:"Math.getRandom()",B:"Math.random()",C:"Random.nextFloat()",D:"Math.random(0, 1)"},{Q:"如何将一个小数转换为整数(非四舍五入)",AN:"D",A:"Math.round()",B:"parseInt()",C:"Math.ceil()",D:"Math.floor()"},{Q:"如何定义一个左键点击事件",AN:"A",A:"document.getElementById('id').onclick = function () {}",B:"element.addEventListener('click', function() {})",C:"document.getElementById('id').addEventListener('mousedown', function() {})",D:"$('#id').click(function() {})"},{Q:"如何修改一个p标签的字体大小",AN:"B",A:"document.getElementsByTagName('p').style.fontSize = '20px'",B:"document.getElementById('id').style.fontSize = '20px'",C:"document.querySelector('p').style.fontSize = '20rem'",D:"$('p').css('font-size', '20px')"},{Q:"使用 typeof 检查一个 null 值时会返回什么",AN:"B",A:"null",B:"object",C:"undefined",D:"NaN"},{Q:"使用 typeof 检查一个 NaN 值时会返回什么",AN:"B",A:"undefined",B:"number",C:"object",D:"NaN"},{Q:"使用 typeof 检查一个 undefined 值时会返回什么",AN:"C",A:"undefined",B:"null",C:"undefined",D:"object"},{Q:"使用 typeof 检查一个 true 值时会返回什么",AN:"D",A:"boolean",B:"string",C:"number",D:"boolean"},{Q:"如何在页面中输出内容",AN:"A",A:"document.write('Hello World!')",B:"console.log('Hello World!')",C:"alert('Hello World!')",D:"$('#output').html('Hello World!')"},{Q:"如何在浏览器上弹出一个弹窗",AN:"C",A:"document.write('Hello World!')",B:"console.log('Hello World!')",C:"alert('Hello World!')",D:"$('#output').html('Hello World!')"},{Q:"使用 alert 时页面会发生什么",AN:"B",A:"页面会刷新",B:"停止继续运行,等待点击确定",C:"页面会关闭",D:"页面会跳转到指定页面"},{Q:"如何在控制台中输入内容",AN:"B",A:"document.write('Hello World!')",B:"console.log('Hello World!')",C:"alert('Hello World!')",D:"$('#output').html('Hello World!')"},{Q:"JavaScript可以",AN:"C",A:"修改CSS样式",B:"处理数据库",C:"对HTML页面添加交互功能",D:"发起网络请求"},{Q:"如何在JavaScript中定义一个'真'值",AN:"C",A:"var a = 'true';",B:"var a = 1;",C:"var a = true;",D:"var a = false;"},{Q:"JavaScript在函数执行或变量定义结束后使用什么分割",AN:"A",A:";",B:":",C:",",D:"."},{Q:"JavaScript由哪些部分组成",AN:"B",A:"ECMScript、CSS、BOM",B:"ECMScript、DOM、BOM",C:"HTML、DOM、CSS",D:"HTML、ECMScript、CSS"},{Q:"JavaScript有哪些编写位置",AN:"D",A:"行内、内嵌、外部",B:"行首、行尾、标签内",C:"顶部、底部、标签内",D:"行内、内嵌、外部、链接"},{Q:"JavaScript如何检查类型",AN:"A",A:"typeof",B:"instanceof",C:"getType",D:"checkType"},{Q:"JavaScript的事件",AN:"A",A:"必须放在元素中",B:"只能放在<head>中",C:"只能放在<body>中",D:"可以放在任何地方"},{Q:"JavaScript如何定义一个自定义函数",AN:"B",A:"function() {}",B:"function fun函数名 () {}",C:"fun函数名 = function() {}",D:"fun函数名() {}"},{Q:"JavaScript如何定义一个左键点击事件",AN:"C",A:"使用onmouseup属性来定义：onmouseup='fun函数名()' 或 onmouseup='JS代码'",B:"使用onmousedown属性来定义：onmousedown='fun函数名()' 或 onmousedown='JS代码'",C:"使用onclick属性来定义：onclick='fun函数名()' 或 onclick='JS代码'",D:"使用ondblclick属性来定义：ondblclick='fun函数名()' 或 ondblclick='JS代码'"},{Q:"JS中名称一般如何定义",AN:"D",A:"首字母小写，后面组合字母第一个大写",B:"全部使用大写字母",C:"全部使用小写字母",D:"没有规定，可以任意命名"},{Q:"JavaScript如何定义一个左键点击事件",AN:"C",A:'<element onclick="functionName()">',B:"addEventListener('click', functionName);",C:"onclick='fun函数名()' 或 onclick='JS代码'",D:"element.onclick = functionName;"},{Q:"JS中如何赋值",AN:"A",A:"=",B:"+=",C:"*=",D:"/="},{Q:"JS中如何判断两个值是否相等",AN:"B",A:"==",B:"===",C:"!=",D:"!=="},{Q:"鼠标滑进事件",AN:"C",A:"onmouseover='fun函数名()'",B:"onmouseenter='fun函数名()'",C:"onmousemove='fun函数名()'",D:"onmouseout='fun函数名()'"},{Q:"鼠标滑出事件",AN:"A",A:"onmouseout='fun函数名()'",B:"onmouseover='fun函数名()'",C:"onmousedown='fun函数名()'",D:"onmouseup='fun函数名()'"},{Q:"定义一个数组",AN:"C",A:"var arr数组变量名 = []",B:"var arr = []",C:"var 数组变量名 = []",D:"var array = []"},{Q:"获取数组元素的数量",AN:"A",A:"arr.length",B:"arr.size",C:"arr.count",D:"arr.total"},{Q:"获取数组指定位置的值",AN:"D",A:"arr[数字]",B:"arr(index)",C:"arr.get(数字)",D:"arr.at(数字)"},{Q:"数组的下标从多少开始",AN:"C",A:"从0开始，位置有先后关系",B:"从1开始，位置无先后关系",C:"从0开始，位置有先后关系",D:"从1开始，位置有先后关系"},{Q:"如何定义一个for循环",AN:"B",A:"for(start; end; increment) {}",B:"for(开头;结尾;变化){} 开始和结尾是变量",C:"for(initialize; condition; update) {}",D:"for{start; end; increment} {}"},{Q:"如何进行判断",AN:"A",A:"if () {} else {}",B:"check() {}",C:"switch() {}",D:"select() {}"},{Q:"在if括号中如果是真",AN:"A",A:"则进入第一个{}为假时进入第二个{}",B:"switch() {}",C:"check() {}",D:"select() {}"},{Q:"对象.className='' 是什么意思",AN:"A",A:"修改元素样式名称",B:"更改滤镜",C:"修改图片地址",D:"修改文案地址"},{Q:"i.style.filter 是什么意思",AN:"B",A:"",B:"更改滤镜",C:"修改图片地址",D:"修改元素样式名称"},{Q:"i.src 是什么意思",AN:"C",A:"",B:"修改元素样式名称",C:"修改图片地址",D:"更改滤镜"},{Q:"i.setAttribute('src','a.png') 是什么意思",AN:"A",A:"修改html元素属性",B:"设置元素内容",C:"修改元素位置",D:"删除元素"},{Q:"setAttribute 第一个参数是什么意思",AN:"C",A:"属性名称",B:"属性值",C:"元素标签",D:"元素类名"},{Q:"setAttribute 第二个参数是什么意思",AN:"D",A:"属性值",B:"属性名称",C:"元素标签",D:"元素类名"},{Q:"如何修改css图片为黑色",AN:"C",A:"i.style.filter = 'grayscale(1)'",B:"i.style.filter = 'brightness(0)'",C:"i.style.filter = 'sepia(100%)'",D:"i.style.filter = 'invert(100%)'"},{Q:"如何修改css图片的灰度，但是不影响图片显示的内容",AN:"B",A:"i.style.filter = 'grayscale(0)'",B:"i.style.filter = 'grayscale(0%)'",C:"i.style.filter = 'brightness(100%)'",D:"i.style.filter = 'sepia(0%)'"},{Q:"如何修改id为text的样式名称",AN:"D",A:"document.getElementById('text').className='xxx'",B:"document.getElementById('text').style.className='xxx'",C:"document.getElementByClassName('text').className='xxx'",D:"document.getElementById('text').classList.add('xxx')"},{Q:"如何获取id为id的图片的宽度",AN:"C",A:"document.getElementById('id').width",B:"document.getElementById('id').style.width()",C:"document.getElementById('id').clientWidth",D:"document.getElementById('id').naturalWidth"},{Q:"如何设置id为id的图片的宽度",AN:"A",A:"document.getElementById('id').style.width='100px'",B:"document.getElementById('id').setWidth('100px')",C:"document.getElementById('id').resizeWidth('100px')",D:"document.getElementById('id').changeWidth('100px')"},{Q:"页面加载完成的事件",AN:"B",A:"window.onpageLoad",B:"window.onload",C:"document.onload",D:"body.onload"},{Q:"键盘按下事件",AN:"C",A:"document.onkeydown",B:"document.onkeypress",C:"document.onkeyup",D:"window.onkeydown"},{Q:"css水平旋转图片",AN:"D",A:"i.style.transform='rotate(90deg)'",B:"i.style.transform='rotate(180deg)'",C:"i.style.transform='rotate(270deg)'",D:"i.style.transform='rotateY(180deg)'"},{Q:"如何在事件中获取键盘的ASCII码",AN:"A",A:"event.keyCode",B:"event.charCode",C:"event.which",D:"event.key"},{Q:"js中的全局变量写在哪里",AN:"B",A:"在函数内部",B:"在函数外部",C:"在if语句内部",D:"在for循环内部"},{Q:"js中的局部变量写在哪里",AN:"C",A:"在函数外部",B:"在if语句内部",C:"在函数内部",D:"在for循环内部"},{Q:"修改鼠标指针为禁止",AN:"B",A:"i.style.cursor='not-allowed'",B:"i.style.cursor='no-drop'",C:"i.style.cursor='crosshair'",D:"i.style.cursor='help'"},{Q:"如何打开一个新的页面",AN:"D",A:"location.href = 'http://www.example.com'",B:"window.location.href = 'http://www.example.com'",C:"document.location.href = 'http://www.example.com'",D:"window.open('http://www.example.com')"},{Q:"如何在指定的毫秒数后执行一次",AN:"A",A:"setTimeout",B:"setInterval",C:"requestAnimationFrame",D:"sleep"},{Q:"如何清除只执行一次的计时器",AN:"C",A:"clearTimeout",B:"stopInterval",C:"cancelAnimationFrame",D:"clearInterval"},{Q:"如何在指定的周期内执行",AN:"B",A:"setTimeout",B:"setInterval",C:"requestAnimationFrame",D:"runEvery"},{Q:"如何清除执行多次的计时器",AN:"D",A:"removeTimeout",B:"resetInterval",C:"cancelAnimationFrame",D:"clearInterval"},{Q:"如何获取当前的日期与时间",AN:"A",A:"new Date()",B:"getCurrentTime()",C:"getDate()",D:"getTime()"},{Q:"从date中获取小时数的方法名",AN:"C",A:"getHour()",B:"fetchHour()",C:"getHours",D:"retrieveHour()"},{Q:"从date中获取分钟数的方法名",AN:"A",A:"getMinutes",B:"fetchMinute()",C:"retrieveMinute()",D:"obtainMinutes()"},{Q:"从date中获取秒钟数的方法名",AN:"D",A:"findSeconds()",B:"getSecond()",C:"fetchSecond()",D:"getSeconds"},{Q:"添加一个阴影的属性名",AN:"B",A:"shadowEffect",B:"boxShadow",C:"darknessEffect",D:"lightShadow"}],A=y=>(P("data-v-d65db084"),y=y(),U(),y),Y={class:"App"},K={class:"Top"},X={class:"Left"},Z={class:"question"},ee=A(()=>t("div",{class:"quesicon"},[t("span",null,"问题")],-1)),te={class:"ques"},oe={class:"big"},ne={class:"info"},le={class:"Right"},se={key:0,class:"time"},ae={key:1,class:"state"},re=A(()=>t("div",{class:"title"},"统计数据",-1)),ce={key:0},ie={key:1},ue={class:"Bottom"},de={class:"option"},me=A(()=>t("img",{alt:"",src:k},null,-1)),Ae=A(()=>t("img",{alt:"",src:k},null,-1)),ve=A(()=>t("img",{alt:"",src:k},null,-1)),ge=A(()=>t("img",{alt:"",src:k},null,-1)),Be={key:0,class:"end overlay"},Ce=A(()=>t("div",{class:"InfoEnd"},"游戏结束",-1)),fe={class:"Info"},Ne={key:0},pe={key:1},De={__name:"Game",setup(y){let C=Number(localStorage.getItem("time"))||0,d=s(localStorage.getItem("number")==null?0:Number(localStorage.getItem("number")));const a=localStorage.getItem("type"),M=s(),T=s(),Q=s(!1),m=s(Number(localStorage.getItem("currentIndex"))||0),f=s(),N=s(),p=s(),D=s(),I=s(),h=s(),J=s(JSON.parse(localStorage.getItem("wrongAnswers"))||[]);let S=null,w=Number(localStorage.getItem("AccNumber"))||0,_=Number(localStorage.getItem("ErrNumber"))||0,E=Number(localStorage.getItem("UnNumber"))||0,v=Number(localStorage.getItem("HaveNumber"))||0,g=s("");const b=s(!0),F=function(){z.push({name:"book"})},j=function(){z.push({name:"start"})},W=()=>{b.value=!b.value};a==="time"&&setInterval(()=>{if(C<0){Q.value=!0;return}const o=parseInt(C/60),e=parseInt(C%60);M.value=`${o<10?`0${o}`:o}:${e<10?`0${e}`:e}`,C--,localStorage.setItem("time",C)},1e3);function O(o){for(let e=o.length-1;e>0;e--){const r=Math.floor(Math.random()*(e+1));[o[e],o[r]]=[o[r],o[e]]}}O(B);const V=function(){if(m.value<B.length){const e=B[m.value];return m.value++,localStorage.setItem("currentIndex",m.value),a==="number"?(d.value--,localStorage.setItem("number",d.value)):(d.value++,localStorage.setItem("number",d.value)),{Q:e.Q,AN:e.AN,A:e.A,B:e.B,C:e.C,D:e.D}}else return null},$=o=>{if(a==="number"&&d.value<=0)Q.value=!0,localStorage.removeItem("currentIndex"),localStorage.setItem("number",0),console.log("结束"),clearInterval(S);else{const e=V();e&&(f.value=e.Q,N.value=e.AN,p.value=e.A,D.value=e.B,I.value=e.C,h.value=e.D,localStorage.setItem("question",e.Q),localStorage.setItem("AN",e.AN),localStorage.setItem("A",e.A),localStorage.setItem("B",e.B),localStorage.setItem("C",e.C),localStorage.setItem("D",e.D),console.log(N.value)),q()}},q=()=>{S&&(clearInterval(S),console.log("测试2"));let o=10;S=setInterval(()=>{o<=0?(clearInterval(S),E++,g.value="未答",setTimeout(()=>{g.value=""},1e3),$()):(T.value=o,o--)},1e3)},L=o=>{switch(o){case"A":return p.value;case"B":return D.value;case"C":return I.value;case"D":return h.value;default:return""}},x=o=>{if(m.value<B.length){const e=L(o),r=L(N.value);e===r?(w++,v++,g.value="正确"):(_++,v++,g.value="错误",J.value.push({question:f.value,correctAnswer:r,userAnswer:e})),localStorage.setItem("AccNumber",w),localStorage.setItem("ErrNumber",_),localStorage.setItem("HaveNumber",v),localStorage.setItem("wrongAnswers",JSON.stringify(J.value)),setTimeout(()=>{g.value=""},1e3),$()}};return(()=>{if(m.value<B.length){if(localStorage.getItem("question"))f.value=localStorage.getItem("question"),N.value=localStorage.getItem("AN"),p.value=localStorage.getItem("A"),D.value=localStorage.getItem("B"),I.value=localStorage.getItem("C"),h.value=localStorage.getItem("D");else{const o=B[m.value];f.value=o.Q,N.value=o.AN,p.value=o.A,D.value=o.B,I.value=o.C,h.value=o.D}a==="number"&&d.value<=0?Q.value=!0:q()}else console.log("测试")})(),(o,e)=>(c(),i(G,null,[t("div",Y,[t("div",K,[t("div",X,[t("div",Z,[ee,t("div",te,n(f.value),1),t("div",oe,[H("倒计时："),t("span",null,n(T.value),1)]),t("div",ne,[H("答题结果："),t("span",null,n(l(g)),1)])])]),t("div",le,[l(a)==="time"?(c(),i("div",se,[H("计时器"),t("span",null,n(M.value),1)])):u("",!0),b.value?(c(),i("div",ae,[re,t("span",null,"答对题数 "+n(l(w)),1),t("span",null,"答错题数 "+n(l(_)),1),t("span",null,"未答题数 "+n(l(E)),1),l(a)==="time"?(c(),i("span",ce,"答题总数 "+n(l(v)),1)):u("",!0),l(a)==="number"?(c(),i("span",ie,"剩余题数 "+n(l(d)),1)):u("",!0),t("button",{onClick:W},"隐藏")])):u("",!0),b.value?u("",!0):(c(),i("div",{key:2,class:"hideState",onClick:W}," 👇 显示详细信息 "))])]),t("div",ue,[t("div",de,[t("div",{class:"select one",onClick:e[0]||(e[0]=r=>x("A"))},[me,t("div",null,"[A] "+n(p.value),1)]),t("div",{class:"select two",onClick:e[1]||(e[1]=r=>x("B"))},[Ae,t("div",null,"[B] "+n(D.value),1)]),t("div",{class:"select three",onClick:e[2]||(e[2]=r=>x("C"))},[ve,t("div",null,"[C] "+n(I.value),1)]),t("div",{class:"select four",onClick:e[3]||(e[3]=r=>x("D"))},[ge,t("div",null,"[D] "+n(h.value),1)])])])]),Q.value?(c(),i("div",Be,[Ce,t("div",fe,[t("span",null,"答对题数 "+n(l(w)),1),t("span",null,"答错题数 "+n(l(_)),1),t("span",null,"未答题数 "+n(l(E)),1),l(a)==="time"?(c(),i("span",Ne,"答题总数 "+n(l(v)),1)):u("",!0),l(a)==="number"?(c(),i("span",pe,"答题总数 "+n(l(v)),1)):u("",!0),t("div",{class:"Button"},[t("button",{onClick:F},"错题集"),t("button",{onClick:j},"重新开始")])])])):u("",!0)],64))}},ye=R(De,[["__scopeId","data-v-d65db084"]]);export{ye as default};
