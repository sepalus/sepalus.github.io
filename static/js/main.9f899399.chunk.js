(this["webpackJsonpdesign-portfolio"]=this["webpackJsonpdesign-portfolio"]||[]).push([[0],{32:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},35:function(e,t,i){},41:function(e,t,i){},42:function(e,t,i){},43:function(e,t,i){},44:function(e,t,i){},45:function(e,t,i){},47:function(e,t,i){"use strict";i.r(t);var a=i(0),n=i(1),o=i(17),c=i.n(o),s=(i(32),i(4)),r=i(3),l=i.n(r),d=i(15),p=i.n(d);i(33),i(34);var m=function(e){var t=e.navigatorViewport,i=e.currentViewport,n=e.selectViewport,o=e.sections,c=e.isScrollSnapped,s=e.catalogIsCompressed,r=1===t&&s;return Object(a.jsx)("div",{className:l()("navigator",{"navigator-dark ":2===t,"navigator-hidden":r,"animate-navigator-in":t===i&&c,"animate-navigator-in-slow":1===t&&!s,"animate-navigator-out":t!==i||!c||r}),children:Object(a.jsx)("ul",{children:o.map((function(e,t){return Object(a.jsxs)("li",{className:l()("navigator-item",{"navigator-item-active":t===i}),onClick:function(){r||n(t)},children:[Object(a.jsx)("div",{className:"vertical-line"}),Object(a.jsx)("p",{className:"navigator-item-text text-extra-small",children:e.toUpperCase()})]})}))})})};var g=function(e){var t=e.designerRef,i=e.isMobile,o=e.showTypist,c=e.currentViewport,r=e.selectViewport,d=e.sections,g=e.isScrollSnapped,u=Object(n.useState)(!1),b=Object(s.a)(u,2),j=b[0],h=b[1],f=Object(n.useState)(!1),x=Object(s.a)(f,2),O=x[0],v=x[1];return Object(a.jsxs)("section",{ref:t,className:"designer-section-container",children:[Object(a.jsx)(m,{navigatorViewport:0,currentViewport:c,selectViewport:r,sections:d,isScrollSnapped:g}),Object(a.jsx)("div",{className:"designer-section-content",children:Object(a.jsxs)("div",{className:"designer-section-typist-wrapper",children:[o?Object(a.jsx)("h3",{className:l()({"typist-button-disabled":!j}),children:Object(a.jsxs)(p.a,{startDelay:700,avgTypingDelay:20,stdTypingDelay:0,cursor:{hideWhenDone:!0,hideWhenDoneDelay:0},onTypingDone:function(){return setTimeout((function(){return h(!0)}),500)},children:[i&&Object(a.jsx)("span",{children:"\xa0\xa0\xa0"}),"Hi, I'm\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return r(3)},children:"Jens Sebastian"}),"\xa0an",i?Object(a.jsx)("br",{}):" ","industrial and furniture designer."]})}):Object(a.jsxs)("h3",{children:[i&&Object(a.jsx)("span",{children:"\xa0\xa0\xa0"}),"Hi, I'm\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return r(3)},children:"Jens Sebastian"}),"\xa0an",i?Object(a.jsx)("br",{}):" ","industrial and furniture designer."]}),o?j&&Object(a.jsx)("h3",{className:l()({"typist-button-disabled":!O}),children:Object(a.jsxs)(p.a,{startDelay:200,avgTypingDelay:20,stdTypingDelay:0,cursor:{hideWhenDone:!0,hideWhenDoneDelay:0},onTypingDone:function(){return setTimeout((function(){return v(!0)}),500)},children:["If you\u2019re interested in what I\u2019ve",i?Object(a.jsx)("br",{}):" ",i&&Object(a.jsx)("span",{children:"\xa0\xa0"}),"done, check out my\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return r(1)},children:"work"})]})}):Object(a.jsxs)("h3",{children:["If you\u2019re interested in what I\u2019ve",i?Object(a.jsx)("br",{}):" ",i&&Object(a.jsx)("span",{children:"\xa0\xa0"}),"done, check out my\xa0",Object(a.jsx)("span",{className:"link-button link-button-narrow",onClick:function(){return r(1)},children:"work"})]})]})})]})},u=(i(35),i(12)),b=i.n(u),j=i(13),h=i.n(j),f=i(14),x=i.n(f);var O=function(e){var t=e.designArea,i=e.projects,n=e.activeProjectIndex,o=e.catalogIsCompressed,c=e.setCatalogIsCompressed,s=e.setToggleCardImageClass,r=e.selectProject,d=e.setCatalogIsOpenMobile,p=e.catalogIsOpenMobile,m=e.isMobile,g=2===t,u=i[n].hasOwnProperty("catalogColorDark")?i[n].catalogColorDark:i[n].mainColorDark||!1;return m&&c(!1),Object(a.jsxs)("div",{className:l()("project-catalog",{"project-catalog-compressed animate-catalog-compress":o},{"animate-catalog-expand":!o},{"project-catalog-dark":u},{"project-catalog-closed":m&&!p}),children:[m?Object(a.jsx)("div",{className:"project-catalog-mobile-close-button-wrapper",children:Object(a.jsx)(x.a,{onClick:function(){return d(!1)}})}):Object(a.jsx)("h2",{children:o?".":g?"Digital and Service":"Products and Furniture"}),Object(a.jsx)("ul",{className:"project-catalog-projects",children:i.map((function(e,t){var i=t===n;return Object(a.jsx)("li",{className:l()({"project-catalog-active-project":i}),children:Object(a.jsx)("button",{className:l()("link-button",{"icon-button icon-button-space":i}),onClick:function(){return r(t)},children:o?Object(a.jsx)("img",{width:e.iconSize||"22px",height:e.iconSize||"22px",src:"./assets/icons/".concat(e.id,".png"),alt:""}):Object(a.jsx)("h4",{children:e.title})})})}))}),Object(a.jsx)("div",{className:l()("vertical-line vertical-line-top",{"vertical-line-right":g},{" vertical-line-mobile":m})}),Object(a.jsx)("div",{className:l()("vertical-line vertical-line-bottom",{"vertical-line-right":g},{"hide-element":m})}),!m&&Object(a.jsx)("div",{className:"project-catalog-expand-button",children:o&&!g||!o&&g?Object(a.jsx)(b.a,{onClick:function(){s(1),c(!o)}}):Object(a.jsx)(h.a,{onClick:function(){s(1),c(!o)}})})]})},v=i(2),y=i(22),k=(i(41),i(21)),w=i.n(k),C=i(20),S=i.n(C),D=i(19),T=i.n(D);i(42);var I=function(e){var t=e.currentViewport,i=e.activeProject,o=e.toggleDescriptionClass,c=e.windowHeight,r=e.isMobile,d=e.isTablet,p=Object(n.useState)(!1),m=Object(s.a)(p,2),g=m[0],u=m[1],b=c<600;Object(n.useEffect)((function(){return window.addEventListener("click",(function(){var e=document.getElementById("project-card-description-tag-".concat(i.id));e&&("hidden"!==window.getComputedStyle(e).getPropertyValue("border-style")&&u(!1))})),function(){window.removeEventListener("click",(function(){}))}}),[i]),Object(n.useEffect)((function(){u(!1)}),[t]);var j=r?i.mainColorDark:i.hasOwnProperty("descriptionColorDark")?i.descriptionColorDark:i.mainColorDark||!1;return Object(a.jsx)("div",{className:l()("project-card-description",{"project-card-description-dark":j},{"animate-description-static":r},{"animate-description-in-1":!r&&1===o},{"animate-description-in-2":!r&&-1===o},{"animate-description-out":!r&&0===o},{"animate-description-static":!r&&2===o},{"scrollable-element":r}),style:r?{}:d?Object(v.a)(Object(v.a)({},i.descriptionStyle),i.descriptionStyleTablet):Object(v.a)({},i.descriptionStyle),children:Object(a.jsxs)("div",{className:l()("project-card-description-content-container",{"project-card-description-content-container-small-height":b}),children:[!r&&Object(a.jsx)("div",{className:"vertical-line"}),Object(a.jsx)("h3",{className:"project-card-description-title",children:i.title}),!b&&Object(a.jsx)("p",{className:"project-card-description-text",children:i.description}),Object(a.jsxs)("div",{className:"project-card-description-tag-wrapper",children:[Object(a.jsxs)("div",{className:"project-card-description-tag",children:[Object(a.jsx)(T.a,{className:"project-card-description-tag-icon"}),Object(a.jsxs)("p",{className:"text-emphasized",children:[" ",i.year]})]}),Object(a.jsxs)("div",{id:"project-card-description-tag-".concat(i.id),className:l()("project-card-description-tag",{"project-card-description-tag-design-team":!r&&i.isTeam},{"project-card-description-tag-design-team-open":!r&&g}),children:[i.isTeam?Object(a.jsx)(S.a,{className:"project-card-description-tag-icon"}):Object(a.jsx)(w.a,{className:"project-card-description-tag-icon"}),Object(a.jsxs)("div",{className:l()("project-card-description-tag-designer-wrapper",{"project-card-description-tag-designer-wrapper-open":i.isTeam&&g}),children:[Object(a.jsx)("p",{className:"text-emphasized",onClick:function(){r||u(!0)},children:i.isTeam?"Design Team":"Sebastian H\xf6gnabba"}),!r&&Object(a.jsx)("div",{className:l()("project-card-description-tag-design-team-wrapper",{"project-card-description-tag-design-team-wrapper-show":g},{"project-card-description-tag-design-team-wrapper-horizontal":i.displayTeamHorizontal}),children:i.designTeam&&i.designTeam.map((function(e){return Object(a.jsx)("p",{children:e})}))})]})]})]})]})})};i(43);var N=function(e){var t=e.activeImageIndex,i=e.selectImage,n=e.index;return Object(a.jsx)("span",{className:l()({"project-card-controls-image-active-button":t===n}),onClick:function(){return i(n)}})},M=function(e){var t=e.activeProject,i=e.activeImageIndex,o=e.imageAmount,c=e.filteredImages,s=e.currentViewport,r=e.catalogIsCompressed,d=e.selectImage,p=e.isMobile,m=e.previousProject,g=e.nextProject,u=function(e){1!==s&&2!==s||(32===e.keyCode&&d(i+1),37===e.keyCode&&d(i-1),39===e.keyCode&&d(i+1),38===e.keyCode&&(e.preventDefault(),m(s)),40===e.keyCode&&(e.preventDefault(),g(s)))},j=p?t.mainColorDark:t.hasOwnProperty("controlColorDark")?t.controlColorDark:t.mainColorDark||!1;return Object(n.useEffect)((function(){return window.addEventListener("keydown",u),function(){window.removeEventListener("keydown",u)}}),[u]),Object(a.jsx)("div",{className:l()("project-card-controls",{"project-card-controls-dark":j},{"project-card-controls-compressed":r}),children:o>1&&Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:l()("project-card-control-buttons-container",{"project-card-control-buttons-container-wide":o>6}),children:[Object(a.jsx)(h.a,{className:j?"clickable-text-element-dark":"clickable-text-element",onClick:function(){return d(i-1)}}),Object(a.jsx)("div",{className:"project-card-controls-image-buttons",children:c.map((function(e,t){return Object(a.jsx)(N,{activeImageIndex:i,selectImage:d,index:t})}))}),Object(a.jsx)(b.a,{className:j?"clickable-text-element-dark":"clickable-text-element",onClick:function(){return d(i+1)}})]})})})},A=i(23),P=i.n(A);var V=function(e){var t=e.currentViewport,i=e.designArea,n=e.activeProject,o=e.activeImageIndex,c=e.filteredImages,s=e.filteredImageStyleIndividualMobile,r=e.imageAmount,d=e.catalogIsCompressed,p=e.toggleCardClass,m=e.toggleCardImageClass,g=e.toggleDescriptionClass,u=e.setCatalogIsOpenMobile,b=e.selectImage,j=e.previousProject,h=e.nextProject,f=e.windowHeight,x=e.isMobile,O=e.isTablet,k=2===i,w=Object(y.useSwipeable)({onSwipedLeft:function(){return b(o+1)},onSwipedRight:function(){return b(o-1)}});return Object(a.jsxs)("div",{className:"project-card",style:{backgroundColor:x&&n.backgroundColorMobile?n.backgroundColorMobile:n.backgroundColor||"black",color:n.mainColorDark?"black":"white",borderColor:n.mainColorDark?"black":"white"},children:[x&&Object(a.jsxs)("div",{className:l()("project-card-title-element-mobile",{"project-card-title-element-mobile-digital":k}),children:[Object(a.jsx)(P.a,{onClick:function(){return u(!0)}}),Object(a.jsx)("h2",{children:k?"Digital and Service":"Products and Furniture"})]}),Object(a.jsxs)("div",Object(v.a)(Object(v.a)({className:"project-card-image-container"},w),{},{children:[c.map((function(e,t){var i=n.imageStyle?n.imageStyle.individual?Object(v.a)(Object(v.a)({},n.imageStyle.common),n.imageStyle.individual[t]):n.imageStyle.common:{},c=n.imageStyleTablet?n.imageStyleTablet.individual?Object(v.a)(Object(v.a)({},n.imageStyleTablet.common),n.imageStyleTablet.individual[t]):n.imageStyleTablet.common:{},r=n.imageStyleMobile?s?Object(v.a)(Object(v.a)({},n.imageStyleMobile.common),s[t]):n.imageStyleMobile.common:{},d=Math.max(360,f-320);return Object(a.jsx)("div",{className:l()("project-card-image-wrapper",{"project-card-image-wrapper-active":t===o},{"animate-card-static":x},{"animate-card-fade-in-1":!x&&1===p},{"animate-card-fade-in-2":!x&&-1===p},{"animate-card-fade-out":!x&&0===p}),children:Object(a.jsx)("img",{src:"./assets/".concat(e),alt:n.title,className:l()(n.classes,{"project-card-image-static":0===m}),style:x?Object(v.a)(Object(v.a)({},r),{},{maxHeight:"".concat(d,"px")}):O?Object(v.a)(Object(v.a)({},i),c):i})})})),Object(a.jsx)(M,{currentViewport:t,activeProject:n,activeImageIndex:o,imageAmount:r,filteredImages:c,catalogIsCompressed:d,selectImage:b,isMobile:x,previousProject:j,nextProject:h})]})),Object(a.jsx)(I,{currentViewport:t,activeProject:n,toggleDescriptionClass:g,windowHeight:f,isMobile:x,isTablet:O})]})},W=(i(44),{catalogWidth:"380px",catalogWidthPlusMargin:"460px",catalogRemainingWidth:"calc(100% - 380px)",catalogCollapsedWidth:"120px",catalogCollapsedWidthPlusMargin:"200px",catalogCollapsedRemainingWidth:"calc(100% - 120px)",backgroundColorBlack:"black",backgroundColorDark:"#101010",mobileMaxBreakpoint:767,tabletMinBreakpoint:768,tabletMaxBreakpoint:1023,desktopMinBreakpoint:1024}),H=W.catalogWidth,B=W.catalogWidthPlusMargin,E=W.catalogRemainingWidth,R=W.catalogCollapsedWidth,z=W.catalogCollapsedWidthPlusMargin,q=W.catalogCollapsedRemainingWidth,F=W.backgroundColorBlack,L=W.backgroundColorDark,U="258px",K="80px",X="70px",J={top:"50%",transform:"translateY(-50%)"},Y={right:"50%",transform:"translateX(50%)"},G={top:"126px",right:K,width:U},Z={bottom:"60px",right:K,width:U},$=Object(v.a)(Object(v.a)({},J),{},{width:U,right:K}),_=function(e){return{top:"50px",right:K,left:e?z:B}},Q=Object(v.a)(Object(v.a)({},J),{},{right:"60px",width:"235px"}),ee={padding:"50px"},te={height:"calc(100% - 240px)",marginTop:"120px",marginBottom:"120px"},ie=function(e){return Object(v.a)(Object(v.a)({},le(e)),{},{right:e?z:B,transition:"left 1s, right 1s"})},ae=function(e){return Object(v.a)(Object(v.a)({},te),{},{right:e?R:H,left:0,width:e?q:E,transition:"width 1s",padding:"0px 72px"})},ne=function(e){return Object(v.a)(Object(v.a)({},le(e)),{},{margin:"300px 0px 100px -20px",padding:"0px",height:"calc(100% - 400px)",width:"auto"})},oe=function(e){return{left:e?"118px":"90px",margin:"350px 0px 100px -20px",height:"calc(100% - 450px)"}},ce=function(e){return{left:e?"122px":"80px"}},se=function(e){return e?{left:"122px",right:"218px"}:{left:"80px",right:"260px"}},re=function(e){return e?{left:"114px",right:"210px"}:{left:"64px",right:"412px"}},le=function(e){return{left:e?"140px":K,transition:"left 1s"}},de={id:"kaarna",title:"Kaarna",description:"An electric foldable scooter designed for laid-back cruising. With its innovative rotating folding mechanism, high-quality materials and elegant detailing, Kaarna is designed for people who want to ride the streets in style. An urban mobility solution that matches the character of flourishing cities.",year:2017,isTeam:!1,categories:["Product Design","Vehicle Design","Urban Mobility"],displayableCategory:1,images:["kaarna1.jpg","kaarna2.jpg","kaarna3.jpg","kaarna4.jpg"],descriptionStyle:Object(v.a)(Object(v.a)({},G),{},{width:"285px"}),descriptionStyleTablet:Object(v.a)(Object(v.a)({},J),{},{width:"244px",right:K}),mainColorDark:!1,controlColorDark:!0,backgroundColor:F},pe={id:"kajo",title:"Kajo",description:"A dining room pendant lamp designed for atmospheric dining. The lamp has three lampshades that reflect different intensities of light, giving both a focused and relaxed ambience to the dining experience.",year:2020,isTeam:!1,categories:["Furniture Design","Lamp Design","Lighting Design"],displayableCategory:1,images:["kajo1.jpg","kajo2.jpg","kajo3.jpg","kajo4.jpg"],descriptionStyle:Object(v.a)(Object(v.a)({},Z),{},{right:"60px"}),imageStyle:{common:{objectPosition:"50% 30%"}},mainColorDark:!1,backgroundColor:"black"},me={id:"tyyni",title:"Tyyni",description:"A sound diffusing wall panel, with outstanding acoustic qualities and beautiful form. The overall shape of Tyyni is based on a tested mathematical equation that ensures a high-quality sonic experinece. The wave-like form gives a visual expression that matches the acoustic qualities - without compromising the sound.",year:2017,isTeam:!1,categories:["Product Design","Acoustic Design","Wall Panel Design"],displayableCategory:1,images:["tyyni1.jpg","tyyni2.jpg"],imageStyle:{common:{objectPosition:"50% 40%"}},descriptionStyle:Object(v.a)(Object(v.a)({},$),{},{transform:"translateY(-70%)",width:U}),descriptionStyleTablet:{width:"240px",right:"60px"},mainColorDark:!1,controlColorDark:!0,descriptionColorDark:!0,backgroundColor:L},ge={id:"kisko",title:"Kisko",description:"An elegant industrial inspired furniture series that combines comfort with character. Kisko introduces an industrial connecting component - the stainless steel U channel tube - to the world of furniture.",year:2019,isTeam:!1,categories:["Furniture Design","Chair Design","Component Design"],displayableCategory:2,images:["kisko1.jpg"],descriptionStyle:G,mainColorDark:!1,descriptionColorDark:!0,backgroundColor:"black"},ue={id:"kierre",title:"Kierre",description:"An electric toothbrush designed for recyclability and the circular economy. The shell of the toothbrush is manufactured from recycled plastic, made out of monomaterial components and designed for easy disassembly. Kierre showcases that products designed for recyclability can be beautiful, by turning the recyclable features into the product's own aesthetics.",year:2020,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Mikko Siponen","Tuomas Jussila","Aurora Tani"],categories:["Home Appliance Design","Design for Recyclability","Design for the Circular Economy"],displayableCategory:2,images:["kierre1.png","kierre2.png","kierre3.png","kierre4.png"],iconSize:"24px",classes:"contain",imageStyle:{common:Object(v.a)(Object(v.a)({},Y),{},{paddingTop:"100px",paddingBottom:"120px",maxWidth:"calc(100vh - 340px)"}),individual:[{},{},{},{transform:"translateX(60%)"}]},imageStyleMobile:{common:Object(v.a)(Object(v.a)({},{paddingTop:"50px",paddingBottom:"50px"}),{},{maxWidth:"calc(100vh - 340px)"}),individual:[{},{paddingTop:"60px",paddingBottom:"60px"},{paddingTop:"60px",paddingBottom:"60px"},{transform:"translateX(10%)"}]},descriptionStyle:Object(v.a)(Object(v.a)({},$),{},{right:"100px"}),descriptionStyleTablet:Object(v.a)(Object(v.a)({},Q),{},{width:"230px"}),mainColorDark:!1,backgroundColor:"black"},be=function(e){return{id:"kolmiot",title:"Kohdataan Kolmioilla",description:"Three pieces of street furniture that create a space that encourages both planned and incidental encounters. The concept is designed for an unused triangle-shaped cobblestone plaza in front of the Helsinki Design Museum, where three neighborhoods meet. Together the triangular pieces of furniture create a cultural meeting point for city residents.",year:2020,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Johanna Kes\xe4l\xe4","Anna Akins"],categories:["Street Furniture Design","Chair Design","Spatial Design"],displayableCategory:2,images:["kolmiot1.png","kolmiot2.png","kolmiot3.png","kolmiot4.png"],iconSize:"26px",descriptionStyle:Object(v.a)(Object(v.a)({},_(e)),{},{transition:"left 1s, right 1s"}),imageStyle:{individual:[{},{},{objectFit:"contain"},Object(v.a)({},te)]},imageStyleTablet:{common:te},imageStyleMobile:{individual:[{},{},{},{objectFit:"cover",minHeight:"250px"}]},mainColorDark:!1,backgroundColor:"black"}},je=function(e){return{id:"rytmi",title:"Rytmi",description:"A solar glass balcony that uses solar glass panels in place of traditional glass to generate electricity for the building and the grid. The patterns are printed on architectural glass using dye-sensitized printing methods, and they integrate seamlessly into the building facade. Inspired by the movement of the sun, the solar panels give expressive character to the otherwise monotone building facade.",year:2021,isTeam:!1,categories:["Solar Balcony","Solar Glass","Solar Panels"],displayableCategory:2,iconSize:"26px",images:["rytmi1.jpg","rytmi2.jpg","rytmi3.jpg","rytmi4.jpg","rytmi5.jpg","rytmi6.jpg"],descriptionStyle:Object(v.a)(Object(v.a)({},_(e)),{},{transition:"left 1s, right 1s"}),descriptionStyleTablet:{},imageStyle:{common:Y,individual:[{objectFit:"contain"},{},{},{objectFit:"contain"}]},imageStyleTablet:{},imageStyleMobile:{},mainColorDark:!1,controlColorDark:!0,descriptionColorDark:!0,backgroundColor:"#dddddd",backgroundColorMobile:L}},he=function(e){return{id:"muse",title:"Muse",description:"A community connecting UBS bank, millennials and startups through providing unique experiences to its members. Muse is a value-added service for millenials that helps them form a connection with their bank from an early age. Muse is a service. Muse is a web application. Muse is a brand. Muse is a community.",year:2014,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Tik Ho Lee","Beatrice Hutzli","Matthias Wittmann","Martina Rakaric","Samuel Huber","Shanshan Chu","Yuntao Zhu","Elena Vimpari","Issey Ishikura"],displayTeamHorizontal:"true",categories:["Service Design","Web Design","Concept Design"],displayableCategory:0,images:["muse1.png","muse2.jpg","muse3.jpg","muse4.png","muse5.png","muse6.jpg","muse7.jpg","muse8.jpg"],classes:"contain",imageStyle:{common:ae(e),individual:[Object(v.a)(Object(v.a)({},le(e)),{},{marginTop:X,marginBottom:"300px",width:"auto",height:"calc(100% - 370px)",padding:"0px"})]},imageStyleTablet:{individual:[ce(e)]},imageStyleMobile:{common:Object(v.a)({},ee)},descriptionStyle:Object(v.a)(Object(v.a)({},ie(e)),{},{bottom:"110px"}),descriptionStyleTablet:se(e),mainColorDark:!0,backgroundColor:"#6bc9b7"}},fe=function(e){return{id:"anneliina",title:"Anneliina",description:"A new brand identity for Anneliina that communicates the caring service's core values: compassion, respect, trustworthiness and personalized care. The brand update included the launch of a re-designed responsive website and new marketing material, such as flyers and newspaper ads.",year:2016,isTeam:!1,categories:["Brand Identity Design","Web Design","Graphic Design"],displayableCategory:0,images:["anneliina1.png","anneliina1.png","anneliina2.png","anneliina3.png","anneliina4.png","anneliina5.png"],firstImageIsDuplicate:!0,classes:"contain",imageStyle:{common:ae(e),individual:[ne(e),{},{},{},{padding:"0px 100px"},{padding:"0px 100px"}]},imageStyleTablet:{individual:[oe(e)]},imageStyleMobile:{common:Object(v.a)({},ee)},descriptionStyle:Object(v.a)(Object(v.a)({},ie(e)),{},{top:X}),descriptionStyleTablet:re(e),mainColorDark:!0,backgroundColor:"#96c1d9"}},xe=function(e){return{id:"scoot",title:"Scoot",description:"A responsive website showcasing designs for electric foldable scooters. The site displays seven scooter designs that were exhibited at Helsinki Design Week. The Scoot website has a high quality video and images of the scooters, project and exhibition information and a press kit.",year:2017,isTeam:!1,categories:["Web Design","UX Design","UI Design"],displayableCategory:0,showVideo:!0,images:["scoot1.png","scoot1.png","scoot2.png","scoot3.png"],firstImageIsDuplicate:!0,classes:"contain",imageStyle:{common:ae(e),individual:[ne(e)]},imageStyleTablet:{individual:[oe(e)]},imageStyleMobile:{common:Object(v.a)({},ee)},descriptionStyle:Object(v.a)(Object(v.a)({},ie(e)),{},{top:X}),descriptionStyleTablet:re(e),individual:[le(e)],mainColorDark:!0,backgroundColor:"#f8f379"}},Oe=function(e){return{id:"axiom",title:"Axiom",description:"A network that brings students, university and industry together to produce qualitative doctoral research. A service that manifests itself as a network, series of events and co-creation platform. Axiom allwos doctoral candidates, unviersities and companies to conduct more qualitave, compelling and relevant industrial PhD research.",year:2019,isTeam:!0,designTeam:["Sebastian H\xf6gnabba","Ira Ottmann","Suvi Majander","Yi-tzu Hsiao"],displayTeamHorizontal:"true",categories:["Service Design","Co-Design","Concept Design"],displayableCategory:0,images:["axiom1.png","axiom2.jpg","axiom3.jpg","axiom4.jpg","axiom5.jpg","axiom6.jpg","axiom7.jpg","axiom8.jpg","axiom9.jpg"],classes:"contain",imageStyle:{common:ae(e),individual:[Object(v.a)(Object(v.a)({},le(e)),{},{marginTop:X,marginBottom:"320px",width:"auto",height:"calc(100% - 390px)",padding:"0px"})]},imageStyleTablet:{individual:[Object(v.a)(Object(v.a)({},ce(e)),{},{marginBottom:"340px",height:"calc(100% - 410px)"})]},imageStyleMobile:{common:Object(v.a)({},ee)},descriptionStyle:Object(v.a)(Object(v.a)({},ie(e)),{},{bottom:"90px"}),descriptionStyleTablet:se(e),mainColorDark:!0,backgroundColor:"#d2ebf9"}},ve=[{title:"Aesthetics",description:"Aesthetics",year:2020,isTeam:!1,categories:["Beauty","Cuteness","Hotness"],displayableCategory:0,images:[""],mainColorDark:!0,backgroundColor:"black"}];var ye=function(e){var t=e.projectRef,i=e.designArea,o=e.currentViewport,c=e.selectViewport,r=e.sections,d=e.isScrollSnapped,p=e.windowHeight,g=e.isMobile,u=e.isTablet,b=Object(n.useState)(0),j=Object(s.a)(b,2),h=j[0],f=j[1],x=Object(n.useState)(0),v=Object(s.a)(x,2),y=v[0],k=v[1],w=Object(n.useState)(!1),C=Object(s.a)(w,2),S=C[0],D=C[1],T=Object(n.useState)(!1),I=Object(s.a)(T,2),N=I[0],M=I[1],A=Object(n.useState)(0),P=Object(s.a)(A,2),W=P[0],H=P[1],B=Object(n.useState)(0),E=Object(s.a)(B,2),R=E[0],z=E[1],q=Object(n.useState)(0),F=Object(s.a)(q,2),L=F[0],U=F[1],K=3===i?ve:2===i?function(e){return[he(e),fe(e),xe(e),Oe(e)]}(S):function(e){return[de,pe,ge,je(e),be(e),ue,me]}(S),X=K[h],J=g&&X.firstImageIsDuplicate?X.images.slice(1):X.images,Y=X.imageStyleMobile&&X.imageStyleMobile.individual?g&&X.firstImageIsDuplicate?X.imageStyleMobile.individual.slice(1):X.imageStyleMobile.individual:void 0;Object(n.useEffect)((function(){H(o===i?1:0),z(0),U(o!==i||0!==y&&!g?0:1),M(!1)}),[o]);var G=J.length;h>=K.length&&f(0);var Z=function(e){M(!1),e===h&&0===y||(z(0),k(0),f(e),H(-W),U(1===L?-1:1))};return Object(a.jsxs)("section",{ref:t,className:"project-section-container",children:[Object(a.jsx)(m,{navigatorViewport:i,currentViewport:o,selectViewport:c,sections:r,isScrollSnapped:d,catalogIsCompressed:S}),Object(a.jsxs)("div",{className:l()("project-section",{"project-section-digital":2===i},{"project-section-industrial":1===i},{"project-section-animation-static":g},{"project-section-animation-enter":!g&&o===i},{"project-section-animation-exit":!g&&o!==i}),children:[Object(a.jsx)(O,{designArea:i,projects:K,activeProjectIndex:h,catalogIsCompressed:S,setCatalogIsCompressed:D,setToggleCardImageClass:z,selectProject:Z,catalogIsOpenMobile:N,setCatalogIsOpenMobile:M,isMobile:g}),Object(a.jsx)(V,{currentViewport:o,activeProjectIndex:h,activeProject:X,activeImageIndex:y,filteredImages:J,filteredImageStyleIndividualMobile:Y,imageAmount:G,designArea:i,catalogIsCompressed:S,toggleCardClass:W,toggleCardImageClass:R,toggleDescriptionClass:L,setToggleDescriptionClass:U,setCatalogIsOpenMobile:M,selectImage:function(e){var t=function(e){return e<0?G-1:e>G-1?0:e}(e);z(0),k(t),H(-W),U(0===t||g?2:0)},selectProject:Z,previousProject:function(e){e===i&&(h<1?c(o-1):Z(h-1))},nextProject:function(e){e===i&&(h>=K.length-1?c(o+1):Z(h+1))},windowHeight:p,isMobile:g,isTablet:u})]})]})},ke=i(25),we=i.n(ke),Ce=i(24),Se=i.n(Ce);i(45);var De=function(e){var t=e.informationRef,i=e.currentViewport,o=e.selectViewport,c=e.sections,r=e.isScrollSnapped,d=e.isTablet,p=e.isMobile,g=e.windowWidth,u=Object(n.useState)(!1),b=Object(s.a)(u,2),j=b[0],h=b[1],f=Object(n.useState)(!1),x=Object(s.a)(f,2),O=x[0],v=x[1],y=Object(n.useState)(!1),k=Object(s.a)(y,2),w=k[0],C=k[1],S=Object(n.useState)(!1),D=Object(s.a)(S,2),T=D[0],I=D[1],N=Object(n.useState)(!1),M=Object(s.a)(N,2),A=M[0],P=M[1],V=Object(n.useState)(!1),W=Object(s.a)(V,2),H=W[0],B=W[1],E=Object(n.useState)(0),R=Object(s.a)(E,2),z=R[0],q=R[1],F=Object(n.useState)(0),L=Object(s.a)(F,2),U=L[0],K=L[1],X=function(){I(!1),P(!1),q(0),K(0),B(!1)},J=function(e){e.clientY>window.innerHeight-140||X()};Object(n.useEffect)((function(){X()}),[i]),Object(n.useEffect)((function(){return window.addEventListener("click",J),function(){window.removeEventListener("click",J)}}),[J]);var Y="040 7752722",G="sebastian.hognabba@gmail.com",Z=(g-334-488-32)/2+334+32,$=(g-174-394-28)/2+174+28;Object(n.useEffect)((function(){C(!j)}),[i]),Object(n.useEffect)((function(){setTimeout((function(){return v(j)}),d?200:j?500:200)}),[j]);var _=function(e){(p||j)&&o(e)},Q=l()("information-section-about-introduction-label",{"link-button link-button-narrow":O||p},{"no-style-button":!O&&!p}),ee=function(){P(!1),K(0),I(!0),B(!0)},te=function(){I(!1),q(0),P(!0)},ie=function(){return Object(a.jsx)("img",{src:"./assets/icons/phone.png",alt:"Phone",onClick:ee})},ae=function(){return Object(a.jsx)("img",{src:"./assets/icons/email.png",alt:"Email",onClick:te})};return Object(a.jsxs)("section",{ref:t,className:"information-section-container",children:[Object(a.jsx)(m,{navigatorViewport:3,currentViewport:i,selectViewport:o,sections:c,isScrollSnapped:r}),Object(a.jsxs)("div",{className:l()("information-section-content",{"information-section-static":p||!w},{"information-section-animation-enter":!p&&3===i&&w},{"information-section-animation-exit":!p&&3!==i&&w}),children:[Object(a.jsx)("div",{className:"information-section-about",children:Object(a.jsxs)("div",{className:"information-section-about-content-wrapper",children:[Object(a.jsx)("div",{className:"information-section-about-header-wrapper",children:Object(a.jsx)("img",{src:"./assets/face.jpg",alt:"Sebastian",className:l()("information-section-about-image",{"information-section-about-image-open":j},{"information-section-about-image-closed":!j})})}),Object(a.jsx)("div",{className:"information-section-about-text-wrapper-placeholder"}),Object(a.jsxs)("div",{className:l()("information-section-about-text-wrapper",{"information-section-about-text-wrapper-expanded animate-text-wrapper-element":!p&&j},{"animate-text-wrapper-element-reverse":!p&&!j}),style:{left:d?$:Z},children:[Object(a.jsxs)("button",{className:l()("information-section-about-introduction-title link-button link-button-narrow icon-button",{"no-style-button":p}),onClick:function(){h(!j)},disabled:p,children:[Object(a.jsx)("h3",{children:" Sebastian H\xf6gnabba"}),!p&&(j?Object(a.jsx)(Se.a,{}):Object(a.jsx)(we.a,{}))]}),Object(a.jsx)("button",{className:"".concat(Q," ").concat(l()({"animate-title-element-1":!p&&j},{"animate-title-element-1-reverse":!p&&!j})),onClick:function(){return _(1)},children:Object(a.jsx)("p",{children:"Industrial Designer"})}),Object(a.jsx)("button",{className:"".concat(Q," ").concat(l()({"animate-title-element-2":!p&&j},{"animate-title-element-2-reverse":!p&&!j})),onClick:function(){return _(2)},children:Object(a.jsx)("p",{children:"Digital Creator"})}),Object(a.jsx)("button",{className:"disabled-button ".concat(Q," ").concat(l()({"animate-title-element-3":!p&&j},{"animate-title-element-3-reverse":!p&&!j})),onClick:function(){},children:Object(a.jsx)("p",{children:"Genuine Aesthete"})}),Object(a.jsx)("div",{className:l()("information-section-about-introduction-text-wrapper",{"scrollable-element":p}),children:Object(a.jsx)("p",{className:l()("information-section-about-introduction-text",{"animate-element-static":p},{"animate-text-element-in":!p&&j},{"animate-text-element-out":!p&&!j}),children:p?Object(a.jsx)(a.Fragment,{children:"With the problem-solving skills of an engineer and visual eye of an artist, equipped with Master\u2019s Degrees in both UX Design (M.Sc.) and Industrial Design (M.A.), I design functional, aesthetically pleasing solutions that are delightful to use. I am a passionate Industrial Designer, who believes that beauty and the capability to produce aesthetic pleasure are immensely important qualities of successful products and pieces of furniture. With a background in programming and UX design, I have produced elegant digital solutions as a Digital Creator in various industries. My research in design aesthetics highlights the significance of aesthetic experiences in our everyday lives and provides tools for measuring them. As a Genuine Aetshete I am a strong advocate for the importance of aesthetics in all designed solutions."}):d?Object(a.jsx)(a.Fragment,{children:"With the problem-solving skills of an engineer and visual eye of an artist, equipped with Master\u2019s Degrees in both UX Design (M.Sc.) and Industrial Design (M.A.), I design functional, aesthetically pleasing solutions that are delightful to use. I am a passionate \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 who believes that beauty and the capability to produce aesthetic pleasure are immensely important qualities of successful products and pieces of furniture. With a background in programming and UX design, I have produced elegant digital solutions as a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 in various industries. My research in design aesthetics highlights the significance of aesthetic experiences in our everyday lives and provides tools for measuring them. As a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 I am a strong advocate for the importance of aesthetics in all designed solutions."}):Object(a.jsx)(a.Fragment,{children:"With the problem-solving skills of an engineer and visual eye of an artist, equipped with Master\u2019s Degrees in both UX Design (M.Sc.) and Industrial Design (M.A.), I design functional, aesthetically pleasing solutions that are delightful to use. I am a passionate \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 who believes that beauty and the capability to produce aesthetic pleasure are immensely important qualities of successful products and pieces of furniture. With a background in programming and UX design, I have produced elegant digital solutions as a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 in various industries. My research in design aesthetics highlights the significance of aesthetic experiences in our everyday lives and provides tools for measuring them. As a \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 I am a strong advocate for the importance of aesthetics in all designed solutions."})})})]})]})}),Object(a.jsx)("div",{className:"information-section-contact",children:Object(a.jsxs)("div",{className:"information-section-contact-content-wrapper",children:[Object(a.jsxs)("div",{className:"information-section-contact-icon-wrapper",children:[Object(a.jsx)("p",{className:"text-large",children:"Check me out:"}),Object(a.jsx)("a",{href:"https://www.linkedin.com/in/sebastian-h\xf6gnabba-9a45a19b",target:"_blank",rel:"noopener noreferrer",children:Object(a.jsx)("img",{src:"./assets/icons/linkedin.png",alt:"LinkedIn"})}),Object(a.jsx)("a",{className:"hide-element",children:Object(a.jsx)("img",{src:"./assets/icons/instagram.png",alt:"Instagram"})}),Object(a.jsx)("a",{className:"hide-element",children:Object(a.jsx)("img",{src:"./assets/icons/finnishdesigners.png",alt:"Finnish Designers"})})]}),Object(a.jsxs)("div",{className:"information-section-contact-icon-wrapper",children:[Object(a.jsx)("p",{className:"text-large",children:"Hit me up:"}),Object(a.jsxs)("div",{className:l()("information-section-contact-icon-expandable-icon-wrapper",{"information-section-contact-icon-expandable-icon-wrapper-hide":T&&!p}),children:[Object(a.jsx)(ie,{}),Object(a.jsxs)("div",{className:"information-section-contact-icon-expandable-button-wrapper",children:[Object(a.jsx)("span",{className:l()("text-small",{"animate-copied-text-1":-1===z},{"animate-copied-text-2":1===z}),children:"Copied"}),Object(a.jsxs)("button",{className:l()("link-button icon-button",{"animate-button-enter":T},{"animate-button-exit":!T}),disabled:!T,onClick:function(){navigator.clipboard.writeText(Y.replace(/ /g,"")),q(0===z?1:-z)},children:[Object(a.jsx)(ie,{}),Object(a.jsx)("p",{className:p?"":"text-large",children:Y})]})]})]}),Object(a.jsxs)("div",{className:l()("information-section-contact-icon-expandable-icon-wrapper",{"information-section-contact-icon-expandable-icon-wrapper-hide":A&&!p},{"animate-move-element-right":T}),children:[Object(a.jsx)(ae,{}),Object(a.jsxs)("div",{className:"information-section-contact-icon-expandable-button-wrapper information-section-contact-icon-expandable-button-wrapper-email",children:[Object(a.jsx)("span",{className:l()("text-small",{"animate-copied-text-1":-1===U},{"animate-copied-text-2":1===U}),children:"Copied"}),Object(a.jsxs)("button",{className:l()("link-button icon-button",{"animate-button-enter":A&&!H},{"animate-button-enter-left":A&&H},{"animate-button-exit":!A}),disabled:!A,onClick:function(){navigator.clipboard.writeText(G),K(0===U?1:-U)},children:[Object(a.jsx)(ae,{}),Object(a.jsx)("p",{className:p?"":"text-large",children:G})]})]})]})]})]})})]})]})};function Te(){var e=Object(n.useState)(0),t=Object(s.a)(e,2),i=t[0],o=t[1],c=Object(n.useState)(0),r=Object(s.a)(c,2),l=r[0],d=r[1],p=Object(n.useRef)(!0),m=["Home","Product","Digital","About"],u=Object(n.useRef)(null),b=Object(n.useRef)(null),j=Object(n.useRef)(null),h=Object(n.useRef)(null),f=document.getElementById("root"),x=Object(n.useState)(!0),O=Object(s.a)(x,2),v=O[0],y=O[1],k=W.mobileMaxBreakpoint,w=W.tabletMaxBreakpoint,C=window.innerWidth,S=window.innerHeight,D=C<=w,T=C<=k;Object(n.useEffect)((function(){var e=function(){y(!1);var e=f.scrollTop,t=[u.current.offsetTop,b.current.offsetTop,j.current.offsetTop,h.current.offsetTop];t.includes(e)&&y(!0),o(e);var i=e<=t[l-3]?l-3:e>=t[l+3]?l+3:e<=t[l-2]?l-2:e>=t[l+2]?l+2:e<=t[l-1]?l-1:e>=t[l+1]?l+1:l;i!==l&&(0===l&&(p.current=!1),d(i))};return f.addEventListener("scroll",e),function(){return f.removeEventListener("scroll",e)}}),[l,i,f]);var I=function(e){var t=3===e?h:2===e?j:1===e?b:u;f.scrollTo({top:t.current.offsetTop,left:0,behavior:"smooth"})};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(g,{designerRef:u,currentViewport:l,selectViewport:I,sections:m,isScrollSnapped:v,showTypist:p.current,isMobile:T}),Object(a.jsx)(ye,{projectRef:b,designArea:1,currentViewport:l,selectViewport:I,sections:m,isScrollSnapped:v,windowHeight:S,isTablet:D,isMobile:T}),Object(a.jsx)(ye,{projectRef:j,designArea:2,currentViewport:l,selectViewport:I,sections:m,isScrollSnapped:v,windowHeight:S,isTablet:D,isMobile:T}),Object(a.jsx)(De,{informationRef:h,currentViewport:l,selectViewport:I,sections:m,isScrollSnapped:v,windowWidth:C,isTablet:D,isMobile:T})]})}var Ie=function(){return Object(a.jsx)(Te,{})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(a.jsx)(Ie,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.9f899399.chunk.js.map