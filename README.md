# ben.perlmutter.io
### NOTE TO READER
This repo is **depreciated**. I have moved my personal website from this Jekyll build to a new one with Gatsby and Contenful hosted on Netlify. Visit the new project repo here: https://github.com/bpmutter/bpio-gatsby

---
---
My personal website - *April 2020 — Aug 2020*

(ben.perlmutter.io)[https://ben.perlmutter.io/] is a Jekyll site deployed onto Github Pages. It features information about me, the projects I'm working on, and my blog. 

The primary goal for this website, like any personal page, is to show off myself and my programming abilities. The website is a constant work in progress, and serves as something of a mad laboratory for technologies and design ideas that I'm trying out. 

<!--more-->

**Table of Contents**
  - [Ben.perlmutter.io at a Glance](#benperlmutterio-at-a-glance)
  - [Technological Overview](#technological-overview)
  - [Conclusion & Next Steps](#conclusion--next-steps)

## Ben.perlmutter.io at a Glance
As noted above, ben.perlmutter.io was built with the Jekyll static site generator. Jekyll provides the skeleton, and I heavily modified it with custom HTML, CSS, and Javascript to give the site its unique (and Bitmojiful) aesthetic.

It was an intentional design decision to use a minimalistic Jekyll website and these core frontend technologies to build out the website, rather than using a more feature-heavy static site generator like Gatsby or Hugo with their robust theme libraries. I wanted to use a cleaner canvas—while also taking advantages of certain  Jekyll features like persistent navigation and an integrated blog—to create a vision that was really my own. 

## Technological Overview
### Jekyll 
ben.perlmutter.io is based off the Jekyll minima template. As its name implies, the template is quite minimalistic. It served as a nice relatively blank canvas for me to add stuff to and build off of while also providing some nice core features to speed up the development process. Basically nothing had to be removed, only added, with the occasional overriding for stuff like font styles and colors.

Jekyll gives some nice quick ways to build on the template through the `_config.yml` file. And most invaluable to the site was the  `jekyll-feed` blog plugin. The plugin lets you write out blog posts in Markdown and deploy them with a simple `git push`. It's a fairly painless blogging system, and really (the original intent of Jekyll)[[#link-to-the-bloggin-like-a-hacker-post-here](https://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html){:target="_blank"}

Speaking of pushing git, Jekyll is also very well integrated with Github and Github pages, which made it quite easy to deploy a prototype version and continuously update the project. The site is currently hosted on Github Pages.

### Markup: HTML, Markdown & Liquid Templating
Jekyll takes both HTML and Markdown as default file types. And given that you can actually write HTML in Markdown, all markdown pages can actually have a bunch of HTML in them (though the HTML can be reformatted in these pages with some funny extra divs and such thrown in). 

The main content is a mix between the 2 formats. The more text-heavy pages such were kept in Markdown for convenience with the others in HTML.

#### Markdown 
As previously noted, all blog posts are written in Markdown.  The process of making and maintaining the website has gotten me quite proficient in it. I would go so far as to say that now Markdown is my favorite way to write documents (unless there is collaboration involved, then Google Docs all the way). Markdown makes it especially easy for anything involving a code block, which I suppose is most of my writing these days.

Below is a bit of the Markdown/HTML hybrid code on the [About page](https://ben.perlmutter.io/about.html). It's also worth noting that me putting the code block here is a perfect example of how easy it is to make a code block in Markdown! 
```md
<!-- /about.markdown -->
Learn more about my experience in <a href="/assets/ben-perlmutter-resume.pdf" target="_blank" title="Ben Perlmutter resume">my resume</a>.

#### Connect with Me
[Email](mailto:ben@perlmutter.io){:target="_blank"} / [Github](https://github.com/bpmutter){:target="_blank"} / [LinkedIn](https://www.linkedin.com/in/ben-perlmutter-a410228a/){:target="_blank"} / [Twitter](https://twitter.com/bpmutter){:target="_blank"}

<div class="bitmoji-divider">
    <img src="/assets/img/01-bitmoji-neutral.png" class="bitmoji-divider__bitmoji">
    <img src="/assets/img/01-bitmoji-neutral.png" class="bitmoji-divider__bitmoji">
    <img src="/assets/img/01-bitmoji-neutral.png" class="bitmoji-divider__bitmoji">
</div>

### Beyond the Coding
When I'm not hunched in front of my computer coding (though that is most of my life these days), I like to read, practice yoga...
```

#### Liquid Templating 
Templating was done with the Liquid, as it's the default templating language for Jekyll. I used Liquid for some custom variables like various links and metadata, but not extensively. If I make the site into a theme for others to use (which I think would be a fun and quite funny project), then I'd make heavier use of it to render certain content more dynamically.

### Styling - CSS & SASS
There is a lot of custom styling on the site. Because the base Jekyll theme for the site, [minima](https://github.com/jekyll/minima), is so minimalistic, I had to do a lot of custom styling. 

For instance, on the homepage, the [Projects](https://ben.perlmutter.io/#projects) and [Technologies](https://ben.perlmutter.io/#technologies) sections were completely built from scratch. The [Projects page](https://ben.perlmutter.io/projects) was also fully custom styling. 

Most of the styling was done with plain CSS, with a but of additional code in SASS to provide some handy features like theming. I also adhered to BEM guidelines to keep all the styling organized. 

The design is fully responsive, making extensive use of `flexbox` to reduce the necessity of media queries. As of writing there are actually only approximately 30 lines of `@media` queries for over 400 lines of custom CSS! 

### Vanilla JS 
ben.perlmutter.io only utilized Vanilla JS with zero 3rd-party libraries or frameworks. This was a somewhat philosophical decision, even if a library like JQuery could have made some things a bit easier. I wanted to make the site with only plain ol' Javascript to prove to myself (in addition to potential employers) that I am capable of using the language on its own to achieve interesting and properly-working functionality. 

A good chunk of the site's JS is devoted to the Bitmoji interactivity that you find scattered around the site. The most interesting Bitmoji functionality to make was the random Bitmoji generator that populates a new (and strange) Bitmoji on the header of secondary pages on load and when the user clicks on the Bitmoji. After significant iteration, I got the function down to just a couple of lines: 
```js
// /assets/js/random-bitmoji.js
export default function randomBitmoji(){
    let randomBitmojiNumber = Math.floor(Math.random() * 16 + 1);
    randomBitmojiNumber = randomBitmojiNumber < 10 ? "0" + randomBitmojiNumber : randomBitmojiNumber;
    const filePath = `/assets/img/random-bitmoji/${randomBitmojiNumber}.png`;
    if(document.querySelector(".h1-bitmoji")){
        document.querySelector(".h1-bitmoji").src = filePath;
    }
}
```

Most of the rest of the site's Javascript deals with interactivity on the homepage and the projects page, where there are various click and hover events. None of them were particularly technically interesting or complicated to be quite honest. Some new content displays when you click in one place. Content goes away when you click somewhere else. That type of thing. Writing out all this stuff in Vanilla JS deepened my appreciation of the frontend frameworks and libraries that make managing this kind of functionality so much easier. 

### SEO 
A quick google search for 'ben perlmutter' will reveal I don't have the best SEO on my name. (Although it should be noted that I'm probably like 3rd place, which isn't too bad considering that the 2 higher ranking ones have quite a few years on me and there are like 15 people in the US with the name, but I digress...) For professional purposes, and a bit of ego, I wanted my site to rank more highly on the name. 

To do this, I did a bit of a deep dive into technical SEO. I added various resources to help Google's spiders crawl my site, like the `robots.txt` and `sitemap.xml` files. I also added the website to the Google search console and added a bunch of metadata to the site's head to be in line with best practices. 

Achieving good domain authority and the associated SEO rankings is not an overnight process, and one of the most ongoing aspects of the development of ben.perlmutter.io. 

I have a couple of things that I want to do to improve the website SEO: 
* I want to start cross-listing blog posts on Medium and add [canonical links](https://moz.com/learn/seo/canonicalization) to reference back to the original to increase article exposure and therefore site ranking on Google. 
* I think it'd be interesting to explore how to add SEO-relevant HTML tags to the individual blog posts on the site using Jekyll's built-in front matter (basically in-document configuration) to optimize the posts' metadata. 
* Certain other more server-side fixes, like serving certain optimized images for different devices would be a nice addition, but hard to the point of impossibility given the limits of the Jekyll platform. The only feasible path to cross-device image optimization (that I'm aware of) would be to use a remote hosting service for the images like an AWS S3 container, and use other AWS services for optimization. This is something that I would like to look into in the not-too-distant future, as I have recently been diving into the power and capabilities of serverless technologies like AWS. 

## Conclusion & Next Steps
As of writing, I'm pretty happy with the overall aesthetic, content, and functionally of ben.perlmutter.io. I believe it has achieved it's primary *raison d'etre*—presenting me as a competent and creative software developer. Hopefully potential employers agree with this assessment 😉.

But like with every software project, there is more that could be done. A couple of items that I'd like to continue improving for the site are: 
* Improving site-wide SEO (discussed more above)
* Improving the UX for the project demo GIFs on the projects page. I'd like to explore: 
  * Adding a loading indicator (ideally involving Bitmoji)
  * Pre-cache the GIFs so that they are already loaded when user clicks on them for quick open. 
  * Lengthen cache time for GIFs so repeat visitors can view them quickly. 
* Create a section on the homepage about my soft skills with a Bitmoji for each of them. 

If you'd like to view more about my planned next steps, you can checkout the [project todo list](https://github.com/bpmutter/ben.perlmutter.io/blob/master/_todo/project-todo.md). 

Thanks for reading! ✌🏼
