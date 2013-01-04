$(document).ready(function() {
var douban_badge_width;
var douban_badge_font;
var douban_style;
var dou_width = douban_badge_width?'width: '+douban_badge_width+';':'';
var dou_fnt = douban_badge_font?'font: '+douban_badge_font+';':'';
var dou_style= douban_style? douban_style:'';
var dou_bdr= '';
var content= '';
content += decodeURIComponent('%3Cdiv%20style%3D%22%27%2Bdou_style%2B%27%22%3E%3Ctable%20cellspacing%3D%220%22%20cellpadding%3D%224%22%20style%3D%22%27%2Bdou_width%2B%27%22%3E');
content += decodeURIComponent('%3Ctr%20align%3D%22center%22%3E%3Ctd%20style%3D%22%27%2Bdou_fnt%2B%27%22%3E%3Ca%20href%3D%22http%3A//book.douban.com/subject/6709783/%22%20title%3D%22%E6%B5%AA%E6%BD%AE%E4%B9%8B%E5%B7%85%0A%0A%22%20target%3D_blank%3E%3Cimg%20src%3D%22http%3A//img3.douban.com/spic/s6584764.jpg%22%20border%3D%220%22/%3E%3C/a%3E%3C/td%3E%3Ctd%20style%3D%22%27%2Bdou_fnt%2B%27%22%3E%3Ca%20href%3D%22http%3A//book.douban.com/subject/11589950/%22%20title%3D%22%E6%B2%83%E9%A1%BF%E5%95%86%E5%AD%A6%E9%99%A2%E6%9C%80%E5%8F%97%E6%AC%A2%E8%BF%8E%E7%9A%84%E8%B0%88%E5%88%A4%E8%AF%BE%0A%0AGetting%20More%3A%20How%20You%20Can%20Negotiate%20to%20Succeed%20in%20Work%20and%20Life%22%20target%3D_blank%3E%3Cimg%20src%3D%22http%3A//img3.douban.com/spic/s11315262.jpg%22%20border%3D%220%22/%3E%3C/a%3E%3C/td%3E%3Ctd%20style%3D%22%27%2Bdou_fnt%2B%27%22%3E%3Ca%20href%3D%22http%3A//book.douban.com/subject/1230413/%22%20title%3D%22%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%B3%BB%E7%BB%9F%0A%0AComputer%20Systems%3A%20A%20Programmer%5C%27s%20Perspective%22%20target%3D_blank%3E%3Cimg%20src%3D%22http%3A//img3.douban.com/spic/s1436460.jpg%22%20border%3D%220%22/%3E%3C/a%3E%3C/td%3E%3Ctd%20style%3D%22%27%2Bdou_fnt%2B%27%22%3E%3Ca%20href%3D%22http%3A//book.douban.com/subject/10590856/%22%20title%3D%22%E7%BB%9F%E8%AE%A1%E5%AD%A6%E4%B9%A0%E6%96%B9%E6%B3%95%0A%0A%22%20target%3D_blank%3E%3Cimg%20src%3D%22http%3A//img3.douban.com/spic/s9108113.jpg%22%20border%3D%220%22/%3E%3C/a%3E%3C/td%3E%3C/tr%3E');
content += decodeURIComponent('%3C/table%3E%3C/div%3E'); 
$("#douban-reading .loading").remove();
$("#douban-reading").append(content);
});
