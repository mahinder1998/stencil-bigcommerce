"use strict";(self.webpackChunkbigcommerce_cornerstone=self.webpackChunkbigcommerce_cornerstone||[]).push([[942],{94942:(e,t,i)=>{i.r(t),i.d(t,{default:()=>f});var r=i(91238),n=i(15492),o=i(65117),a=i(55567),c=i(33270),d=function(){function e(e){this.$player=e.find("[data-video-player]"),this.$videos=e.find("[data-video-item]"),this.currentVideo={},this.bindEvents()}var t=e.prototype;return t.selectNewVideo=function(e){e.preventDefault();var t=c(e.currentTarget);this.currentVideo={id:t.data("videoId"),$selectedThumb:t},this.setMainVideo(),this.setActiveThumb()},t.setMainVideo=function(){this.$player.attr("src","//www.youtube.com/embed/"+this.currentVideo.id)},t.setActiveThumb=function(){this.$videos.removeClass("is-active"),this.currentVideo.$selectedThumb.addClass("is-active")},t.bindEvents=function(){this.$videos.on("click",this.selectNewVideo.bind(this))},e}(),s=i(96609),u=i(87838),l=i(33270);function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}var f=function(e){function t(t){var i;return(i=e.call(this,t)||this).url=window.location.href,i.$reviewLink=l('[data-reveal-id="modal-review-form"]'),i.$bulkPricingLink=l('[data-reveal-id="modal-bulk-pricing"]'),i.reviewModal=(0,u.Ay)("#modal-review-form")[0],i}var i,r;r=e,(i=t).prototype=Object.create(r.prototype),i.prototype.constructor=i,v(i,r);var f=t.prototype;return f.onReady=function(){var e,t,i=this;l(document).on("close.fndtn.reveal",(function(){-1!==i.url.indexOf("#write_review")&&"function"==typeof window.history.replaceState&&window.history.replaceState(null,document.title,window.location.pathname)})),(0,o.Ay)(),this.productDetails=new a.A(l(".productView"),this.context,window.BCData.product_attributes),this.productDetails.setProductVariant(),c("[data-"+(t="video-gallery")+"]").each((function(e,i){var r=c(i);r.data(t)instanceof d||r.data(t,new d(r))})),this.bulkPricingHandler();var r=(0,s.J6)(".writeReview-form");if(0!==r.length){var u=new n.A({$reviewForm:r});l("body").on("click",'[data-reveal-id="modal-review-form"]',(function(){e=u.registerValidation(i.context),i.ariaDescribeReviewInputs(r)})),r.on("submit",(function(){return!!e&&(e.performCheck(),e.areAll("valid"))})),this.productReviewHandler()}},f.ariaDescribeReviewInputs=function(e){e.find("[data-input]").each((function(e,t){var i=l(t),r=i.attr("name")+"-msg";i.siblings("span").attr("id",r),i.attr("aria-describedby",r)}))},f.productReviewHandler=function(){-1!==this.url.indexOf("#write_review")&&this.$reviewLink.trigger("click")},f.bulkPricingHandler=function(){-1!==this.url.indexOf("#bulk_pricing")&&this.$bulkPricingLink.trigger("click")},t}(r.A)}}]);
//# sourceMappingURL=theme-bundle.chunk.942.js.map