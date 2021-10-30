---
layout: post
title: 'Adding Comments To My Blog'
author: [Huy]
tags: ['Update']
image: img/post_adding-comments.jpg
credit: Frida Bredesen
date: '2021-10-30T00:00:00.000Z'
draft: false
excerpt: While that looks easy from the outside as Facebook and other social media have populated the use, it’s really not...
---

One of the challenges in building a blog is putting up a comment section.

While that looks easy from the outside as Facebook and other social media have populated the use, it's really not.

From scratch, you would have to create an UI for the users to interact with. Then you must keep track of the data, storing all those comments somewhere and pull them out when needed. That would mean you need a backend server, which might add up to the cost/effort.

And we don't wanna use Facebook comments here because it looks ugly, and who doesn't hate their privacy policy?

There's a decent option namely _Commento_ -- a privacy focus commenting engine -- but paying to get comments up on this free blog or self-hosting it just didn't seem right to me.

Enter __utterances__, an open-source comments widget powered by Github.

__Pros:__
- up and running without overheads
- comes with preferred-color-scheme (auto light/dark theme switch)

__Cons:__
- only for Github users

Well, the only con here isn't really a con. Because most of people who would read this blog might already have a Github account (or they will).

Enough talk, let's get down to business.

Upon visiting [utteranc.es](https://utteranc.es), with some confiurations, I'd got this snippet:

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

The problem is that this blog was built with React.js -- meaning content is generated with JavaScript -- but the snippet was for a static HTML site.

So I needed to convert it to JavaScript. Easy.

At first, I thought I could just create an id for the script tag using 
```tsx
script.setAttribute('id', 'utterances');
```
and select it like this
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
That means instead of setting an id attribute for the tag, we should use its class name __utterances__ or __utterances-frame__.


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
You can see the results below. Don't forget to leave me a comment ;)

---

### References:

https://utteranc.es/

https://reactjs.org/docs/hooks-effect.html

https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute

---

If you liked this post, consider subscribing to my newsletter.
