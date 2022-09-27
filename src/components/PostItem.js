import parse from "html-react-parser";
import tech from '../assets/tech.jpg'

export default function PostItem({ post }) {
    let image = tech;

    if (post._embedded && post._embedded["wp:featuredmedia"]) {
        image = post._embedded["wp:featuredmedia"][0].source_url;
    }

    return (
        <article className="p-4 shadow-md shadow-gray-500 rounded-lg ">
            <img src={image} alt={post.title.rendered} className="w-full h-[200px] object-cover rounded-md duration-200 hover:scale-105" />
            <h2 className="font-medium tracking-wide text-2xl my-2">{parse(post.title.rendered)}</h2>
            <p className="my-2">{parse(post.content.rendered)}</p>

            
            
        </article>
    );
}