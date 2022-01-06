"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5780],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:r,o[1]=d;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},15564:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],d={sidebar_label:"9. Withdraw Rent"},c="Withdraw Rent",l={unversionedId:"candy-machine-v2/withdraw",id:"candy-machine-v2/withdraw",title:"Withdraw Rent",description:"Candy Machines use an account to store configuration and a (potentially) large list for pointers to assets to control the mint. To have this data stored on-chain, you need to pay rent in SOL - this is the cost associated to set up a Candy Machine. After a Candy Machine is fully minted, this data is useless and there is no need to continue to pay rent.",source:"@site/docs/candy-machine-v2/10-withdraw.md",sourceDirName:"candy-machine-v2",slug:"/candy-machine-v2/withdraw",permalink:"/candy-machine-v2/withdraw",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v2/10-withdraw.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_label:"9. Withdraw Rent"},sidebar:"sidebar",previous:{title:"8. Update the Candy Machine",permalink:"/candy-machine-v2/update"},next:{title:"Introduction",permalink:"/fair-launch/introduction"}},s=[{value:"Requirements",id:"requirements",children:[],level:2},{value:"Execution",id:"execution",children:[],level:2}],u={toc:s};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"withdraw-rent"},"Withdraw Rent"),(0,i.kt)("p",null,"Candy Machines use an account to store configuration and a (potentially) large list for pointers to assets to control the mint. To have this data stored on-chain, you need to pay rent in SOL - this is the cost associated to set up a Candy Machine. After a Candy Machine is fully minted, this data is useless and there is no need to continue to pay rent."),(0,i.kt)("p",null,"To drain the account of a Candy Machine and recover the rent SOL, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," command."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You should not withdraw the rent of a live Candy Machine, as the Candy Machine will stop working when you drain its account."))),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," command must be executed with the keypair that created the Candy Machine - it will find all Candy Machines accounts made by this keypair and attempt to drain them. Below are the options used in most cases for the ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," command:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"option"),(0,i.kt)("th",{parentName:"tr",align:null},"description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-k, --keypair <PublicKey>")),(0,i.kt)("td",{parentName:"tr",align:null},"SOL wallet that created the Candy Machine")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-e, --env <string>")),(0,i.kt)("td",{parentName:"tr",align:null},"Solana cluster environment (default: ",(0,i.kt)("inlineCode",{parentName:"td"},"devnet"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-d, --dry")),(0,i.kt)("td",{parentName:"tr",align:null},"Show the withdraw amount without withdrawing the rent")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-ch, --charity <PublicKey>")),(0,i.kt)("td",{parentName:"tr",align:null},"SOL wallet for donation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-cp, --charityPercent <number>")),(0,i.kt)("td",{parentName:"tr",align:null},"Donation percentage of the total SOL drained")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-r, --rpc-url <string>")),(0,i.kt)("td",{parentName:"tr",align:null},"custom RPC as the withdraw is a network-intensive command")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," command drains all Candy Machine accounts made by the specified keypair. You need to make sure that you want to drain all Candy Machines before you proceed. It is ",(0,i.kt)("strong",{parentName:"p"},"strongly advised")," that you first run the command with the option ",(0,i.kt)("inlineCode",{parentName:"p"},"--dry")," to see how much you have locked up in those accounts and to make sure you are not draining an account you need. ")),(0,i.kt)("h2",{id:"execution"},"Execution"),(0,i.kt)("p",null,"To start the withdraw process, execute the ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw")," command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts withdraw \\\n    -e devnet \\\n    -k ~/.config/solana/devnet.json\n")),(0,i.kt)("p",null,"If there are Candy Machine accounts to be drained, you will see an output similar to:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Total Number of Candy Machine Config Accounts to drain 50.03644952 SOL locked up in configs\nWARNING: This command will drain ALL of the Candy Machine config accounts that are owned by your current KeyPair, this will break your Candy Machine if its still in use.\n...\nHSLcb56y2wQEdaTcNoybcPJRrXuxRe3AnAXhpvJmZkMo has been withdrawn. \n...\nCongratulations, 1 config accounts have been successfully drained.\nNow you kinda rich, please consider supporting Open Source developers.\n")))}p.isMDXComponent=!0}}]);