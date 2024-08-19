"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1330],{6218:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var o=s(4848),a=s(8453),n=s(1470),t=s(9365);const i=e=>{let{children:r,color:s}=e;return(0,o.jsx)("span",{style:{backgroundColor:s,borderRadius:"2px",color:"#fff",padding:"0.2rem"},children:r})},l={},u="Simulador",c={id:"componentes/simulador",title:"Simulador",description:"Software o qual simula, gr\xe1ficamente, o resultado da execu\xe7\xe3o de um dado programa, fosse este escrito na mem\xf3ria do processador ICMC.",source:"@site/docs/2-componentes/2-simulador.mdx",sourceDirName:"2-componentes",slug:"/componentes/simulador",permalink:"/Processador-ICMC/docs/componentes/simulador",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-componentes/2-simulador.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Montador",permalink:"/Processador-ICMC/docs/componentes/montador"},next:{title:"IDE",permalink:"/Processador-ICMC/docs/componentes/IDE"}},d={},m=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",level:2},{value:"Uso",id:"uso",level:2},{value:"Arquivos necess\xe1rios \xe0 simula\xe7\xe3o",id:"arquivos-necess\xe1rios-\xe0-simula\xe7\xe3o",level:3},{value:"Descri\xe7\xe3o da interface gr\xe1fica",id:"descri\xe7\xe3o-da-interface-gr\xe1fica",level:3}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.header,{children:(0,o.jsx)(r.h1,{id:"simulador",children:"Simulador"})}),"\n",(0,o.jsx)(r.p,{children:"Software o qual simula, gr\xe1ficamente, o resultado da execu\xe7\xe3o de um dado programa, fosse este escrito na mem\xf3ria do processador ICMC."}),"\n",(0,o.jsx)(r.p,{children:"Este encontra-se dispon\xedvel em duas vers\xf5es:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsxs)(r.strong,{children:['"',(0,o.jsx)(r.em,{children:"Original"}),'":']})," possui como depend\xeancias do simulador os pacotes ",(0,o.jsx)(r.code,{children:"gtk2"})," e ",(0,o.jsx)(r.code,{children:"ncurses"}),", os quais devem ser instalados (recomenda-se com o gerenciador de pacotes da sua distribui\xe7\xe3o) antes de poder ser utilizado."]}),"\n"]}),"\n",(0,o.jsxs)(r.li,{children:["\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Browser:"})," pode ser utilizado diretamente em um navegador gr\xe1fico. Este foi testado nos navegadores Firefox e Chromium;"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(r.admonition,{title:"\xc0 saber",type:"info",children:(0,o.jsxs)(r.p,{children:["Apenas o simulador original necessita ser instalado para ser utilizado, aquele browser est\xe1 acess\xedvel no endere\xe7o ",(0,o.jsx)(r.a,{href:"https://thiagoambiel.github.io/SimuladorICMC/",children:"https://thiagoambiel.github.io/SimuladorICMC/"}),". N\xe3o obstante, abaixo est\xe1 descrito o processo de instala\xe7\xe3o para ambas as vers\xf5es, tal que possam ser utilizados localmente."]})}),"\n",(0,o.jsx)(r.h2,{id:"instala\xe7\xe3o",children:"Instala\xe7\xe3o"}),"\n",(0,o.jsxs)(n.A,{children:[(0,o.jsxs)(t.A,{value:"Original",children:[(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"wget https://github.com/de-abreu/Processador-ICMC/raw/master/simulator/original_simulator.zip\nunzip original_simulator.zip\ncd original\ngcc *.c -o sim\n"})}),(0,o.jsxs)(r.p,{children:["Com isso voc\xea ter\xe1 em m\xe3os o execut\xe1vel ",(0,o.jsx)(r.code,{children:"sim"}),". Leve-o ao diret\xf3rio em que estiver trabalhando, conforme sua conveni\xeancia."]})]}),(0,o.jsxs)(t.A,{value:"Browser",children:[(0,o.jsx)(r.admonition,{type:"warning",children:(0,o.jsxs)(r.p,{children:["Assume-se pelo comando ",(0,o.jsx)(r.code,{children:"open"})," que o browser a ser utilizado \xe9 aquele definido como sendo o padr\xe3o para o usu\xe1rio em quest\xe3o."]})}),(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"wget https://github.com/de-abreu/Processador-ICMC/raw/master/simulator/browser_simulator.zip\nunzip browser_simulator.zip\nopen browser/index.html\n"})})]})]}),"\n",(0,o.jsx)(r.h2,{id:"uso",children:"Uso"}),"\n",(0,o.jsx)(r.h3,{id:"arquivos-necess\xe1rios-\xe0-simula\xe7\xe3o",children:"Arquivos necess\xe1rios \xe0 simula\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["Os simuladores necessitam de um par de arquivos ",(0,o.jsx)(r.code,{children:".mif"})," para operarem sobre: o primeiro referente ao jogo \uff0d e gerado pelo ",(0,o.jsx)(r.a,{href:"/docs/componentes/montador",children:"montador"})," \uff0d e o segundo ao ",(0,o.jsx)(r.a,{href:"/docs/guias/charmaps",children:"charmap"})," correspondente, respectivamente. Para o simulador original, estes podem ser repassados conforme o comando"]}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-bash",children:"./sim jogo.mif charmap.mif\n"})}),"\n",(0,o.jsx)(r.p,{children:"Enquanto o simulador para browser, este, quando aberto, apresenta uma interface gr\xe1fica que propicia a navega\xe7\xe3o pelo gerenciador de arquivos para selecionar estes mesmos arquivos."}),"\n",(0,o.jsx)(r.h3,{id:"descri\xe7\xe3o-da-interface-gr\xe1fica",children:"Descri\xe7\xe3o da interface gr\xe1fica"}),"\n",(0,o.jsx)(r.p,{children:"Ambos os simuladores possuem interfaces semelhantes entre si, as quais devem figurar os seguintes dois componentes:"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{alt:"Jogo Frogger Demake, rodando no simulador original",src:s(3395).A+"",width:"1024",height:"613"})}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:(0,o.jsx)(i,{color:"#26762b",children:"Registradores"})})," Ao topo est\xe3o descritos os valores armazenados nos registradores."]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.strong,{children:(0,o.jsx)(i,{color:"#64272b",children:"Instru\xe7\xf5es"})})," A atual instru\xe7\xe3o sendo lida (primeira linha) e as instru\xe7\xf5es seguintes armazenadas na mem\xf3ria."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Para saber o que s\xe3o e o que fazem os ",(0,o.jsx)(r.strong,{children:"registradores"})," descritos pelo simulador, consulte a se\xe7\xe3o referente a estes na p\xe1gina do ",(0,o.jsx)(r.a,{href:"/docs/componentes/processador",children:"processador"}),"."]}),"\n",(0,o.jsxs)(r.admonition,{title:"Do you want to know more?",type:"info",children:[(0,o.jsx)(r.p,{children:"A tempo de escrita deste documento, existem uma variedade de simuladores alternativos desenvolvido por alunos do ICMC. Dentre os quais:"}),(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://github.com/de-abreu/Processador-ICMC/blob/master/simulator/opengl/README.md",children:"OpenGL_Simulator"})," por Breno Queiroz e Maria Eduarda Moreira;"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://github.com/lucasgpulcinelli/goICMCsim",children:"goICMCsim"})," por Lucas Pulcinelli;"]}),"\n",(0,o.jsxs)(r.li,{children:[(0,o.jsx)(r.a,{href:"https://proc.giroto.dev/",children:"ICMC's CPU Emulator"})," por Vinicius Giroto \uff0d este trata-se de uma IDE que cont\xe9m seu pr\xf3prio simulador."]}),"\n"]})]})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},9365:(e,r,s)=>{s.d(r,{A:()=>t});s(6540);var o=s(4164);const a={tabItem:"tabItem_Ymn6"};var n=s(4848);function t(e){let{children:r,hidden:s,className:t}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,o.A)(a.tabItem,t),hidden:s,children:r})}},1470:(e,r,s)=>{s.d(r,{A:()=>w});var o=s(6540),a=s(4164),n=s(3104),t=s(6347),i=s(205),l=s(7485),u=s(1682),c=s(679);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:r,children:s}=e;return(0,o.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:s,attributes:o,default:a}}=e;return{value:r,label:s,attributes:o,default:a}}))}(s);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function h(e){let{queryString:r=!1,groupId:s}=e;const a=(0,t.W6)(),n=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,l.aZ)(n),(0,o.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function f(e){const{defaultValue:r,queryString:s=!1,groupId:a}=e,n=m(e),[t,l]=(0,o.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const o=s.find((e=>e.default))??s[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:r,tabValues:n}))),[u,d]=h({queryString:s,groupId:a}),[f,g]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,c.Dv)(s);return[a,(0,o.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),b=(()=>{const e=u??f;return p({value:e,tabValues:n})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:t,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,n]),tabValues:n}}var g=s(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(4848);function v(e){let{className:r,block:s,selectedValue:o,selectValue:t,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),c=e=>{const r=e.currentTarget,s=l.indexOf(r),a=i[s].value;a!==o&&(u(r),t(a))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;r=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;r=l[s]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":s},r),children:i.map((e=>{let{value:r,label:s,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:o===r?0:-1,"aria-selected":o===r,ref:e=>l.push(e),onKeyDown:d,onClick:c,...n,className:(0,a.A)("tabs__item",b.tabItem,n?.className,{"tabs__item--active":o===r}),children:s??r},r)}))})}function j(e){let{lazy:r,children:s,selectedValue:n}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===n));return e?(0,o.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,o.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function C(e){const r=f(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function w(e){const r=(0,g.A)();return(0,x.jsx)(C,{...e,children:d(e.children)},String(r))}},3395:(e,r,s)=>{s.d(r,{A:()=>o});const o=s.p+"assets/images/simulador-66df996f9a3d1e0e892a011644bb1253.svg"},8453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>i});var o=s(6540);const a={},n=o.createContext(a);function t(e){const r=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),o.createElement(n.Provider,{value:r},e.children)}}}]);