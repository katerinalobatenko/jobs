window.onload = function(){
    var n=0;

    var gallery=document.getElementsByClassName('gallery')[0];

    var ul=gallery.childNodes[1];
    var count= ul.getElementsByTagName('li').length;
    var p=count-1;
    var next = document.getElementsByClassName('next')[0];
    var prev = document.getElementsByClassName('prev')[0];

    next.onclick = function(){
        if (n<count-1){
            n=n+1;
            ul.setAttribute("style", "margin-left:"+(-960*n)+"px");
        }
        else {
            ul.setAttribute("style", "margin-left:0;");
            n=0;
        }
        return false;
    };
    prev.onclick = function(){
        if (p>0){
            p=p-1;
            ul.setAttribute("style", "margin-left:"+(-960*p)+"px");
        }
        else {
            p=count-1;
            ul.setAttribute("style", "margin-left:"+(-960*p)+"px");
        }
        return false;
    };

    var tabs=document.getElementsByClassName('tabs-holder')[0];
    tabs.onclick = function(event){
        event = event || window.event;
        var target=event.target;



        if (target.tagName=='A'){
            var href=(target.getAttribute('href')).slice(1);

            var alink=document.getElementsByClassName('active')[0];
            alink.setAttribute("class", "");
            alink.childNodes[0].setAttribute("class", "");

            target.setAttribute("class", "active");
            (target.parentNode).setAttribute("class", "active");

            var active= document.getElementsByClassName('tab active')[0];
            active.setAttribute("class", "tab");

            var tab = document.getElementById(href);
            tab.setAttribute("class", "tab active");
    }return false;
    };

    var modal=document.getElementsByClassName('modal')[0];

    var message=document.getElementsByClassName('send')[0];
    message.onclick=function(){
        modal.setAttribute("style", "display:block;");
        return false;
    };
    var close=document.getElementsByClassName('close')[0];
    close.onclick = function(){
        modal.setAttribute("style", "display:none;");
    }
    var send=document.getElementsByClassName('save')[0];

    send.onclick = function(){
        (modal.getElementsByTagName('p')[0]).innerHTML='Thanks for message. We contact with you soon :)';
        send.setAttribute("style", "display:none;");
    }
};
