$(document).ready(function() {
    $.getJSON("http://liuhongjiang.github.io/tech/javascripts/recent-post.json",function(data){
        var content ="<ul class=\"compact recent\">";
        var i = 0;
        $.each(data,function(i,item){
            if (i < 3)
            {
                content += "<li><span class=\"date\">"+ item.date + "</span><a href=\""+item.url+"\">"+ item.title +"</a></li>";
            }
            i += 1;
        });
        content +="</ul>";
        $("#tech-posts-list .loading").remove();
        $("#tech-posts-list").append(content);
    });
}); 
$(document).ready(function() {
    $.getJSON("http://liuhongjiang.github.io/life/javascripts/recent-post.json",function(data){
        var content ="<ul class=\"compact recent\">";
        var i = 0;
        $.each(data,function(i,item){
            if (i < 3)
            {
                content += "<li><span class=\"date\">"+ item.date + "</span><a href=\""+item.url+"\">"+ item.title +"</a></li>";
            }
            i += 1;
        });
        content +="</ul>";
        $("#life-posts-list .loading").remove();
        $("#life-posts-list").append(content);
    });
}); 
