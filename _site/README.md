# ben.perlmutter.io
My personal website - *April 2020 — ongoing*

**WORK IN PROGRESS - DON'T JUDGE**

(ben.perlmutter.io)[https://ben.perlmutter.io/] is a Jekyll site deployed onto Github Pages. It features information about me, the projects I'm working on, and my blog. 

The primary goal for this website, like any personal page, is to show off myself and my programming abilities. The website is a constant work in progress, and serves as something of a mad laboratory for technologies and ideas that I'm trying out. 

<!--more-->

**Table of Contents**
* [Ben.perlmutter.io at a Glance](#ben.perlmutter.io-at-a-glance)
* [Technological Overview](#technological-overview)
* [Conclusion & Next Steps](#conclusion-and-next-steps)

## Ben.perlmutter.io at a Glance
As noted above, ben.perlmutter.io was built with the Jekyll static site generator. Jekyll provides the skeleton, and I heavily modified it with custom HTML, CSS, and Javascript to give the site its unique (and Bitmojiful) ascetic.

It was an intentional design decision to use a minimalistic Jekyll website and these core frontend technologies to build out the website, rather than using a more feature-heavy static site generator like Gatsby or Hugo with their robust theme libraries. I wanted to use a cleaner canvas—while also taking advantages of certain  Jekyll features like persistent navigation and an integrated blog—to create a vision that was really my own. 

## Technological Overview
### Jekyll 
* minima template
  * as name implies, minimalistic 
  * but a nice quite blank canvas for me to add stuff to and build off of 
    * basically nothing had to be removed, only added or occasionally overwritten for stuff like font styles and colors 
* provides some nice core features to speed up the development process. do things like customize the headers, and footers
  * theme also provided some nice quick ways to built on this through the `_config.yml` file
* also, invaluable to the site was the `jekyll-feed` blog plugin
  * lets you write out blog posts in markdown and deploy them with a simple `git push` 
    * fairly painless blogging system, and really (the original intent of Jekyll)[#link-to-the-bloggin-like-a-hacker-post-here]
* speaking of pushing git, jekyll is also very well integrated with github and github pages, which made it quite easy to deploy a prototype version and continuously update the project.

### Markup, Markdown & Templating
* Jekyll takes both HTML and Markdown as default file types. And given that you can actually write HTML in Markdown, all markdown pages can actually have a bunch of HTML in them (though the HTML can be reformatted in these pages with some funny extra divs and such thrown in). 
* the main content is a mix between the 2 formats. the more text-heavy pages such were kept in markdown for convenience with the others in HTML.
* And as previously noted, all blog posts are written in Markdown. 
* templating was done with the Liquid, as it's built into Jekyll 
  * used for some custom variables like various links and metadata, but not extensively
  * if i make the site into a theme for others to use (which i think would be a fun and quite funny project), then i'd make heavier use of it to render certain content more dynamically 

### Styling - CSS & SASS

### Vanilla JS 

### SEO 
* a quick google search for 'ben perlmutter' will reveal i don't have the best SEO on my name 
  * (although it should be noted that i'm probably like 3rd place, which isn't too bad considering that the 2 higher ranking ones have quite a few years on me and there are like 15 people in the US with the name, but I digress...)
  * 
## Conclusion & Next Steps



## Why a Jekyll site?
### Easy deployment
First and foremost, Jekyll sites are incredibly well integrated with GitHub and GitHub Pages, making it probably the best tool for quickly spinning up a robust personal site with blog functionality. 

### Extendability and Customization
Jekyll also has a lot of extendability. It is very customization-friendly, with with some good free plugins to build up the site. 

### Learn new technologies
Jekyll is dependent on a couple of technologies that I've wanted to learn for a while now. It is built with Ruby, and uses the Liquid templating engine. I've wanted to learn Liquid since I made a Shopify website about 8 months ago (Shopify pages are built with Liquid, and Shopify was actually the original developer. The website was a quickly-failed made-to-order t-shirt e-commerce site...a story for a different time). 

I have some vivid memories of wanting to change some aspects of the site beyond the scope of the UI sitebuilder, but being absolutely stonewalled while staring at the Liquid code in perplexion. It was experiences like this one—where I wanted to build a digital product, but didn't have the ability to do so—that first got me into programming. In addition to the inherent utility (and fun!) of learning a new technology, it's this drive to be able to do what I couldn't that motivates me to learn Liquid.

## More to Come…
As the site grows, I’ll add more to this README.But for now you can just check out [ben.perlmutter.io](https://ben.perlmutter.io/)! 
