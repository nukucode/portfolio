![](https://github.com/therogersak/portfolie-using-next-js/blob/main/portfolio.png?raw=true)

---

## ⚡ therogersak

I've decided to open-source my latest portfolio website! it has dynamic content management to add projects and posts using Contentful CMS, and was built using Next.js and Chakra UI.

Refer to [Next.js](https://nextjs.org/docs/) and [Tailwind Css](https://tailwindcss.com/) documentation to learn more.

Feel free to fork this repository to make your own portfolio, and if you liked the repo, kindly support it by giving it a star ⭐!

## 🛠 Get started


<details>
<summary>Contentful API Keys</summary>
<p>
<br>
1. Create a <a href="https://www.contentful.com/sign-up/">Contentful</a> account <br>
2. Add a Community Space (It's free!)  <br>
3. Choose "I create content"  <br>
4. Go to content model and start to add content type  <br>

> 📌  In this portfolio website, it has 5 Content type which is:
> 1. BlogPosts
> 2. FeaturedProjects
> 3. Projects
> 4. Introduction
> 5. ContactMe
> 



6. Go to settings -> API Keys -> Content Delivery / Preview tokens -> "Your space name"
copy the Space ID and Content Delivery API access token  <br>
7. Put it into the environment variables according to `.env.example` and you're all set! <br>
</p>
</details>

<details>
<summary>Firebase API Keys</summary>
<p>
  <br>
  1. Create a <a href="https://console.firebase.google.com/">Firebase</a> project <br>
2. After setting things up you'll get the API keys, save those. <br>
3. Go to Firestore Database <br>
4. Add a collection named <code>views</code> <br>
  5. Then, put those API Keys before according to the <code>.env.example</code> and that's it!<br> 
</p>
</details>



### Starting the Project
Install the dependencies with `npm i` or `yarn`  
Start the project by `npm run dev` or `yarn dev`  
  
### Deployment
You can deploy easily by using [Netlify](https://netlify.com/) 🎉  
  
[![Deploy with Netlify](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fabdulrcs%2Fabdulrahman.id)

## 📌 Overview
`pages/index.js` = Homepage  
`pages/projects/index.js` = Projects archive page  
`pages/blog/index.js` = Blog listings page  
`pages/blog/[slug].js` = Blog post page   

## ⚙ Tech Stack
- Next.js
- Firebase
- Tailwind Css
- React Reveal
- Mui Icons

