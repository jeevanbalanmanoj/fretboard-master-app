(this["webpackJsonpfretboard-hero-app"]=this["webpackJsonpfretboard-hero-app"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n.p+"static/media/guitar.20eb6787.png"},function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(6),c=n.n(o),i=(n(13),n(1)),l=n(2),s=n(4),u=n(3),h=n(7),m=n.n(h);var p={paddingTop:"20px"},d={background:"#333",color:"#fff",textAlign:"center",padding:"10px"},f=function(){return r.a.createElement("header",{style:d},r.a.createElement("h1",null,"Fretboard master"," ",r.a.createElement("div",{className:"guitarImage"},r.a.createElement("img",{style:p,src:m.a,width:"100px"}))))},v=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={note:"C",stringNo:1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;setInterval((function(){return e.setState({note:(t=e.props.isChromatic,t?C[b(0,11)]:g[b(0,6)]),stringNo:b(1,6)});var t}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{style:E},this.state.stringNo,this.state.note))}}]),n}(a.Component),g=["C","D","E","F","G","A","B"],C=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];function b(e,t){return Math.floor(Math.random()*(t-e+1))+e}var E={color:"black",fontSize:"300px",textAlign:"center",padding:"10px"},y=v,k=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleCheck=function(){e.props.toggleIsChromatic()},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Chromatic notes","  "),r.a.createElement("input",{onChange:this.handleCheck,type:"checkbox",defaultChecked:this.props.isChromatic}))}}]),n}(a.Component),j=(n(14),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isChromatic:!1},e.toggleIsChromatic=function(){e.setState({isChromatic:!e.state.isChromatic})},e}return Object(l.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement(f,null),r.a.createElement(k,{toggleIsChromatic:this.toggleIsChromatic,isChromatic:this.state.isChromatic}),r.a.createElement(y,{isChromatic:this.state.isChromatic})))}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.f1baa9aa.chunk.js.map