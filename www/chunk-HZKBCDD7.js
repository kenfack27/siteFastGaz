import{c as n}from"./chunk-2YKTPJZC.js";import{b as t,g as a,h as r,l as s}from"./chunk-IRYDOO2A.js";import"./chunk-FP7EQKGB.js";var i=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",e=i,c=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",p=c,d=class{constructor(o){t(this,o),this.ionBackdropTap=s(this,"ionBackdropTap",7),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}onMouseDown(o){this.emitTap(o)}emitTap(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){let o=n(this);return a(r,{key:"7abaf2c310aa399607451b14063265e8a5846938","aria-hidden":"true",class:{[o]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};d.style={ios:e,md:p};export{d as ion_backdrop};
