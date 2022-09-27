import React from 'react'
import PostItem from "./PostItem";
import { useEffect, useState } from "react";



const PostFetch = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("https://wordpress.martinelsborg.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        getData();
    }, []);
  return (
    
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
   
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Se hvilke projekter jeg har lavet</p>
            </div>
            <section className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {posts.map(post => (
                        <PostItem key={post.id} post={post} />
                    ))}
            </section>
            </div>
    </div>
  )
}

export default PostFetch