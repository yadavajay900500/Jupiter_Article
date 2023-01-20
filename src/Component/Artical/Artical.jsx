import './artical.css'

export default function Artical(){
    return <>
     <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarImg">
                    <img src="/assets/img/blog_post_01.jpg" alt="" className="articalImg" />
                </div>
                <div className="articalMain">
                    <div className="articalTitle">Title</div>
                    <div className="articalContent">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in dolor laborum id dolorem voluptatem? Facere, nisi, architecto debitis sit animi sapiente voluptatibus possimus quam minus enim quasi reiciendis laboriosam!o</p>
                    </div>
                    <div className="articalBottom">View More</div>
                </div>
            </div>
        </div>
    </>
}