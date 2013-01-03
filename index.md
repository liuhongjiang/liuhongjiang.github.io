---
layout: page
title: 主页
tagline: Supporting tagline
---
{% include JB/setup %}

Welcome! 欢迎来到这里！

我是刘洪江，今年30好几了，目前一事无成，
一个码农，[tech](http://liuhongjiang.github.com)

<div class='section'>
<h1 id='work'>工作</h1>

一个码拢，[tech](http://liuhongjiang.github.com)

</div>

<div id='blog-posts-list' class='section'>
<h1 id='blogs'>博客</h1>

<p>我有一个技术博客<em><a href="http://liuhongjiang.github.com">刘洪江的流水帐</a></em>，开始于2012年11月，记录了个人工作和学习，近期文章：</p>

<ul class='compact recent'>
<li>
    <a title='Looking at some data on gun-related deaths and gun ownership worldwide in the wake of the Sandy Hook shooting.' href='/iem/gun-deaths-vs-gun-ownership.html'>Gun Deaths vs. Gun Ownership</a>
    <span class='date'>17 Dec 2012</span> 
</li>
</ul><ul class='compact recent'>
<li>
    <a title='The facts behind this mysterious Twitter account can finally be revealed!' href='/iem/who-is-ml-hipster.html'>Who is ML Hipster?</a>
    <span class='date'>24 Oct 2012</span> 
</li>
</ul><ul class='compact recent'>
<li>
    <a title='The ICML discussion site rides again, this time integrated into the conference site itself.' href='/iem/icml-discuss-redux.html'>ICML Discuss Redux</a>
    <span class='date'>20 Jun 2012</span> 
</li>
</ul></div>

<div class='section'>
<p>另外还有一个生活博客<em><a href="http://liuhongjiang.gitbub.com/life/">小结其绳</a></em>，由左爸和左妈共同更新，收集了我们生活的点点滴滴：</p>
<ul class='compact recent'>
<li>
    <a title='Some links and brief notes about a recent talk I gave to the Canberra Java User&apos;s Group.' href='/sap/clojure-cjug-talk.html'>A Java Sightseers Guide to Clojure</a>
    <span class='date'>14 Mar 2010</span> 
</li>
</ul><ul class='compact recent'>
<li>
    <a title='In an attempt to better familiarise myself with online learning and Clojure I implemented the former in the latter.' href='/sap/online-learning-in-clojure.html'>Online Learning in Clojure</a>
    <span class='date'>14 Jul 2009</span> 
</li>
</ul><ul class='compact recent'>
<li>
    <a title='This is the second part of my attempt to port the Minilight ray-tracer to Clojure. This time it is triangles. Some bugs are found and fixed in the vector package.' href='/sap/minilight-clojure-triangles.html'>Minilight in Clojure: Triangles</a>
    <span class='date'>11 Apr 2009</span> 
</li>
</ul></div>

<div class='section'>
<h1 id='twitter'><a href='http://twitter.com/mdreid'>Twitter</a></h1>

<div id='tweet'>
<p>Contacting Twitter&#8230;</p>
</div>
</div>

Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:
    
    title : My Blog =)
    
    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username

The theme should reference these variables whenever needed.
    
## Sample Posts

This blog contains sample posts which help stage pages and blog data.
When you don't need the samples anymore just delete the `_posts/core-samples` folder.

    $ rm -rf _posts/core-samples

Here's a sample "posts list".

<ul class="posts">
  {% for post in site.posts %}
    <li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>

## To-Do

This theme is still unfinished. If you'd like to be added as a contributor, [please fork](http://github.com/plusjade/jekyll-bootstrap)!
We need to clean up the themes, make theme usage guides with theme-specific markup examples.




