    $(document).ready(function() {
        var content ="<ul class=\\"compact recent\\">";
        $.each(post.list,function(i,item) {
            content += "<li><span class=\\"date\\">"+ item.date + "</span><a href=\\""+item.url+"\\">"+ item.title +"</a></li>";
        });
        content +="</ul>";
        $("#blog-posts-list").append(content);
    });     
