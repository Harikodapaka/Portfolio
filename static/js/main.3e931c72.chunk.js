(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{115:function(e,t,l){},117:function(e,t,l){},118:function(e,t,l){},131:function(e,t,l){},132:function(e,t,l){},133:function(e,t,l){},134:function(e,t,l){},139:function(e,t,l){},140:function(e,t,l){},168:function(e,t){},195:function(e,t,l){"use strict";l.r(t);var s=l(1),n=l.n(s),i=l(18),c=l.n(i),a=(l(115),l(31)),r=l.n(a),o=l(94),d=l(7),j=(l(117),l(22)),u=l(16),b=(l(118),l(25)),O=l(108),v=l(96),x=l(2);function m(e){var t=e.title,l=e.links,s=e.varient;return Object(x.jsx)(b.a,{bg:s,variant:s,expand:"md",fixed:"top",id:"header-navbar",children:Object(x.jsxs)(j.a,{children:[Object(x.jsx)(b.a.Brand,{href:"#",children:t}),Object(x.jsx)(b.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(x.jsx)(b.a.Collapse,{id:"responsive-navbar-nav",children:Object(x.jsx)(O.a,{className:"ms-auto",children:l.map((function(e,t){return Object(x.jsx)(v.Link,{activeClass:"active-class",className:"nav-link",to:e.fields.scrollTo,spy:!0,smooth:!0,duration:500,offset:-50,href:"void(0)",children:e.fields.name},t)}))})})]})})}m.defaultProps={varient:"",title:"",links:[]};var h=m,f=(l(131),l(49));function p(e){var t=e.title,l=e.subtitle;return Object(x.jsxs)("section",{className:"section-padding text-center text-white",children:[Object(x.jsxs)("div",{className:"container-md bg-shade p-3",children:[Object(x.jsxs)("h1",{className:"font-italic",children:[t," ",Object(x.jsx)(f.a,{}),","]}),Object(x.jsx)("div",{children:l})]}),Object(x.jsx)("div",{})]})}p.defaultProps={title:"",subtitle:""};var g=p,_=(l(132),l(8)),N=l.n(_),T=l(39),C=l(10),S=(l(133),function(e){var t=e.name,l=C[t];return l?Object(x.jsx)(l,{}):Object(x.jsx)("p",{children:t})});function E(e){var t=e.title,l=e.body,s=e.links;return Object(x.jsxs)(T.a,{className:"h-100 project-card",children:[Object(x.jsxs)(T.a.Body,{children:[Object(x.jsx)(T.a.Title,{className:"text-center",children:t}),Object(x.jsx)(T.a.Text,{children:l})]}),Array.isArray(s)&&Object(x.jsx)(T.a.Footer,{className:"icon-alignment fs-4",children:s.map((function(e,t){return Object(x.jsx)("a",{href:e.fields.href,target:"_blank",rel:"noreferrer","aria-label":e.fields.href,children:Object(x.jsx)(S,{name:e.fields.icon})},t)}))})]})}E.defaultProps={title:"",body:"",links:N.a.arrayOf(N.a.shape({fields:{}}))};var y=E,A=l(101),k=l(100),P=function(e){var t=e.name,l=C[t];return l?Object(x.jsx)(l,{}):Object(x.jsx)("p",{children:t})};function I(e){var t,l,s,n,i=e.title,c=e.projects,a=e.more_projects_link;return Object(x.jsx)("section",{className:"section-padding",children:Object(x.jsxs)(j.a,{fluid:"md",children:[Object(x.jsx)("h1",{className:"text-white",children:i}),Object(x.jsx)(u.a,{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-1",children:c&&c.map((function(e,t){var l,s,n;return Object(x.jsx)(k.a,{children:Object(x.jsx)(y,{title:null===e||void 0===e||null===(l=e.fields)||void 0===l?void 0:l.title,body:null===e||void 0===e||null===(s=e.fields)||void 0===s?void 0:s.body,links:null===e||void 0===e||null===(n=e.fields)||void 0===n?void 0:n.links})},t)}))}),a&&Object(x.jsx)(u.a,{className:"mt-5",children:Object(x.jsxs)(A.a,{href:null===a||void 0===a||null===(t=a.fields)||void 0===t?void 0:t.href,target:"blank",variant:null===a||void 0===a||null===(l=a.fields)||void 0===l?void 0:l.variant,className:"col-md-3 mx-auto fs-4 ",children:[Object(x.jsx)("span",{className:"m-2",children:null===a||void 0===a||null===(s=a.fields)||void 0===s?void 0:s.text})," ",Object(x.jsx)(P,{name:null===a||void 0===a||null===(n=a.fields)||void 0===n?void 0:n.icon})]})})]})})}I.defaultProps={title:"",projects:[],more_projects_link:{}};var w=I,R=(l(73),l(199)),F=l(197),D=l(26),U=l(102),W=l(103),K=l(104);var B=function(e,t){var l={color:"".concat(t)};switch(e){case"html":return Object(x.jsx)(U.a,{style:l,title:e});case"css":return Object(x.jsx)(D.b,{title:e,style:l});case"bootstrap":return Object(x.jsx)(C.FaBootstrap,{title:e,style:l});case"js":return Object(x.jsx)(D.d,{title:e,style:l});case"angular":return Object(x.jsx)(D.a,{title:e,style:l});case"react":return Object(x.jsx)(C.FaReact,{title:e,style:l});case"dnet":return Object(x.jsx)(D.c,{title:e,style:l});case"jquery":return Object(x.jsx)(D.e,{title:e,style:l});case"mongo":return Object(x.jsx)(D.f,{title:e,style:l});case"sass":return Object(x.jsx)(C.FaSass,{title:e,style:l});case"node":return Object(x.jsx)(C.FaNodeJs,{title:e,style:l});case"java":return Object(x.jsx)(C.FaJava,{title:e,style:l});case"sql":return Object(x.jsx)(D.g,{title:e,style:l});case"docker":return Object(x.jsx)(C.FaDocker,{title:e,style:l});case"git":return Object(x.jsx)(C.FaGitAlt,{title:e,style:l});case"aws":return Object(x.jsx)(C.FaAws,{title:e,style:l});case"azure":return Object(x.jsx)(f.b,{title:e,style:l});case"sys-design":return Object(x.jsx)(W.a,{title:e,style:l});case"design-pattern":return Object(x.jsx)(K.a,{title:e,style:l});default:return null}};function L(e){var t=e.title,l=e.skill_catrgories;return Object(x.jsx)("section",{className:"section-padding",children:Object(x.jsxs)(j.a,{fluid:"md",children:[Object(x.jsxs)("h1",{className:"text-white",children:[" ",t," "]}),l&&Object(x.jsx)(R.a,{className:"mt-3 card",variant:"dark",controls:!1,indicators:!0,interval:2e3,pause:!1,children:l.map((function(e,t){var l,s;return Object(x.jsxs)(R.a.Item,{className:"mt-3 p-5",style:{minHeight:"25em"},children:[Object(x.jsx)(u.a,{className:"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-center",children:null===(l=e.fields)||void 0===l||null===(s=l.skills)||void 0===s?void 0:s.map((function(e,t){var l,s,n,i,c;return Object(x.jsx)(k.a,{children:Object(x.jsxs)("div",{className:"d-flex align-items-center",children:[Object(x.jsx)("span",{className:"col-3 col-md-5 text-center icon",children:B(null===e||void 0===e||null===(l=e.fields)||void 0===l?void 0:l.img,null===e||void 0===e||null===(s=e.fields)||void 0===s?void 0:s.iconColor)}),Object(x.jsx)(F.a,{className:"col-9 col-md-7",now:null===e||void 0===e||null===(n=e.fields)||void 0===n?void 0:n.percent,label:null===e||void 0===e||null===(i=e.fields)||void 0===i?void 0:i.name,variant:null===e||void 0===e||null===(c=e.fields)||void 0===c?void 0:c.img})]})},t)}))}),Object(x.jsx)(R.a.Caption,{children:Object(x.jsx)("h3",{children:e.fields.name})})]},t)}))})]})})}L.defaultProps={title:"",skill_catrgories:[{fields:{}}]};var G=L,H=l(9),M=l(3),V=l(23),J=l(198),q=l(38),Q=l(110),X=l(109),z=(l(134),{name:"",email:"",message:""}),Y={show:!1,status:""};function Z(e){var t=e.title,l=e.subtitle,n=e.buttonText,i=e.successMessage,c=e.failureMessage,a=Object(s.useState)(!1),r=Object(d.a)(a,2),o=r[0],j=r[1],u=Object(s.useState)(z),b=Object(d.a)(u,2),O=b[0],v=b[1],m=Object(s.useState)(Y),h=Object(d.a)(m,2),f=h[0],p=h[1],g=function(e){var t=e.target.name,l=e.target.value;v((function(e){return Object(M.a)(Object(M.a)({},e),{},Object(H.a)({},t,l))}))};return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"container-md col-11 bg-white p-4 rounded text-center",children:[Object(x.jsxs)("h2",{children:[" ",t," "]}),Object(x.jsx)("h5",{className:"fst-italic",children:l}),Object(x.jsxs)(J.a,{noValidate:!0,validated:o,onSubmit:function(e){j(!0),e.preventDefault(),!0===e.currentTarget.checkValidity()&&X.a.send(Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-212238596-1",REACT_APP_CONTENTFUL_SPACE:"8rkhv5uyd73y",REACT_APP_CONTENTFUL_ACCESS_TOKEN:"1IHl_Kl4wlpWWWdx88xXK6BuQhkUWOsdniBTNrbvGc4"}).REACT_APP_EMAILJS_SERVICEID,Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-212238596-1",REACT_APP_CONTENTFUL_SPACE:"8rkhv5uyd73y",REACT_APP_CONTENTFUL_ACCESS_TOKEN:"1IHl_Kl4wlpWWWdx88xXK6BuQhkUWOsdniBTNrbvGc4"}).REACT_APP_EMAIL_JS_TEMPATEID,O,Object({NODE_ENV:"production",PUBLIC_URL:"/portfolio",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GA_TRACKING_ID:"UA-212238596-1",REACT_APP_CONTENTFUL_SPACE:"8rkhv5uyd73y",REACT_APP_CONTENTFUL_ACCESS_TOKEN:"1IHl_Kl4wlpWWWdx88xXK6BuQhkUWOsdniBTNrbvGc4"}).REACT_APP_EMAIL_JS_USERID).then((function(e){console.log("SUCCESS!",e.status,e.text),p({show:!0,status:"SUCCESS"}),v(z),j(!1)}),(function(e){console.log("ERROR!",e.status,e.text),p({show:!0,status:"FAIL"})}))},className:"mt-5",children:[Object(x.jsx)(J.a.Group,{className:"mb-3",controlId:"formBasicName",children:Object(x.jsx)(q.a,{controlId:"floatingInput",label:"Name",className:"mb-3",children:Object(x.jsx)(J.a.Control,{required:!0,type:"text",name:"name",value:O.name,onChange:g,placeholder:"Enter Your Name"})})}),Object(x.jsx)(J.a.Group,{className:"mb-3",controlId:"formBasicEmail",children:Object(x.jsxs)(q.a,{controlId:"floatingInput",label:"Email address",className:"mb-3",children:[Object(x.jsx)(J.a.Control,{required:!0,type:"email",name:"email",value:O.email,onChange:g,placeholder:"Enter Your Email"}),Object(x.jsx)(J.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]})}),Object(x.jsx)(J.a.Group,{className:"mb-3",controlId:"exampleForm.ControlTextarea1",children:Object(x.jsx)(q.a,{controlId:"floatingTextarea2",label:"Message",children:Object(x.jsx)(J.a.Control,{required:!0,as:"textarea",value:O.message,onChange:g,name:"message",placeholder:"Leave your message here",style:{height:"100px"}})})}),function(e,t){var l="SUCCESS"===t?"success":"danger",s="SUCCESS"===t?i:c;return e?Object(x.jsx)(Q.a,{variant:l,onClose:function(){return p({show:!1,status:null})},dismissible:!0,children:Object(x.jsx)("p",{children:s})}):null}(f.show,f.status),Object(x.jsx)(V.a,{variant:"primary",type:"submit",className:"btn btn-dark",children:n})]})]})})}Z.defaultProps={title:"",subtitle:"",buttonText:"",successMessage:"",failureMessage:""};var $=Z,ee=l(52),te=(l(138),l(139),function(e){var t=e.name,l=C[t];return l?Object(x.jsx)(l,{}):Object(x.jsx)("p",{children:t})});function le(e){var t=e.timelineItems,l=e.sectionTitle;return Object(x.jsxs)("div",{className:"section-padding container-md text-white",children:[Object(x.jsx)("h1",{className:"text-center mb-5",children:l}),Object(x.jsxs)(ee.VerticalTimeline,{children:[t.map((function(e,t){var l,s,n,i,c,a,r,o,d,j,u;return Object(x.jsxs)(ee.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:null===e||void 0===e||null===(l=e.fields)||void 0===l?void 0:l.iconBackgroundColor},contentArrowStyle:{borderRight:"7px solid  "+(null===e||void 0===e||null===(s=e.fields)||void 0===s?void 0:s.contentBackgroundColor)},date:null===e||void 0===e||null===(n=e.fields)||void 0===n?void 0:n.date,iconStyle:{background:null===e||void 0===e||null===(i=e.fields)||void 0===i?void 0:i.contentBackgroundColor},icon:Object(x.jsx)(te,{name:null===e||void 0===e||null===(c=e.fields)||void 0===c?void 0:c.iconName}),children:[Object(x.jsx)("h3",{className:"vertical-timeline-element-title",children:null===e||void 0===e||null===(a=e.fields)||void 0===a?void 0:a.title}),Object(x.jsx)("h5",{className:"vertical-timeline-element-subtitle",children:null===e||void 0===e||null===(r=e.fields)||void 0===r?void 0:r.subtitle}),Object(x.jsx)("p",{children:null===e||void 0===e||null===(o=e.fields)||void 0===o||null===(d=o.description)||void 0===d||null===(j=d.content[0])||void 0===j||null===(u=j.content[0])||void 0===u?void 0:u.value})]},t)})),Object(x.jsx)(ee.VerticalTimelineElement,{iconClassName:"bg-danger",icon:Object(x.jsx)(te,{name:"FaRegThumbsUp"})})]})]})}le.defaultProps={sectionTitle:"",timelineItems:[]};var se=le,ne=(l(140),function(e){var t=e.name,l=C[t];return l?Object(x.jsx)(l,{}):Object(x.jsx)("p",{children:t})});function ie(e){var t=e.title,l=e.technologies;return Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(b.a,{bg:"dark",variant:"dark",children:Object(x.jsx)(j.a,{className:"justify-content-center footer-styles",children:Object(x.jsxs)(b.a.Brand,{className:"d-flex d-none d-md-flex font-smaller",children:[t,l.map((function(e,t){return Object(x.jsxs)("div",{className:"mx-1",children:[Object(x.jsxs)("span",{children:[e.fields.name," "]}),Object(x.jsx)("span",{style:{color:e.fields.iconColor},children:Object(x.jsx)(ne,{name:e.fields.icon})}),Object(x.jsxs)("span",{children:[" ",e.fields.separator]})]},t)}))]})})})})}ie.defaultProps={title:"",technologies:[]};var ce=ie,ae=l(105),re=l(46),oe=ae.createClient({space:"8rkhv5uyd73y",accessToken:"1IHl_Kl4wlpWWWdx88xXK6BuQhkUWOsdniBTNrbvGc4"}),de=function(e){return oe.getEntries({content_type:e,include:10}).then((function(e){return Object(re.default)(e)})).catch((function(e){throw e}))},je=l(68),ue=function(e){var t=e.name,l=e.color,s=C[t];return s?Object(x.jsx)(s,{style:{color:l}}):Object(x.jsx)("p",{children:t})};var be=function(){var e,t,l,n=Object(s.useState)(!0),i=Object(d.a)(n,2),c=i[0],a=i[1],b=Object(s.useState)({}),O=Object(d.a)(b,2),v=O[0],m=O[1],f=Object(s.useState)({}),p=Object(d.a)(f,2),_=p[0],N=p[1],T=Object(s.useState)({}),C=Object(d.a)(T,2),S=C[0],E=C[1],y=Object(s.useState)({}),A=Object(d.a)(y,2),k=A[0],P=A[1],I=Object(s.useState)({}),R=Object(d.a)(I,2),F=R[0],D=R[1],U=Object(s.useState)({}),W=Object(d.a)(U,2),K=W[0],B=W[1],L=Object(s.useState)([]),H=Object(d.a)(L,2),M=H[0],V=H[1],J=Object(s.useState)({}),q=Object(d.a)(J,2),Q=q[0],X=q[1];return Object(s.useEffect)((function(){je.a.initialize("UA-212238596-1"),je.a.pageview("/");var e=function(){var e=Object(o.a)(r.a.mark((function e(){var t,l,s,n,i,c,o,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,de("headerData");case 2:return t=e.sent,e.next=5,de("personalDetails");case 5:return l=e.sent,e.next=8,de("projectsData");case 8:return s=e.sent,e.next=11,de("skillsData");case 11:return n=e.sent,e.next=14,de("timelineData");case 14:return i=e.sent,e.next=17,de("footerData");case 17:return c=e.sent,e.next=20,de("socialIcons");case 20:return o=e.sent,e.next=23,de("reachOutForm");case 23:d=e.sent,m(t[0].fields),N(l[0].fields),E(s[0].fields),P(n[0].fields),D(i[0].fields),B(c[0].fields),V(o),X(d[0].fields),a(!1);case 33:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),c?null:Object(x.jsx)("div",{className:"App main-banner",children:Object(x.jsxs)(j.a,{fluid:!0,className:"mainContainer",children:[Object(x.jsx)(u.a,{children:Object(x.jsx)(h,{varient:null===v||void 0===v?void 0:v.varient,title:null===v||void 0===v?void 0:v.title,links:null===v||void 0===v?void 0:v.links})}),Object(x.jsx)(u.a,{id:"intro",className:"align-items-center bg-intro full-height",children:Object(x.jsx)(g,{title:_.title,subtitle:null===_||void 0===_||null===(e=_.subtitle)||void 0===e||null===(t=e.content[0])||void 0===t||null===(l=t.content[0])||void 0===l?void 0:l.value})}),Object(x.jsx)(u.a,{id:"projects",className:"bg-projects align-items-center full-height",children:Object(x.jsx)(w,{title:null===S||void 0===S?void 0:S.title,projects:S.projects,more_projects_link:S.more_projects_link})}),Object(x.jsx)(u.a,{id:"skills",className:"bg-skills align-items-center full-height text-dark",children:Object(x.jsx)(G,{title:k.title,skill_catrgories:k.skillCatrgories})}),F&&Object(x.jsx)(u.a,{id:"experience",className:"bg-projects",children:Object(x.jsx)(se,{sectionTitle:null===F||void 0===F?void 0:F.title,timelineItems:null===F||void 0===F?void 0:F.timelineItems})}),Object(x.jsx)(u.a,{id:"reachout",className:"bg-reachout full-height align-items-center justify-content-center",children:Object(x.jsx)($,{title:Q.title,subtitle:Q.subtitle,buttonText:Q.buttonText,successMessage:Q.successMessage,failureMessage:Q.failureMessage})}),K&&Object(x.jsx)(u.a,{children:Object(x.jsx)(ce,{title:null===K||void 0===K?void 0:K.title,technologies:null===K||void 0===K?void 0:K.technologies})}),Object(x.jsx)("div",{className:"social-share",children:Object(x.jsx)("div",{className:"social-links",children:Object(x.jsx)("ul",{children:M.map((function(e,t){var l,s;return Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:null===(l=e.fields)||void 0===l?void 0:l.href,target:"blank",children:Object(x.jsx)(ue,{name:null===(s=e.fields)||void 0===s?void 0:s.icon,color:e.fields.iconColor})})},t)}))})})})]})})},Oe=function(e){e&&e instanceof Function&&l.e(3).then(l.bind(null,200)).then((function(t){var l=t.getCLS,s=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;l(e),s(e),n(e),i(e),c(e)}))};l(194),l.p;c.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(be,{})}),document.getElementById("root")),Oe()},67:function(e,t){},73:function(e,t,l){}},[[195,1,2]]]);
//# sourceMappingURL=main.3e931c72.chunk.js.map