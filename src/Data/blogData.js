import blogImg1 from "../images/blog-one-thumb.jpg";
import blogImg2 from "../images/blog-two-thumb.jpg";
import blogImg3 from "../images/blog-three-thumb.jpg";
import blogImg4 from "../images/blog-four-thumb.jpg";

// inladen blogpostdata
// checken slug
// vergelijken met blogdata
// match uithalen
// en displayen

const blogData = [
    {
        id: 1,
        img: blogImg1,
        title: "NEW YORK OPENING",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "new-york-opening"
    },
    {
        id: 2,
        img: blogImg2,
        title: "1,000,000 VISITS",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "1,000,000-visits"
    },
    {
        id: 3,
        img: blogImg3,
        title: "EXCLUSIVE COFFEE",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "exclusive-coffee"
    },
    {
        id: 4,
        img: blogImg4,
        title: "PACIFIC OPENING",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "exclusive-coffee"
    },   
    {
        id: 5,
        img: blogImg1,
        title: "FIFTH BLOG ITEM",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "fifth-item"
    },   
    {
        id: 6,
        img: blogImg2,
        title: "SIX BLOG ITEM",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "six-item"
    },   
    {
        id: 7,
        img: blogImg3,
        title: "SEVENTH BLOG ITEM",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "seven-item"
    },   
    {
        id: 8,
        img: blogImg3,
        title: "EIGHT BLOG ITEM",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sollicitudin eu magna ut sollicitudin. Maecenas eu turpis enim. Phasellus sapien ligula, suscipit non urna elementum, dignissim [...]",
        slug: "eight-item"
    }   
]

export default blogData