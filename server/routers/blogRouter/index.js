const blogRouter = require("express").Router();
const blogService = require("../../middleware/blogService");
/**
 * This router is to create a API for Transportation Information. This API can be tested on Postman
 * with route '/transportation/fetchAllFlights' at the end of the server_url.
 * Upon passing the source, destination, travel date, it should return all the information related to the flights in the JSON format.
 */
blogRouter.post("/createBlog", blogService.createBlog);

blogRouter.post("/fetchAllBlogs", blogService.fetchAllBlogs);

blogRouter.post("/fetchBlogByDestination", blogService.fetchBlogByDestination);

blogRouter.post("/fetchBlogComments", blogService.fetchBlogComments);

blogRouter.post("/deleteBlogByID", blogService.deleteBlogByID);

blogRouter.post("/addComment", blogService.addComment);

module.exports = blogRouter;
