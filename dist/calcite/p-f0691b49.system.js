System.register([],function(r){"use strict";return{execute:function(){r({a:n,b:u,c:c,g:e,h:i,n:t});function t(r){if(Array.isArray(r)){return r}else{return Array.prototype.slice.call(r)}}function e(r){return u(r,"dir","ltr")}function n(r){return u(r,"theme","light")}function u(r,t,e){var n=r.closest("["+t+"]");return n?n.getAttribute(t):e}function i(r){var t=r&&r.assignedNodes();return t&&t.length>0}function c(r,e){var n=r.querySelector("slot");var u=n?n.assignedElements():r.children;return t(u).filter(function(r){return r.matches(e)})}}}});