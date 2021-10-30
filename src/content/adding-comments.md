---
layout: post
title: 'Adding Comments To My Blog'
author: [Huy]
tags: ['Update']
image: img/post_adding-comments.jpg
credit: Frida Bredesen
date: '2021-10-30T00:00:00.000Z'
draft: false
excerpt: An excerpt of the post
---



  

```html
<script src="https://utteranc.es/client.js"
        repo="huydhoang/huydhoang.github.io"
        issue-term="pathname"
        label="blog-comment"
        theme="preferred-color-scheme"
        crossorigin="anonymous"
        async>
</script>
```

At first, I thought I could just create an id for the script tag using 
```tsx
script.setAttribute('id', 'utterances');
```
and select it using
```tsx
document.querySelector('#utterances')
```
But it failed miserably.

As it turns out, the script will replace itself with this HTML element:

```html
<div class="utterances" style="height: 269px;">
  <iframe class="utterances-frame" title="Comments" scrolling="no" src="..." loading="lazy"></iframe>
</div>
```
That means we should not set any id and select it using its class name __utterances__ or __utterances-frame__.


So the final code should look like this:

```tsx
// comment section
  useEffect(() => {
    const articleElement = document.querySelector('article');
    if (articleElement && !document.querySelector('.utterances-frame')) {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.setAttribute('repo', 'huydhoang/huydhoang.github.io');
      script.setAttribute('issue-term', 'pathname');
      script.setAttribute('label', 'blog-comment');
      script.setAttribute('theme', 'preferred-color-scheme');
      script.setAttribute('crossorigin', 'anonymous');
      script.async = true;
      articleElement.append(script);
    }
  });
```

https://utteranc.es/
https://reactjs.org/docs/hooks-effect.html
https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
