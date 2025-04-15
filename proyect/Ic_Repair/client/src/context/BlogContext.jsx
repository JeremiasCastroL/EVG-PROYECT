import { createContext, useContext } from "react";
import { registerBlogRequest } from "../api/auth";

export const BlogContext = createContext();

export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({ children }) => {
        const adminBlog = async (blog) => {
                const formData = new FormData();
                formData.append("title", blog.title);
                formData.append("content", blog.content);
                formData.append("category", blog.category);
                formData.append("date", blog.date);
                formData.append("image", blog.image); // este `image` debe ser un File, no un string
              
                await registerBlogRequest(formData);
        };

  return (
    <BlogContext.Provider value={{ adminBlog }}>
      {children}
    </BlogContext.Provider>
  );
};
