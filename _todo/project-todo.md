# Project todos
**Note:** This todo list was created pretty deep into the project development process, and does not reflect the full set of tasks in creating [ben.perlmutter.io](https://ben.perlmutter.io)

## Pending

### Homepage
* [x] projects section
  * [x] set up images for ea project with name overlayed 
  * [x] on hover, overlay with a bit of additional information accompanying the title 
  * [x] add JS event for click on img to show project info
  * [X] on click, links to the section of the [projects page](#projects-page)
    * [X] NOTE: checkout the CSS apperance prop to make lnk look like button: https://css-tricks.com/almanac/properties/a/appearance/
* [ ] technologies list
  * [x] fix up text for all (right now a lot of placeholder)
  * [ ] add MongoDB for backend techs
  * [ ] update flask section now that i have some more flask experience
  * [ ] in the Postgres section, add SEquelize and SQLAlchemy  
* [ ] soft skills sections
  * [ ] soft skill list
    * [ ] entrepreneurial 
    * [ ] quick learner(?) 
    * [ ] likes embracing/navigating the unknown (come up w better phrase)
    * [ ] independent 
  * [ ] design the section
    * [ ] some module for each skill 
    * [ ] put together
* [ ] misc
  * [ ] mobile: make 'ben.perlmutter' bit smaller/more left aligned

### blog posts 
* [ ] technology wishlist
  * [x] write article
  * [x] publish article
  * [ ] edit article 
* [ ] spotify web api guide 
  * [ ] write article
  * [ ] edit article
  * [ ] publish article to blog
  * [ ] get feedback
  * [ ] publish to medium
* [ ] if i were to do it again part ii 
  * [ ] write article 
  * [ ] edit article
  * [ ] publish article to blog
* [ ] README for ben.perlmutter.io
  * [ ] write
  * [ ] edit 
  * [ ] publish to Github
  * [ ] add as blog post

### projects page
* [x] create project section (template with one)
* [x] create project sections for ea. project 
  * [x] RappaMappa
  * [x] Tappdin
  * [x] ben.perlmutter.io (why not...meta)
* [x] create demo modal
  * [x] modal -- i think from one of the pre a/A projects where i had a modal, that code could be copied 
  * [x] load and play content 
  * [ ] maybe loading img w a bitmoji
* [ ] create GIFs for various projects (i don't think it's necessary for all)
  * [x] RappaMappa
  * [x] Tappdin
  * [ ] ben.perlmutter.io
* [ ] performance optimization for project GIF
* [x] redo the tappdin gif so no topbar
* [x] make RappaMappa gif repeat (maybe doesn't work b.c 2 gifs put together?)
  * [x] easiest fix is prob rerecord -(afterfact: yes, this was easiest)

### bugs
* [x] navbar bitmoji JS not working on blog post pages...
  * note: there's an error in the console where it messes up the relative path
* [x] the avocado head photo is massive (7 MB), which gives really slow load time 
  * SLN: compress to 1MB or smthn like that
* [ ] the project buttons have weird padding, with too little on the top, for mobile
* [ ] on project modal, when click on image, the GIF clears
* [x] on project page, click anywhere in the project space loads modal...BAD!!!
* [ ] on mobile, any page click --> popup opening ..this one is VERY weird


## Looney Ideas 
* By the numbers page that displays data from my github/other sources
  * number of repos, lines per language, etc. 
  * information about the blog...number of posts, avg words per post, etc.
  * some version of this is def feasable, but not sure if there is data that could actually make this a good feature that i'd actually want to add
* make everything (or at least some things) drag and drop 