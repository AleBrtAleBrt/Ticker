!function(){function e(e,t){var n="0"+e;return n.substr(n.length-t)}function t(e){let t=function(e){const t=Date.parse(e);return isNaN(t)?Date.parse(e.replace(/-/g,"/").replace(/[a-z]+/gi," ")):t}(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),r=Math.floor(t/1e3/60%60),o=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:o,minutes:r,seconds:n}}!function(n,r){let o=document.getElementById(n+"-days"),a=document.getElementById(n+"-hours"),s=document.getElementById(n+"-minutes"),u=document.getElementById(n+"-seconds");var l=setInterval((function(){var n=t(r);n.total<=0?clearInterval(l):(o.innerHTML=e(n.days,2),a.innerHTML=e(n.hours,2),s.innerHTML=e(n.minutes,2),u.innerHTML=e(n.seconds,2))}),1e3)}("js-timer2","2023/09/10 14:00")}();
