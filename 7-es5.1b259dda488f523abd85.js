function _defineProperties(l,n){for(var u=0;u<n.length;u++){var a=n[u];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(l,a.key,a)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nX7e:function(l,n,u){"use strict";u.r(n);var a=u("8Y7J"),t=function l(){_classCallCheck(this,l)},o=u("pMnS"),e=u("bujt"),i=u("Fwaw"),r=u("5GAg"),b=u("omvX"),s=u("Wcq6"),d=function(){function l(n){_classCallCheck(this,l),this.afAuth=n}return _createClass(l,[{key:"onclick",value:function(){this.afAuth.auth.signInWithPopup(new s.auth.GoogleAuthProvider)}}]),l}(),c=u("irV9"),m=function(){function l(n){_classCallCheck(this,l),this.afAuth=n}return _createClass(l,[{key:"onClick",value:function(){this.afAuth.auth.signInAnonymously().then((function(l){console.log("User logged in as anon? "+l.user.isAnonymous)}))}}]),l}(),f=u("Mr+X"),p=u("Gi4r"),g=u("HsOI"),h=u("dJrM"),D=u("Xd0L"),_=u("IP0z"),v=u("/HVE"),C=u("s7LF"),k=u("ZwOa"),w=u("oapL"),y=u("SVse"),I=u("lzlj"),S=u("igqZ"),P=u("mrSG"),F=function(){function l(n,u){_classCallCheck(this,l),this.afAuth=n,this.fb=u,this.type="signup",this.loading=!1}return _createClass(l,[{key:"ngOnInit",value:function(){this.form=this.fb.group({email:["",[C.o.required,C.o.email]],password:["",[C.o.minLength(6),C.o.required]],passwordConfirm:["",[]]})}},{key:"changeType",value:function(l){this.type=l}},{key:"onSubmit",value:function(){return P.__awaiter(this,void 0,void 0,regeneratorRuntime.mark((function l(){var n,u;return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:if(this.loading=!0,n=this.email.value,u=this.password.value,l.prev=2,l.t0=this.isLogin,!l.t0){l.next=7;break}return l.next=7,this.afAuth.auth.signInWithEmailAndPassword(n,u);case 7:if(l.t1=this.isSignup,!l.t1){l.next=11;break}return l.next=11,this.afAuth.auth.createUserWithEmailAndPassword(n,u);case 11:if(l.t2=this.isPasswordReset,!l.t2){l.next=16;break}return l.next=15,this.afAuth.auth.sendPasswordResetEmail(n);case 15:this.serverMessage="Check your email";case 16:l.next=21;break;case 18:l.prev=18,l.t3=l.catch(2),this.serverMessage=l.t3;case 21:this.loading=!1;case 22:case"end":return l.stop()}}),l,this,[[2,18]])})))}},{key:"isLogin",get:function(){return"login"===this.type}},{key:"isSignup",get:function(){return"signup"===this.type}},{key:"isPasswordReset",get:function(){return"reset"===this.type}},{key:"email",get:function(){return this.form.get("email")}},{key:"password",get:function(){return this.form.get("password")}},{key:"passwordConfirm",get:function(){return this.form.get("passwordConfirm")}},{key:"passwordDoesMatch",get:function(){return"signup"!==this.type||this.password.value===this.passwordConfirm.value}}]),l}(),B=a.qb({encapsulation:0,styles:[["mat-card[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%;margin:0 auto}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:16px}.server-error[_ngcontent-%COMP%]{margin:8px 0}input[_ngcontent-%COMP%]{height:2em}input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]{padding:.3em 0}input[_ngcontent-%COMP%]   div.mat-form-field-infix[_ngcontent-%COMP%]   input.mat-input-element[_ngcontent-%COMP%]{vertical-align:top}div.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.15em}"]],data:{}});function L(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Ib(-1,null,["Criar uma Conta"])),(l()(),a.sb(3,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.changeType("login")&&a),a}),e.d,e.b)),a.rb(4,180224,null,0,i.b,[a.k,r.b,[2,b.a]],null,null),(l()(),a.Ib(-1,0,[" Ja e Usuario? "]))],null,(function(l,n){l(n,3,0,a.Db(n,4).disabled||null,"NoopAnimations"===a.Db(n,4)._animationMode)}))}function O(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Ib(-1,null,["Entrar"])),(l()(),a.sb(3,0,null,null,2,"button",[["mat-stroked-button",""],["size","small"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.changeType("signup")&&a),a}),e.d,e.b)),a.rb(4,180224,null,0,i.b,[a.k,r.b,[2,b.a]],null,null),(l()(),a.Ib(-1,0,[" Novo Usuario "]))],null,(function(l,n){l(n,3,0,a.Db(n,4).disabled||null,"NoopAnimations"===a.Db(n,4)._animationMode)}))}function M(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,5,"div",[],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),a.Ib(-1,null,["Reiniciar Senha"])),(l()(),a.sb(3,0,null,null,2,"button",[["mat-button",""],["size","small"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.changeType("login")&&a),a}),e.d,e.b)),a.rb(4,180224,null,0,i.b,[a.k,r.b,[2,b.a]],null,null),(l()(),a.Ib(-1,0,[" Voltar "]))],null,(function(l,n){l(n,3,0,a.Db(n,4).disabled||null,"NoopAnimations"===a.Db(n,4)._animationMode)}))}function G(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[6,4]],0,g.b,[],null,null),(l()(),a.Ib(-1,null,["You must enter a valid email address"]))],null,(function(l,n){l(n,0,0,a.Db(n,1).id)}))}function A(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[15,4]],0,g.b,[],null,null),(l()(),a.Ib(-1,null,[" Password must be at least 6 characters long "]))],null,(function(l,n){l(n,0,0,a.Db(n,1).id)}))}function x(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,h.b,h.a)),a.rb(1,7520256,null,9,g.c,[a.k,a.h,[2,D.f],[2,_.b],[2,g.a],v.a,a.y,[2,b.a]],{color:[0,"color"]},null),a.Gb(603979776,10,{_controlNonStatic:0}),a.Gb(335544320,11,{_controlStatic:0}),a.Gb(603979776,12,{_labelChildNonStatic:0}),a.Gb(335544320,13,{_labelChildStatic:0}),a.Gb(603979776,14,{_placeholderChild:0}),a.Gb(603979776,15,{_errorChildren:1}),a.Gb(603979776,16,{_hintChildren:1}),a.Gb(603979776,17,{_prefixChildren:1}),a.Gb(603979776,18,{_suffixChildren:1}),(l()(),a.sb(11,0,null,1,7,"input",[["autocomplete","off"],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","password"],["matInput",""],["placeholder","Password"],["type","password"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==a.Db(l,12)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,12).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,12)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,12)._compositionEnd(u.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,16)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,16)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,16)._onInput()&&t),t}),null,null)),a.rb(12,16384,null,0,C.c,[a.D,a.k,[2,C.a]],null,null),a.Fb(1024,null,C.h,(function(l){return[l]}),[C.c]),a.rb(14,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.r]],{name:[0,"name"]},null),a.Fb(2048,null,C.i,null,[C.e]),a.rb(16,999424,null,0,k.a,[a.k,v.a,[6,C.i],[2,C.l],[2,C.f],D.b,[8,null],w.a,a.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.rb(17,16384,null,0,C.j,[[4,C.i]],null,null),a.Fb(2048,[[10,4],[11,4]],g.d,null,[k.a]),(l()(),a.hb(16777216,null,5,1,null,A)),a.rb(20,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.email.valid&&"accent"),l(n,14,0,"password"),l(n,16,0,"Password","password"),l(n,20,0,u.password.invalid&&u.password.dirty)}),(function(l,n){l(n,0,1,["standard"==a.Db(n,1).appearance,"fill"==a.Db(n,1).appearance,"outline"==a.Db(n,1).appearance,"legacy"==a.Db(n,1).appearance,a.Db(n,1)._control.errorState,a.Db(n,1)._canLabelFloat,a.Db(n,1)._shouldLabelFloat(),a.Db(n,1)._hasFloatingLabel(),a.Db(n,1)._hideControlPlaceholder(),a.Db(n,1)._control.disabled,a.Db(n,1)._control.autofilled,a.Db(n,1)._control.focused,"accent"==a.Db(n,1).color,"warn"==a.Db(n,1).color,a.Db(n,1)._shouldForward("untouched"),a.Db(n,1)._shouldForward("touched"),a.Db(n,1)._shouldForward("pristine"),a.Db(n,1)._shouldForward("dirty"),a.Db(n,1)._shouldForward("valid"),a.Db(n,1)._shouldForward("invalid"),a.Db(n,1)._shouldForward("pending"),!a.Db(n,1)._animationsEnabled]),l(n,11,1,[a.Db(n,16)._isServer,a.Db(n,16).id,a.Db(n,16).placeholder,a.Db(n,16).disabled,a.Db(n,16).required,a.Db(n,16).readonly&&!a.Db(n,16)._isNativeSelect||null,a.Db(n,16)._ariaDescribedby||null,a.Db(n,16).errorState,a.Db(n,16).required.toString(),a.Db(n,17).ngClassUntouched,a.Db(n,17).ngClassTouched,a.Db(n,17).ngClassPristine,a.Db(n,17).ngClassDirty,a.Db(n,17).ngClassValid,a.Db(n,17).ngClassInvalid,a.Db(n,17).ngClassPending])}))}function N(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,2,"mat-error",[["class","mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(1,16384,[[24,4]],0,g.b,[],null,null),(l()(),a.Ib(-1,null,[" Senhas nao correspondem "]))],null,(function(l,n){l(n,0,0,a.Db(n,1).id)}))}function q(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,h.b,h.a)),a.rb(1,7520256,null,9,g.c,[a.k,a.h,[2,D.f],[2,_.b],[2,g.a],v.a,a.y,[2,b.a]],{color:[0,"color"]},null),a.Gb(603979776,19,{_controlNonStatic:0}),a.Gb(335544320,20,{_controlStatic:0}),a.Gb(603979776,21,{_labelChildNonStatic:0}),a.Gb(335544320,22,{_labelChildStatic:0}),a.Gb(603979776,23,{_placeholderChild:0}),a.Gb(603979776,24,{_errorChildren:1}),a.Gb(603979776,25,{_hintChildren:1}),a.Gb(603979776,26,{_prefixChildren:1}),a.Gb(603979776,27,{_suffixChildren:1}),(l()(),a.sb(11,0,null,1,7,"input",[["autocomplete","off"],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","passwordConfirm"],["matInput",""],["placeholder","Confirm password"],["type","password"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==a.Db(l,12)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,12).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,12)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,12)._compositionEnd(u.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,16)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,16)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,16)._onInput()&&t),t}),null,null)),a.rb(12,16384,null,0,C.c,[a.D,a.k,[2,C.a]],null,null),a.Fb(1024,null,C.h,(function(l){return[l]}),[C.c]),a.rb(14,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.r]],{name:[0,"name"]},null),a.Fb(2048,null,C.i,null,[C.e]),a.rb(16,999424,null,0,k.a,[a.k,v.a,[6,C.i],[2,C.l],[2,C.f],D.b,[8,null],w.a,a.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.rb(17,16384,null,0,C.j,[[4,C.i]],null,null),a.Fb(2048,[[19,4],[20,4]],g.d,null,[k.a]),(l()(),a.hb(16777216,null,5,1,null,N)),a.rb(20,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,1,0,u.passwordDoesMatch?"accent":"warn"),l(n,14,0,"passwordConfirm"),l(n,16,0,"Confirm password","password"),l(n,20,0,u.passwordConfirm.dirty&&!u.passwordDoesMatch&&u.passwordConfirm)}),(function(l,n){l(n,0,1,["standard"==a.Db(n,1).appearance,"fill"==a.Db(n,1).appearance,"outline"==a.Db(n,1).appearance,"legacy"==a.Db(n,1).appearance,a.Db(n,1)._control.errorState,a.Db(n,1)._canLabelFloat,a.Db(n,1)._shouldLabelFloat(),a.Db(n,1)._hasFloatingLabel(),a.Db(n,1)._hideControlPlaceholder(),a.Db(n,1)._control.disabled,a.Db(n,1)._control.autofilled,a.Db(n,1)._control.focused,"accent"==a.Db(n,1).color,"warn"==a.Db(n,1).color,a.Db(n,1)._shouldForward("untouched"),a.Db(n,1)._shouldForward("touched"),a.Db(n,1)._shouldForward("pristine"),a.Db(n,1)._shouldForward("dirty"),a.Db(n,1)._shouldForward("valid"),a.Db(n,1)._shouldForward("invalid"),a.Db(n,1)._shouldForward("pending"),!a.Db(n,1)._animationsEnabled]),l(n,11,1,[a.Db(n,16)._isServer,a.Db(n,16).id,a.Db(n,16).placeholder,a.Db(n,16).disabled,a.Db(n,16).required,a.Db(n,16).readonly&&!a.Db(n,16)._isNativeSelect||null,a.Db(n,16)._ariaDescribedby||null,a.Db(n,16).errorState,a.Db(n,16).required.toString(),a.Db(n,17).ngClassUntouched,a.Db(n,17).ngClassTouched,a.Db(n,17).ngClassPristine,a.Db(n,17).ngClassDirty,a.Db(n,17).ngClassValid,a.Db(n,17).ngClassInvalid,a.Db(n,17).ngClassPending])}))}function E(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,2,"button",[["color","accent"],["mat-raised-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,e.d,e.b)),a.rb(1,180224,null,0,i.b,[a.k,r.b,[2,b.a]],{disabled:[0,"disabled"],color:[1,"color"]},null),(l()(),a.Ib(-1,0,[" Enviar "]))],(function(l,n){var u=n.component;l(n,1,0,u.form.invalid||!u.passwordDoesMatch||u.loading,"accent")}),(function(l,n){l(n,0,0,a.Db(n,1).disabled||null,"NoopAnimations"===a.Db(n,1)._animationMode)}))}function K(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,2,"button",[["mat-stroked-button",""],["type","submit"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],null,null,e.d,e.b)),a.rb(1,180224,null,0,i.b,[a.k,r.b,[2,b.a]],{disabled:[0,"disabled"]},null),(l()(),a.Ib(-1,0,[" Enviar Email "]))],(function(l,n){l(n,1,0,n.component.loading)}),(function(l,n){l(n,0,0,a.Db(n,1).disabled||null,"NoopAnimations"===a.Db(n,1)._animationMode)}))}function T(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,2,"button",[["mat-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.changeType("reset")&&a),a}),e.d,e.b)),a.rb(1,180224,null,0,i.b,[a.k,r.b,[2,b.a]],null,null),(l()(),a.Ib(-1,0,[" Esqueceu a sua senha? "]))],null,(function(l,n){l(n,0,0,a.Db(n,1).disabled||null,"NoopAnimations"===a.Db(n,1)._animationMode)}))}function j(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,46,"mat-card",[["class","mat-card"]],[[2,"_mat-animation-noopable",null]],null,null,I.d,I.a)),a.rb(1,49152,null,0,S.a,[[2,b.a]],null,null),(l()(),a.hb(16777216,null,0,1,null,L)),a.rb(3,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,O)),a.rb(5,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,M)),a.rb(7,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(8,0,null,0,36,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var t=!0,o=l.component;return"submit"===n&&(t=!1!==a.Db(l,10).onSubmit(u)&&t),"reset"===n&&(t=!1!==a.Db(l,10).onReset()&&t),"ngSubmit"===n&&(t=!1!==o.onSubmit()&&t),t}),null,null)),a.rb(9,16384,null,0,C.s,[],null,null),a.rb(10,540672,null,0,C.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),a.Fb(2048,null,C.b,null,[C.f]),a.rb(12,16384,null,0,C.k,[[4,C.b]],null,null),(l()(),a.sb(13,0,null,null,20,"mat-form-field",[["class","mat-form-field"]],[[2,"mat-form-field-appearance-standard",null],[2,"mat-form-field-appearance-fill",null],[2,"mat-form-field-appearance-outline",null],[2,"mat-form-field-appearance-legacy",null],[2,"mat-form-field-invalid",null],[2,"mat-form-field-can-float",null],[2,"mat-form-field-should-float",null],[2,"mat-form-field-has-label",null],[2,"mat-form-field-hide-placeholder",null],[2,"mat-form-field-disabled",null],[2,"mat-form-field-autofilled",null],[2,"mat-focused",null],[2,"mat-accent",null],[2,"mat-warn",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"_mat-animation-noopable",null]],null,null,h.b,h.a)),a.rb(14,7520256,null,9,g.c,[a.k,a.h,[2,D.f],[2,_.b],[2,g.a],v.a,a.y,[2,b.a]],{color:[0,"color"]},null),a.Gb(603979776,1,{_controlNonStatic:0}),a.Gb(335544320,2,{_controlStatic:0}),a.Gb(603979776,3,{_labelChildNonStatic:0}),a.Gb(335544320,4,{_labelChildStatic:0}),a.Gb(603979776,5,{_placeholderChild:0}),a.Gb(603979776,6,{_errorChildren:1}),a.Gb(603979776,7,{_hintChildren:1}),a.Gb(603979776,8,{_prefixChildren:1}),a.Gb(603979776,9,{_suffixChildren:1}),(l()(),a.sb(24,0,null,1,7,"input",[["autocomplete","off"],["class","mat-input-element mat-form-field-autofill-control"],["formControlName","email"],["matInput",""],["placeholder","Email"],["type","email"]],[[2,"mat-input-server",null],[1,"id",0],[1,"placeholder",0],[8,"disabled",0],[8,"required",0],[1,"readonly",0],[1,"aria-describedby",0],[1,"aria-invalid",0],[1,"aria-required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"focus"]],(function(l,n,u){var t=!0;return"input"===n&&(t=!1!==a.Db(l,25)._handleInput(u.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,25).onTouched()&&t),"compositionstart"===n&&(t=!1!==a.Db(l,25)._compositionStart()&&t),"compositionend"===n&&(t=!1!==a.Db(l,25)._compositionEnd(u.target.value)&&t),"blur"===n&&(t=!1!==a.Db(l,29)._focusChanged(!1)&&t),"focus"===n&&(t=!1!==a.Db(l,29)._focusChanged(!0)&&t),"input"===n&&(t=!1!==a.Db(l,29)._onInput()&&t),t}),null,null)),a.rb(25,16384,null,0,C.c,[a.D,a.k,[2,C.a]],null,null),a.Fb(1024,null,C.h,(function(l){return[l]}),[C.c]),a.rb(27,671744,null,0,C.e,[[3,C.b],[8,null],[8,null],[6,C.h],[2,C.r]],{name:[0,"name"]},null),a.Fb(2048,null,C.i,null,[C.e]),a.rb(29,999424,null,0,k.a,[a.k,v.a,[6,C.i],[2,C.l],[2,C.f],D.b,[8,null],w.a,a.y],{placeholder:[0,"placeholder"],type:[1,"type"]},null),a.rb(30,16384,null,0,C.j,[[4,C.i]],null,null),a.Fb(2048,[[1,4],[2,4]],g.d,null,[k.a]),(l()(),a.hb(16777216,null,5,1,null,G)),a.rb(33,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,null,1,null,x)),a.rb(35,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,null,1,null,q)),a.rb(37,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(38,0,null,null,2,"mat-error",[["class","server-error mat-error"],["role","alert"]],[[1,"id",0]],null,null,null,null)),a.rb(39,16384,null,0,g.b,[],null,null),(l()(),a.Ib(40,null,["",""])),(l()(),a.hb(16777216,null,null,1,null,E)),a.rb(42,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,null,1,null,K)),a.rb(44,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,0,1,null,T)),a.rb(46,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,3,0,u.isSignup),l(n,5,0,u.isLogin),l(n,7,0,u.isPasswordReset),l(n,10,0,u.form),l(n,14,0,u.email.valid&&"accent"),l(n,27,0,"email"),l(n,29,0,"Email","email"),l(n,33,0,u.email.invalid&&u.email.dirty),l(n,35,0,!u.isPasswordReset),l(n,37,0,u.isSignup),l(n,42,0,!u.isPasswordReset),l(n,44,0,u.isPasswordReset),l(n,46,0,u.isLogin&&!u.isPasswordReset)}),(function(l,n){var u=n.component;l(n,0,0,"NoopAnimations"===a.Db(n,1)._animationMode),l(n,8,0,a.Db(n,12).ngClassUntouched,a.Db(n,12).ngClassTouched,a.Db(n,12).ngClassPristine,a.Db(n,12).ngClassDirty,a.Db(n,12).ngClassValid,a.Db(n,12).ngClassInvalid,a.Db(n,12).ngClassPending),l(n,13,1,["standard"==a.Db(n,14).appearance,"fill"==a.Db(n,14).appearance,"outline"==a.Db(n,14).appearance,"legacy"==a.Db(n,14).appearance,a.Db(n,14)._control.errorState,a.Db(n,14)._canLabelFloat,a.Db(n,14)._shouldLabelFloat(),a.Db(n,14)._hasFloatingLabel(),a.Db(n,14)._hideControlPlaceholder(),a.Db(n,14)._control.disabled,a.Db(n,14)._control.autofilled,a.Db(n,14)._control.focused,"accent"==a.Db(n,14).color,"warn"==a.Db(n,14).color,a.Db(n,14)._shouldForward("untouched"),a.Db(n,14)._shouldForward("touched"),a.Db(n,14)._shouldForward("pristine"),a.Db(n,14)._shouldForward("dirty"),a.Db(n,14)._shouldForward("valid"),a.Db(n,14)._shouldForward("invalid"),a.Db(n,14)._shouldForward("pending"),!a.Db(n,14)._animationsEnabled]),l(n,24,1,[a.Db(n,29)._isServer,a.Db(n,29).id,a.Db(n,29).placeholder,a.Db(n,29).disabled,a.Db(n,29).required,a.Db(n,29).readonly&&!a.Db(n,29)._isNativeSelect||null,a.Db(n,29)._ariaDescribedby||null,a.Db(n,29).errorState,a.Db(n,29).required.toString(),a.Db(n,30).ngClassUntouched,a.Db(n,30).ngClassTouched,a.Db(n,30).ngClassPristine,a.Db(n,30).ngClassDirty,a.Db(n,30).ngClassValid,a.Db(n,30).ngClassInvalid,a.Db(n,30).ngClassPending]),l(n,38,0,a.Db(n,39).id),l(n,40,0,u.serverMessage)}))}var R=u("iInd"),U=function(){function l(n){_classCallCheck(this,l),this.afAuth=n}return _createClass(l,[{key:"ngOnInit",value:function(){}}]),l}(),V=a.qb({encapsulation:0,styles:[["button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.25em}.btn--board[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:15px}.login--guest-btn[_ngcontent-%COMP%]{margin-left:25px}[_nghost-%COMP%]{text-align:center}.logout[_ngcontent-%COMP%]{padding-top:5em}"]],data:{}});function J(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,18,"div",[],null,null,null,null,null)),(l()(),a.sb(1,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),a.Ib(-1,null,["Login"])),(l()(),a.sb(3,0,null,null,4,"button",[["appGoogleSignin",""],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.Db(l,5).onclick()&&t),t}),e.d,e.b)),a.rb(4,180224,null,0,i.b,[a.k,r.b,[2,b.a]],null,null),a.rb(5,16384,null,0,d,[c.a],null,null),(l()(),a.sb(6,0,null,0,0,"img",[["src","/assets/google-logo.svg"]],null,null,null,null,null)),(l()(),a.Ib(-1,0,[" Login com o Google "])),(l()(),a.sb(8,0,null,null,6,"button",[["appGuestSignin",""],["class","login--guest-btn"],["mat-raised-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.Db(l,10).onClick()&&t),t}),e.d,e.b)),a.rb(9,180224,null,0,i.b,[a.k,r.b,[2,b.a]],null,null),a.rb(10,16384,null,0,m,[c.a],null,null),(l()(),a.sb(11,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),a.rb(12,9158656,null,0,p.b,[a.k,p.d,[8,null],[2,p.a],[2,a.l]],null,null),(l()(),a.Ib(-1,0,["person"])),(l()(),a.Ib(-1,0,[" Login como Convidado "])),(l()(),a.sb(15,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),a.Ib(-1,null,["OU"])),(l()(),a.sb(17,0,null,null,1,"app-email-login",[],null,null,null,j,B)),a.rb(18,114688,null,0,F,[c.a,C.d],null,null)],(function(l,n){l(n,12,0),l(n,18,0)}),(function(l,n){l(n,3,0,a.Db(n,4).disabled||null,"NoopAnimations"===a.Db(n,4)._animationMode),l(n,8,0,a.Db(n,9).disabled||null,"NoopAnimations"===a.Db(n,9)._animationMode),l(n,11,0,a.Db(n,12).inline,"primary"!==a.Db(n,12).color&&"accent"!==a.Db(n,12).color&&"warn"!==a.Db(n,12).color)}))}function z(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),a.Ib(-1,null,[" Logado como "])),(l()(),a.sb(2,0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),a.Ib(3,null,["",""]))],null,(function(l,n){l(n,3,0,n.parent.context.ngIf.email)}))}function X(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),a.Ib(-1,null,["Logado como Convidado "]))],null,null)}function H(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),a.hb(16777216,null,null,1,null,z)),a.rb(2,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.hb(16777216,null,null,1,null,X)),a.rb(4,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),(l()(),a.sb(5,0,null,null,6,"button",[["class","btn--board"],["color","accent"],["mat-raised-button",""],["routerLink","/kanban"]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.Db(l,6).onClick()&&t),t}),e.d,e.b)),a.rb(6,16384,null,0,R.l,[R.k,R.a,[8,null],a.D,a.k],{routerLink:[0,"routerLink"]},null),a.rb(7,180224,null,0,i.b,[a.k,r.b,[2,b.a]],{color:[0,"color"]},null),(l()(),a.sb(8,0,null,0,2,"mat-icon",[["class","mat-icon notranslate"],["role","img"]],[[2,"mat-icon-inline",null],[2,"mat-icon-no-color",null]],null,null,f.b,f.a)),a.rb(9,9158656,null,0,p.b,[a.k,p.d,[8,null],[2,p.a],[2,a.l]],null,null),(l()(),a.Ib(-1,0,["dashboard"])),(l()(),a.Ib(-1,0,[" Go to Board "])),(l()(),a.sb(12,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),a.sb(13,0,null,null,2,"button",[["mat-stroked-button",""]],[[1,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],(function(l,n,u){var a=!0;return"click"===n&&(a=!1!==l.component.afAuth.auth.signOut()&&a),a}),e.d,e.b)),a.rb(14,180224,null,0,i.b,[a.k,r.b,[2,b.a]],null,null),(l()(),a.Ib(-1,0,["Logout"]))],(function(l,n){l(n,2,0,!n.context.ngIf.isAnonymous),l(n,4,0,n.context.ngIf.isAnonymous),l(n,6,0,"/kanban"),l(n,7,0,"accent"),l(n,9,0)}),(function(l,n){l(n,5,0,a.Db(n,7).disabled||null,"NoopAnimations"===a.Db(n,7)._animationMode),l(n,8,0,a.Db(n,9).inline,"primary"!==a.Db(n,9).color&&"accent"!==a.Db(n,9).color&&"warn"!==a.Db(n,9).color),l(n,13,0,a.Db(n,14).disabled||null,"NoopAnimations"===a.Db(n,14)._animationMode)}))}function Q(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,6,"main",[],null,null,null,null,null)),(l()(),a.hb(16777216,null,null,2,null,J)),a.rb(2,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),a.Eb(131072,y.b,[a.h]),(l()(),a.hb(16777216,null,null,2,null,H)),a.rb(5,16384,null,0,y.k,[a.O,a.L],{ngIf:[0,"ngIf"]},null),a.Eb(131072,y.b,[a.h])],(function(l,n){var u=n.component;l(n,2,0,!a.Jb(n,2,0,a.Db(n,3).transform(u.afAuth.authState))),l(n,5,0,a.Jb(n,5,0,a.Db(n,6).transform(u.afAuth.authState)))}),null)}var W=a.ob("app-login-page",U,(function(l){return a.Kb(0,[(l()(),a.sb(0,0,null,null,1,"app-login-page",[],null,null,null,Q,V)),a.rb(1,114688,null,0,U,[c.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),Y=u("xYTU"),Z=u("QQfA"),$=u("gavF"),ll=u("POq0"),nl=function l(){_classCallCheck(this,l)},ul=u("cUpR"),al=u("BzsH"),tl=u("7QIX"),ol=u("hOhj"),el=u("BV1i"),il=u("02hT"),rl=u("Q+lL"),bl=u("zMNK"),sl=u("dFDH"),dl=u("PCNd");u.d(n,"UserModuleNgFactory",(function(){return cl}));var cl=a.pb(t,[],(function(l){return a.Ab([a.Bb(512,a.j,a.ab,[[8,[o.a,W,Y.a,Y.b]],[3,a.j],a.w]),a.Bb(4608,y.m,y.l,[a.t,[2,y.x]]),a.Bb(4608,Z.a,Z.a,[Z.g,Z.c,a.j,Z.f,Z.d,a.q,a.y,y.d,_.b,[2,y.g]]),a.Bb(5120,Z.h,Z.i,[Z.a]),a.Bb(5120,$.c,$.j,[Z.a]),a.Bb(4608,ll.c,ll.c,[]),a.Bb(4608,D.b,D.b,[]),a.Bb(4608,C.d,C.d,[]),a.Bb(4608,C.q,C.q,[]),a.Bb(1073742336,y.c,y.c,[]),a.Bb(1073742336,R.n,R.n,[[2,R.s],[2,R.k]]),a.Bb(1073742336,nl,nl,[]),a.Bb(1073742336,_.a,_.a,[]),a.Bb(1073742336,D.j,D.j,[[2,D.c],[2,ul.f]]),a.Bb(1073742336,v.b,v.b,[]),a.Bb(1073742336,D.s,D.s,[]),a.Bb(1073742336,i.c,i.c,[]),a.Bb(1073742336,al.b,al.b,[]),a.Bb(1073742336,p.c,p.c,[]),a.Bb(1073742336,tl.c,tl.c,[]),a.Bb(1073742336,ol.c,ol.c,[]),a.Bb(1073742336,el.h,el.h,[]),a.Bb(1073742336,D.k,D.k,[]),a.Bb(1073742336,D.q,D.q,[]),a.Bb(1073742336,il.a,il.a,[]),a.Bb(1073742336,rl.c,rl.c,[]),a.Bb(1073742336,bl.f,bl.f,[]),a.Bb(1073742336,Z.e,Z.e,[]),a.Bb(1073742336,$.i,$.i,[]),a.Bb(1073742336,$.f,$.f,[]),a.Bb(1073742336,S.c,S.c,[]),a.Bb(1073742336,ll.d,ll.d,[]),a.Bb(1073742336,g.e,g.e,[]),a.Bb(1073742336,w.c,w.c,[]),a.Bb(1073742336,k.b,k.b,[]),a.Bb(1073742336,sl.e,sl.e,[]),a.Bb(1073742336,dl.a,dl.a,[]),a.Bb(1073742336,C.p,C.p,[]),a.Bb(1073742336,C.n,C.n,[]),a.Bb(1073742336,t,t,[]),a.Bb(1024,R.i,(function(){return[[{path:"",component:U}]]}),[])])}))}}]);