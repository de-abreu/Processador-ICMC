"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3043],{3100:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=r(4848),t=r(8453),o=r(1470),s=r(9365);const l={},i="Montador",c={id:"componentes/montador",title:"Montador",description:"Software respons\xe1vel pela tradu\xe7\xe3o das instru\xe7\xf5es em linguagem assembly a sua forma correspondente em c\xf3digo bin\xe1rio para execu\xe7\xe3o pela placa FPGA.",source:"@site/docs/2-componentes/1-montador.mdx",sourceDirName:"2-componentes",slug:"/componentes/montador",permalink:"/Processador-ICMC/en/docs/componentes/montador",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-componentes/1-montador.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Componentes",permalink:"/Processador-ICMC/en/docs/category/componentes"},next:{title:"Simulador",permalink:"/Processador-ICMC/en/docs/componentes/simulador"}},u={},d=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",level:2},{value:"Uso",id:"uso",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"montador",children:"Montador"})}),"\n",(0,a.jsxs)(n.p,{children:["Software respons\xe1vel pela tradu\xe7\xe3o das ",(0,a.jsx)(n.a,{href:"/docs/linguagem-assembly/instrucoes",children:"instru\xe7\xf5es em linguagem assembly"})," a sua forma correspondente em c\xf3digo bin\xe1rio para execu\xe7\xe3o pela placa FPGA."]}),"\n",(0,a.jsx)(n.p,{children:"Por exemplo:"}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"Assembly",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-asmatmel",children:'; Prints "Hello Mom" at the top left corner of the screen and halts.\n\njmp main\n\nhello: string "Hello Mom"\n\nmain:\n    loadn r0, #0         ; r0 = 0\n    loadn r1, #hello     ; r1 = Pointer to the string to be printed\n    loadn r2, #0         ; r2 = Screen position\n\n    printLoop:\n        loadi r3, r1     ; Retrieve character to be printed\n        cmp r0, r3       ; and check if it is the terminator character.\n        jeq endLoop      ; Escape if it is.\n        outchar r3, r2   ; Otherwise, print it and continue.\n        inc r1           ; Increment string pointer\n        inc r2           ; Increment screen position\n        jmp printLoop\n    endLoop:\n        halt\n'})})}),(0,a.jsx)(s.A,{value:"Bin\xe1rio",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"-- Codigo gerado pelo montador\nWIDTH=16;\nDEPTH=65536;\nADDRESS_RADIX=UNS;\nDATA_RADIX=BIN;\nCONTENT BEGIN\n0:0000100000000000;\n1:0000000000001100;\n2:0000000001001000;\n3:0000000001100101;\n4:0000000001101100;\n5:0000000001101100;\n6:0000000001101111;\n7:0000000000100000;\n8:0000000001101101;\n9:0000000001101111;\n10:0000000001101101;\n11:0000000000000000;\n12:1110000000000000;\n13:0000000000000000;\n14:1110000010000000;\n15:0000000000000010;\n16:1110000100000000;\n17:0000000000000000;\n18:1111000110010000;\n19:0101100000110000;\n20:0000100001000000;\n21:0000000000011011;\n22:1100100110100000;\n23:1001000010000000;\n24:1001000100000000;\n25:0000100000000000;\n26:0000000000010010;\n27:0011110000000000;\n28:0000000000000000;\n29:0000000000000000;\n[...]\n65533:0000000000000000;\n65534:0000000000000000;\n65535:0000000000000000;\nEND;\n\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"instala\xe7\xe3o",children:"Instala\xe7\xe3o"}),"\n",(0,a.jsx)(n.p,{children:"O montador encontra-se dispon\xedvel em duas vers\xf5es:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"v1.0.0 stable"})," (recomendado)"]}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.code,{children:"v2.1.0 beta"})}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Para instal\xe1-las execute os seguintes comandos:"}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"stable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/de-abreu/Processador-ICMC/raw/master/assembler/assembler-stable.zip\nunzip assembler-stable.zip\ncd stable\ngcc *.c -o montador\n"})})}),(0,a.jsx)(s.A,{value:"beta",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"wget https://github.com/de-abreu/Processador-ICMC/raw/master/assembler/assembler-beta.zip\nunzip assembler-beta.zip\ncd beta\ngcc *.c -o montador\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["Com isso voc\xea ter\xe1 em m\xe3os o execut\xe1vel ",(0,a.jsx)(n.code,{children:"montador"}),". Leve-o ao diret\xf3rio em que estiver trabalhando, conforme sua conveni\xeancia."]}),"\n",(0,a.jsx)(n.h2,{id:"uso",children:"Uso"}),"\n",(0,a.jsxs)(n.p,{children:["Sem perda de generalidade, considere um arquivo assembly ",(0,a.jsx)(n.code,{children:"jogo.asm"}),". N\xe3o havendo erros de sintaxe neste, executar o seguinte comando produz o arquivo bin\xe1rio ",(0,a.jsx)(n.code,{children:"jogo.mif"}),":"]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(s.A,{value:"stable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./montador jogo.asm jogo.mif\n"})})}),(0,a.jsx)(s.A,{value:"beta",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./montador jogo.asm\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Doutra forma, havendo erros de sintaxe, uma mensagem de erro correspondente ser\xe1 emitida."}),"\n",(0,a.jsx)(n.admonition,{title:"TODO",type:"info",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Encontrar e detalhar a instala\xe7\xe3o para usu\xe1rios de Windows"}),"\n",(0,a.jsx)(n.li,{children:"Detalhar mais op\xe7\xf5es de uso do montador"}),"\n"]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},9365:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var a=r(4164);const t={tabItem:"tabItem_Ymn6"};var o=r(4848);function s(e){let{children:n,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(t.tabItem,s),hidden:r,children:n})}},1470:(e,n,r)=>{r.d(n,{A:()=>w});var a=r(6540),t=r(4164),o=r(3104),s=r(6347),l=r(205),i=r(7485),c=r(1682),u=r(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:r}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:a,default:t}}=e;return{value:n,label:r,attributes:a,default:t}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:r}=e;const t=(0,s.W6)(),o=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,i.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(t.location.search);n.set(o,e),t.replace({...t.location,search:n.toString()})}),[o,t])]}function b(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,o=m(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=h({queryString:r,groupId:t}),[b,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,o]=(0,u.Dv)(r);return[t,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:t}),x=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,l.A)((()=>{x&&i(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,o]),tabValues:o}}var f=r(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function g(e){let{className:n,block:r,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,r=i.indexOf(n),t=l[r].value;t!==a&&(c(n),s(t))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;n=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;n=i[r]??i[i.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,t.A)("tabs__item",x.tabItem,o?.className,{"tabs__item--active":a===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:o}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function I(e){const n=b(e);return(0,v.jsxs)("div",{className:(0,t.A)("tabs-container",x.tabList),children:[(0,v.jsx)(g,{...n,...e}),(0,v.jsx)(j,{...n,...e})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(n))}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var a=r(6540);const t={},o=a.createContext(t);function s(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);