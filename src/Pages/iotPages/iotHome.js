import { useContext } from 'react'
import RightSidebar from '../../Component/rightSidebar/rightSidebar'
import Sidebar from '../../Component/Sidebar/Sidebar'
import { AuthContext } from '../../ContextApi/AuthContext'
import './iotHome.css'

export const IotHome = () => {
    const d = useContext(AuthContext)
    console.log(">>>>>>>>>", d)
    return <>
        <div className='iotHome'>
           
            <Sidebar />
            <RightSidebar />
        </div>

        <div class="container text-center">
            <div class="row">
                <div class="col-4">
                    <div className="iotHome">
                        <h1>Web is workin</h1>
                        <h1>{d.user.name}</h1>
                    </div>
                </div>
                <div class="col-8">
                    <div className="iotHome-1">
                        <h1>Web is oooooooooo</h1>
                    </div>
                </div>
            </div>
        </div>
        {/* <h1>IotHome is working</h1> */}

        <section class="our-blog">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="heading">
                            <h2>Our blog post</h2>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="blog-post">
                            <img src="img/blog_post_01.jpg" alt="" />
                            <div class="date">26 Oct 2020</div>
                            <div class="right-content">
                                <h4>Stumptown Tofu Schlitz</h4>
                                <span>Branding / Admin</span>
                                <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                                <div class="text-button">
                                    <a href="#">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="blog-post">
                            <img src="img/blog_post_02.jpg" alt="" />
                            <div class="date">21 Oct 2020</div>
                            <div class="right-content">
                                <h4>Succulents Hashtag Folk</h4>
                                <span>Branding / Admin</span>
                                <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                                <div class="text-button">
                                    <a href="#">Continue Reading</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_03.jpg" alt=""/>
                        <div class="date">11 Oct 2020</div>
                        <div class="right-content">
                            <h4>Knaus Sriracha Pinterest</h4>
                            <span>Dessert / Chef</span>
                            <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="blog-post">
                        <img src="img/blog_post_04.jpg" alt=""/>
                        <div class="date">03 Oct 2020</div>
                        <div class="right-content">
                            <h4>Crucifix Selvage Coat</h4>
                            <span>Plate / Chef</span>
                            <p>Skateboard iceland twee tofu shaman crucifix vice before they sold out corn hole occupy drinking vinegar chambra meggings kale chips hexagon...</p>
                            <div class="text-button">
                                <a href="#">Continue Reading</a>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    </>
}