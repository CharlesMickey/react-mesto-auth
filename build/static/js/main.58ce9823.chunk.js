(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(20),o=n.n(c),i=n(9),r=(n(30),n(24)),l=n(2),u=n(3),p=n.p+"static/media/Logo.9acae848.svg",d=n(0);var m=function(e){var t=e.isLoggedIn,n=e.onLogOut,a=e.email;return Object(d.jsxs)("header",{className:"header",children:[Object(d.jsx)("img",{className:"header__logo",src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f \u0441\u0430\u0439\u0442\u0430 \u041c\u0435\u0441\u0442\u043e"}),t?Object(d.jsxs)("p",{className:"header__text",children:[a,Object(d.jsx)(i.b,{className:"header__text header__text_link",to:"/signin",onClick:n,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/signin",children:Object(d.jsx)(i.b,{className:"header__text",to:"/signup",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})}),Object(d.jsx)(u.b,{path:"/signup",children:Object(d.jsx)(i.b,{className:"header__text",to:"/signin",children:"\u0412\u0445\u043e\u0434"})})]})]})},j=s.a.createContext();var b=function(e){var t=e.card,n=e.onCardClick,a=e.onCardLike,c=e.setCardDelete,o=e.onDeleteCardPopupOpen,i=s.a.useContext(j),r=t.owner._id===i._id,l=t.likes.some((function(e){return e._id===i._id})),u="element__trash ".concat(r?"element__trash_visible":""),p="element__like ".concat(l?"element__like_active":"");return Object(d.jsxs)("li",{className:"element",children:[Object(d.jsx)("button",{type:"button",onClick:function(){c(t),o()},className:u}),Object(d.jsx)("img",{onClick:function(){n(t)},className:"element__image element__image_popup_open",src:t.link,alt:"\u0424\u043e\u0442\u043e: ".concat(t.name)}),Object(d.jsxs)("div",{className:"element__card",children:[Object(d.jsx)("h2",{className:"element__title",children:t.name}),Object(d.jsxs)("div",{className:"element__likes-group",children:[Object(d.jsx)("button",{type:"button",onClick:function(){a(t)},className:p}),Object(d.jsx)("p",{className:"element__like-counter",children:t.likes.length})]})]})]})},h=n.p+"static/media/Pen.ae1a976d.svg",f=n.p+"static/media/Avatar.50a0dcfd.jpg";var _=function(e){var t=e.onEditAvatar,n=e.onEditProfile,a=e.onEditPlace,c=e.onCardClick,o=e.cards,i=e.onCardLike,r=e.setCardDelete,l=e.onDeleteCardPopupOpen,u=s.a.useContext(j);return Object(d.jsxs)("main",{className:"main",children:[Object(d.jsxs)("section",{className:"profile",children:[Object(d.jsxs)("div",{className:"profile__avatar-block",children:[Object(d.jsx)("img",{className:"profile__avatar",src:u.avatar||f,alt:"\u0424\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u044f \u043f\u0440\u043e\u0444\u0438\u043b\u044f"}),Object(d.jsx)("img",{onClick:t,className:"profile__avatar-edit",src:h,alt:"\u0417\u043d\u0430\u0447\u0435\u043a \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f"})]}),Object(d.jsxs)("div",{className:"profile__profile-info",children:[Object(d.jsx)("h1",{className:"profile__name",children:u.name}),Object(d.jsx)("button",{onClick:n,type:"button",className:"profile__edit-button"}),Object(d.jsx)("p",{className:"profile__interests",children:u.about})]}),Object(d.jsx)("button",{onClick:a,type:"button",className:"profile__add-button"})]}),Object(d.jsx)("section",{className:"elements",children:Object(d.jsx)("ul",{className:"elements__list",children:o.map((function(e){return Object(d.jsx)(b,{onDeleteCardPopupOpen:l,setCardDelete:r,onCardLike:i,onCardClick:c,card:e},e._id)}))})})]})},O=n(10),x=n(5);var g=function(e){var t=e.onLogin,n=s.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],o=a[1];function i(e){var t=e.target,n=t.name,a=t.value;o(Object(x.a)(Object(x.a)({},c),{},Object(O.a)({},n,a)))}return Object(d.jsxs)("div",{className:"formAuth",children:[Object(d.jsx)("h2",{className:"formAuth__form-name",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c)},className:"formAuth__form",noValidate:!0,children:[Object(d.jsxs)("fieldset",{className:"formAuth__set",children:[Object(d.jsxs)("label",{className:"formAuth__field",children:[Object(d.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email",className:"formAuth__input",minLength:2,maxLength:40,value:c.email||"",onChange:i,required:!0}),Object(d.jsx)("span",{className:"",id:"email-error"})]}),Object(d.jsxs)("label",{className:"formAuth__field",children:[Object(d.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"formAuth__input",minLength:"2",maxLength:"200",value:c.password||"",onChange:i,required:!0}),Object(d.jsx)("span",{className:"",id:"password-error"})]})]}),Object(d.jsx)("button",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440",className:"formAuth__button-submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})};var v=function(e){var t=e.onRegister,n=s.a.useState({email:"",password:""}),a=Object(l.a)(n,2),c=a[0],o=a[1];function r(e){var t=e.target,n=t.name,a=t.value;o(Object(x.a)(Object(x.a)({},c),{},Object(O.a)({},n,a)))}return Object(d.jsxs)("div",{className:"formAuth",children:[Object(d.jsx)("h2",{className:"formAuth__form-name",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(c),t(c)},className:"formAuth__form",noValidate:!0,children:[Object(d.jsxs)("fieldset",{className:"formAuth__set",children:[Object(d.jsxs)("label",{className:"formAuth__field",children:[Object(d.jsx)("input",{type:"email",name:"email",id:"email",placeholder:"Email",className:"formAuth__input",minLength:2,maxLength:40,value:c.email||"",onChange:r,required:!0}),Object(d.jsx)("span",{className:"",id:"email-error"})]}),Object(d.jsxs)("label",{className:"formAuth__field",children:[Object(d.jsx)("input",{type:"password",name:"password",id:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",className:"formAuth__input",minLength:"2",maxLength:"200",value:c.password||"",onChange:r,required:!0}),Object(d.jsx)("span",{className:"",id:"password-error"})]})]}),Object(d.jsx)("button",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440",className:"formAuth__button-submit",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("p",{className:"formAuth__signup",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b?",Object(d.jsxs)(i.b,{to:"/signin",className:"formAuth__signup-link",children:[" ","\u0412\u043e\u0439\u0442\u0438"]})]})]})]})};var N=function(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"footer__copyright",children:"\xa9 2020. Mesto Russia"})})},C=n.p+"static/media/RegOk.1b6082f8.svg",k=n.p+"static/media/RegErr.df8eddf6.svg";var y=function(e){var t=e.name,n=e.isOpen,a=e.onClose,s=e.title,c=e.children,o=e.onSubmit,i=e.isLoading,r=e.buttonSubmitName,l=e.buttonSubmitNameDel;return Object(d.jsx)("div",{className:"popup popup_".concat(t," ").concat(n?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:a,className:"popup__button-close popup__button_close_".concat(t),type:"button"}),Object(d.jsx)("h2",{className:"popup__form-name",children:s}),Object(d.jsxs)("form",{onSubmit:o,className:"popup__form",name:t,noValidate:!0,children:[c,Object(d.jsx)("button",{type:"submit",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440",className:"popup__button popup__button-submit",children:i?l||"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435...":r})]})]})})};var A=function(e){var t=e.onClose,n=e.isOpen,a=e.isLoading,s=e.onDeleteCard;return Object(d.jsx)(y,{isOpen:n,isLoading:a,onClose:t,buttonSubmitName:"\u0414\u0430",buttonSubmitNameDel:"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435...",name:"delete-form",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",className:"popup popup_delete-form",onSubmit:function(e){e.preventDefault(),s()}})};var S=function(e){var t=e.card,n=e.onClose;return Object(d.jsx)("div",{className:"popup ".concat(t&&"popup_opened"),id:"popup-image",children:Object(d.jsxs)("figure",{className:"popup__container-image",children:[Object(d.jsx)("button",{onClick:n,className:"popup__button-close",type:"button"}),Object(d.jsx)("img",{className:"popup__image",src:"".concat(t?t.link:""),alt:t?t.name:""}),Object(d.jsx)("figcaption",{className:"popup__image-title",children:"".concat(t?t.name:"")})]})})};var L=function(e){var t=e.onClose,n=e.isOpen,a=e.onUpdateUser,c=e.isLoading,o=s.a.useContext(j),i=s.a.useState({}),r=Object(l.a)(i,2),u=r[0],p=r[1];function m(e){var t=e.target.name,n=e.target.value;p(Object(x.a)(Object(x.a)({},u),{},Object(O.a)({},t,n)))}return s.a.useEffect((function(){var e=o.name,t=o.about;p({name:e,about:t})}),[o,n]),Object(d.jsx)(y,{isLoading:c,buttonSubmitName:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({name:u.name,about:u.about})},onClose:t,isOpen:n,name:"profile-popup",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",children:Object(d.jsxs)("fieldset",{className:"popup__set",children:[Object(d.jsxs)("label",{className:"popup__field",children:[Object(d.jsx)("input",{type:"text",name:"name",id:"user__name",placeholder:"\u0418\u043c\u044f",className:"popup__input",minLength:2,maxLength:40,value:u.name||"",onChange:m,required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"user__name-error"})]}),Object(d.jsxs)("label",{className:"popup-field",children:[Object(d.jsx)("input",{type:"text",name:"about",id:"about",placeholder:"\u041e \u0441\u0435\u0431\u0435",className:"popup__input",minLength:"2",maxLength:"200",value:u.about||"",onChange:m,required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"about-error"})]})]})})};var w=function(e){var t=e.onClose,n=e.isOpen,a=e.onUpdateAvatar,c=e.isLoading,o=s.a.useRef();return s.a.useEffect((function(){o.current.value=""}),[n]),Object(d.jsx)(y,{isLoading:c,buttonSubmitName:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c",onSubmit:function(e){e.preventDefault(),a({avatar:o.current.value})},onClose:t,isOpen:n,name:"avatar-form",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",children:Object(d.jsx)("fieldset",{className:"popup__set",children:Object(d.jsxs)("label",{className:"popup__field",children:[Object(d.jsx)("input",{ref:o,type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"linkAvatar",className:"popup__input",required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"linkAvatar-error"})]})})})};var E=function(e){var t=e.onClose,n=e.isOpen,a=e.onAddPlaceSubmit,c=e.isLoading,o=s.a.useState({}),i=Object(l.a)(o,2),r=i[0],u=i[1];function p(e){var t=e.target.name,n=e.target.value;u(Object(x.a)(Object(x.a)({},r),{},Object(O.a)({},t,n)))}return s.a.useEffect((function(){u({})}),[n]),Object(d.jsx)(y,{onSubmit:function(e){e.preventDefault(),a({name:r.name,link:r.link})},isLoading:c,buttonSubmitName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",onClose:t,isOpen:n,name:"image-form",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",children:Object(d.jsxs)("fieldset",{className:"popup__set",children:[Object(d.jsxs)("label",{className:"popup__field",children:[Object(d.jsx)("input",{type:"text",placeholder:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",name:"name",id:"name",className:"popup__input popup__place",minLength:"2",maxLength:"30",value:r.name||"",onChange:p,required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"name-error"})]}),Object(d.jsxs)("label",{className:"popup__field",children:[Object(d.jsx)("input",{type:"url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",name:"link",id:"link",className:"popup__input",value:r.link||"",onChange:p,required:!0}),Object(d.jsx)("span",{className:"popup__input-error",id:"link-error"})]})]})})};var P=function(e){var t=e.isOpen,n=e.onClose,a=e.title,s=e.img;return Object(d.jsx)("div",{className:"popup  ".concat(t?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__container",children:[Object(d.jsx)("button",{onClick:n,className:"popup__button-close-tooltip",type:"button"}),Object(d.jsx)("img",{className:"popup__img-tooltip",src:s}),Object(d.jsx)("h2",{className:"popup__title-tooltip",children:a})]})})},D=n(22),I=n(23),T=new(function(){function e(t){Object(D.a)(this,e),this._addressApi=t.addressApi,this._headers=t.headers}return Object(I.a)(e,[{key:"_setConfigApi",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{headers:this._headers};return fetch("".concat(this._addressApi).concat(e),t).then((function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}))}},{key:"userInfo",value:function(){return this._setConfigApi("users/me")}},{key:"getInitialCards",value:function(){return this._setConfigApi("cards")}},{key:"editProfile",value:function(e){return this._setConfigApi("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.about})})}},{key:"addNewCard",value:function(e){return this._setConfigApi("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCard",value:function(e){return this._setConfigApi("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"putOrRemoveLike",value:function(e,t){return this._setConfigApi("cards/likes/".concat(e),{method:t?"DELETE":"PUT",headers:this._headers})}},{key:"editAvatar",value:function(e){return this._setConfigApi("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatar})})}}]),e}())({addressApi:"https://mesto.nomoreparties.co/v1/cohort-21/",headers:{authorization:"7369cf7f-a783-416d-9205-2a3b31c3a870","Content-Type":"application/json"}}),q="https://auth.nomoreparties.co",R=function(e){return e.ok?e.json():Promise.reject(new Error("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status,": ").concat(e.statusText)))},J={Accept:"application/json","Content-Type":"application/json"},U=n(25),F=function(e){var t=e.component,n=Object(U.a)(e,["component"]);return Object(d.jsx)(u.b,{children:function(){return n.isLoggedIn?Object(d.jsx)(t,Object(x.a)({},n)):Object(d.jsx)(u.a,{to:"/sign-in"})}})};var B=function(){var e=Object(u.g)(),t=s.a.useState(!1),n=Object(l.a)(t,2),a=n[0],c=n[1],o=s.a.useState(!1),i=Object(l.a)(o,2),p=i[0],b=i[1],h=s.a.useState(!1),f=Object(l.a)(h,2),O=f[0],y=f[1],D=s.a.useState({}),I=Object(l.a)(D,2),U=I[0],B=I[1],V=s.a.useState([]),z=Object(l.a)(V,2),H=z[0],M=z[1],G=s.a.useState({}),K=Object(l.a)(G,2),Q=K[0],W=K[1],X=s.a.useState(!1),Y=Object(l.a)(X,2),Z=Y[0],$=Y[1],ee=s.a.useState(!1),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],se=s.a.useState({}),ce=Object(l.a)(se,2),oe=ce[0],ie=ce[1],re=s.a.useState(!1),le=Object(l.a)(re,2),ue=le[0],pe=le[1],de=s.a.useState(!1),me=Object(l.a)(de,2),je=me[0],be=me[1],he=s.a.useState(null),fe=Object(l.a)(he,2),_e=fe[0],Oe=fe[1],xe=s.a.useState(!1),ge=Object(l.a)(xe,2),ve=ge[0],Ne=ge[1];function Ce(){be(!1),$(!1),ae(!1),pe(!1),b(!1),Oe(null)}s.a.useEffect((function(){T.userInfo().then((function(e){W(e)})).catch((function(e){console.log("".concat(e))}))}),[]),s.a.useEffect((function(){T.getInitialCards().then((function(e){M(e)})).catch((function(e){console.log("".concat(e))}))}),[]);var ke=function(){var e,t=localStorage.getItem("token");t&&(e=t,fetch("".concat(q,"/users/me"),{headers:Object(x.a)(Object(x.a)({},J),{},{Authorization:"Bearer ".concat(e)}),method:"GET"}).then((function(e){return R(e)}))).then((function(e){var t=e.data.email;B({email:t}),c(!0)})).catch((function(e){console.log("".concat(e))}))};return s.a.useEffect((function(){ke()}),[]),s.a.useEffect((function(){a&&e.push("/")}),[a]),Object(d.jsx)(j.Provider,{value:Q,children:Object(d.jsxs)("div",{className:"page",onKeyDown:function(e){"Escape"===e.key&&Ce()},tabIndex:"0",onClick:function(e){e.target.matches(".popup")&&Ce()},children:[Object(d.jsx)(m,{email:U.email,onLogOut:function(){c(!1),localStorage.removeItem("token")},isLoggedIn:a}),Object(d.jsxs)(u.d,{children:[Object(d.jsx)(u.b,{path:"/signup",children:Object(d.jsx)(v,{onRegister:function(t){return function(e){var t=e.password,n=e.email;return fetch("".concat(q,"/signup"),{headers:J,method:"POST",body:JSON.stringify({password:t,email:n})}).then((function(e){return R(e)}))}(t).then((function(){y(!0),b(!0),c(!0),e.push("/")})).catch((function(e){b(!0),console.log("".concat(e))}))}})}),Object(d.jsx)(u.b,{path:"/signin",children:Object(d.jsx)(g,{onLogin:function(t){var n=t.email,a=t.password;return function(e){var t=e.password,n=e.email;return fetch("".concat(q,"/signin"),{headers:J,method:"POST",body:JSON.stringify({password:t,email:n})}).then((function(e){return R(e)}))}({email:n,password:a}).then((function(t){var a=t.token;B({email:n}),y(!0),c(!0),localStorage.setItem("token",a),e.push("/")})).catch((function(e){b(!0),console.log("".concat(e))}))}})}),Object(d.jsx)(F,{path:"/",component:_,isLoggedIn:a,cards:H,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===Q._id}));T.putOrRemoveLike(e._id,t).then((function(t){M((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){console.log("".concat(e))}))},setCardDelete:ie,onEditAvatar:function(){$(!0)},onEditProfile:function(){ae(!0)},onDeleteCardPopupOpen:function(){be(!0)},onEditPlace:function(){pe(!0)},onCardClick:function(e){Oe(e)}})]}),Object(d.jsx)(u.b,{children:a?Object(d.jsx)(u.a,{to:"/"}):Object(d.jsx)(u.a,{to:"/signin"})}),a&&Object(d.jsx)(N,{}),Object(d.jsx)(w,{isLoading:ve,onUpdateAvatar:function(e){Ne(!0),T.editAvatar(e).then((function(e){W(e),Ce()})).catch((function(e){console.log("".concat(e))})).finally((function(){Ne(!1)}))},onClose:Ce,isOpen:Z}),Object(d.jsx)(L,{isLoading:ve,onUpdateUser:function(e){Ne(!0),T.editProfile(e).then((function(e){W(e),Ce()})).catch((function(e){console.log("".concat(e))})).finally((function(){Ne(!1)}))},onClose:Ce,isOpen:ne}),Object(d.jsx)(E,{isLoading:ve,onAddPlaceSubmit:function(e){Ne(!0),T.addNewCard(e).then((function(e){Ce(),M([e].concat(Object(r.a)(H)))})).catch((function(e){console.log("".concat(e))})).finally((function(){Ne(!1)}))},onClose:Ce,isOpen:ue}),Object(d.jsx)(A,{isLoading:ve,onDeleteCard:function(){Ne(!0),T.deleteCard(oe._id).then((function(){Ce(),M((function(e){return e.filter((function(e){return e._id!==oe._id}))}))})).catch((function(e){console.log("".concat(e))})).finally((function(){Ne(!1)}))},onClose:Ce,isOpen:je}),Object(d.jsx)(S,{onClose:Ce,card:_e}),Object(d.jsx)(P,{onClose:Ce,isOpen:p,title:O?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",img:O?C:k})]})})},V=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),c(e),o(e)}))};o.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(i.a,{children:Object(d.jsx)(B,{})})}),document.getElementById("root")),V()}},[[37,1,2]]]);
//# sourceMappingURL=main.58ce9823.chunk.js.map