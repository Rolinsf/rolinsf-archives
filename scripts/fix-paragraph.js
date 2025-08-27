hexo.extend.filter.register('after_render:html', function(htmlContent) {
  // 用正则匹配所有 <p> 标签，前后添加空行
  return htmlContent.replace(/<p>/g, '\n<p>').replace(/<\/p>/g, '</p>\n');
});