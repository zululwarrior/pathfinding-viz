(this["webpackJsonpalgo-viz"]=this["webpackJsonpalgo-viz"]||[]).push([[0],{24:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n(1),o=n.n(c),i=n(13),a=n.n(i),s=n(5),u=n(3),f=n(4),j=n(2),b=n(6);function l(){var t=Object(u.a)([""]);return l=function(){return t},t}function d(){var t=Object(u.a)(["\n          "," 1s linear\n        "]);return d=function(){return t},t}function O(){var t=Object(u.a)(["\n  position: relative;\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n  animation: ",";\n"]);return O=function(){return t},t}function v(){var t=Object(u.a)(["\n  width: 30px;\n  height: 30px;\n  margin: 1px;\n  user-select: none;\n  -webkit-user-drag: none;\n"]);return v=function(){return t},t}function h(){var t=Object(u.a)(["\n  0% {transform:scale(0)}\n  20% {transform:scale(0.3)}\n  40% {transform:scale(0.6)}\n  60% {transform:scale(0.9)}\n  80%{transform:scale(1.1)}\n  100%{transform:scale(1.0)}\n"]);return h=function(){return t},t}var p=Object(f.d)(h()),x=f.c.div(v()),g=f.c.div(O(),(function(t){return t.props.start?"green":t.props.end?"red":t.props.isWall?"pink":t.props.shortest?"blue":t.props.weight>1&&t.props.visited?"gold":t.props.weight>1?"grey":t.props.visited?"yellow":"transparent"}),(function(t){return t.props.start||t.props.end?"none":t.props.visited||t.props.shortest?Object(f.b)(d(),p):"none"})),m=Object(f.c)(g)(l()),y=function(t){var e=t.data,n=e.x,c=e.y,o=e.isWeight,i=e.shortest,a=e.start;e.end;return Object(r.jsx)(x,{children:i&&Object(r.jsx)(m,{props:Object(j.a)({},e),onMouseDown:function(){e.mouseDown(c,n,o,a)},onMouseEnter:function(){e.mouseEnter(c,n,o,a)},onMouseUp:function(){e.mouseUp(c,n)},onMouseLeave:function(){e.mouseLeave(c,n,o)}})||Object(r.jsx)(g,{props:Object(j.a)({},e),onMouseDown:function(){e.mouseDown(c,n,o,a)},onMouseEnter:function(){e.mouseEnter(c,n,o,a)},onMouseUp:function(){e.mouseUp(c,n)},onMouseLeave:function(){e.mouseLeave(c,n,o)}})})},w=function(t,e,n){e.distance=0,e.start=!0,n.end=!0;for(var r=[],c=t.flat(),o=function(){var e=S(c).shift();if(void 0!==e){if(e.isWall)return"continue";if(e.distance===1/0)return{v:r};if(e.visited=!0,r.push(e),e===n)return{v:r};k(e,t).filter((function(t){return!t.visited})).forEach((function(t){t.distance=e.distance+t.weight,t.previousNode=e}))}};c;){var i=o();if("continue"!==i&&"object"===typeof i)return i.v}},S=function(t){return t.sort((function(t,e){return t.distance-e.distance}))},k=function(t,e){var n=[],r=t.x,c=t.y;return c<e.length-1&&n.push(e[c+1][r]),c>0&&n.push(e[c-1][r]),r<e[0].length-1&&n.push(e[c][r+1]),r>0&&n.push(e[c][r-1]),n},W=function(t){for(var e=[],n=0;n<16;n++){for(var r=[],c=0;c<30;c++)r.push(t(c,n));e.push(r)}return e};function E(){var t=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return E=function(){return t},t}function M(){var t=Object(u.a)(["\n  border: solid 1px;\n"]);return M=function(){return t},t}var C=f.c.div(M()),L=f.c.div(E()),N=function(t,e,n,r){e<t.length&&r.bottomWall&&(console.log(t[e+1][n].start),t[e+1][n].start||t[e+1][n].end||(t[e+1][n].isWall=!0)),n<t[0].length&&r.rightWall&&(t[e][n+1].start||t[e][n+1].end||t[e+1][n+1].start||t[e+1][n+1].end||(t[e][n+1].isWall=!0,t[e+1][n+1].isWall=!0))},z=function(t,e,n,r){for(var c=0;c<n.size-1&&(r[c].id===e&&(r[c].id=t,n.set(t,n.get(t)+1),n.set(e,n.get(e)-1)),0!==n.get(e));c++);},D=function(t,e){if(!(e.id>=0))for(var n=0;n<t.size-1;n++)if(0===t.get(n)){e.id=n,t.set(n,t.get(n)+1);break}},T=function(t){for(var e=t[0].length,n=t.length,r=[],c=new Map,o=Object(b.a)(t),i=0;i<e;i++)c.set(i,0),r.push({rightWall:!1,bottomWall:!0,id:-1});for(var a=0;a<n;a+=2){for(var s=0;s<r.length;s+=3)D(c,r[s]);for(var u=0;u<r.length&&u!==r.length-1;u+=3)if(r[u].id===r[u+1].id)r[u].rightWall=!0;else{var f=Math.random()>=.5;r[u].rightWall=f,f||z(r[u].id,r[u+1].id,c,r)}for(var j=0;j<r.length;j++){var l=Math.random()>=.5;1===c.get(r[j].id)&&(l=!0),r[j].bottomWall=!l,l||c.set(r[j].id,c.get(r[j].id)-1)}if(a!==n-1){c.forEach((function(t){0}));for(var d=0;d<r.length;d++)N(o,a,d,r[d]),r[d].rightWall=!1,r[d].bottomWall?r[d].id=-1:c.set(r[d].id,c.get(r[d].id)+1),r[d].bottomWall=!0}}return o};function U(){var t=Object(u.a)(["\n  justify-content: flex-end;\n  padding-top: 5px;\n"]);return U=function(){return t},t}function F(){var t=Object(u.a)(["\n  width: 100%;\n  display: flex;\n  justify-content: center;\n"]);return F=function(){return t},t}function A(){var t=Object(u.a)(["\n  background-color: ",";\n"]);return A=function(){return t},t}function B(){var t=Object(u.a)(["\n  margin: 0px 5px 5px 5px;\n  font-family: Varela round;\n  position: relative;\n  min-width: 100px;\n  min-height: 40px;\n  padding: 5px 15px 5px 15px;\n  border-radius: 30px;\n  outline: none;\n  border: none;\n  color: #f5f5f5;\n  font-size: 20px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  background-color: #fd6868;\n  cursor: pointer;\n  transition: 0.08s;\n\n  &::after {\n    content: '';\n    border-radius: 30px;\n    position: absolute;\n    top: 0;\n    right: 0;\n    left: 0;\n    bottom: 0;\n    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.3);\n    transition: 0.08s;\n    opacity: 0;\n  }\n  &:active::after {\n    opacity: 1;\n  }\n  &:hover {\n    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);\n    transform: translate(-2px, -2px);\n  }\n"]);return B=function(){return t},t}var I=f.c.button(B()),J=Object(f.c)(I)(A(),(function(t){return t.selection===t.algorithmName?"#3643f8":"#fd6868"})),P=f.c.div(F()),G=Object(f.c)(P)(U()),R=function(){var t=Object(c.useState)({x:7,y:1}),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)({x:7,y:28}),a=Object(s.a)(i,2),u=a[0],f=a[1],l=function(t,e){return{start:t===n.y&&e===n.x,end:t===u.y&&e===u.x,x:t,y:e,weight:1,distance:1/0,previousNode:null,visited:!1,isWall:!1,shortest:!1}},d=Object(c.useState)(W(l)),O=Object(s.a)(d,2),v=O[0],h=O[1],p=Object(c.useState)(!1),x=Object(s.a)(p,2),g=x[0],m=x[1],S=Object(c.useState)(!1),k=Object(s.a)(S,2),E=k[0],M=k[1],N=Object(c.useState)(!1),z=Object(s.a)(N,2),D=z[0],U=z[1],F=Object(c.useState)(!1),A=Object(s.a)(F,2),B=A[0],J=A[1],R=Object(c.useState)(!1),V=Object(s.a)(R,2),q=V[0],H=V[1],K=Object(c.useState)(!1),Q=Object(s.a)(K,2),X=Q[0],Y=Q[1],Z=Object(c.useState)(v[n.x][n.y]),$=Object(s.a)(Z,2),_=$[0],tt=$[1],et=Object(c.useState)(v[u.x][u.y]),nt=Object(s.a)(et,2),rt=nt[0],ct=nt[1];Object(c.useEffect)((function(){tt(v[n.x][n.y]),ct(v[u.x][u.y]),q&&(T(v),H(!1))}),[n,u,v]);var ot=function(t,e,n,r){var c=Object(b.a)(v),o=c[t][e];if(n){if(o.end)return;var i=Object(j.a)(Object(j.a)({},o),{},{start:!1});c[t][e]=i}if(r){if(o.start)return;var a=Object(j.a)(Object(j.a)({},o),{},{end:!1});c[t][e]=a}h(c)},it=function(t,e,r,c){var i=Object(b.a)(v),a=i[t][e];if(r){if(a.end)return;o({x:t,y:e});var s=Object(j.a)(Object(j.a)({},a),{},{start:!0});return i[t][e]=s,void(X&&at(i,s,i[u.x][u.y]))}if(c){if(a.start)return;f({x:t,y:e});var l=Object(j.a)(Object(j.a)({},a),{},{end:!0});return i[t][e]=l,void(X&&at(i,i[n.x][n.y],l))}},at=function(t,e,n){ft();w(t,e,n);for(var r=ut(n),c=function(t){h((function(e){var n=Object(b.a)(e),c=r[t],o=Object(j.a)(Object(j.a)({},c),{},{shortest:!0});return n[c.y][c.x]=o,n}))},o=0;o<r.length;o++)c(o)},st=function(t,e,r){var c=Object(b.a)(v),o=c[t][e];if(r){var i;i=o.weight>1?Object(j.a)(Object(j.a)({},o),{},{weight:1}):Object(j.a)(Object(j.a)({},o),{},{weight:10}),c[t][e]=i}else{var a=Object(j.a)(Object(j.a)({},o),{},{isWall:!o.isWall});c[t][e]=a}X&&at(c,c[n.x][n.y],c[u.x][u.y])},ut=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e},ft=function(){var t=Object(b.a)(v);t.forEach((function(t){t.forEach((function(t){t.visited=!1,t.shortest=!1,t.distance=1/0,t.previousNode=null}))})),h(t)},jt=function(t,e){setTimeout((function(){for(var e=function(e){setTimeout((function(){h((function(n){var r=Object(b.a)(n),c=t[e],o=Object(j.a)(Object(j.a)({},c),{},{shortest:!0});return r[c.y][c.x]=o,r}))}),30*e)},n=0;n<t.length;n++)e(n);Y(!0)}),30*e)},bt=function(t,e){setTimeout((function(){h((function(n){var r=Object(b.a)(n),c=t[e],o=Object(j.a)(Object(j.a)({},c),{},{visited:!0});return r[c.y][c.x]=o,r}))}),30*e)},lt={mouseDown:function(t,e,n){m(!0),v[t][e].start?U(!0):U(!1),v[t][e].end?J(!0):J(!1),v[t][e].start||v[t][e].end?it(t,e,D,B):st(t,e,n)},mouseEnter:function(t,e,n){g&&(D||B?it(t,e,D,B):st(t,e,n))},mouseUp:function(t,e){m(!1),U(!1),J(!1)},mouseLeave:function(t,e,n){g&&ot(t,e,D,B)},isWeight:E},dt=E?"weight":"wall";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(P,{children:[Object(r.jsx)(I,{onClick:function(){ft();var t=w(v,_,rt),e=ut(rt);ft();for(var n=0;n<t.length;n++)n===t.length-1&&jt(e,n),bt(t,n)},children:"Animate"}),Object(r.jsx)(I,{onClick:function(){M(!E)},children:dt}),Object(r.jsx)(I,{onClick:function(){h(W(l)),Y(!1),H(!0)},children:"maze"})]}),Object(r.jsx)(C,{children:v.map((function(t,e){return Object(r.jsx)(L,{children:t.map((function(t,e){return lt=Object(j.a)(Object(j.a)({},lt),t),t.x===_.x&&t.y===_.y?Object(r.jsx)(y,{data:Object(j.a)(Object(j.a)({},lt),{},{start:!0})},e):t.x===rt.x&&t.y===rt.y?Object(r.jsx)(y,{data:Object(j.a)(Object(j.a)({},lt),{},{end:!0})},e):Object(r.jsx)(y,{data:lt},e)}))},e)}))}),Object(r.jsx)(G,{children:Object(r.jsx)(I,{onClick:function(){h(W(l)),tt(v[n.x][n.y]),ct(v[u.x][u.y]),Y(!1)},children:"reset"})})]})};function V(){var t=Object(u.a)([""]);return V=function(){return t},t}function q(){var t=Object(u.a)(["\n          "," 1s linear\n        "]);return q=function(){return t},t}function H(){var t=Object(u.a)(["\n  position: relative;\n  background-color: ",";\n  width: 100%;\n  height: 100%;\n  animation: ",";\n"]);return H=function(){return t},t}function K(){var t=Object(u.a)(["\n  width: 30px;\n  height: 30px;\n  margin: 1px;\n  user-select: none;\n  -webkit-user-drag: none;\n"]);return K=function(){return t},t}function Q(){var t=Object(u.a)(["\n  0% {transform:scale(0)}\n  20% {transform:scale(0.3)}\n  40% {transform:scale(0.6)}\n  60% {transform:scale(0.9)}\n  80%{transform:scale(1.1)}\n  100%{transform:scale(1.0)}\n"]);return Q=function(){return t},t}var X=Object(f.d)(Q()),Y=f.c.div(K()),Z=f.c.div(H(),(function(t){return t.props.start?"green":t.props.end?"red":t.props.isWall?"pink":t.props.shortest?"blue":t.props.weight>1&&t.props.visited?"gold":t.props.weight>1?"grey":t.props.visited?"yellow":"transparent"}),(function(t){return t.props.start||t.props.end?"none":t.props.visited||t.props.shortest?Object(f.b)(q(),X):"none"})),$=Object(f.c)(Z)(V()),_=function(t){var e=t.data,n=e.x,c=e.y,o=e.isWeight,i=e.shortest,a=e.start,s=e.end;return Object(r.jsx)(Y,{children:i&&Object(r.jsx)($,{props:Object(j.a)({},e),onMouseDown:function(){console.log(a),e.mouseDown(c,n,o,a)},onMouseEnter:function(){e.mouseEnter(c,n,o,a)},onMouseUp:function(){e.mouseUp(c,n)},onMouseLeave:function(){e.mouseLeave(c,n,o,a,s)}})||Object(r.jsx)(Z,{props:Object(j.a)({},e),onMouseDown:function(){e.mouseDown(c,n,o,a)},onMouseEnter:function(){e.mouseEnter(c,n,o,a)},onMouseUp:function(){e.mouseUp(c,n)},onMouseLeave:function(){e.mouseLeave(c,n,o,a,s)}})})},tt=function(t,e,n){e.start=!0,n.end=!0;var r=new Set,c=[];e.gScore=0,e.fScore=rt(t,e,n),r.add(e);for(var o=new Set,i=function(){var e=nt(Array.from(r)).shift();if(e===n)return{v:c};e.visited=!0,c.push(e),r.delete(e),o.add(e),et(e,t).forEach((function(c){if(!c.isWall&&!o.has(c)){var i=(null===e||void 0===e?void 0:e.gScore)+rt(t,e,c)+c.weight;(i<c.gScore||!r.has(c))&&(c.previousNode=e,c.gScore=i,c.fScore=c.gScore+rt(t,c,n),r.has(c)||r.add(c))}}))};r.size>0;){var a=i();if("object"===typeof a)return a.v}return c},et=function(t,e){var n=[],r=t.x,c=t.y;return c<e.length-1&&n.push(e[c+1][r]),c>0&&n.push(e[c-1][r]),r<e[0].length-1&&n.push(e[c][r+1]),r>0&&n.push(e[c][r-1]),n},nt=function(t){return t.sort((function(t,e){return t.fScore-e.fScore}))},rt=function(t,e,n){for(var r=e,c=0;r!==n;)r.x>n.x?(r=t[r.y][r.x-1],c+=1):r.x<n.x&&(r=t[r.y][r.x+1],c+=1),r.y>n.y?(r=t[r.y-1][r.x],c+=1):r.y<n.y&&(r=t[r.y+1][r.x],c+=1);return c};function ct(){var t=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);return ct=function(){return t},t}function ot(){var t=Object(u.a)(["\n  border: solid 1px;\n"]);return ot=function(){return t},t}var it=f.c.div(ot()),at=f.c.div(ct()),st=function(){var t=Object(c.useState)({x:7,y:1}),e=Object(s.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)({x:7,y:28}),a=Object(s.a)(i,2),u=a[0],f=a[1],l=function(t,e){return{start:t===n.y&&e===n.x,end:t===u.y&&e===u.x,x:t,y:e,weight:0,gScore:1/0,fScore:1/0,previousNode:null,visited:!1,isWall:!1,shortest:!1}},d=Object(c.useState)(W(l)),O=Object(s.a)(d,2),v=O[0],h=O[1],p=Object(c.useState)(!1),x=Object(s.a)(p,2),g=x[0],m=x[1],y=Object(c.useState)(!1),w=Object(s.a)(y,2),S=w[0],k=w[1],E=Object(c.useState)(!1),M=Object(s.a)(E,2),C=M[0],L=M[1],N=Object(c.useState)(!1),z=Object(s.a)(N,2),D=z[0],U=z[1],F=Object(c.useState)(!1),A=Object(s.a)(F,2),B=A[0],J=A[1],R=Object(c.useState)(!1),V=Object(s.a)(R,2),q=V[0],H=V[1],K=Object(c.useState)(v[n.x][n.y]),Q=Object(s.a)(K,2),X=Q[0],Y=Q[1],Z=Object(c.useState)(v[u.x][u.y]),$=Object(s.a)(Z,2),et=$[0],nt=$[1];Object(c.useEffect)((function(){Y(v[n.x][n.y]),nt(v[u.x][u.y]),B&&(T(v),J(!1))}),[n,u,v]);var rt=function(t,e,n,r){var c=Object(b.a)(v),o=c[t][e];if(n){if(o.end)return;var i=Object(j.a)(Object(j.a)({},o),{},{start:!1});c[t][e]=i}if(r){if(o.start)return;var a=Object(j.a)(Object(j.a)({},o),{},{end:!1});c[t][e]=a}h(c)},ct=function(t,e,r,c){var i=Object(b.a)(v),a=i[t][e];if(r){if(a.end)return;o({x:t,y:e});var s=Object(j.a)(Object(j.a)({},a),{},{start:!0});return i[t][e]=s,void(q&&bt(i,s,i[u.x][u.y]))}if(c){if(a.start)return;f({x:t,y:e});var l=Object(j.a)(Object(j.a)({},a),{},{end:!0});return i[t][e]=l,void(q&&bt(i,i[n.x][n.y],l))}},ot=function(t,e,r){var c=Object(b.a)(v),o=c[t][e];if(r){var i;i=o.weight>0?Object(j.a)(Object(j.a)({},o),{},{weight:0}):Object(j.a)(Object(j.a)({},o),{},{weight:10}),c[t][e]=i}else{var a=Object(j.a)(Object(j.a)({},o),{},{isWall:!o.isWall});c[t][e]=a}q&&bt(c,c[n.x][n.y],c[u.x][u.y])},st=function(t){for(var e=[],n=t;null!==n;)e.unshift(n),n=n.previousNode;return e},ut=function(){var t=Object(b.a)(v);t.forEach((function(t){t.forEach((function(t){t.visited=!1,t.shortest=!1,t.shortest=!1,t.fScore=1/0,t.gScore=1/0,t.previousNode=null}))})),h(t)},ft=function(t,e){setTimeout((function(){for(var e=function(e){setTimeout((function(){h((function(n){var r=Object(b.a)(n),c=t[e],o=Object(j.a)(Object(j.a)({},c),{},{shortest:!0});return r[c.y][c.x]=o,r}))}),50*e)},n=0;n<t.length;n++)e(n);H(!0)}),50*e)},jt=function(t,e){setTimeout((function(){h((function(n){var r=Object(b.a)(n),c=t[e],o=Object(j.a)(Object(j.a)({},c),{},{visited:!0});return r[c.y][c.x]=o,r}))}),50*e)},bt=function(t,e,n){ut();tt(t,e,n);console.log(t);for(var r=st(n),c=function(t){h((function(e){var n=Object(b.a)(e),c=r[t],o=Object(j.a)(Object(j.a)({},c),{},{shortest:!0});return n[c.y][c.x]=o,n}))},o=0;o<r.length;o++)c(o)},lt={mouseDown:function(t,e,n){m(!0),v[t][e].start?L(!0):L(!1),v[t][e].end?U(!0):U(!1),v[t][e].start||v[t][e].end?ct(t,e,C,D):ot(t,e,n)},mouseEnter:function(t,e,n){g&&(C||D?ct(t,e,C,D):ot(t,e,n))},mouseUp:function(t,e){m(!1),L(!1),U(!1)},mouseLeave:function(t,e,n){g&&rt(t,e,C,D)},isWeight:S},dt=S?"weight":"wall";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(P,{children:[Object(r.jsx)(I,{onClick:function(){ut();var t=tt(v,X,et),e=st(et);ut();for(var n=0;n<t.length;n++)n===t.length-1&&ft(e,n),jt(t,n)},children:"Animate"}),Object(r.jsx)(I,{onClick:function(){k(!S)},children:dt}),Object(r.jsx)(I,{onClick:function(){h(W(l)),H(!1),J(!0)},children:"maze"})]}),Object(r.jsx)(it,{children:v.map((function(t,e){return Object(r.jsx)(at,{children:t.map((function(t,e){return lt=Object(j.a)(Object(j.a)({},lt),t),t.x===X.x&&t.y===X.y?Object(r.jsx)(_,{data:Object(j.a)(Object(j.a)({},lt),{},{start:!0})},e):t.x===et.x&&t.y===et.y?Object(r.jsx)(_,{data:Object(j.a)(Object(j.a)({},lt),{},{end:!0})},e):Object(r.jsx)(_,{data:lt},e)}))},e)}))}),Object(r.jsx)(G,{children:Object(r.jsx)(I,{onClick:function(){H(!1),h(W(l))},children:"reset"})})]})};function ut(){var t=Object(u.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  html, body, #root{\n    margin: 0;\n    padding: 0;    \n  }\n    \n  "]);return ut=function(){return t},t}var ft=Object(f.a)(ut());function jt(){var t=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n"]);return jt=function(){return t},t}function bt(){var t=Object(u.a)(["\n  font-family: Georgia, 'Times New Roman', Times, serif;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  height: 100vh;\n"]);return bt=function(){return t},t}var lt=f.c.div(bt()),dt=f.c.div(jt());var Ot=function(){var t=Object(c.useState)("dijkstra"),e=Object(s.a)(t,2),n=e[0],o=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(ft,{}),Object(r.jsx)(lt,{children:Object(r.jsxs)(dt,{children:[Object(r.jsxs)(P,{children:[Object(r.jsx)(J,{selection:n,algorithmName:"dijkstra",onClick:function(){o("dijkstra")},children:"dijkstra"}),Object(r.jsx)(J,{selection:n,algorithmName:"astar",onClick:function(){o("astar")},children:"a*"})]}),"dijkstra"===n&&Object(r.jsx)(R,{}),"astar"===n&&Object(r.jsx)(st,{}),Object(r.jsx)("br",{}),Object(r.jsxs)("h3",{children:["* Switch between algorithms by clicking on the respective button",Object(r.jsx)("br",{}),"* Click the wall button to change to a weight and vice versa",Object(r.jsx)("br",{}),"* Click anywhere in the grid to place a wall or weight",Object(r.jsx)("br",{}),"* Click the maze button to generate a maze",Object(r.jsx)("br",{}),"* Click the reset button to reset the grid"]})]})})]})},vt=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),r(t),c(t),o(t),i(t)}))};a.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(Ot,{})}),document.getElementById("root")),vt()}},[[24,1,2]]]);
//# sourceMappingURL=main.31ec9c19.chunk.js.map