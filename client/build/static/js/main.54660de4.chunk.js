(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){e.exports=a.p+"static/media/11test.9c2d648b.jpg"},128:function(e,t,a){e.exports=a.p+"static/media/12.0e6469ff.jpg"},129:function(e,t,a){e.exports=a.p+"static/media/Interior.6e9c73db.jpg"},130:function(e,t,a){e.exports=a.p+"static/media/10.cb544b6f.jpg"},131:function(e,t,a){e.exports=a.p+"static/media/9.04812b2f.jpg"},133:function(e,t,a){e.exports=a.p+"static/media/8.8e97a10e.jpg"},134:function(e,t,a){e.exports=a.p+"static/media/Clients.325aa500.JPG"},135:function(e,t,a){e.exports=a.p+"static/media/OurTeam.c88aa659.JPG"},136:function(e,t,a){e.exports=a.p+"static/media/Working.a9a7d250.JPG"},137:function(e,t,a){e.exports=a.p+"static/media/Owner.2cac8d71.jpg"},141:function(e,t,a){e.exports=a(325)},146:function(e,t,a){},147:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},178:function(e,t,a){},179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){},19:function(e,t,a){e.exports=a.p+"static/media/final.4952c448.png"},313:function(e,t,a){},314:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},318:function(e,t,a){},319:function(e,t,a){},320:function(e,t,a){},321:function(e,t,a){},322:function(e,t,a){},323:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(126),c=a.n(r),s=a(327),i=a(330),o=a(329),m=a(4),u=a(5),d=a(7),f=a(6),b=a(8);a(146);var p=function(e){var t=e.children;return l.a.createElement("div",{style:{height:600,clear:"both",paddingTop:60,textAlign:"center",margin:0},className:"jumbotron jumboBorder"},t)},E=(a(147),a(127)),h=a.n(E),v=a(128),N=a.n(v),g=a(129),y=a.n(g),j=a(130),O=a.n(j),C=a(131),w=a.n(C),x=a(132),k=[h.a,N.a,y.a,O.a,w.a],J={duration:8e3,transitionDuration:500,infinite:!0,indicators:!1,arrows:!0};var P=function(){return l.a.createElement("div",{className:"slide-container"},l.a.createElement(x.Slide,J,l.a.createElement("div",{className:"each-slide"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("img",{className:" firstslide",src:k[0],alt:"Porfolio Not Found"}),l.a.createElement("img",{className:"fourthslide",src:k[4],alt:"Porfolio Not Found"})))),l.a.createElement("div",{className:"each-slide"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("img",{className:"slide",src:k[1],alt:"Porfolio Not Found"}),l.a.createElement("img",{className:"slide",src:k[3],alt:"Porfolio Not Found"})))),l.a.createElement("div",{className:"each-slide"},l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("img",{className:"slides",src:k[2],alt:"Porfolio Not Found"}))))))},q=a(326);a(157);var D=function(){return l.a.createElement("span",{className:"cover",tabIndex:"0"},l.a.createElement(q.a,{to:"/AboutUs"}," ",l.a.createElement("button",{type:"button",className:"btn btn-lg btn-block customBtn"},"About Us")," "),l.a.createElement(q.a,{to:"/RequestForm"}," ",l.a.createElement("button",{type:"button",className:"btn btn-lg btn-block two customBtn"},"Request a Quote")," "),l.a.createElement(q.a,{to:"/Portfolio"}," ",l.a.createElement("button",{type:"button",className:"btn btn-lg btn-block three customBtn"},"Full Portfolio")," "))};a(158);var S=function(){return l.a.createElement("div",{className:"card text-white mb-3 aboutInfo"},l.a.createElement("div",{className:"card-header"},"About Us"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Plaster Restorations LLC"),l.a.createElement("p",{className:"card-text"},"Our Company is committed to offering the best quality work possible at the right price.")),l.a.createElement(q.a,{to:"/AboutUs"}," ",l.a.createElement("button",{type:"button",className:"btn btn-lg customBtn aboutButton"},"Learn More")," "))},F=(a(159),a(133)),M=a.n(F);var A=function(){return l.a.createElement("img",{className:"img fluid aboutImg",src:M.a,alt:"Porfolio Not Found"})};a(160);var L=function(){return l.a.createElement("div",{className:"card text-white mb-3 requestA"},l.a.createElement("div",{className:"card-header"},"Request a Quote Today"),l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},"Why make a request?"),l.a.createElement("p",{className:"card-text"},"Due to the nature of plastering it is often difficult to give a correct quote over the phone without one of our employees visiting the site personally to inspect the area where work must be done. ",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null)," Click on the button to make a request ")),l.a.createElement(q.a,{to:"/RequestForm"},l.a.createElement("button",{type:"button",className:"btn btn-lg customBtn FormButton"},"Form")))},U=a(12),z=a.n(U),R={getClients:function(){return z.a.get("/api/clients")},getCurrentJobs:function(){return z.a.get("/api/clients/currentJobs")},getClient:function(e){return z.a.get("/api/clients/"+e)},deleteClient:function(e){return z.a.delete("/api/clients/"+e)},deleteCurrentJob:function(e){return z.a.delete("/api/clients/currentJobs/"+e)},saveClient:function(e){return z.a.post("/api/clients",e)},saveCurrentJob:function(e){return z.a.post("/api/clients/currentJobs",e)},newUser:function(e){return z.a.post("/api/clients/SignUp",e)},logInUser:function(e){return console.log(e),z.a.post("/api/clients/UserLogin",e)},verifyUser:function(e){return z.a.get("/api/clients/Verify/"+e)}},I=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("user");R.verifyUser(e).then(function(t){t.data[0].email===e&&(document.getElementById("hidden").style.display="block")}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement(D,null),l.a.createElement(p,null,l.a.createElement("span",null,l.a.createElement(S,null),l.a.createElement(A,null),l.a.createElement(L,null))))}}]),t}(n.Component);a(178);function T(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":""," border-grid")},a)}function B(e){var t=e.fluid,a=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":""," spaceRows jobHeight")},a)}function H(e){var t=e.size,a=e.children;return l.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}var Q=a(134),_=a.n(Q);a(179);var V=function(){return l.a.createElement("div",{className:"media content"},l.a.createElement("div",{className:"media-body"},l.a.createElement("h1",{className:"mt-0 mb-1 shift"},"About Us"),l.a.createElement("br",null),l.a.createElement("p",{className:"font-resize"},"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.")),l.a.createElement("img",{src:_.a,className:"ml-3 img-resize",alt:"..."}))},W=(a(180),a(135)),Y=a.n(W),G=a(136),$=a.n(G);var K=function(){return l.a.createElement("span",{className:"shape"},l.a.createElement("img",{className:"img fluid aboutImg3",src:$.a,alt:"Porfolio Not Found"}),l.a.createElement("img",{className:"img fluid aboutImg2",src:Y.a,alt:"Porfolio Not Found"}))},X=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return l.a.createElement(T,{fluid:!0},l.a.createElement(V,null),l.a.createElement(K,null))}}]),t}(n.Component),Z=a(137),ee=a.n(Z);a(181);var te=function(){return l.a.createElement("div",{className:"media contact-info"},l.a.createElement("div",{className:"media-body contact-text"},l.a.createElement("h1",{className:"mt-0 mb-1 shift-right"},"Contact Information"),l.a.createElement("img",{src:ee.a,className:"ml-3 img-orientation",alt:"..."}),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",{className:"contact-text-size"},"Name: Joel W. Nafey"),l.a.createElement("li",{className:"contact-text-size"},"Phone: (908)-581-2151"),l.a.createElement("li",{className:"contact-text-size"},"Email: gknafey@gmail.com"),l.a.createElement("li",{className:"contact-text-size"},"Located: Milltown, NJ"))))},ae=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(T,{fluid:!0},l.a.createElement(te,null))}}]),t}(n.Component);a(182);var ne=function(){return l.a.createElement("div",{className:"media content"},l.a.createElement("div",{className:"media-body"},l.a.createElement("h1",{className:"mt-0 mb-1 shift"},"Services We Provide"),l.a.createElement("br",null),l.a.createElement("p",{className:"font-resize"},"Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."),l.a.createElement("h2",{className:"margin-title"},"Plastering"),l.a.createElement("ul",null,l.a.createElement("li",{className:"contact-text-size"},"Plaster Restorations"),l.a.createElement("li",{className:"contact-text-size"},"Ornamental Plaster"),l.a.createElement("li",{className:"contact-text-size"},"Venetian Plaster"),l.a.createElement("li",{className:"contact-text-size"},"Venetian Plaster"),l.a.createElement("li",{className:"contact-text-size"},"Venetian Plaster")),l.a.createElement("h3",{className:"margin-title"},"Referals"),l.a.createElement("ul",null,l.a.createElement("li",{className:"contact-text-size"},"Stucco"),l.a.createElement("li",{className:"contact-text-size"},"Drywall"),l.a.createElement("li",{className:"contact-text-size"},"Others"))))},le=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(T,{fluid:!0},l.a.createElement(ne,null))}}]),t}(n.Component),re=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement(T,{fluid:!0},l.a.createElement("h1",null,"Portfolio here"))}}]),t}(n.Component),ce=a(54),se=a(55),ie=a(34),oe=a(140),me=a.n(oe),ue=a(21),de=a(19),fe=a.n(de),be=(a(313),function(e){var t=e.label,a=Object(se.a)(e,["label"]),n=Object(ie.c)(a),r=Object(ce.a)(n,2),c=r[0],s=r[1];return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"quote-size",htmlFor:a.id||a.name},t),l.a.createElement("input",Object.assign({className:"form-control quote-text-width"},c,a)),s.touched&&s.error?l.a.createElement("small",{className:"error"},s.error):null)}),pe=function(e){var t=e.label,a=Object(se.a)(e,["label"]),n=Object(ie.c)(a),r=Object(ce.a)(n,2),c=r[0],s=r[1];return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"quote-size",htmlFor:a.id||a.name},t),l.a.createElement("input",Object.assign({id:"textnumber",className:"form-control quote-text-width"},c,a)),s.touched&&s.error?l.a.createElement("small",{className:"error"},s.error):null)},Ee=function(e){var t=e.label,a=Object(se.a)(e,["label"]),n=Object(ie.c)(a),r=Object(ce.a)(n,2),c=r[0],s=r[1];return l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"quote-size",htmlFor:a.id||a.name},t),l.a.createElement("textarea",Object.assign({className:"form-control quote-area-width"},c,a)),s.touched&&s.error?l.a.createElement("div",{className:"error"},s.error):null)},he=function(){return l.a.createElement("div",{className:"content"},l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Quote Request Form"),l.a.createElement(ie.b,{initialValues:{firstName:"",lastName:"",email:"",phoneNumber:"",jobDetails:"",createdOn:""},validationSchema:ue.object({firstName:ue.string().max(15,"Must be 15 characters or less").required("Required"),lastName:ue.string().max(20,"Must be 20 characters or less").required("Required"),email:ue.string().email("Invalid email address`").required("Required"),phoneNumber:ue.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),jobDetails:ue.string().max(300,"Must be 20 characters or less").required("Required"),createdOn:ue.date().default(function(){return new Date})}),onSubmit:function(e,t){var a=t.setSubmitting;setTimeout(function(){e.createdOn=me()().format("MMMM Do YYYY, h:mm:ss a"),R.saveClient({firstName:e.firstName,lastName:e.lastName,email:e.email,phoneNumber:e.phoneNumber,jobDetails:e.jobDetails,createdOn:e.createdOn}).then(function(e){return console.log(e)}).catch(function(e){return console.log(e)}),alert(JSON.stringify(e,null,2)),a(!1)},400)}},l.a.createElement(ie.a,null,l.a.createElement("img",{className:"logo-location2",src:fe.a,alt:"Logo Here"}),l.a.createElement(be,{label:"First Name:",name:"firstName",type:"text",placeholder:"John"}),l.a.createElement(be,{label:"Last Name:",name:"lastName",type:"text",placeholder:"Smith"}),l.a.createElement(be,{label:"Email Address:",name:"email",type:"email",placeholder:"johnsmith@gmail.com"}),l.a.createElement(pe,{label:"Phone Number:",name:"phoneNumber",type:"text",placeholder:"999-888-7777"}),l.a.createElement(Ee,{label:"Job Details",name:"jobDetails",type:"text",placeholder:"Job Details Here"}),l.a.createElement("button",{className:"btn btn-lg QuoteBtn",type:"submit"},"Submit")))))},ve=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,210)}},{key:"render",value:function(){return l.a.createElement(T,{fluid:!0},l.a.createElement(he,null))}}]),t}(n.Component);var Ne=function(){return l.a.createElement(T,{fluid:!0},l.a.createElement(B,null,l.a.createElement(H,{size:"md-12"},l.a.createElement(p,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},ge=a(51),ye=(a(314),a(328)),je=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.compare=function(){console.log(a.state.username),console.log(a.state.password),R.logInUser({email:a.state.username,password:a.state.password}).then(function(e){localStorage.setItem("user",e.data.email),a.setState({redirect:!0}),console.log(e)})},a.onChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(ge.a)({},n,l))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,210)}},{key:"render",value:function(){return l.a.createElement(T,{fluid:!0},l.a.createElement("div",{className:"content2"},this.state.redirect&&l.a.createElement(ye.a,{to:"/"}),l.a.createElement("img",{className:"logo-location3",alt:"Logo Here",src:fe.a}),l.a.createElement("div",{className:"floatBot"},l.a.createElement("h1",null,"Login"),l.a.createElement("div",null,l.a.createElement("label",{className:"spaceMe"},"Username: "),l.a.createElement("input",{onChange:this.onChange,className:"spaceMe",type:"text",name:"username",placeholder:"username"}),l.a.createElement("label",{className:"spaceMe"},"Password"),l.a.createElement("input",{onChange:this.onChange,className:"spaceMe",type:"password",name:"password",placeholder:"password"}),l.a.createElement("input",{onClick:this.compare,className:"btn btn-lg QuoteBtn",type:"submit",value:"Login"})))))}}]),t}(n.Component),Oe=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={username:"",password:""},a.register=function(){R.newUser({email:a.state.username,password:a.state.password}).then(function(e){a.setState({redirect:!0}),console.log(e)})},a.onChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(ge.a)({},n,l))},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){window.scrollTo(0,210)}},{key:"render",value:function(){return l.a.createElement(T,{fluid:!0},l.a.createElement("div",{className:"content2"},this.state.redirect&&l.a.createElement(ye.a,{to:"/Login"}),l.a.createElement("img",{className:"logo-location3",src:fe.a,alt:"Logo Here"}),l.a.createElement("div",{className:"floatBot"},l.a.createElement("h1",null,"Secret Sign Up"),l.a.createElement("div",null,l.a.createElement("label",{className:"spaceMe"},"Email: "),l.a.createElement("input",{onChange:this.onChange,className:"spaceMe",type:"text",name:"username",placeholder:"username"}),l.a.createElement("label",{className:"spaceMe"},"Password"),l.a.createElement("input",{onChange:this.onChange,className:"spaceMe",type:"password",name:"password",placeholder:"password"}),l.a.createElement("button",{onClick:this.register,className:"btn btn-lg QuoteBtn"},"Sign Up")))))}}]),t}(n.Component);a(316);var Ce=function(){return l.a.createElement("nav",{className:"navbar"},l.a.createElement("a",{className:"navbar-brand ",href:"/"},l.a.createElement(q.a,{to:"/"}," ",l.a.createElement("img",{className:"logo",alt:"Logo Here",src:fe.a})," ")),l.a.createElement("ul",{className:"nav justify-content-end"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(q.a,{to:"/",className:"nav-item test"},"Home ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("p",{className:"nav-item",style:{color:"#e5cdaa"}},"\xa0|\xa0")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(q.a,{to:"/AboutUs",className:"nav-item test"},"About Us ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("p",{className:"nav-item",style:{color:"#e5cdaa"}},"\xa0|\xa0")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(q.a,{to:"/Portfolio",className:"nav-item test"},"Portfolio ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("p",{className:"nav-item",style:{color:"#e5cdaa"}},"\xa0|\xa0")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(q.a,{to:"/Services",className:"nav-item test"},"Services ")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("p",{className:"nav-item",style:{color:"#e5cdaa"}},"\xa0|\xa0")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(q.a,{to:"/ContactUs",className:"nav-item test"},"Contact Us "))))};a(317);var we=function(){return l.a.createElement("div",{className:"quickContact"},l.a.createElement("span",{className:"shiftLeft"},l.a.createElement("p",null,"\xa0 Phone: 908-581-2151 \xa0|\xa0 Email: ",l.a.createElement("a",{className:"email",href:"mailto:jnafey@plasterrestorationsllc.com"},"jnafey@plasterrestorationsllc.com "),"\xa0")))};a(318);var xe=function(){return l.a.createElement("div",{className:"container-max-width footer"},l.a.createElement("div",{className:"row footBorder"},l.a.createElement("div",{className:"col-5"},l.a.createElement("p",{className:"headLink"},"Affiliate Links ",l.a.createElement("br",null)),l.a.createElement("a",{className:"linkText",target:"_blank",rel:"noopener noreferrer",href:"https://www.homeadvisor.com/rated.PlasterRestorationsLLC.43338900.html",to:"#"},"Home Advisor")),l.a.createElement("div",{className:"col-3"}),l.a.createElement("div",{className:"col-3"},l.a.createElement("p",{className:"headLink"},"Admin Links ",l.a.createElement("br",null)),l.a.createElement(q.a,{className:"linkText",to:"/login"},"Login"))))};a(319);var ke=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"Delete")};a(320);var Je=function(e){return l.a.createElement("span",Object.assign({className:"accept-btn"},e,{role:"button",tabIndex:"0"}),"Accept Job")};a(321);var Pe=function(e){return l.a.createElement("span",Object.assign({className:"refer-btn"},e,{role:"button",tabIndex:"0"}),"Refer Job")};a(322);function qe(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function De(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item listStyles"},t)}a(323);var Se=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(l)))).state={clients:[],currentJobs:[],firstName:"",lastName:"",email:"",phoneNumber:"",jobDetails:"",createdOn:""},a.empty=function(e){if("number"==typeof e||"boolean"==typeof e)return!1;if("undefined"==typeof e||null===e)return!0;if("undefined"!=typeof e.length)return 0===e.length;var t=0;for(var a in e)e.hasOwnProperty(a)&&t++;return 0===t},a.loadClients=function(){R.getClients().then(function(e){return a.setState({clients:e.data})}).catch(function(e){return console.log(e)})},a.deleteClient=function(e){R.deleteClient(e).then(function(e){return a.loadClients()}).catch(function(e){return console.log(e)})},a.deleteCurrentJob=function(e){R.deleteCurrentJob(e).then(function(e){return a.loadCurrentClients()}).catch(function(e){return console.log(e)})},a.saveCurrentJob=function(e,t,n,l,r,c,s){R.saveCurrentJob({firstName:e,lastName:t,email:n,phoneNumber:l,jobDetails:r,createdOn:c}).then(function(e){return a.deleteClient(s)},a.loadClients(),a.loadCurrentClients()).catch(function(e){return console.log(e)})},a.loadCurrentClients=function(){R.getCurrentJobs().then(function(e){return a.setState({currentJobs:e.data})}).catch(function(e){return console.log(e)})},a}return Object(b.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("user");console.log(t),R.verifyUser(t).then(function(a){console.log(a.data),!0===e.empty(a.data)?e.setState({redirect:!0}):a.data[0].email!==t&&e.setState({redirect:!0})}).catch(function(e){return console.log(e)}),this.loadClients(),this.loadCurrentClients()}},{key:"render",value:function(){var e=this;return l.a.createElement(T,{fluid:!0},this.state.redirect&&l.a.createElement(ye.a,{to:"/"}),l.a.createElement(B,{className:"spaceRows"},l.a.createElement(H,{size:"md-6",className:"jobMangement-info"},l.a.createElement("h1",{className:"position1"},"Incoming Jobs"),l.a.createElement(qe,null,this.state.clients.map(function(t){return l.a.createElement(De,{key:t._id},l.a.createElement("span",{className:"itemTitle"},"Name:")," ",t.firstName," ",t.lastName," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Email:"),"  ",t.email," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Phone Number:"),"  ",t.phoneNumber," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Job Details:"),"  ",t.jobDetails," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Recieved Request:"),"  ",t.createdOn," ",l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(ke,{onClick:function(){return e.deleteClient(t._id)}}),l.a.createElement(Pe,null),l.a.createElement(Je,{onClick:function(){return e.saveCurrentJob(t.firstName,t.lastName,t.email,t.phoneNumber,t.jobDetails,t.createdOn,t._id)}})))}))),l.a.createElement(H,{size:"md-6",className:"jobMangement-info"},l.a.createElement("h1",{className:"position1"},"Ongoing Jobs"),l.a.createElement(qe,null,this.state.currentJobs.map(function(t){return l.a.createElement(De,{key:t._id},l.a.createElement("span",{className:"itemTitle"},"Name:")," ",t.firstName," ",t.lastName," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Email:"),"  ",t.email," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Phone Number:"),"  ",t.phoneNumber," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Job Details:"),"  ",t.jobDetails," ",l.a.createElement("br",null),l.a.createElement("span",{className:"itemTitle"},"Recieved Request:"),"  ",t.createdOn," ",l.a.createElement("br",null),l.a.createElement("span",null,l.a.createElement(ke,{onClick:function(){return e.deleteCurrentJob(t._id)}}),l.a.createElement(Pe,null)))})))))}}]),t}(n.Component),Fe=(a(324),function(){localStorage.removeItem("user"),window.location.reload(!1)});var Me=function(){return l.a.createElement("div",{id:"hidden",style:{display:"none"},className:"quickContact hiddenBorder"},l.a.createElement("span",{className:"shiftLeft"},l.a.createElement(q.a,{to:"/JobManagement",className:"nav-item test color",href:"#"},"Job Management ")),l.a.createElement("span",{className:"nav-item",style:{color:"#e5cdaa"}},"\xa0|\xa0\xa0\xa0\xa0"),l.a.createElement("span",{className:"shiftLeft"},l.a.createElement(q.a,{to:"/",onClick:Fe,className:"nav-item test color",href:"#"},"Sign Out ")))};var Ae=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(Ce,null),l.a.createElement(Me,null),l.a.createElement(we,null),l.a.createElement(i.a,null,l.a.createElement(o.a,{exact:!0,path:"/",component:I}),l.a.createElement(o.a,{exact:!0,path:"/AboutUs",component:X}),l.a.createElement(o.a,{exact:!0,path:"/Portfolio",component:re}),l.a.createElement(o.a,{exact:!0,path:"/Services",component:le}),l.a.createElement(o.a,{exact:!0,path:"/ContactUs",component:ae}),l.a.createElement(o.a,{exact:!0,path:"/RequestForm",component:ve}),l.a.createElement(o.a,{exact:!0,path:"/Login",component:je}),l.a.createElement(o.a,{exact:!0,path:"/SignUp",component:Oe}),l.a.createElement(o.a,{exact:!0,path:"/JobManagement",component:Se}),l.a.createElement(o.a,{component:Ne})),l.a.createElement(xe,null)))};c.a.render(l.a.createElement(Ae,null),document.getElementById("root"))}},[[141,1,2]]]);
//# sourceMappingURL=main.54660de4.chunk.js.map