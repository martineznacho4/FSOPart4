const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

const blogs = [
	{
		_id: "5a422a851b54a676234d17f7",
		title: "React patterns",
		author: "Michael Chan",
		url: "https://reactpatterns.com/",
		likes: 7,
		__v: 0,
	},
	{
		_id: "5a422aa71b54a676234d17f8",
		title: "Go To Statement Considered Harmful",
		author: "Edsger W. Dijkstra",
		url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
		likes: 5,
		__v: 0,
	},
	{
		_id: "5a422b3a1b54a676234d17f9",
		title: "Canonical string reduction",
		author: "Edsger W. Dijkstra",
		url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
		likes: 12,
		__v: 0,
	},
	{
		_id: "5a422b891b54a676234d17fa",
		title: "First class tests",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
		likes: 10,
		__v: 0,
	},
	{
		_id: "5a422ba71b54a676234d17fb",
		title: "TDD harms architecture",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
		likes: 0,
		__v: 0,
	},
	{
		_id: "5a422bc61b54a676234d17fc",
		title: "Type wars",
		author: "Robert C. Martin",
		url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
		likes: 2,
		__v: 0,
	},
];

describe("total likes", () => {
	test("of empty list is zero", () => {
		const emptyBlogs = [];
		assert.strictEqual(listHelper.totalLikes(emptyBlogs), 0);
	});

	test("when list has only one item equals the likes of that", () => {
		const oneItem = [blogs[0]];
		assert.strictEqual(listHelper.totalLikes(oneItem), 7);
	});

	test("of a bigger list is calculated rigth", () => {
		assert.strictEqual(listHelper.totalLikes(blogs), 36);
	});
});

describe("favorite blog", () => {
	test("of empty list is zero", () => {
		const emptyBlogs = [];
		assert.deepStrictEqual(listHelper.favoriteBlog(emptyBlogs), 0);
	});

	test("of one item list is that item", () => {
		const oneItem = [blogs[0]];
		assert.deepStrictEqual(listHelper.favoriteBlog(oneItem), {
			_id: "5a422a851b54a676234d17f7",
			title: "React patterns",
			author: "Michael Chan",
			url: "https://reactpatterns.com/",
			likes: 7,
			__v: 0,
		});
	});

	test("of many items works", () => {
		assert.deepStrictEqual(listHelper.favoriteBlog(blogs), {
			_id: "5a422b3a1b54a676234d17f9",
			title: "Canonical string reduction",
			author: "Edsger W. Dijkstra",
			url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
			likes: 12,
			__v: 0,
		});
	});
});

describe("Author with the most blogs", () => {
	test("of empty list is zero", () => {
		assert.deepStrictEqual(listHelper.mostBlogs([]), 0);
	});

	test("of a list with one item is the only author with 1 blog", () => {
		const oneItem = [blogs[0]];
		assert.deepStrictEqual(listHelper.mostBlogs(oneItem), {
			author: "Michael Chan",
			blogs: 1,
		});
	});

	test("of a bigger list is calculated rigth", () => {
		assert.deepStrictEqual(listHelper.mostBlogs(blogs), {
			author: "Robert C. Martin",
			blogs: 3,
		});
	});
});

describe("Author with the most likes", () => {
	test("of empty list is zero", () => {
		assert.deepStrictEqual(listHelper.mostLikes([]), 0);
	});

	test("of a list with one item is the only author", () => {
		const oneItem = [blogs[0]];
		assert.deepStrictEqual(listHelper.mostLikes(oneItem), {
			author: "Michael Chan",
			likes: 7,
		});
	});

	test("of a bigger list is calculated rigth", () => {
		assert.deepStrictEqual(listHelper.mostLikes(blogs), {
			author: "Edsger W. Dijkstra",
			likes: 12,
		});
	});
});
