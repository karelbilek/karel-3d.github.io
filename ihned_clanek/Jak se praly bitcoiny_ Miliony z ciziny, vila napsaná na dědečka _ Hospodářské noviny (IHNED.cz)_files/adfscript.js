(function(a,k){function d(){n(h);h=m(f,100)}function f(){var a=k.getElementsByTagName("script"),d=k.getElementsByTagName("noscript"),g=[],l=[],m;for(m=a.length;m--;)g.push(a[m]);for(m=d.length;m--;)g.push(d[m]);for(m=g.length;m--;)a=g[m],(d=a.getAttribute("data-adfscript"))&&!a.getAttribute("parsed-adfscript")&&(a.setAttribute("parsed-adfscript",!0),l.push({place:a,data:d,content:b}));for(m=l.length;m--;)if(g=l[m],a="http"!==g.data.slice(0,4),e.ontag&&a)e.ontag(g);else c(g,'<script src="'+r+"//"+
g.data.replace(/^https?:\/\//,"")+'">\x3c/script>');t<+new Date&&(n(h),setTimeout(f,1E3))}function b(a){c(this,a)}function c(b,c){if(/\S/.test(c)){var d=b.place||b,e=b.mid||"",f=p?p.document:k,g;if(p&&(g=a.frameElement)){var h=g.id||"adf_"+Math.round(1E6*Math.random());g.id=h}h=p&&g?"parent.document.getElementById('"+h+"').contentWindow":"parent";var m=(g=u)?"frameElement":"this",n=g?"":' onload="eval('+m+".getAttribute('data-onload'))\"",q=f.createElement("div"),t=!(!a._adform||!a._adform.tagFrame);
var r=d;p&&(d=a.frameElement);b.place&&(b.place=d);if(p&&!t){r=d.offsetWidth;var y=d.offsetHeight}else{var I=r.getAttribute("data-width");var B=r.getAttribute("data-height");r=I||1;y=B||1;t&&(d.height=0,d.width=0)}q.innerHTML='<iframe id="adf_'+Math.round(1E6*Math.random())+'" width="'+r+'" height="'+y+'" src="javascript:\'\';"'+n+' allowtransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" style="vertical-align:middle;'+
(I?"width:"+r+"px;":"")+(B?"height:"+y+"px;":"")+'"></iframe>';q=q.firstChild;q.setAttribute("data-contents","<!doctype html><title>ad</title><style>*{vertical-align:middle;}body{margin:0;padding:0;}</style><body><script>inFIF=true;\x3c/script><script>var _nhide;window._adform=[['on.setup',function(s){_nhide=_nhide||s.options.type!='floating'||!setTimeout(function(){_nhide||(frameElement.style.display='none')},50)}]];window._adform.tagFrame = window."+h+";"+(b.renderCallback?"window.__renderCallback__ = '"+
b.renderCallback+"';":"")+'window.onerror = function (error) {new Image().src = "//track.adform.net/jslog/?src=adxErrors&msg=" + encodeURIComponent(\''+e+" - ' + error);window.onerror = null;return false;};\x3c/script>"+c+'\x3c!-- --\x3e<script>(function(d){var _w, _c=0, _r=("HTMLDocument" in window && document.write !== HTMLDocument.prototype.write);if (window.onload) {_c=1;d.close();}_w = d.write;d.write = function(a){new Image().src = "//track.adform.net/jslog/?src=asyncwrite&msg='+e+':cdw_"+_c+":"+_r;_w.call(d, a);};var c = window._adform.tagFrame[window.__renderCallback__];c && c(window.frameElement);})(document);\x3c/script>');
q.setAttribute("data-onload","("+l+")("+m+","+g+")");d.parentNode&&d.parentNode.insertBefore(q,d);if(g)try{q.onload=q.contentWindow.onload=function(){q.contentWindow.onload=q.onload=null;l(q)}}catch(G){q.src="javascript:void(document.write('<!doctype html><title></title><style>*{vertical-align:middle;}body{margin:0;padding:0;float:left;}</style><body><script>document.domain=\\'"+f.domain+"\\';<\\/script><script>eval("+m+".getAttribute(\\'data-onload\\'))<\\/script>'));"}d.style.display="none"}}function l(a,
b){function c(){b?H.open():H.open("text/html","replace");H.write(O);y.__rendered__=!0;m=a.offsetWidth;n=a.offsetHeight;r=y.document.body;r.style["float"]="left";k=r.offsetWidth;l=r.offsetHeight;q=r.scrollWidth;p=r.scrollHeight;y.adjustFrame=f;w[J]&&(P(w[J]),w[J]=null);w[J]=R(f,50);C(e,3E3)}function d(){C(function(){P(w[J]);w[J]=null},5E3)}function e(){d();H.close()}function f(){var b=0,c=0;k=r.offsetWidth;l=r.offsetHeight;q=r.scrollWidth;p=r.scrollHeight;g=k>q?k:q;h=l>p?l:p;for(var d=0;d<r.childNodes.length;d++){var e=
r.childNodes[d];e.offsetWidth&&(b=Math.max(b,e.offsetWidth),c=Math.max(c,e.offsetHeight))}if(m!=g||n!=h||t!=b||u!=c)b&&c&&b>=k&&c>=l?(x.width=b+"px",x.height=c+"px"):(x.width=g+"px",x.height=h+"px"),m=a.offsetWidth,n=a.offsetHeight;t=b;u=c}var g,h,k,l,m,n,q,p,r,t,u,y=a.contentWindow,w=y.parent,J="_inter_"+a.id,C=w.setTimeout,R=w.setInterval,P=w.clearInterval,O=a.getAttribute("data-contents"),x=a.style,H=y.document;y.__rendered__||(y.__rendered__=!0,b?c():C(c,0))}function g(){function a(){for(var a,
d=c.length;d--;)if(b.test(a=c[d].src))return a}var b=/(\/adx\.js|\/adfscript\.js).*/,c=k.getElementsByTagName("script"),d=k.currentScript,f=d?d.src:a();if(f){var g=f.replace(b,"");d=c[0];var h=k.createElement("script");h.src=g+"/recache/recache.js?"+ +new Date;d.parentNode.insertBefore(h,d);e._rc=function(a,b){"1f124546759a0283b269825197f812ae"!=a&&b(g,f)}}}var h,e=a._adform=a._adform||[],m=a.setInterval,n=a.clearInterval,p=(a.inDapMgrIf||a.inDapIF||a.inFIF)&&a.parent;try{p.document}catch(q){p=!1}var t=
3E4+ +new Date,r="http:"==a.location.protocol?"http:":"https:",u=/MSIE ([0-9]{1,}[\.0-9]{0,})/i.test(a.navigator.userAgent);if(e._frc)return e._frc("1f124546759a0283b269825197f812ae");e.readTags?e.readTags():(e.readTags=d,d(),.1>Math.random()&&setTimeout(g,1E4))})(window,document);
