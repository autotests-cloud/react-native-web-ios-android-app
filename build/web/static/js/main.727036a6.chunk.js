(this.webpackJsonpQaApp=this.webpackJsonpQaApp||[]).push([[0],{52:function(e,t,n){e.exports=n(67)},67:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(20),l=n.n(i),r=n(14),c=n(49),s=n(72),g=n(73),u=n(74),b=n(6),m=n(48),d=n(51),h=n(1),p={en:{Login:"Login",Password:"Password",Language:"Language",Remember:"Remember me",Submit:"Submit",LoginValidation:"Login must be more than 4 characters",PasswordValidation:"Password must be more than 4 characters",logout:"Logout",Hello:"Hello","Not authorized":"Not authorized",label:"En","Header label":"Header label",Logout:"Logout","Content block":"Content block","Authorization form":"Authorization form","Login input":"Login input","Password input":"Password input","Language select":"Language select","Remember me checkbox":"Remember me checkbox","Login button":"Login button","Private content":"Private content","Language menu":"Language menu"},ru:{Login:"\u041b\u043e\u0433\u0438\u043d",Password:"\u041f\u0430\u0440\u043e\u043b\u044c",Language:"\u042f\u0437\u044b\u043a",Remember:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c",Submit:"\u0412\u043e\u0439\u0442\u0438",LoginValidation:"\u041b\u043e\u0433\u0438\u043d \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",PasswordValidation:"\u041f\u0430\u0440\u043e\u043b\u044c \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 \u0447\u0435\u0442\u044b\u0440\u0435\u0445 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432",logout:"\u0412\u044b\u0445\u043e\u0434",Hello:"\u041f\u0440\u0438\u0432\u0435\u0442","Not authorized":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0443\u0439\u0442\u0435\u0441\u044c",label:"\u0420\u0443","\u041c\u0435\u0442\u043a\u0430 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0430":"",Logout:"\u0412\u044b\u0445\u043e\u0434","Content block":"\u0411\u043b\u043e\u043a \u043a\u043e\u043d\u0442\u0435\u043d\u0442\u0430","Authorization form":"\u0424\u043e\u0440\u043c\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438","Login input":"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043b\u043e\u0433\u0438\u043d\u0430","Password input":"\u041f\u043e\u043b\u0435 \u0432\u0432\u043e\u0434\u0430 \u043f\u0430\u0440\u043e\u043b\u044f","Language select":"\u0412\u044b\u0431\u043e\u0440 \u044f\u0437\u044b\u043a\u0430","Remember me checkbox":"\u0427\u0435\u043a\u0431\u043e\u043a\u0441 \u0437\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f","Login button":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0432\u0445\u043e\u0434\u0430","Private content":"\u041f\u0440\u0438\u0432\u0430\u0442\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442","Language menu":"\u041c\u0435\u043d\u044e \u0432\u044b\u0431\u043e\u0440\u0430 \u044f\u0437\u044b\u043a\u0430"}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"en",t=arguments.length>1?arguments[1]:void 0;return p[e][t]||t},y=function(e){var t=e.lang,n=e.onSetLang;return o.a.createElement(b.a,{style:L.langContainer,accessibilityLabel:f(t,"Language menu"),testID:f(t,"Language menu")},Object.keys(p).map((function(e,a){return o.a.createElement(d.a,{style:L.langItem,key:e,onPress:function(t){return n(e)}},o.a.createElement(m.a,{style:t===e?L.active:L.lang},p[e].label),a<Object.keys(p).length-1&&o.a.createElement(m.a,{style:L.separator},"/"))})))},L=h.a.create({langItem:{display:"flex",flexDirection:"row"},langContainer:{position:"absolute",top:0,right:0,height:60,fontSize:16,borderWidth:0,flexDirection:"row",backgroundColor:"rgb(33, 150, 243)",display:"flex",alignItems:"center",color:"white",fontWeight:"bold",paddingHorizontal:24,justifyContent:"center",width:90},separator:{color:"white",paddingHorizontal:6},lang:{textDecorationLine:"underline",color:"white"},active:{color:"white"}}),w=n(69),x=n(75),E=n(70),S=n(71),C=function(e){var t=e.lang,n=e.onLogin,i=e.onSetLang,l=Object(a.useState)(""),c=Object(r.a)(l,2),s=c[0],g=c[1],u=Object(a.useState)(""),h=Object(r.a)(u,2),p=h[0],y=h[1],L=Object(a.useState)(!1),C=Object(r.a)(L,2),O=C[0],k=C[1],I=Object(a.useState)({}),j=Object(r.a)(I,2),P=j[0],z=j[1];Object(a.useEffect)((function(){var e={};(null===s||void 0===s?void 0:s.length)<1&&(e.login=f(t,"LoginValidation")),(null===p||void 0===p?void 0:p.length)<1&&(e.login=f(t,"PasswordValidation")),z(e)}),[s,p,t,O]);return o.a.createElement(b.a,{style:v.loginContainer,accessibilityLabel:f(t,"Authorization form"),testID:f(t,"Authorization form")},o.a.createElement(b.a,{style:v.label},o.a.createElement(m.a,null,f(t,"Login"),":"),o.a.createElement(w.a,{style:v.input,onChangeText:g,value:s,accessibilityLabel:f(t,"Login input"),testID:f(t,"Login input")})),o.a.createElement(b.a,{style:v.label},o.a.createElement(m.a,null,f(t,"Password"),":"),o.a.createElement(w.a,{style:v.input,onChangeText:y,value:p,accessibilityLabel:f(t,"Password input"),testID:f(t,"Password input"),secureTextEntry:!0})),o.a.createElement(b.a,{style:v.loginOptions},o.a.createElement(b.a,{style:v.optionLabel},o.a.createElement(m.a,{style:v.optionLabelText},f(t,"Language"),":"),o.a.createElement(x.a,{itemStyle:{fontSize:13},mode:x.a.MODE_DROPDOWN,style:v.optionPicker,selectedValue:t,onValueChange:i,accessibilityLabel:f(t,"Language select"),testID:f(t,"Language select")},o.a.createElement(x.a.Item,{label:"\u0420\u0443\u0441\u0441\u043a\u0438\u0439",value:"ru"}),o.a.createElement(x.a.Item,{label:"English",value:"en"}))),o.a.createElement(b.a,{style:v.optionLabel},o.a.createElement(m.a,{style:v.optionLabelText},f(t,"Remember"),":"),o.a.createElement(d.a,{onPress:function(e){return k(!O)}},o.a.createElement(E.a,{boxType:"square",style:v.CheckBox,value:O,accessibilityLabel:f(t,"Remember me checkbox"),testID:f(t,"Remember me checkbox")})))),o.a.createElement(b.a,{style:v.submitWrapper},o.a.createElement(S.a,{style:v.loginButton,disabled:Object.keys(P).length>0,accessibilityLabel:f(t,"Login button"),testID:f(t,"Login button"),onPress:function(){n(Object.keys(P).length?void 0:{login:s,password:p,lang:t,remember:O})},title:f(t,"Submit")})))},v=h.a.create({loginContainer:{alignItems:"center",display:"flex",justifyContent:"center",width:"100%"},label:{textAlign:"left",flexDirection:"column",fontSize:13,marginTop:8,display:"flex",alignSelf:"stretch"},optionLabel:{textAlign:"left",flexDirection:"row",fontSize:13,marginTop:"web"===c.a.OS?16:32,height:25,alignItems:"center",alignSelf:"stretch"},CheckBox:{marginRight:8,fontSize:10,height:"web"===c.a.OS?16:20,width:"web"===c.a.OS?16:20,borderColor:"gray",marginLeft:16,zIndex:10},optionPicker:{marginRight:32,marginLeft:16,width:150,height:"web"===c.a.OS?24:70,fontSize:12,justifyContent:"center",zIndex:0},input:{fontSize:15,borderColor:"gray",borderWidth:1,marginTop:8,padding:4,marginLeft:16,alignSelf:"stretch",zIndex:10},loginButton:{borderColor:"gray",borderWidth:1,paddingHorizontal:16,paddingVertical:8},submitWrapper:{marginTop:16,marginLeft:16,borderWidth:1,borderColor:"web"===c.a.OS?"transparent":"lightgray",alignSelf:"stretch"},loginOptions:{flexDirection:"column",justifyContent:"space-between",marginTop:"web"===c.a.OS?8:32,height:"web"===c.a.OS?80:130,display:"flex",alignItems:"center",zIndex:1,marginBottom:32,overflow:"hidden"},optionLabelText:{width:120,textAlign:"right"}}),O=function(e){var t=e.user;return o.a.createElement(b.a,{style:k.userContainer},o.a.createElement(m.a,{style:k.userContent,accessibilityLabel:f(t.lang,"Private content"),testID:f(t.lang,"Private content")},"Here is your private content #1"),o.a.createElement(m.a,{style:k.userContent,accessibilityLabel:f(t.lang,"Private content"),testID:f(t.lang,"Private content")},"and private content #2"))},k=h.a.create({userContainer:{alignSelf:"stretch",textAlign:"center",justifyContent:"center",display:"flex",width:310},userContent:{alignSelf:"stretch",textAlign:"center"}}),I="web"===c.a.OS?window.location.hash.replace("#",""):"";I=p[I]?I:"en";var j=h.a.create({scrollView:{backgroundColor:"white",height:"100%"},appContainer:{flex:1,textAlign:"center",flexDirection:"column",fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"},appContent:{width:310,marginTop:32,flexWrap:"wrap",flexDirection:"column",alignSelf:"center"},appHeader:{display:"flex",height:60,alignSelf:"stretch",textAlign:"center",backgroundColor:"#282c34",textAlignVertical:"center",alignItems:"center",justifyContent:"center"},appHeaderText:{fontSize:22,color:"white"},logout:{position:"absolute",top:0,right:0,height:60,fontSize:16,borderWidth:0,backgroundColor:"rgb(33, 150, 243)",display:"flex",justifyContent:"center",alignItems:"center",color:"white",fontWeight:"bold",paddingHorizontal:24},logoutText:{color:"white"}}),P=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1],l=Object(a.useState)(I),h=Object(r.a)(l,2),p=h[0],L=h[1];Object(a.useEffect)((function(){"web"===c.a.OS&&(window.location.hash=p)}),[p]),Object(a.useEffect)((function(){"web"===c.a.OS&&(document.querySelector("title").innerText=n?"Main page":"Login page"),n&&L(n.lang)}),[n]);return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{barStyle:"dark-content"}),o.a.createElement(g.a,null,o.a.createElement(u.a,{contentInsetAdjustmentBehavior:"automatic",style:j.scrollView},o.a.createElement(b.a,{style:j.appContainer},o.a.createElement(b.a,{style:j.appHeader},o.a.createElement(m.a,{style:j.appHeaderText,accessibilityLabel:f(p,"Header label"),testID:f(p,"Header label")},n?"".concat(f(n.lang,"Hello"),", ").concat(n.login,"!"):f(p,"Not authorized"))),n?o.a.createElement(d.a,{accessibilityLabel:f(p,"Logout"),testID:f(p,"Logout"),style:j.logout,onPress:function(){i()}},o.a.createElement(m.a,{style:j.logoutText},f(p,"logout")," ")):o.a.createElement(y,{lang:p,onSetLang:L}),o.a.createElement(b.a,{style:j.appContent,accessibilityLabel:f(p,"Content block"),testID:f(p,"Content block")},n?o.a.createElement(O,{user:n}):o.a.createElement(C,{lang:p,onLogin:i,onSetLang:L}))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.727036a6.chunk.js.map