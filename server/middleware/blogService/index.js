const blogDB = require("../../data/blogDB/index");


exports.createBlog = function(req,res){
    blogDB.createBlog(req,res);
}

exports.fetchAllBlogs = function(req,res){
    blogDB.fetchAllBlogs(req,res);
}

exports.fetchBlogByDestination = function(req,res){
    blogDB.fetchBlogByDestination(req,res);
}

exports.fetchBlogComments = function(req,res){
    blogDB.fetchBlogComments(req,res);
}

exports.deleteBlogByID = function(req,res){
    blogDB.deleteBlogByID(req,res);
}

exports.addComment = function(req,res){
    blogDB.addComment(req,res);
}
