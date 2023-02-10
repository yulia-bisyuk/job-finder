"use strict";(self.webpackChunkjob_finder=self.webpackChunkjob_finder||[]).push([[996],{9348:function(n,e,t){t(2791);e.Z=t.p+"static/media/sprite.6dc0db34112ede10a03b5ba06486fde7.svg"},8655:function(n,e,t){t.d(e,{Z:function(){return s}});var r,i=t(168),a=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  width: 300px;\n  margin: 0 auto;\n  padding: 6px 12px;\n  background-color: white;\n  border-radius: 8px;\n  border: 1px solid #dc3545;\n  text-align: center;\n"]))),o=t(184),s=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},7388:function(n,e,t){t.d(e,{Tn:function(){return c},mo:function(){return d},oJ:function(){return p},r7:function(){return u}});var r,i,a,o,s=t(168),l=t(6444),d=l.ZP.div(r||(r=(0,s.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 17px;\n"]))),c=l.ZP.div(i||(i=(0,s.Z)(["\n  display: flex;\n  margin-right: 20px;\n"]))),u=l.ZP.svg(a||(a=(0,s.Z)(["\n  width: 10px;\n  height: 10px;\n"]))),p=l.ZP.span(o||(o=(0,s.Z)(["\n  font-weight: 300;\n  font-size: 14px;\n  line-height: 1.21;\n  letter-spacing: 0.206667px;\n  color: ",";\n"])),(function(n){return n.theme.jobDetailsColor}))},3679:function(n,e,t){t.d(e,{Z:function(){return d}});var r,i=t(2299),a=t.n(i),o=t(168),s=t(6444).ZP.div(r||(r=(0,o.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),l=t(184),d=function(){return(0,l.jsx)(s,{children:(0,l.jsx)(a(),{color:"#3A4562",size:36,"aria-label":"Loading Spinner"})})}},9113:function(n,e,t){t.d(e,{_:function(){return r}});var r="https://www.themuse.com/api/public/jobs"},3996:function(n,e,t){t.r(e),t.d(e,{default:function(){return $n}});var r,i,a,o,s,l,d=t(885),c=t(2791),u=t(5223),p=t(1044),h=t(7689),m=t(2982),x=t(7200),g=function(n){return n.slice(0,10).split("-").map((function(n){return Number(n)}))},f=t(9348),b=t(7388),Z=t(184),j=function(n){var e=n.job;return(0,Z.jsxs)(b.mo,{className:"stars-date-save",children:[(0,Z.jsx)(b.Tn,{children:(0,m.Z)(Array(Math.ceil(5*Math.random()))).map((function(n,e){return(0,Z.jsx)(b.r7,{children:(0,Z.jsx)("use",{href:f.Z+"#icon-star"})},e)}))}),(0,Z.jsx)(b.oJ,{children:"Posted "+(0,x.Z)(new Date(g(e.publication_date)[0],g(e.publication_date)[1],g(e.publication_date)[2]))+" ago"})]})},y=t(168),v=t(6444),w=v.ZP.h1(r||(r=(0,y.Z)(["\n  margin-bottom: 5px;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.33;\n\n  color: ",";\n"])),(function(n){return n.theme.titleColor})),P=v.ZP.svg(i||(i=(0,y.Z)(["\n  width: 14px;\n  height: 18px;\n  margin-right: 8px;\n"]))),C=v.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  align-items: center;\n"]))),k=v.ZP.span(o||(o=(0,y.Z)(["\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 1.56;\n  color: ",";\n"])),(function(n){return n.theme.jobDetailsColor})),S=v.ZP.p(s||(s=(0,y.Z)(["\n  margin-top: 0px;\n  margin-bottom: 7px;\n"]))),A=v.ZP.span(l||(l=(0,y.Z)(["\n  display: inline-block;\n  height: 3px;\n  width: 3px;\n  margin-left: 6px;\n  margin-right: 6px;\n  vertical-align: middle;\n  background-color: ",";\n  border-radius: 50%;\n"])),(function(n){return n.theme.jobDetailsColor})),N=function(n){var e=n.job;return(0,Z.jsxs)("div",{className:"allcontent-except-image",children:[(0,Z.jsx)(w,{children:e.name}),(0,Z.jsxs)(S,{children:[(0,Z.jsx)(k,{children:"Department name"}),(0,Z.jsx)(A,{}),(0,Z.jsx)(k,{children:0!==e.categories.length?e.categories[0].name:"Unknown"})]}),(0,Z.jsxs)(C,{children:[(0,Z.jsx)(P,{children:(0,Z.jsx)("use",{href:f.Z+"#icon-location"})}),(0,Z.jsx)(k,{children:0!==e.locations.length?e.locations[0].name:"Location hidden"})]})]})},T=t(1413),F=t(5705),E=t(5562),R=t(473),z=t(3360),I=t(5195),M=t(1724),D=M.Ry({name:M.Z_().min(2,"Name must be minimum 2 characters").max(60,"Name must be maximum 60 characters").required("Required"),email:M.Z_().min(2,"Email must be minimum 2 characters").max(100,"Email must be maximum 100 characters").matches(/^[\w-|.]+@([\w-]+\.)+[\w-]{2,4}$/,'Email must contain "@" and domain name after it and may contain "-" and "."characters before @').required("Required"),phone:M.Z_().matches(/^[\+]{0,1}380([0-9]{9})$/,"Number should start with code of Ukraine +380 and include 9 more digits").required("Required"),language:M.Z_().min(2).required("* Required"),resume:M.nK().required("Required").test("fileSize","File too large",(function(n){return n&&n.size<=5e6})).test("fileFormat","Unsupported file format. Only .pdf files allowed",(function(n){return n&&["application/pdf"].includes(n.type)}))}),q=[{id:"A0/A1",name:"(Beginner/Elementary)"},{id:"A2",name:"(Pre Intermediate)"},{id:"B1",name:"(Intermediate)"},{id:"B2",name:"(Upper Intermediate)"},{id:"C1",name:"(Advanced)"},{id:"C2",name:"(Proficient)"}];var X,_,B,U,G,H,L,O,J,V,W,$,Y,K,Q,nn,en,tn,rn,an,on,sn,ln,dn,cn,un=t.p+"static/media/success-image.69d3674142c5f91589e21bc193e675fb.svg",pn=v.ZP.form(X||(X=(0,y.Z)(["\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 328px;\n  @media screen and (min-width: 768px) {\n    width: 380px;\n  }\n"]))),hn=v.ZP.div(_||(_=(0,y.Z)(["\n  position: relative;\n\n  &:not(:last-child) {\n    margin-bottom: 50px;\n  }\n"]))),mn=v.ZP.label(B||(B=(0,y.Z)(["\n  position: absolute;\n  top: -7px;\n  left: 16px;\n  padding-left: 4px;\n  padding-right: 4px;\n  background-color: ",";\n\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.17;\n\n  color: ",";\n"])),(function(n){return n.theme.lightGreyBg}),(function(n){return n.theme.helperTextColor})),xn=v.ZP.input(U||(U=(0,y.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding-top: 14px;\n  padding-bottom: 14px;\n  padding-left: 16px;\n  border: 1px solid ",";\n  border-radius: 8px;\n  background-color: ",";\n\n  &:focus {\n    outline: none;\n  }\n  &::placeholder {\n    color: ",";\n  }\n"])),(function(n){return n.theme.borderInputColor}),(function(n){return n.theme.lightGreyBg}),(function(n){return n.theme.helperTextColor})),gn=v.ZP.p(G||(G=(0,y.Z)(["\n  margin-left: 16px;\n  margin-bottom: 0;\n  font-size: 12px;\n  color: ",";\n"])),(function(n){return n.theme.bsRed})),fn=v.ZP.p(H||(H=(0,y.Z)(["\n  margin-left: 16px;\n  margin-bottom: 0;\n  font-size: 12px;\n  color: ","; ;\n"])),(function(n){return n.theme.helperTextColor})),bn=v.ZP.div(L||(L=(0,y.Z)(["\n  margin-bottom: 47px;\n  @media screen and (min-width: 768px) {\n    margin-bottom: 50px;\n  }\n"]))),Zn=v.ZP.p(O||(O=(0,y.Z)(["\n  margin-top: 25px;\n  margin-bottom: 11px;\n"]))),jn=v.ZP.label(J||(J=(0,y.Z)(["\n  align-items: center;\n  display: flex;\n  &:not(:last-child) {\n    margin-bottom: 7px;\n  }\n"]))),yn=v.ZP.input(V||(V=(0,y.Z)(["\n  /* remove standard background appearance */\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  /* create custom radiobutton appearance */\n  display: inline-block;\n  margin-right: 12px;\n  width: 20px;\n  height: 20px;\n  padding: 4px;\n  /* background-color only for content */\n  background-clip: content-box;\n  border: 1px solid ",";\n  background-color: ",";\n  border-radius: 50%;\n\n  &:checked {\n    border: 1px solid ",";\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.borderInputColor}),(function(n){return n.theme.lightGreyBg}),(function(n){return n.theme.darkGreyColor}),(function(n){return n.theme.darkGreyColor})),vn=v.ZP.input(W||(W=(0,y.Z)(["\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n"]))),wn=v.ZP.label($||($=(0,y.Z)(["\n  display: flex;\n"]))),Pn=v.ZP.span(Y||(Y=(0,y.Z)(["\n  display: block;\n  padding: 14px 15px;\n  border: 1px solid ",";\n  border-radius: 8px 0px 0px 8px;\n  cursor: pointer;\n"])),(function(n){return n.theme.darkGreyColor})),Cn=v.ZP.span(K||(K=(0,y.Z)(["\n  display: block;\n  width: 245px;\n  padding: 14px 16px;\n\n  border-width: 1px 1px 1px 0px;\n  border-color: ",";\n  border-style: solid;\n  border-radius: 0px 8px 8px 0px;\n  color: ",";\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  @media screen and (min-width: 768px) {\n    width: 297px;\n  }\n"])),(function(n){return n.theme.borderInputColor}),(function(n){return n.theme.helperTextColor})),kn=v.ZP.img(Q||(Q=(0,y.Z)(["\n  margin: 60px auto;\n\n  width: 100%;\n"]))),Sn=function(n){var e=(0,c.useState)(!1),t=(0,d.Z)(e,2),r=t[0],i=t[1],a=(0,c.useState)(!1),o=(0,d.Z)(a,2),s=o[0],l=o[1],u=(0,c.useState)(!1),p=(0,d.Z)(u,2),h=p[0],m=p[1],x=(0,c.useState)(!1),g=(0,d.Z)(x,2),f=g[0],b=g[1],j=(0,c.useState)(""),y=(0,d.Z)(j,2),v=y[0],w=y[1],P=(0,c.useState)(!1),C=(0,d.Z)(P,2),k=C[0],S=C[1],A=r&&s&&h&&f&&v,N=function(n){"name"===n.target.name&&i(!0),"email"===n.target.name&&l(!0),"phone"===n.target.name&&m(!0),"language"===n.target.name&&b(!0)};return(0,Z.jsxs)(E.Z,(0,T.Z)((0,T.Z)({},n),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,backdrop:"static",children:[(0,Z.jsxs)(E.Z.Header,{children:[(0,Z.jsx)(E.Z.Title,{id:"contained-modal-title-vcenter",className:" ms-auto",children:k?"Application submitted!":"Apply for job of your dream!"}),(0,Z.jsx)(R.Z,{onClick:function(){n.onHide(),S(!1)}})]}),(0,Z.jsx)(E.Z.Body,{children:k?(0,Z.jsxs)(I.ZP,{easing:"ease-in",to:"1",from:"0",attributeName:"opacity",children:[(0,Z.jsx)(kn,{src:un,alt:"Success notification"}),(0,Z.jsx)(E.Z.Footer,{children:(0,Z.jsx)(z.Z,{onClick:function(){n.onHide(),S(!1)},className:"me-auto ms-auto",variant:"outline-success",children:"Close"})})]}):(0,Z.jsx)(F.J9,{initialValues:{name:"",email:"",phone:"",language:"",resume:null},validationSchema:D,onSubmit:function(n,e){return function(n,e){(0,e.resetForm)(),document.getElementById(n.language).checked=!1,i(!1),l(!1),m(!1),w(""),S(!0)}(n,e)},children:function(n){return(0,Z.jsxs)(pn,{onSubmit:n.handleSubmit,onChange:N,children:[(0,Z.jsxs)("div",{children:[(0,Z.jsxs)(hn,{children:[r&&(0,Z.jsx)(mn,{children:"Your name"}),(0,Z.jsx)(xn,(0,T.Z)({id:"name",name:"name",type:"text",border:n.errors.name&&"1px solid red",placeholder:r?"":"Your name",onChange:n.handleChange},n.getFieldProps("name"))),n.touched.name&&n.errors.name?(0,Z.jsx)(gn,{children:n.errors.name}):null]}),(0,Z.jsxs)(hn,{children:[s&&(0,Z.jsx)(mn,{children:"Email"}),(0,Z.jsx)(xn,(0,T.Z)({id:"email",type:"email",name:"email",border:n.errors.email&&"1px solid red",placeholder:s?"":"Email",onChange:n.handleChange},n.getFieldProps("email"))),n.touched.email&&n.errors.email?(0,Z.jsx)(gn,{children:n.errors.email}):null]}),(0,Z.jsxs)(hn,{children:[h&&(0,Z.jsx)(mn,{children:"Phone"}),(0,Z.jsx)(xn,(0,T.Z)({id:"phone",type:"text",name:"phone",border:n.errors.phone&&"1px solid red",placeholder:h?"":"Phone",onChange:n.handleChange},n.getFieldProps("phone"))),(0,Z.jsx)(fn,{children:"+380XXXXXXXXX"}),n.touched.phone&&n.errors.phone?(0,Z.jsx)(gn,{children:n.errors.phone}):null]})]}),(0,Z.jsx)(Zn,{children:"Indicate your English level:"}),(0,Z.jsxs)(bn,{children:[q.map((function(e){return(0,Z.jsxs)(jn,{children:[(0,Z.jsx)(yn,{id:e.id,type:"radio",name:"language",value:e.id,onChange:n.handleChange}),"".concat(e.id," ").concat(e.name)]},e.id)})),n.touched.language&&n.errors.language?(0,Z.jsx)(gn,{children:n.errors.language}):null]}),(0,Z.jsx)(vn,{id:"resume",name:"resume",type:"file",placeholder:"Upload your CV",onChange:function(e){n.setFieldValue("resume",e.currentTarget.files[0]),w(e.currentTarget.files[0].name)}}),(0,Z.jsxs)(wn,{htmlFor:"resume",children:[(0,Z.jsx)(Pn,{children:"Upload"}),(0,Z.jsx)(Cn,{children:v||"Upload your CV"})]}),n.touched.resume&&n.errors.resume?(0,Z.jsx)(gn,{children:n.errors.resume}):null,(0,Z.jsx)(E.Z.Footer,{style:{borderTop:"0"},children:(0,Z.jsx)(z.Z,{type:"submit",variant:"success",className:"me-auto ms-auto",size:"lg",disabled:!A,children:"Apply"})})]})}})})]}))},An=v.ZP.li(nn||(nn=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n  padding: 13px 16px;\n  background-color: ",";\n  border-radius: 8px;\n  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));\n"])),(function(n){return n.theme.secondaryBgColor})),Nn=v.ZP.div(en||(en=(0,y.Z)(["\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n"]))),Tn=v.ZP.span(tn||(tn=(0,y.Z)(["\n  min-width: 60px;\n  min-height: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 28px;\n  font-weight: 500;\n  color: white;\n\n  background-color: ",";\n\n  border-radius: 50px;\n  margin-right: 20px;\n"])),(function(n){return n.theme.bsGreen})),Fn=v.ZP.div(rn||(rn=(0,y.Z)(["\n  width: fit-content;\n  margin-left: auto;\n"]))),En=function(n){var e,t=n.job,r=(0,c.useState)(!1),i=(0,d.Z)(r,2),a=i[0],o=i[1],s=(0,h.s0)(),l=(0,c.useContext)(u.T).setJobId;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(An,{className:"mb-2",children:[(0,Z.jsxs)(Nn,{children:[(0,Z.jsx)(Tn,{children:(e=t.name,/^[A-Za-z0-9]*$/.test(e[0])?e.match(/[A-Z]/g).splice(0,2):e[0])}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(j,{job:t}),(0,Z.jsx)(N,{job:t})]})]}),(0,Z.jsxs)(Fn,{children:[(0,Z.jsx)(z.Z,{onClick:function(){return n=t.id,l(n),void s("details");var n},type:"button",variant:"outline-secondary",className:"me-2",children:"Details"}),(0,Z.jsx)(z.Z,{onClick:function(){return o(!0)},type:"button",variant:"outline-success",children:"Apply now"})]})]}),(0,Z.jsx)(Sn,{show:a,onHide:function(){return o(!1)}})]})},Rn=t(6048),zn=t.n(Rn),In=function(n){var e=n.setCurrentPage,t=(0,c.useState)(0),r=(0,d.Z)(t,2),i=(r[0],r[1]);return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsx)(zn(),{breakLabel:"...",nextLabel:(0,Z.jsxs)("div",{className:"wrapper",children:[(0,Z.jsx)("span",{className:"divider",children:"|"}),(0,Z.jsx)("svg",{className:"nav-icon",children:(0,Z.jsx)("use",{href:f.Z+"#icon-go-pagination-forw"})})]}),onPageChange:function(n){e(n.selected+1);var t=20*n.selected%18;i(t),window.scrollTo({top:0,behavior:"smooth"})},pageRangeDisplayed:5,marginPagesDisplayed:1,pageCount:18,previousLabel:(0,Z.jsxs)("div",{className:"wrapper",children:[(0,Z.jsx)("svg",{className:"nav-icon",children:(0,Z.jsx)("use",{href:f.Z+"#icon-go-pagination-back"})}),(0,Z.jsx)("span",{className:"divider",children:"|"})]}),renderOnZeroPageCount:null,className:"paginationContainer",pageClassName:"page",activeClassName:"active"})})},Mn=t(8655),Dn=t(6443),qn=t(9546),Xn=["Accounting","Accounting and Finance","Account Management","Account Management/Customer Success","Administration and Office","Advertising and Marketing","AnimalCare","Arts","Business Operations","Cleaning and Facilities","Computer and IT","Construction","Corporate","Customer Service","Data and Analytics","Data Science","Design","Design and UX","Editor","Education","Energy Generation and Mining","Entertainment and Travel Services","Farming and Outdoors","Food and Hospitality Services","Healthcare","HR","Human Resources and Recruitment","Installation, Maintenance, and Repairs","IT","Law","Legal Services","Management","Manufacturing and Warehouse","Marketing","Mechanic","Media, PR, and Communications","Mental Health","Nurses","Office Administration","Personal Care and Services","Physical Assistant","Product","Product Management","Project Management","Protective Services","Public Relations","Real Estate","Recruiting","Retail","Sales","Science and Engineering","Social Services","Software Engineer","Software Engineering","Sports, Fitness, and Recreation","Transportation and Logistics","Unknown","UX","Videography","Writer","Writing and Editing"],_n=function(){var n=(0,c.useContext)(u.T).setCategory,e=Xn.map((function(e){return(0,Z.jsx)(Dn.Z.Item,{value:e,onClick:function(e){return n(e.target.innerText)},children:e},200*Math.random())}));return(0,Z.jsx)(qn.Z,{id:"dropdown-basic-button",title:"Choose the category",variant:"light",drop:"down-centered",className:"text-center mb-2",children:e})},Bn=v.ZP.div(an||(an=(0,y.Z)(["\n  margin: 26px 0px;\n  padding: 32px 12px;\n  border-radius: 8px;\n  box-shadow: 0px 4px 4px rgba(25, 135, 84, 0.25);\n  background-color: ",";\n  color: white;\n"])),(function(n){return n.theme.bsGreen})),Un=v.ZP.h1(on||(on=(0,y.Z)(["\n  margin-bottom: 30px;\n  text-align: center;\n"]))),Gn=v.ZP.span(sn||(sn=(0,y.Z)(["\n  font-weight: 900;\n"]))),Hn=v.ZP.div(ln||(ln=(0,y.Z)(["\n  margin-bottom: 30px;\n  padding: 12px;\n  border: 1px solid white;\n  border-radius: 8px;\n  & > p {\n    text-align: center;\n  }\n"]))),Ln=v.ZP.a(dn||(dn=(0,y.Z)(["\n  color: white;\n"]))),On=function(){return(0,Z.jsxs)(Bn,{children:[(0,Z.jsxs)(Un,{children:["This is ",(0,Z.jsx)(Gn,{children:"Job Finder"})," training project."," "]}),(0,Z.jsxs)(Hn,{children:[(0,Z.jsxs)("p",{children:["Data fetched from"," ",(0,Z.jsx)(Ln,{href:"https://www.themuse.com/developers/api/v2",target:"blank",children:"API"})," ","is real and you can discover the info about every position on this page by clicking the ",(0,Z.jsx)("b",{children:"'Details'"})," button."]})," ",(0,Z.jsxs)("p",{children:["Click on ",(0,Z.jsx)("b",{children:"'Apply now'"})," button will open the modal with form."," ",(0,Z.jsx)("b",{children:"'Apply'"})," button inside the form"," ",(0,Z.jsx)("b",{children:(0,Z.jsx)("em",{children:"will not"})})," ","send an actual POST request as it is not allowed by"," ",(0,Z.jsx)(Ln,{href:"https://www.themuse.com/developers/api/v2",target:"blank",children:"API"}),". ",(0,Z.jsx)("br",{}),"If you are interested in applying for any of presented here position, you can find link for this on ",(0,Z.jsx)("b",{children:"'Details'"})," page."]}),(0,Z.jsx)("p",{children:"As well you can choose the category you are interested in."})," "]}),(0,Z.jsx)(_n,{})]})},Jn=t(3679),Vn=v.ZP.ul(cn||(cn=(0,y.Z)(["\n  margin-bottom: 26px;\n  @media screen and (min-width: 768px) {\n    display: grid;\n    grid-template-columns: repeat(2, 49%);\n    grid-auto-rows: auto;\n    gap: 16px;\n    justify-content: center;\n  }\n"]))),Wn=t(9113),$n=function(){var n=(0,c.useState)([]),e=(0,d.Z)(n,2),t=e[0],r=e[1],i=(0,c.useState)(1),a=(0,d.Z)(i,2),o=a[0],s=a[1],l=(0,c.useState)(!1),h=(0,d.Z)(l,2),m=h[0],x=h[1],g=(0,c.useState)(!1),f=(0,d.Z)(g,2),b=f[0],j=f[1],y=(0,c.useState)(!1),v=(0,d.Z)(y,2),w=v[0],P=v[1],C=(0,c.useState)(!1),k=(0,d.Z)(C,2),S=k[0],A=k[1],N=(0,c.useContext)(u.T).category,T=N?"category=".concat(N):null;return(0,c.useEffect)((function(){P(!0),p.ZP.get("".concat(Wn._,"?").concat(T,"&page=").concat(o)).then((function(n){0!==n.data.results.length?(r(n.data.results),A(!0),j(!1)):j(!0)})).catch((function(n){console.error("Error:",n),x(!0)})).finally((function(){return P(!1)}))}),[o,T]),(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(On,{}),w&&(0,Z.jsx)(Jn.Z,{}),m&&(0,Z.jsx)(Mn.Z,{children:"Oops... Something went wrong"}),b?(0,Z.jsx)(Mn.Z,{children:"There is no data for your request. Please, try again!"}):(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(Vn,{children:S&&t&&t.map((function(n){return(0,Z.jsx)(En,{job:n},n.id)}))}),(0,Z.jsx)(In,{setCurrentPage:s})]})]})}}}]);
//# sourceMappingURL=996.0e5f3912.chunk.js.map