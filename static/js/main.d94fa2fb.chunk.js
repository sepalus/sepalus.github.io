(this["webpackJsonpdesign-portfolio"]=this["webpackJsonpdesign-portfolio"]||[]).push([[0],{34:function(e,t,i){},35:function(e,t,i){},39:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},46:function(e,t,i){},47:function(e,t,i){},49:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(1),o=i(18),c=i.n(o),s=(i(34),i(4)),r=i(3),l=i.n(r),d=i(16),p=i.n(d);i(35);var b=function(e){var t=e.designerRef,i=e.isMobile,o=e.showTypist,c=e.selectViewport,r=e.setSkipProjectSection,d=Object(n.useState)(!1),b=Object(s.a)(d,2),m=b[0],u=b[1],g=Object(n.useState)(!1),j=Object(s.a)(g,2),h=j[0],f=j[1];return Object(a.jsx)("section",{ref:t,className:"designer-section-container",children:Object(a.jsx)("div",{className:"designer-section-content",children:Object(a.jsxs)("div",{className:"designer-section-typist-wrapper",children:[o?Object(a.jsx)("h3",{className:l()({"typist-button-disabled":!m}),children:Object(a.jsxs)(p.a,{startDelay:700,avgTypingDelay:20,stdTypingDelay:0,cursor:{hideWhenDone:!0,hideWhenDoneDelay:0},onTypingDone:function(){return setTimeout((function(){return u(!0)}),500)},children:[i&&Object(a.jsx)("span",{children:"\xa0\xa0\xa0"}),"Hello, I'm\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){r(!0),c(3)},children:"Sebastian"}),"\xa0a designer ",i&&Object(a.jsx)("br",{}),"in both the physical and digital world",i&&Object(a.jsx)("span",{children:"."})]})}):Object(a.jsxs)("h3",{children:[i&&Object(a.jsx)("span",{children:"\xa0\xa0\xa0"}),"Hello, I'm\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){r(!0),c(3)},children:"Sebastian"}),"\xa0a designer ",i&&Object(a.jsx)("br",{}),"in both the physical and digital world",i&&Object(a.jsx)("span",{children:"."})]}),o?m&&Object(a.jsx)("h3",{className:l()({"typist-button-disabled":!h}),children:Object(a.jsxs)(p.a,{startDelay:200,avgTypingDelay:20,stdTypingDelay:0,cursor:{hideWhenDone:!0,hideWhenDoneDelay:0},onTypingDone:function(){return setTimeout((function(){return f(!0)}),500)},children:[!i&&Object(a.jsx)("span",{children:"\xa0"}),"If you\u2019re interested in what I\u2019ve done, ",i&&Object(a.jsx)("br",{}),i&&Object(a.jsx)("span",{children:"\xa0\xa0\xa0\xa0"}),"please take a look at my\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return c(1)},children:"work"})]})}):Object(a.jsxs)("h3",{children:[!i&&Object(a.jsx)("span",{children:"\xa0"})," If you\u2019re interested in what I\u2019ve done, ",i&&Object(a.jsx)("br",{}),i&&Object(a.jsx)("span",{children:"\xa0\xa0\xa0\xa0"}),"please take a look at my\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return c(1)},children:"work"})]})]})})})},m=i(17),u=(i(39),i(13)),g=i.n(u),j=i(14),h=i.n(j),f=i(15),x=i.n(f);var O=function(e){var t=e.designArea,i=e.projects,n=e.activeProjectIndex,o=e.catalogIsCompressed,c=e.setCatalogIsCompressed,s=e.setToggleCardImageClass,r=e.selectProject,d=e.setCatalogIsOpenMobile,p=e.catalogIsOpenMobile,b=e.isMobile,m=2===t,u=i[n].hasOwnProperty("catalogColorDark")?i[n].catalogColorDark:i[n].mainColorDark||!1;return b&&c(!1),Object(a.jsxs)("div",{className:l()("project-catalog",{"project-catalog-compressed animate-catalog-compress":o},{"animate-catalog-expand":!o},{"project-catalog-dark":u},{"project-catalog-closed":b&&!p}),children:[b?Object(a.jsx)("div",{className:"project-catalog-mobile-close-button-wrapper",children:Object(a.jsx)(x.a,{onClick:function(){return d(!1)}})}):Object(a.jsx)("h2",{children:o?".":m?"Digital and Service":"Products and Furniture"}),Object(a.jsx)("ul",{className:"project-catalog-projects",children:i.map((function(e,t){var i=t===n;return Object(a.jsx)("li",{className:l()({"project-catalog-active-project":i}),children:Object(a.jsx)("button",{className:l()("link-button",{"icon-button icon-button-space":i}),onClick:function(){return r(t)},children:o?Object(a.jsx)("img",{width:e.iconSize||"24px",height:e.iconSize||"24px",src:"./assets/icons/".concat(e.id,".png"),alt:""}):Object(a.jsx)("h4",{children:e.title})})})}))}),Object(a.jsx)("div",{className:l()("vertical-line vertical-line-top",{"vertical-line-right":m},{" vertical-line-mobile":b})}),Object(a.jsx)("div",{className:l()("vertical-line vertical-line-bottom",{"vertical-line-right":m},{"hide-element":b})}),!b&&Object(a.jsx)("div",{className:"project-catalog-expand-button",children:o&&!m||!o&&m?Object(a.jsx)(g.a,{onClick:function(){s(1),c(!o)}}):Object(a.jsx)(h.a,{onClick:function(){s(1),c(!o)}})})]})},y=i(2),v=(i(43),i(24)),k=i.n(v),w=i(23),C=i.n(w),S=i(22),T=i.n(S);i(44);var D=function(e){var t=e.currentViewport,i=e.activeProject,o=e.toggleDescriptionClass,c=e.windowHeight,r=e.isMobile,d=e.isTablet,p=Object(n.useState)(!1),b=Object(s.a)(p,2),m=b[0],u=b[1],g=c<600;Object(n.useEffect)((function(){return window.addEventListener("click",(function(){var e=document.getElementById("project-card-description-tag-".concat(i.id));e&&("hidden"!==window.getComputedStyle(e).getPropertyValue("border-style")&&u(!1))})),function(){window.removeEventListener("click",(function(){}))}}),[i]),Object(n.useEffect)((function(){u(!1)}),[t]);var j=r?i.mainColorDark:i.hasOwnProperty("descriptionColorDark")?i.descriptionColorDark:i.mainColorDark||!1;return Object(a.jsx)("div",{className:l()("project-card-description",{"project-card-description-dark":j},{"animate-description-in-1":1===o},{"animate-description-in-2":-1===o},{"animate-description-out":0===o},{"animate-description-static":2===o},{"scrollable-element":r}),style:r?{}:d?Object(y.a)(Object(y.a)({},i.descriptionStyle),i.descriptionStyleTablet):Object(y.a)({},i.descriptionStyle),children:Object(a.jsxs)("div",{className:l()("project-card-description-content-container",{"project-card-description-content-container-small-height":g}),children:[!r&&Object(a.jsx)("div",{className:"vertical-line"}),Object(a.jsx)("h3",{className:"project-card-description-title",children:i.title}),!g&&Object(a.jsx)("p",{className:"project-card-description-text",children:i.description}),Object(a.jsxs)("div",{className:"project-card-description-tag-wrapper",children:[Object(a.jsxs)("div",{className:"project-card-description-tag",children:[Object(a.jsx)(T.a,{className:"project-card-description-tag-icon"}),Object(a.jsxs)("p",{className:"text-emphasized",children:[" ",i.year]})]}),Object(a.jsxs)("div",{id:"project-card-description-tag-".concat(i.id),className:l()("project-card-description-tag",{"project-card-description-tag-design-team":!r&&i.isTeam},{"project-card-description-tag-design-team-open":!r&&m}),children:[i.isTeam?Object(a.jsx)(C.a,{className:"project-card-description-tag-icon"}):Object(a.jsx)(k.a,{className:"project-card-description-tag-icon"}),Object(a.jsxs)("div",{className:l()("project-card-description-tag-designer-wrapper",{"project-card-description-tag-designer-wrapper-open":i.isTeam&&m}),children:[Object(a.jsx)("p",{className:"text-emphasized",onClick:function(){r||u(!0)},children:i.isTeam?"Design Team":"Sebastian H\xf6gnabba"}),!r&&Object(a.jsx)("div",{className:l()("project-card-description-tag-design-team-wrapper",{"project-card-description-tag-design-team-wrapper-show":m},{"project-card-description-tag-design-team-wrapper-horizontal":i.displayTeamHorizontal}),children:i.designTeam&&i.designTeam.map((function(e){return Object(a.jsx)("p",{children:e})}))})]})]})]})]})})};i(45);var I=function(e){var t=e.activeImageIndex,i=e.selectImage,n=e.index;return Object(a.jsx)("span",{className:l()({"project-card-controls-image-active-button":t===n}),onClick:function(){return i(n)}})},N=function(e){var t=e.activeProject,i=e.activeImageIndex,o=e.imageAmount,c=e.filteredImages,s=e.currentViewport,r=e.catalogIsCompressed,d=e.selectImage,p=e.isMobile,b=function(e){1!==s&&2!==s||(32===e.keyCode&&d(i+1),37===e.keyCode&&d(i-1),39===e.keyCode&&d(i+1))},m=p?t.mainColorDark:t.hasOwnProperty("controlColorDark")?t.controlColorDark:t.mainColorDark||!1;return Object(n.useEffect)((function(){return window.addEventListener("keydown",b),function(){window.removeEventListener("keydown",b)}}),[b]),Object(a.jsx)("div",{className:l()("project-card-controls",{"project-card-controls-dark":m},{"project-card-controls-compressed":r}),children:o>1&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:l()("project-card-control-buttons-container",{"project-card-control-buttons-container-wide":o>6}),children:[Object(a.jsx)(h.a,{className:m?"clickable-text-element-dark":"clickable-text-element",onClick:function(){return d(i-1)}}),Object(a.jsx)("div",{className:"project-card-controls-image-buttons",children:c.map((function(e,t){return Object(a.jsx)(I,{activeImageIndex:i,selectImage:d,index:t})}))}),Object(a.jsx)(g.a,{className:m?"clickable-text-element-dark":"clickable-text-element",onClick:function(){return d(i+1)}})]})})})},M=i(25),A=i.n(M);var W=function(e){var t=e.currentViewport,i=e.designArea,n=e.activeProject,o=e.activeImageIndex,c=e.filteredImages,s=e.filteredImageStyleIndividualMobile,r=e.imageAmount,d=e.catalogIsCompressed,p=e.toggleCardClass,b=e.toggleCardImageClass,m=e.toggleDescriptionClass,u=e.setCatalogIsOpenMobile,g=e.selectImage,j=e.windowHeight,h=e.isMobile,f=e.isTablet,x=2===i;return Object(a.jsxs)("div",{className:"project-card",style:{backgroundColor:n.backgroundColor||"black",color:n.mainColorDark?"black":"white",borderColor:n.mainColorDark?"black":"white"},children:[h&&Object(a.jsxs)("div",{className:l()("project-card-title-element-mobile",{"project-card-title-element-mobile-digital":x}),children:[Object(a.jsx)(A.a,{onClick:function(){return u(!0)}}),Object(a.jsx)("h2",{children:x?"Digital and Service":"Products and Furniture"})]}),Object(a.jsx)("div",{className:"project-card-image-container",children:c.map((function(e,t){var i=n.imageStyle?n.imageStyle.individual?Object(y.a)(Object(y.a)({},n.imageStyle.common),n.imageStyle.individual[t]):n.imageStyle.common:{},c=n.imageStyleTablet?n.imageStyleTablet.individual?Object(y.a)(Object(y.a)({},n.imageStyleTablet.common),n.imageStyleTablet.individual[t]):n.imageStyleTablet.common:{},r=n.imageStyleMobile?s?Object(y.a)(Object(y.a)({},n.imageStyleMobile.common),s[t]):n.imageStyleMobile.common:{},d=Math.max(310,j-360);return Object(a.jsx)("div",{className:l()("project-card-image-wrapper",{"project-card-image-wrapper-active":t===o},{"animate-card-fade-in-1":1===p},{"animate-card-fade-in-2":-1===p},{"animate-card-fade-out":0===p}),children:Object(a.jsx)("img",{src:"./assets/".concat(e),alt:n.title,className:l()(n.classes,{"project-card-image-static":0===b}),style:h?Object(y.a)(Object(y.a)({},r),{},{maxHeight:"".concat(d,"px")}):Object(y.a)(Object(y.a)({},i),c)})})}))}),Object(a.jsx)(D,{currentViewport:t,activeProject:n,toggleDescriptionClass:m,windowHeight:j,isMobile:h,isTablet:f}),Object(a.jsx)(N,{currentViewport:t,activeProject:n,activeImageIndex:o,imageAmount:r,filteredImages:c,catalogIsCompressed:d,selectImage:g,isMobile:h})]})},E=(i(46),{catalogWidth:"380px",catalogWidthPlusMargin:"460px",catalogRemainingWidth:"calc(100% - 380px)",catalogCollapsedWidth:"120px",catalogCollapsedWidthPlusMargin:"200px",catalogCollapsedRemainingWidth:"calc(100% - 120px)",backgroundColorBlack:"black",backgroundColorDark:"#101010",mobileMaxBreakpoint:767,tabletMinBreakpoint:768,tabletMaxBreakpoint:1023,desktopMinBreakpoint:1024}),H=E.catalogWidth,P=E.catalogWidthPlusMargin,B=E.catalogRemainingWidth,V=E.catalogCollapsedWidth,R=E.catalogCollapsedWidthPlusMargin,q=E.catalogCollapsedRemainingWidth,z=E.backgroundColorBlack,F=E.backgroundColorDark,L="258px",U="80px",X="70px",K={top:"50%",transform:"translateY(-50%)"},Y={top:"126px",right:U,width:L},J=Object(y.a)(Object(y.a)({},K),{},{width:L,right:U}),G={top:X,right:U,left:P},Z=Object(y.a)(Object(y.a)({},K),{},{right:"60px",width:"235px"}),$={padding:"30px"},_={height:"calc(100% - 240px)",marginTop:"120px",marginBottom:"120px"},Q=function(e){return Object(y.a)(Object(y.a)({},ce(e)),{},{right:e?R:P,transition:"left 1s, right 1s"})},ee=function(e){return Object(y.a)(Object(y.a)({},_),{},{right:e?V:H,left:0,width:e?q:B,transition:"width 1s",padding:"0px 60px"})},te=function(e){return Object(y.a)(Object(y.a)({},ce(e)),{},{margin:"300px 0px 100px -20px",padding:"0px",height:"calc(100% - 400px)",width:"auto"})},ie=function(e){return{left:e?"118px":"68px",margin:"350px 0px 100px -20px",height:"calc(100% - 450px)"}},ae=function(e){return{left:e?"122px":"80px"}},ne=function(e){return e?{left:"122px",right:"218px"}:{left:"80px",right:"260px"}},oe=function(e){return e?{left:"114px",right:"210px"}:{left:"64px",right:"412px"}},ce=function(e){return{left:e?"140px":U,transition:"left 1s"}},se={id:"kaarna",title:"Kaarna",description:"An electric foldable scooter designed for laid-back cruising. With its innovative rotating folding mechanism, high-quality materials and elegant detailing, Kaarna is designed for people who want to ride the streets in style. An urban mobility solution that matches the character of flourishing cities.",year:2017,isTeam:!1,categories:["Product Design","Vehicle Design","Urban Mobility"],displayableCategory:1,images:["kaarna1.jpg","kaarna2.jpg","kaarna3.jpg","kaarna4.jpg"],descriptionStyle:Object(y.a)(Object(y.a)({},Y),{},{width:"285px"}),descriptionStyleTablet:Object(y.a)(Object(y.a)({},K),{},{width:"244px",right:U}),mainColorDark:!1,controlColorDark:!0,backgroundColor:z},re={id:"tyyni",title:"Tyyni",description:"A sound diffusing wall element, with oustanding acoustic qualities and beautiful form. The overall shape of Tyyni is based on a tested mathematical equation that ensures a high-quality sonic experinece. The wave-like form gives a visual expression that matches the acoustic qualities - without compromising the sound.",year:2017,isTeam:!1,categories:["Product Design","Acoustic Design","Wall Panel Design"],displayableCategory:1,images:["tyyni1.jpg","tyyni2.jpg"],descriptionStyle:Object(y.a)(Object(y.a)({},J),{},{transform:"translateY(-70%)",width:L}),descriptionStyleTablet:{top:"200px",width:"180px",right:"40px",transform:"translateY(0)"},mainColorDark:!1,controlColorDark:!0,descriptionColorDark:!0,backgroundColor:F},le={id:"kierre",title:"Kierre",description:"An electric toothbrush designed for recyclability and the circular economy. The shell of the toothbrush is manufactured from recycled plastic, made out of monomaterial components and designed for easy disassembly. Kierre showcases that products designed for recyclability can be beautiful, by turning the recyclable features into the product's own aesthetics.",year:2020,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Mikko Siponen","Tuomas Jussila","Aurora Tani"],categories:["Home Appliance Design","Design for Recyclability","Design for the Circular Economy"],displayableCategory:2,images:["kierre1.png","kierre2.png","kierre3.png","kierre4.png"],iconSize:"26px",classes:"contain",imageStyle:{common:Object(y.a)(Object(y.a)({},{right:"50%",transform:"translateX(50%)"}),{},{paddingTop:"100px",paddingBottom:"120px",maxWidth:"calc(100vh - 340px)"}),individual:[{},{},{},{transform:"translateX(60%)"}]},imageStyleMobile:{common:Object(y.a)(Object(y.a)({},{paddingTop:"30px",paddingBottom:"30px"}),{},{maxWidth:"calc(100vh - 340px)"}),individual:[{},{paddingTop:"60px",paddingBottom:"60px"},{paddingTop:"60px",paddingBottom:"60px"},{transform:"translateX(10%)"}]},descriptionStyle:Object(y.a)(Object(y.a)({},J),{},{right:"100px"}),descriptionStyleTablet:Object(y.a)(Object(y.a)({},Z),{},{width:"230px"}),mainColorDark:!1,backgroundColor:"black"},de={id:"kolmiot",title:"Kohdataan Kolmioilla",description:"Three pieces of street furniture that create a space that encourages both planned and incidental encounters. The concept is designed for an unused triangle-shaped cobblestone plaza in front of the Helsinki Design Museum, where three neighborhoods meet. Together the triangular pieces of furniture create a cultural meeting point for city residents.",year:2020,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Johanna Kes\xe4l\xe4","Anna Akins"],categories:["Street Furniture Design","Chair Design","Spatial Design"],displayableCategory:2,images:["kolmiot1.png","kolmiot2.png","kolmiot3.png","kolmiot4.png"],iconSize:"28px",descriptionStyle:G,descriptionStyleTablet:{left:"440px",right:"40px"},imageStyle:{individual:[{},{},{},Object(y.a)(Object(y.a)({},_),{},{objectFit:"cover"})]},imageStyleTablet:{common:_,individual:[{},{},{},{}]},imageStyleMobile:{individual:[{},{},{},{objectFit:"cover",minHeight:"250px"}]},mainColorDark:!1,backgroundColor:"black"},pe=function(e){return{id:"muse",title:"Muse",description:"A community connecting UBS bank, millennials and startups through providing unique experiences to its members. Muse is a value-added service for millenials that helps them form a connection with their bank from an early age. Muse is a service. Muse is a web application. Muse is a brand. Muse is a community.",year:2014,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Tik Ho Lee","Beatrice Hutzli","Matthias Wittmann","Martina Rakaric","Samuel Huber","Shanshan Chu","Yuntao Zhu","Elena Vimpari","Issey Ishikura"],displayTeamHorizontal:"true",categories:["Service Design","Web Design","Concept Design"],displayableCategory:0,images:["muse1.png","muse2.jpg","muse3.jpg","muse4.png","muse5.png","muse6.jpg","muse7.jpg","muse8.jpg"],classes:"contain",imageStyle:{common:ee(e),individual:[Object(y.a)(Object(y.a)({},ce(e)),{},{marginTop:X,marginBottom:"300px",width:"auto",height:"calc(100% - 370px)",padding:"0px"})]},imageStyleTablet:{individual:[ae(e)]},imageStyleMobile:{common:Object(y.a)({},$)},descriptionStyle:Object(y.a)(Object(y.a)({},Q(e)),{},{bottom:"110px"}),descriptionStyleTablet:ne(e),mainColorDark:!0,backgroundColor:"#6bc9b7"}},be=function(e){return{id:"anneliina",title:"Anneliina",description:"A new brand identity for Anneliina that communicates the caring service's core values: compassion, respect, trustworthiness and personalized care. The brand update included the launch of a re-designed responsive website and new marketing material, such as flyers and newspaper ads.",year:2016,isTeam:!1,categories:["Brand Identity Design","Web Design","Graphic Design"],displayableCategory:0,images:["anneliina1.png","anneliina1.png","anneliina2.png","anneliina3.png","anneliina4.png","anneliina5.png"],firstImageIsDuplicate:!0,classes:"contain",imageStyle:{common:ee(e),individual:[te(e),{},{},{},{padding:"0px 100px"},{padding:"0px 100px"}]},imageStyleTablet:{individual:[ie(e)]},imageStyleMobile:{common:Object(y.a)({},$)},descriptionStyle:Object(y.a)(Object(y.a)({},Q(e)),{},{top:X}),descriptionStyleTablet:oe(e),mainColorDark:!0,backgroundColor:"#96c1d9"}},me=function(e){return{id:"scoot",title:"Scoot",description:"A responsive website showcasing designs for electric foldable scooters. The site displays seven scooter designs that were exhibited at Helsinki Design Week. The Scoot website has a high quality video and images of the scooters, project and exhibition information and a press kit.",year:2017,isTeam:!1,categories:["Web Design","UX Design","UI Design"],displayableCategory:0,showVideo:!0,images:["scoot1.png","scoot1.png","scoot2.png","scoot3.png"],firstImageIsDuplicate:!0,classes:"contain",imageStyle:{common:ee(e),individual:[te(e)]},imageStyleTablet:{individual:[ie(e)]},imageStyleMobile:{common:Object(y.a)({},$)},descriptionStyle:Object(y.a)(Object(y.a)({},Q(e)),{},{top:X}),descriptionStyleTablet:oe(e),individual:[ce(e)],mainColorDark:!0,backgroundColor:"#f8f379"}},ue=function(e){return{id:"axiom",title:"Axiom",description:"A network that brings students, university and industry together to produce qualitative doctoral research. A service that manifests itself as a network, series of events and co-creation platform. Axiom allwos doctoral candidates, unviersities and companies to conduct more qualitave, compelling and relevant industrial PhD research.",year:2019,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Ira Ottmann","Suvi Majander","Yi-tzu Hsiao"],displayTeamHorizontal:"true",categories:["Service Design","Co-Design","Concept Design"],displayableCategory:0,images:["axiom1.png","axiom2.jpg","axiom3.jpg","axiom4.jpg","axiom5.jpg","axiom6.jpg","axiom7.jpg","axiom8.jpg","axiom9.jpg"],classes:"contain",imageStyle:{common:ee(e),individual:[Object(y.a)(Object(y.a)({},ce(e)),{},{marginTop:X,marginBottom:"320px",width:"auto",height:"calc(100% - 390px)",padding:"0px"})]},imageStyleTablet:{individual:[Object(y.a)(Object(y.a)({},ae(e)),{},{marginBottom:"340px",height:"calc(100% - 410px)"})]},imageStyleMobile:{common:Object(y.a)({},$)},descriptionStyle:Object(y.a)(Object(y.a)({},Q(e)),{},{bottom:"90px"}),descriptionStyleTablet:ne(e),mainColorDark:!0,backgroundColor:"#d2ebf9"}},ge=[{title:"Aesthetics",description:"Aesthetics",year:2020,isTeam:!1,categories:["Beauty","Cuteness","Hotness"],displayableCategory:0,images:[""],mainColorDark:!0,backgroundColor:"black"}];var je=function(e){var t=e.projectRef,i=e.designArea,o=e.currentViewport,c=(e.selectViewport,e.firstSectionEntry,e.firstAreaEntry,e.setFirstAreaEntry,e.skipProjectSection),r=e.windowHeight,d=e.isMobile,p=e.isTablet,b=Object(n.useState)(0),u=Object(s.a)(b,2),g=u[0],j=u[1],h=Object(n.useState)(0),f=Object(s.a)(h,2),x=f[0],y=f[1],v=Object(n.useState)(!1),k=Object(s.a)(v,2),w=k[0],C=k[1],S=Object(n.useState)(!1),T=Object(s.a)(S,2),D=T[0],I=T[1],N=Object(n.useState)(0),M=Object(s.a)(N,2),A=M[0],E=M[1],H=Object(n.useState)(0),P=Object(s.a)(H,2),B=P[0],V=P[1],R=Object(n.useState)(0),q=Object(s.a)(R,2),z=q[0],F=q[1],L=3===i?ge:2===i?function(e){return[pe(e),be(e),me(e),ue(e)]}(w):[se,re,le,de],U=L[g],X=d&&U.firstImageIsDuplicate?U.images.slice(1):U.images,K=U.imageStyleMobile&&U.imageStyleMobile.individual?d&&U.firstImageIsDuplicate?U.imageStyleMobile.individual.slice(1):U.imageStyleMobile.individual:void 0;Object(n.useEffect)((function(){E(o===i?1:0),V(0),F(o!==i||0!==x&&!d?0:1),I(!1)}),[o]);var Y=X.length;return g>=L.length&&j(0),c?Object(a.jsx)("section",{ref:t,className:"project-section-container"}):Object(a.jsxs)("section",{ref:t,className:"project-section-container",children:[1===i&&Object(a.jsxs)(m.a,{children:[Object(a.jsx)("link",{rel:"preload",as:"image",href:"assets/tyyni1.jpg"}),Object(a.jsx)("link",{rel:"preload",as:"image",href:"assets/kierre1.png"}),Object(a.jsx)("link",{rel:"preload",as:"image",href:"assets/kolmiot1.jpg"})]}),2===i&&Object(a.jsxs)(m.a,{children:[Object(a.jsx)("link",{rel:"preload",as:"image",href:"assets/anneliina1.png"}),Object(a.jsx)("link",{rel:"preload",as:"image",href:"assets/scoot1.png"}),Object(a.jsx)("link",{rel:"preload",as:"image",href:"assets/axiom1.png"})]}),Object(a.jsxs)("div",{className:l()("project-section",{"project-section-digital":2===i},{"project-section-industrial":1===i},{"project-section-animation-enter":o===i},{"project-section-animation-exit":o!==i}),children:[Object(a.jsx)(O,{designArea:i,projects:L,activeProjectIndex:g,catalogIsCompressed:w,setCatalogIsCompressed:C,setToggleCardImageClass:V,selectProject:function(e){I(!1),e===g&&0===x||(V(0),y(0),j(e),E(-A),F(1===z?-1:1))},catalogIsOpenMobile:D,setCatalogIsOpenMobile:I,isMobile:d}),Object(a.jsx)(W,{currentViewport:o,activeProject:U,activeImageIndex:x,filteredImages:X,filteredImageStyleIndividualMobile:K,imageAmount:Y,designArea:i,catalogIsCompressed:w,toggleCardClass:A,toggleCardImageClass:B,toggleDescriptionClass:z,setToggleDescriptionClass:F,setCatalogIsOpenMobile:I,selectImage:function(e){var t=function(e){return e<0?Y-1:e>Y-1?0:e}(e);V(0),y(t),E(-A),F(0===t||d?2:0)},windowHeight:r,isMobile:d,isTablet:p})]})]})},he=i(27),fe=i.n(he),xe=i(26),Oe=i.n(xe);i(47);var ye=function(e){var t=e.informationRef,i=e.currentViewport,o=e.selectViewport,c=e.isTablet,r=e.isMobile,d=e.windowWidth,p=Object(n.useState)(!1),b=Object(s.a)(p,2),m=b[0],u=b[1],g=Object(n.useState)(!1),j=Object(s.a)(g,2),h=j[0],f=j[1],x=Object(n.useState)(!1),O=Object(s.a)(x,2),y=O[0],v=O[1],k=Object(n.useState)(!1),w=Object(s.a)(k,2),C=w[0],S=w[1],T=Object(n.useState)(!1),D=Object(s.a)(T,2),I=D[0],N=D[1],M=Object(n.useState)(!1),A=Object(s.a)(M,2),W=A[0],E=A[1],H=Object(n.useState)(0),P=Object(s.a)(H,2),B=P[0],V=P[1],R=Object(n.useState)(0),q=Object(s.a)(R,2),z=q[0],F=q[1],L=function(){S(!1),N(!1),V(0),F(0),E(!1)},U=function(e){e.clientY>window.innerHeight-140||L()};Object(n.useEffect)((function(){L()}),[i]),Object(n.useEffect)((function(){return window.addEventListener("click",U),function(){window.removeEventListener("click",U)}}),[U]);var X="040 7752722",K="sebastian.hognabba@gmail.com",Y=(d-334-488-32)/2+334+32,J=(d-174-394-28)/2+174+28;Object(n.useEffect)((function(){v(!m)}),[i]),Object(n.useEffect)((function(){setTimeout((function(){return f(m)}),c?200:m?500:200)}),[m]);var G=function(e){m&&o(e)},Z=l()("information-section-about-introduction-label",{"link-button link-button-narrow":h},{"no-style-button":!h}),$=function(){N(!1),F(0),S(!0),E(!0)},_=function(){S(!1),V(0),N(!0)},Q=function(){return Object(a.jsx)("img",{src:"./assets/icons/phone.png",alt:"Phone",onClick:$})},ee=function(){return Object(a.jsx)("img",{src:"./assets/icons/email.png",alt:"Email",onClick:_})};return Object(a.jsx)("section",{ref:t,className:"information-section-container",children:Object(a.jsxs)("div",{className:l()("information-section-content",{"information-section-static":!y},{"information-section-animation-enter":3===i&&y},{"information-section-animation-exit":3!==i&&y}),children:[Object(a.jsx)("div",{className:"information-section-about",children:Object(a.jsxs)("div",{className:"information-section-about-content-wrapper",children:[Object(a.jsx)("div",{children:Object(a.jsx)("img",{src:"./assets/face.jpg",alt:"Sebastian",className:l()("information-section-about-image",{"information-section-about-image-open":m},{"information-section-about-image-closed":!m})})}),Object(a.jsx)("div",{className:"information-section-about-text-wrapper-placeholder"}),Object(a.jsxs)("div",{className:l()("information-section-about-text-wrapper",{"information-section-about-text-wrapper-expanded animate-text-wrapper-element":m},{"animate-text-wrapper-element-reverse":!m}),style:{left:c?J:Y},children:[Object(a.jsxs)("button",{className:"information-section-about-introduction-title link-button link-button-narrow icon-button",onClick:function(){u(!m)},children:[Object(a.jsx)("h3",{children:" Sebastian H\xf6gnabba"}),m?Object(a.jsx)(Oe.a,{}):Object(a.jsx)(fe.a,{})]}),Object(a.jsx)("button",{className:"".concat(Z," ").concat(l()({"animate-title-element-1":m},{"animate-title-element-1-reverse":!m})),onClick:function(){G(1)},children:Object(a.jsx)("p",{children:"Industrial Designer"})}),Object(a.jsx)("button",{className:"".concat(Z," ").concat(l()({"animate-title-element-2":m},{"animate-title-element-2-reverse":!m})),onClick:function(){G(2)},children:Object(a.jsx)("p",{children:"Digital Creator"})}),Object(a.jsx)("button",{className:"disabled-button ".concat(Z," ").concat(l()({"animate-title-element-3":m},{"animate-title-element-3-reverse":!m})),onClick:function(){},children:Object(a.jsx)("p",{children:"Genuine Aesthete"})}),Object(a.jsx)("div",{className:l()("information-section-about-introduction-text-wrapper",{"scrollable-element":r&&m}),children:Object(a.jsx)("p",{className:l()("information-section-about-introduction-text",{"animate-text-element-in":m},{"animate-text-element-out":!m}),children:r?Object(a.jsxs)(a.Fragment,{children:["With the problem-solving skills of an engineer and visual eye of an artist, equipped with Master\u2019s Degrees in both UX Design (M.Sc.) and Industrial Design (M.A.), I design functional, aesthetically pleasing solutions that are delightful to use. I am a passionate \xa0",Object(a.jsx)("button",{class:"information-section-about-introduction-label-mobile link-button link-button-narrow",onClick:function(){G(1)},children:"Industrial Designer"}),"\xa0 who believes that beauty and the capability to produce aesthetic pleasure are immensely important qualities of successful products and pieces of furniture. With a background in programming and UX design, I have produced elegant digital solutions as a \xa0",Object(a.jsx)("button",{class:"information-section-about-introduction-label-mobile link-button link-button-narrow",onClick:function(){G(1)},children:"Digital Creator"}),"\xa0 in various industries. My research in design aesthetics highlights the significance of aesthetic experiences in our everyday lives and provides tools for measuring them. As a \xa0",Object(a.jsx)("button",{class:"information-section-about-introduction-label-mobile disabled-button link-button link-button-narrow",children:"Genuine Aetshete"}),"\xa0 I am a strong advocate for the importance of aesthetics in all designed solutions."]}):c?Object(a.jsx)(a.Fragment,{children:"With the problem-solving skills of an engineer and visual eye of an artist, equipped with Master\u2019s Degrees in both UX Design (M.Sc.) and Industrial Design (M.A.), I design functional, aesthetically pleasing solutions that are delightful to use. I am a passionate \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 who believes that beauty and the capability to produce aesthetic pleasure are immensely important qualities of successful products and pieces of furniture. With a background in programming and UX design, I have produced elegant digital solutions as a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 in various industries. My research in design aesthetics highlights the significance of aesthetic experiences in our everyday lives and provides tools for measuring them. As a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 I am a strong advocate for the importance of aesthetics in all designed solutions."}):Object(a.jsx)(a.Fragment,{children:"With the problem-solving skills of an engineer and visual eye of an artist, equipped with Master\u2019s Degrees in both UX Design (M.Sc.) and Industrial Design (M.A.), I design functional, aesthetically pleasing solutions that are delightful to use. I am a passionate \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 who believes that beauty and the capability to produce aesthetic pleasure are immensely important qualities of successful products and pieces of furniture. With a background in programming and UX design, I have produced elegant digital solutions as a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 in various industries. My research in design aesthetics highlights the significance of aesthetic experiences in our everyday lives and provides tools for measuring them. As a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 I am a strong advocate for the importance of aesthetics in all designed solutions."})})})]})]})}),Object(a.jsx)("div",{className:"information-section-contact",children:Object(a.jsxs)("div",{className:"information-section-contact-content-wrapper",children:[Object(a.jsxs)("div",{className:"information-section-contact-icon-wrapper",children:[Object(a.jsx)("p",{className:"text-large",children:"Check me out:"}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/sebastian-h\xf6gnabba-9a45a19b",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"./assets/icons/linkedin.png",alt:"LinkedIn"})}),Object(a.jsx)("a",{className:"hide-element",children:Object(a.jsx)("img",{src:"./assets/icons/instagram.png",alt:"Instagram"})}),Object(a.jsx)("a",{className:"hide-element",children:Object(a.jsx)("img",{src:"./assets/icons/finnishdesigners.png",alt:"Finnish Designers"})})]}),Object(a.jsxs)("div",{className:"information-section-contact-icon-wrapper",children:[Object(a.jsx)("p",{className:"text-large",children:"Hit me up:"}),Object(a.jsxs)("div",{className:l()("information-section-contact-icon-expandable-icon-wrapper",{"information-section-contact-icon-expandable-icon-wrapper-hide":C&&!r}),children:[Object(a.jsx)(Q,{}),Object(a.jsxs)("div",{className:"information-section-contact-icon-expandable-button-wrapper",children:[Object(a.jsx)("span",{className:l()("text-small",{"animate-copied-text-1":-1===B},{"animate-copied-text-2":1===B}),children:"Copied"}),Object(a.jsxs)("button",{className:l()("link-button icon-button",{"animate-button-enter":C},{"animate-button-exit":!C}),disabled:!C,onClick:function(){navigator.clipboard.writeText(X.replace(/ /g,"")),V(0===B?1:-B)},children:[Object(a.jsx)(Q,{}),Object(a.jsx)("p",{className:r?"":"text-large",children:X})]})]})]}),Object(a.jsxs)("div",{className:l()("information-section-contact-icon-expandable-icon-wrapper",{"information-section-contact-icon-expandable-icon-wrapper-hide":I&&!r},{"animate-move-element-right":C}),children:[Object(a.jsx)(ee,{}),Object(a.jsxs)("div",{className:"information-section-contact-icon-expandable-button-wrapper information-section-contact-icon-expandable-button-wrapper-email",children:[Object(a.jsx)("span",{className:l()("text-small",{"animate-copied-text-1":-1===z},{"animate-copied-text-2":1===z}),children:"Copied"}),Object(a.jsxs)("button",{className:l()("link-button icon-button",{"animate-button-enter":I&&!W},{"animate-button-enter-left":I&&W},{"animate-button-exit":!I}),disabled:!I,onClick:function(){navigator.clipboard.writeText(K),F(0===z?1:-z)},children:[Object(a.jsx)(ee,{}),Object(a.jsx)("p",{className:r?"":"text-large",children:K})]})]})]})]})]})})]})})};function ve(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),i=t[0],o=t[1],c=Object(n.useState)(0),r=Object(s.a)(c,2),l=r[0],d=r[1],p=Object(n.useState)(!1),m=Object(s.a)(p,2),u=m[0],g=m[1],j=Object(n.useState)(!0),h=Object(s.a)(j,2),f=h[0],x=h[1],O=Object(n.useRef)(!0),y=Object(n.useRef)(!0),v=Object(n.useRef)(null),k=Object(n.useRef)(null),w=Object(n.useRef)(null),C=Object(n.useRef)(null),S=document.getElementById("root"),T=E.mobileMaxBreakpoint,D=E.tabletMaxBreakpoint,I=window.innerWidth,N=window.innerHeight,M=I<=D,A=I<=T;Object(n.useEffect)((function(){x(!0)}),[l]),Object(n.useEffect)((function(){var e=function(){var e=S.scrollTop,t=[v.current.offsetTop,k.current.offsetTop,w.current.offsetTop,C.current.offsetTop];o(e);var i=e<=t[l-3]?l-3:e>=t[l+3]?l+3:e<=t[l-2]?l-2:e>=t[l+2]?l+2:e<=t[l-1]?l-1:e>=t[l+1]?l+1:l;i!==l&&(0===l&&(O.current=!1),1!==l||u||(y.current=!1),d(i),3===i&&g(!1))};return S.addEventListener("scroll",e),function(){return S.removeEventListener("scroll",e)}}),[l,i,S]);var W=function(e){var t=3===e?C:2===e?w:1===e?k:v;S.scrollTo({top:t.current.offsetTop,left:0,behavior:"smooth"})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(b,{designerRef:v,selectViewport:W,showTypist:O.current,setSkipProjectSection:g,isMobile:A}),Object(a.jsx)(je,{projectRef:k,designArea:1,currentViewport:l,selectViewport:W,firstSectionEntry:y.current,firstAreaEntry:f,setFirstAreaEntry:x,skipProjectSection:u,windowHeight:N,isTablet:M,isMobile:A}),Object(a.jsx)(je,{projectRef:w,designArea:2,currentViewport:l,selectViewport:W,firstSectionEntry:y.current,firstAreaEntry:f,setFirstAreaEntry:x,skipProjectSection:u,windowHeight:N,isTablet:M,isMobile:A}),Object(a.jsx)(ye,{informationRef:C,currentViewport:l,selectViewport:W,windowWidth:I,isTablet:M,isMobile:A})]})}var ke=function(){return Object(a.jsx)(ve,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(a.jsx)(ke,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[49,1,2]]]);
//# sourceMappingURL=main.d94fa2fb.chunk.js.map