function  MainContent() {
    const mask = {backgroundColor: "rgba(251, 251, 251, 0.15)"}
    
    const content = [
        {
            title: "Titulo Card 1",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui non harum ipsum eligendi nemo optio magnam eum voluptatum dignissimos?",
            link: "Link",
            image: "/img/shop.jpg"
        },
        {
            title: "Titulo Card 2",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui non harum ipsum eligendi nemo optio magnam eum voluptatum dignissimos?",
            link: "Link",
            image: "/img/shop.jpg"
        },
        {
            title: "Titulo Card 3",
            content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores qui non harum ipsum eligendi nemo optio magnam eum voluptatum dignissimos?",
            link: "Link",
            image: "/img/shop.jpg"
        }
    ]

    return (
        
        <main className="my-5 ">
            <div className="container "> 
            <h1 className="mb-5 mt-4 ecommerceTitle text-center">Últimos Posteos</h1>
                <div className="row">
{
    content.map( (content, indice) => {
        return (
            <div key={indice} className="col-lg-4 col-md-12 mb-4">
                <div  className="card h-100">
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={content.image} className="img-fluid imgBlog" />
                        <a href="#!">
                            <div className="mask" style={mask}>
                            </div>
                        </a>
                    </div>
                <div className="card-body">
                    <h5 className="card-title">{content.title}</h5>
                    <p className="card-text">
                    {content.content}
                    </p>
                    <a href="" className="">{content.link}</a>
                    </div>
                </div>
            </div>  
        )
    })
}

                </div>
            </div>
        </main>
    )
}

export default MainContent