import React from 'react'

function BlogMain() {
  return (
    <section className="secion-main  bg-negro-claro py-5">
        <div className="container py-5 ">
            <div className="row pt-2">
                 
                   <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                       <div className="contain-img img-blog   ">
                           <img src="/src/img/img-blog.jpg" className="img-fluid border-card-2 " alt=""/>
                       </div> 
                       <div className="contain-texto texto-blog position-absolute mw-211">
                           <span className="text-gris font-size-14">27 April . Web Design</span>
                           <a href="/blog-details.html" className="text-decoration-none"><h4 className="font-size-20 blog">The window know to say beside you</h4></a>
                       </div>  
                    </div> 
            </div>
        </div> 
    </section>
  )
}

export default BlogMain