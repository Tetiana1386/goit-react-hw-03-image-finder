(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{38:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=(a(38),a(5)),i=a.n(s),l=a(18),u=a(8),d=a(9),g=a(10),h=a(12),m=a(11),j=a(31),p=a.n(j),b=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat("https://pixabay.com/api","/?q=").concat(t,"&page=").concat(a,"&key=").concat("21693934-b739dad2632fdbf7884e4d0a2","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.hits);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=(a(58),a(1));var v=function(e){var t=e.children;return Object(f.jsx)("div",{className:"Container",children:t})};a(60);var O=function(e){var t=e.onHandleSubmit,a=e.onHandleChangeQuery,n=e.query;return Object(f.jsx)("header",{className:"Searchbar",children:Object(f.jsxs)("form",{className:"SearchForm",onSubmit:t,children:[Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(f.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:n,onChange:a})]})})};a(61);var x=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onOpenModal;return Object(f.jsx)("li",{className:"ImageGalleryItem",children:Object(f.jsx)("img",{className:"ImageGalleryItem-image",src:t,alt:n,"data-source":a,onClick:r})})};a(62);var y=function(e){var t=e.images,a=e.onOpenModal;return Object(f.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(f.jsx)(x,{webformatURL:n,largeImageURL:r,tags:o,onOpenModal:a},t)}))})};a(63);var w=function(e){var t=e.onLoadMore;return Object(f.jsx)("div",{className:"Button_wrapper",children:Object(f.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})})},L=a(32),M=a.n(L);a(84),a(85);var S=function(){return Object(f.jsx)("div",{className:"Overlay",children:Object(f.jsx)(M.a,{type:"ThreeDots",color:"#00BFFF",height:100,width:100,timeout:0})})},k=(a(86),document.querySelector("#modal-root")),I=function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onToggleModal()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onToggleModal()},e}return Object(g.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props.largeImageURL;return Object(o.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:"Modal",children:Object(f.jsx)("img",{src:e,alt:""})})}),k)}}]),a}(n.Component),N=a.p+"static/media/no_result.1fae5933.jpeg";a(87);var C=function(e){var t=e.texterror;return Object(f.jsxs)("div",{role:"alert",className:"Wrapper",children:[Object(f.jsx)("img",{src:N,width:"550",alt:"no_res"}),Object(f.jsx)("p",{text:t,className:"Text",children:t})]})},U=a(19),R=(a(88),a(33)),q=(a(97),function(e){Object(h.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],page:1,isLoading:!1,largeImageURL:"",showModal:!1,error:null},e.handleChange=function(t){e.setState({query:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.renderImages()},e.onLoadMore=function(){e.renderImages(),e.scroll()},e.renderImages=Object(u.a)(i.a.mark((function t(){var a,n,r,o;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.state,n=a.query,r=a.page,n.trim()){t.next=3;break}return t.abrupt("return",U.b.info("Please enter a value for search images!"));case 3:return e.toggleLoader(),t.prev=4,t.next=7,b(n,r);case 7:o=t.sent,e.setState((function(e){var t=e.images,a=e.page;return{images:[].concat(Object(l.a)(t),Object(l.a)(o)),page:a+1}})),0===o.length&&e.setState({error:"No results were found for ".concat(n,"!")}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(4),e.setState({error:"Something went wrong. Try again."});case 15:return t.prev=15,e.toggleLoader(),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,12,15,18]])}))),e.onOpenModal=function(t){e.setState({largeImageURL:t.target.dataset.source}),e.toggleModal()},e.toggleLoader=function(){e.setState((function(e){return{isLoading:!e.isLoading}}))},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.scroll=function(){R.animateScroll.scrollToBottom()},e}return Object(g.a)(a,[{key:"render",value:function(){var e=this.state,t=e.query,a=e.images,n=e.largeImageURL,r=e.isLoading,o=e.showModal,c=e.error;return Object(f.jsxs)(v,{children:[Object(f.jsx)(O,{onHandleSubmit:this.handleSubmit,onHandleChangeQuery:this.handleChange,query:t}),c&&Object(f.jsx)(C,{texterror:c}),r&&Object(f.jsx)(S,{}),a.length>0&&!c&&Object(f.jsx)(y,{images:a,onOpenModal:this.onOpenModal}),!r&&a.length>0&&!c&&Object(f.jsx)(w,{onLoadMore:this.onLoadMore}),o&&Object(f.jsx)(I,{onToggleModal:this.toggleModal,largeImageURL:n}),Object(f.jsx)(U.a,{})]})}}]),a}(n.Component));c.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[98,1,2]]]);
//# sourceMappingURL=main.9e727a29.chunk.js.map