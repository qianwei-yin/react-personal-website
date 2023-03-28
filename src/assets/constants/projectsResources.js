const data = {
	'react-icons': [
		'This is such a powerful icon library that I use it in almost every one of my projects. Its import is nifty, it cantains every icon in almost every situations.',
	],
	react: [
		'React is a JavaScript library for building user interfaces. By building tons of components and integrate them into a big html file, it makes files readble.',
	],
	DOM: [
		'The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.',
	],
	axios: [
		'This is a promise-based HTTP Client for node.js and the browser. In can make XMLHttpRequests from the browser and http requests from Node.js.',
		'I used it because I could await once to get my data. With traditional fetch method, I have to await once to get response and one more time to get the data. Besides, axios will throw any error into catch block, but fetch will only throw network-related error into catch block. So with fetch method, I have to consider so many scenarios that a request will trigger that it will cost too much time.',
	],
	dotenv: ['Needless to say, this is a library helps get the secrets in *.env files.'],
	'react-router-dom': [
		'It helps me build multiple pages for the website. With very simple syntax, I can add lots of pages to my application, and use buttons/links to navigate to different pages.',
	],
	stripe: [
		"Stripe is a payment processing platform. It provides non-code version (for real merchants) and code version (for our developers). In my project, I only use testing payment processing, which means even if you use your real credit cards to pay in this website, it will not take your money away! But I don't recommend you to do that!",
	],
	'styled-components': [
		'This one is my favourite dependency. I could write css in *.js files. And it helps me kick off considering about the class name conflicts. Because it only renders components inside.',
		'With it, a react component is more like a whole stuff. Because in one file, it contains components(JSX - html), functions(javascript) and styles(css - styled component).',
	],
	Airtable: [
		'Airtable is a headless CMS tool, which allows me to easily create a database that holds the information that matters for my work.',
	],
	moment: [
		'This libraby can translate ISO 8601 timestamp into human readable time format. Because MongoDB will store the created time and updated time in ISO standard. ',
	],
	'normalize.css': [
		'This makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.',
	],
	recharts: [
		'As I mentioned above, I gave users a more intuitive presentation of their data. And Recharts helps me a lot. I could possibly only care about the themes and colors for my data charts.',
	],
	'bcrypt.js': ['I helps me hash passwords and comparing hashed passwords.'],
	'express-mongo-sanitize': [
		'It is a middleware which sanitizes user-supplied data to prevent MongoDB Operator Injection.',
	],
	'express-rate-limit': [
		'To make my project closer to real web app. I use this to limit rate. If I remember correctly, I set it to 15 requests in login and register routes in every 15 minutes. ',
		"I don't plan to limit it in authorized users' usage. Because what if a real user actually need high-rate requests? Or maybe I could limit the rate to maybe 10000 times every hour? It depends on real users test!",
	],
	helmet: [
		'Helmet helps me secure my Express apps by setting various HTTP headers. And I can build SEO apps by using Helmet. It makes my browser headers more flexible.',
	],
	'http-status-codes': [
		"With it, I don't need to remember un-human-readble codes sent by server! I could just remember words like OK, CREATED, BAD REQUEST, UNAUTHORIZED...",
	],
	jsonwebtoken: ['It can create and verify JWTs, which can grant access to my resources.'],
	'morgan.js': [
		'This middleware gives me tidy and neat console log in development stage. All my requests will get a formatted console log with it.',
	],
	'validator.js': [
		"Validator.js helps in validate users' input. Like email input, we could validate whether users' input is an email or not in front-end. But for more secure and comprehensive uses, I could also validate in my back-end.",
	],
	MongoDB: [
		'It is a developer data platform that provides the services and tools necessary to build distributed applications fast, at the performance and scale users demand.',
	],
	'express.js': [
		'Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.',
	],
	openstreetmap: [
		'OpenStreetMap is open data, licensed under the Open Data Commons Open Database License (ODbL) by the OpenStreetMap Foundation (OSMF).',
	],
	'react-markdown': [
		"React-Markdown is a markdown component for React. I can use my preferred styles to render every elements. So you won't find similar styles in my website with others!",
	],
	css: [
		'In Lighthouse analysis, I got 97! In order to get such a high score, I need compress and use different types of images on different browsers, since Safari, Firefox and Chrome do not act in the same way. So I usually choose CSS properties that have been used in popular browsers for many years.',
		"But when it comes to useful property but hasn't been used in some browsers for long enough time, I try to use different methodologies to achieve. Since I do this project is to build a fully responsive website!",
	],
	auth0: [
		"By using this fantastic authorization library, I could simply navigate my user to its register/login page to finish account authorization page. And I use its automatic returned information to check users' account. ",
	],
	fusioncharts: [
		'With their interactive and responsive charts, extensive documentation, consistent API, and cross-browser support, I can build great dashboard in my web page.',
	],
	gatsby: [
		"Gatsby is a React-based open source framework, it has a large amount of plugins that make my life easier. Gatsby could do a lot of things behind the scenes that you might not even realized. For example, you can write your react components in the 'page' directory, and Gatsby will automatically recogonize it as one page. Not like traditional React, you must use react-router-dom to realize page navigation.",
	],
	'gatsby-plugin-image': [
		'In normal situations, I could add responsive images to my site while maintaining high performance scores can be difficult to do manually. But the Gatsby Image plugin handles the hard parts of producing images in multiple sizes and formats for me.',
	],
	'gatsby-plugin-react-helmet': [
		'Just like React Helmet is a component which lets me control my document head.',
		'With this gatsby plugin, attributes I add in my components, like title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.',
		'This is important not just for site viewers, but also for Search Engine Optimization — title and description metadata stored in the document head is a key component used by Google in determining placement in search results.',
	],
	'gatsby-plugin-webfonts': [
		"It creates minified @font-face CSS rules for me. Then my web sites won't have to load google fonts at the very beginning, this will accelarate my site's loading speed.",
	],
	contentful: [
		'Contentful is a cloud-based headless CMS. The platform is designed mostly for helping businesses control their digital presence and create smooth digital experience for their users.',
		'A headless CMS allows me to manage content in one place and still be able to deploy that content across any frontend I choose.',
	],
	'gatsby-source-filesystem': [
		'This is a Gatsby source plugin for sourcing data into my Gatsby application from my local filesystem. Such as logo, hero images, etc.',
	],
	slugify: [
		'This library could cleverly turn my website url into a correct format. By replacing blank space into dash, replacing capitalized letter into lowercase one, it will make my urls more readable.',
	],
	supabase: [
		'Supabase is an open source Firebase alternative. In my projects, instant APIs, realtime subscriptions, and storage are used.',
	],
	autoprefixer: [
		'This is a PostCSS plugin for parsing CSS and add vendor prefixes to CSS rules using values from caniuse.com. Some CSS properties like mask-image are not supported in older browsers, so this package will automatically add prefixes such as -webkit- in CSS.',
	],
	sass: [
		'SASS is a CSS preprocessor, it has so many features that can make writing CSS a more powerful, tidy and easy job. The mixins, keyframes, nested grammar are all amazing stuff.',
	],
	'npm-run-all': [
		'This CLI tool will make our life easier. You can just write some scripts in package.json file and run multiple scripts in parallel or sequential under one line of command.',
	],
	redux: [
		'Cart project is a glance of mature and large shopping website. It provides information about the number of your items, total payment amount. And you can remove an item or change the counts of them.',
		'And in this project, I use Redux which is a fantastic toolkit for front-end framework developing.',
	],
	'value.js': [
		'The lightness or darkness of a color is called its value. Tints are light values that are made by mixing a color with white, which increases lightness. Shades are dark values that are made by mixing a color with black, which reduces lightness.',
	],
};

export default data;
