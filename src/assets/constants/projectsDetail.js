const data = [
	{
		title: 'jobify',
		github: 'https://github.com/qianwei-yin/MERN-jobify',
		url: 'https://qianwei-jobify.herokuapp.com/',
		featured: true,
		stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Mongoose', 'JavaScript', 'CSS'],
		type: 'Large-Scale',
		resources: [
			'axios',
			'moment',
			'normalize.css',
			'react-icons',
			'recharts',
			'styled-components',
			'bcrypt.js',
			'dotenv',
			'express-mongo-sanitize',
			'express-rate-limit',
			'helmet',
			'http-status-codes',
			'jsonwebtoken',
			'morgan.js',
			'validator.js',
			'react',
			'MongoDB',
			'express.js',
		],
		description: [
			'This project is a full-stack web application built by MongoDB, Express, React and Node.js.',
			'It helps users to record their job applications, depending on the progress, is it in interview, pending, rejected or accepted? And use charts to give an intuitive presentation of recent application quantity.',
			'In addition, users could add, edit and delete any job they wish to. And these actions could only be done under the authorized accounts -- I use cookies, local storage, auth route and private route to accomplish this feature.',
			'For friendlier uses, I also attach a demo app onto the site. So if you do not want to register an account, you can also click demo app / read only button on register page. But in this situation, you cannot do anything related to database, in which means you can only read the data.',
		],
	},
	{
		title: 'comfy sloth',
		github: 'https://github.com/qianwei-yin/react-comfy-sloth',
		url: 'https://comfy-sloth.qianweiyin.com',
		featured: true,
		stack: ['javascript', 'css', 'react', 'authorization', 'headless CMS', 'form backend API', 'payment | Stripe'],
		type: 'Large-Scale',
		resources: [
			'axios',
			'redux',
			'dotenv',
			'react',
			'react-icons',
			'react-router-dom',
			'stripe',
			'styled-components',
			'Airtable',
		],
		description: [
			'This project is a IKEA-like furniture shopping site.',
			'It can let users register accounts, log in and out, pay and join newsletter. Users can submit an email and then at my end, I will receive a robot-written email which tells me who join my newsletter.',
			"Users can add shopping cart and then go to payment. I also add a fake credit card on the payment page, since you won't buy anything from my fake website! But you could try to pay using that fake credit card and see what will show on the screen.",
			'Users can filter and sort the products page, just like normal shopping website. Besides, there is also a stock number linked to every products. You cannot add products more than its stock!',
		],
	},
	{
		title: 'tell some facts',
		github: 'https://github.com/qianwei-yin/facts',
		url: 'https://tell-some-facts.qianweiyin.com',
		featured: false,
		stack: ['css', 'javascript', 'BaaS | Supabase', 'react'],
		type: 'Large-Scale',
		resources: ['supabase', 'react'],
		description: [
			"In Tell Some Facts, you can find what are other people talking about these days. There are many true or false 'facts' for you to learn and give out your opinions. By clicking a simple button, you could influence the fate of a fact!",
			"By the way, you can also share what you think is a fact to others. Database is introduced so all the data are in the cloud. Your posts won't go away.",
		],
	},
	{
		title: 'search github users',
		github: 'https://github.com/qianwei-yin/react-search-github-users',
		url: 'https://search-github-users.qianweiyin.com',
		featured: false,
		stack: ['react', 'authorization | Auth0', 'Github API', 'web dashboards | FusionCharts'],
		type: 'Large-Scale',
		resources: ['auth0', 'axios', 'fusioncharts', 'react-icons', 'react-router-dom', 'styled-components'],
		description: [
			'You could use search Github users project to search anyone you are interested in. And it will provides the number of followers, following, public repos and some other detailed information.',
			"And you can directly navigate to someone's github home page and even followers' home pages. Moreover, you could have an intuitive charts to analyze someone's repo data.",
			'P.S. My data comes from Github API.',
		],
	},
	{
		title: 'simply recipes',
		github: 'https://github.com/qianwei-yin/gatsby-simply-recipes',
		url: 'https://simply-recipes.qianweiyin.com',
		featured: false,
		stack: ['html', 'gatsby', 'css', 'javascript', 'headless CMS | contentful'],
		type: 'Large-Scale',
		resources: [
			'gatsby',
			'gatsby-plugin-image',
			'gatsby-plugin-react-helmet',
			'gatsby-plugin-webfonts',
			'contentful',
			'gatsby-source-filesystem',
			'slugify',
			'normalize.css',
			'react-icons',
			'styled-components',
		],
		description: [
			'Simply recipes give you more than recipes. You could search recipes by its tags, and you can also go to tags page to search what kind of food you want to check.',
			"In every recipe's detailed page, you will find its cooking time, servings amount, preparation time and also ingredients, instructions and tools you will use.",
		],
	},
	{
		title: 'omnifood',
		github: 'https://github.com/qianwei-yin/css-responsive-omnifood',
		url: 'https://omnifood.qianweiyin.com',
		featured: true,
		stack: ['css', 'javascript', 'responsive', 'lighthouse', 'html'],
		type: 'Front-End',
		resources: ['css'],
		description: [
			'Omnifood simulates an AI-powered food subscription website that will make people eat healthy again, 365 days per year. It is tailored to everyone personal tastes and nutritional needs.',
			'I mainly use CSS to build such a fully responsive website, it can be used perfectly on iPhone xx, iPhone xx Max, iPad, iPad mini, iPad air, Samsung and different sizes of desktops and even different browsers!',
		],
	},
	{
		title: 'trillo',
		github: 'https://github.com/qianwei-yin/sass-css-advanced-projects',
		url: 'https://trillo.qianweiyin.com',
		featured: false,
		stack: ['autoprefixer', 'npm-run-all', 'postcss-cli', 'sass', 'html'],
		type: 'Front-End',
		resources: ['autoprefixer', 'sass', 'npm-run-all'],
		description: [
			'Trillo is a front-end website built with SASS, it mainly focuses on flex-box usage.',
			'You can find some interesting animations in it.',
		],
	},
	{
		title: 'bankist',
		github: 'https://github.com/qianwei-yin/javascript-projects',
		url: 'https://bankist.qianweiyin.com',
		featured: true,
		stack: ['vanilla javascript', 'css', 'html'],
		type: 'Front-End',
		resources: ['DOM'],
		description: [
			'Bankist is a beautiful bank website that can applies to every bank! I believe it is a competent front-end project.',
			'And this design comes from Jonas Schmedtmann, my favourite instructor on Udemy platform.',
		],
	},
	{
		title: 'mapty',
		github: 'https://github.com/qianwei-yin/javascript-projects',
		url: 'https://mapty.qianweiyin.com',
		featured: true,
		stack: ['vanilla javascript', 'html', 'css'],
		type: 'Front-End',
		resources: ['openstreetmap'],
		description: [
			'This website helps record workout experience.',
			'You can allow the browser to access your geolocation and you could drag the map to pin your exercise styles, speeds, locations onto the map. It will give you an intuitive presentation of every one of your exercises.',
			"And it also stores your records via local storage. So you won't lose your records after closing the website.",
		],
	},
	{
		title: 'pig game',
		github: 'https://github.com/qianwei-yin/javascript-projects',
		url: 'https://pig-game.qianweiyin.com',
		featured: false,
		stack: ['css', 'vanilla javascript', 'html'],
		type: 'Front-End',
		resources: [],
		description: ['Pig game is my second front-end project.'],
	},
	{
		title: 'guess my number',
		github: 'https://github.com/qianwei-yin/javascript-projects',
		url: 'https://guess-my-number.qianweiyin.com',
		featured: false,
		stack: ['vanilla javascript', 'html', 'css'],
		type: 'Front-End',
		resources: [],
		description: ['Guess my number game is my first front-end project. A funny game!'],
	},
	{
		title: 'cocktails',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://cocktails.qianweiyin.com',
		featured: true,
		stack: ['react', 'javascript', 'css', 'html'],
		type: 'Functionality',
		resources: ['react-router-dom', 'react'],
		description: [
			'This is a cocktail encyclopedia website. It will fetch and filter all cocktails from a cocktails API.',
		],
	},
	{
		title: 'cart',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://cart.qianweiyin.com',
		featured: false,
		stack: ['redux', 'javascript', 'react', 'html', 'css'],
		type: 'Functionality',
		resources: ['redux', 'react'],
		description: [
			'Cart project is a glance of mature and large shopping website. It provides information about the number of your items, total payment amount. And you can remove an item or change the counts of them.',
			'And in this project, I use Redux which is a fantastic toolkit for front-end framework developing.',
		],
	},
	{
		title: 'color generator',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://color-generator.qianweiyin.com',
		featured: false,
		stack: ['html', 'react', 'javascript', 'css'],
		type: 'Functionality',
		resources: ['value.js', 'react'],
		description: [
			'Color generator project provides a series of 21 colors that matches your choice. The colors will start from the one you choose and extend ten to darker colors and ten to lighter colors.',
		],
	},
	{
		title: 'markdown preview',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://markdown-preview.qianweiyin.com',
		featured: true,
		stack: ['css', 'react', 'javascript', 'html'],
		type: 'Functionality',
		resources: ['react-markdown'],
		description: [
			'This site helps users to preview their markdown into text promptly.',
			'Just like other markdown preview apps or web applications, It will turn markdown into HTML elements and use CSS to render different styles.',
		],
	},
	{
		title: 'dark mode',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://dark-mode.qianweiyin.com',
		featured: true,
		stack: ['react', 'javascript', 'css', 'html'],
		type: 'Functionality',
		resources: ['moment', 'react'],
		description: [
			'This site build a functionality that can transfer the website into dark background and lighter text content.',
			"Since dark mode is now a usual feature of websites, I also learn about this. But it isn't scary as it sounds. Just by using well-organized CSS to accomplish.",
		],
	},
	{
		title: 'pagination',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://pagination.qianweiyin.com',
		featured: false,
		stack: ['html', 'react', 'css', 'javascript'],
		type: 'Functionality',
		resources: ['react'],
		description: [
			'Pagination project provides the functionality that a data-shown website will definitely use. And it will displays Loading page when the browser is still fetching data.',
			'P.S. My data comes from Github API.',
		],
	},
	{
		title: 'accordion',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://accordion.qianweiyin.com',
		featured: false,
		stack: ['react', 'javascript', 'css', 'html'],
		type: 'Functionality',
		resources: ['react-icons', 'react'],
		description: [
			'Accordion project implement a function that you click the button, then the detailed information will appear in dropdown box. This is a commonly used feature.',
		],
	},
	{
		title: 'birthday reminder',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://birthday-reminder.qianweiyin.com',
		featured: false,
		stack: ['html', 'javascript', 'react', 'css'],
		type: 'Functionality',
		resources: ['react'],
		description: [
			'Birthday reminder is the first tiny react project I did. It just displays all the friends whose birthday is close and you could clear all the information on screen.',
		],
	},
	{
		title: 'lorem ipsum',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://lorem-ipsum.qianweiyin.com',
		featured: false,
		stack: ['javascript', 'react', 'html', 'css'],
		type: 'Functionality',
		resources: ['react'],
		description: [
			'Lorem ipsum project is another place to help you generate lorem ipsum text if you are tired of other websites.',
		],
	},
	{
		title: 'menu',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://menu.qianweiyin.com',
		featured: false,
		stack: ['react', 'javascript', 'html', 'css'],
		type: 'Functionality',
		resources: ['react'],
		description: [
			"Menu project can filter food menu in the same page according to your choice. And it offers 'all' option and other segmented options.",
		],
	},
	{
		title: 'navbar',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://navbar.qianweiyin.com',
		featured: false,
		stack: ['html', 'react', 'css', 'javascript'],
		type: 'Functionality',
		resources: ['react', 'react-icons'],
		description: [
			'Navbar project provides the basic functionality of navbars in almost every websites. When you click a button in navbar, it will lead you to the chosen page.',
		],
	},
	{
		title: 'reviews',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://reviews.qianweiyin.com',
		featured: false,
		stack: ['html', 'react', 'css', 'javascript'],
		type: 'Functionality',
		resources: ['react-icons', 'react'],
		description: [
			'Reviews project provides next item, previous item and random item functions. This function can be used in many websites.',
		],
	},
	{
		title: 'sidebar modal',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://sidebar-modal.qianweiyin.com',
		featured: false,
		stack: ['html', 'react', 'css', 'javascript'],
		type: 'Functionality',
		resources: ['react-icons', 'react'],
		description: [
			'Sidebar modal project provides a button that when user clicks, it will displays the side bar buttons. This feature will be used in every mature website when the user is viewing on small screens such as an iPhone.',
			'And it also provides a button to open a modal which will hover over all of the other components. This feature could be used in alert messages or jumping out a form for users to fill out.',
		],
	},
	{
		title: 'stripe submenus',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://stripe-submenus.qianweiyin.com',
		featured: false,
		stack: ['html', 'react', 'css', 'javascript'],
		type: 'Functionality',
		resources: ['react-icons', 'react'],
		description: [
			"Stripe submenus project provides a feature that when a user's mouse hover over a text in the navbar, that text's dropdown menu will appears dynamically. And you can move your mouse between every texts, the menu will also change according to where you move to.",
			'The design comes from Stripe, a payment processing platform.',
		],
	},
	{
		title: 'tours',
		github: 'https://github.com/qianwei-yin/react-projects',
		url: 'https://tours.qianweiyin.com',
		featured: false,
		stack: ['html', 'react', 'css', 'javascript'],
		type: 'Functionality',
		resources: ['react'],
		description: [
			"Tours project provides some features. When you click 'Not Interested' button, the item will be removed from your list. And when you click 'Read More' after the introduction text, the complete introduction will appear.",
			'This feature is used in many websites, including Amazon, Expedia, etc.',
		],
	},
];

export default data;