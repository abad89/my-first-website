
const introPic = document.createElement('div');
document.body.appendChild(introPic);
introPic.className='introPic';
introPic.innerHTML=`<img alt=me src="./pic.jpg" width="200">`

const intro = document.createElement('div');
document.body.appendChild(intro);
intro.className='intro';
intro.innerHTML=`<h1>Anthony Badalamenti</h1><h2>Software Development Student</h2>`

const bio = document.createElement('div');
document.body.appendChild(bio);
bio.className='bio';
bio.innerHTML=`<p>Hi, thanks for checking out my website! I\'m currently in the process of learning HTML, CSS, and Javascript. I am applying what I have learned so far to create this page.`;

const links = document.createElement('section');
document.body.appendChild(links);
links.className='links';
const git = document.createElement('div');
git.className='git';
links.appendChild(git);
git.innerHTML=`<a href="https://github.com/abad89">Github</a>`
const blog = document.createElement('div');
links.appendChild(blog);
blog.className='blog';
blog.innerHTML=`<a href="TBD">Blog Post: Why I'm Studying to Become a Software Developer</a>`;
const email = document.createElement('div');
links.appendChild(email);
email.className=`email`;
email.innerHTML=`<a href="mailto:abadalamenti89@gmail.com">abadalamenti89@gmail.com</a>`;
