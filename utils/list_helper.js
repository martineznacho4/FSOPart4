// blogs are js objects consisting of:
//     _id: String,
//     title: String,
//     author: String,
//     url: String,
//     likes: Integer,
//     __v: Integer

// Receives a list of blogs
const totalLikes = (blogs) => {
	const reducer = (likeSum, blog) => {
		return likeSum + blog.likes;
	};

	return blogs.reduce(reducer, 0);
};

// Returns the blog with the most likes
const favoriteBlog = (blogs) => {
	let fav = 0;

	if (blogs.length > 0) {
		fav = blogs[0];

		blogs.forEach((blog) => {
			if (blog.likes > fav.likes) {
				fav = blog;
			}
		});
	}

	return fav;
};

// Receives an array of blogs
// Returns the author who has the largest amount of blogs
// 	{
// 	author: "Robert C. Martin",
// 	blogs:3
// 	}

const mostBlogs = (blogs) => {
	const authors = new Map();

	// Finds the author in the map, if it doesn't exists it creates it. If it exists it updates the amount of posts by 1
	blogs.forEach((blog) => {
		if (!authors.get(blog.author)) {
			authors.set(blog.author, 1);
		} else {
			authors.set(blog.author, authors.get(blog.author) + 1);
		}
	});

	// Max function
	let res = { author: "", blogs: 0 };
	if (authors.size > 0) {
		authors.forEach((value, key) => {
			if (value > res.blogs) {
				res = { author: key, blogs: value };
			}
		});
	}

	return authors.size ? res : 0;
};

// Receives an array of blogs
// Returns whose blog posts have the largest amount of likes
// {
// 	author: "Edsger W. Dijkstra",
// 	likes: 17
// }
const mostLikes = (blogs) => {
	let res = { author: "", likes: 0 };
	blogs.forEach((blog) => {
		if (blog.likes > res.likes) {
			res = { author: blog.author, likes: blog.likes };
		}
	});

	return res.author ? res : 0;
};

module.exports = { totalLikes, favoriteBlog, mostBlogs, mostLikes };
