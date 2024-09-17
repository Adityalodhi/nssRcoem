import React from 'react'

import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

import Img1 from "./Prerna15.0Images/1.JPG";
import Img2 from "./Prerna15.0Images/2.JPG";
import Img3 from "./Prerna15.0Images/3.JPG";
import Img4 from "./Prerna15.0Images/4.JPG";
import Img5 from "./Prerna15.0Images/5.JPG";
import Img6 from "./Prerna15.0Images/6.JPG";
import Img7 from "./Prerna15.0Images/7.JPG";
import Img8 from "./Prerna15.0Images/8.JPG";
import Img9 from "./Prerna15.0Images/9.JPG";
import Img10 from "./Prerna15.0Images/10.JPG";
import Img11 from "./Prerna15.0Images/11.JPG";
import Img12 from "./Prerna15.0Images/12.JPG";
import Img13 from "./Prerna15.0Images/13.JPG";
import Img14 from "./Prerna15.0Images/14.JPG";
import Img15 from "./Prerna15.0Images/15.JPG";
import Img16 from "./Prerna15.0Images/16.JPG";
import Img17 from "./Prerna15.0Images/17.JPG";
import Img18 from "./Prerna15.0Images/18.JPG";
import Img19 from "./Prerna15.0Images/19.JPG";
import Img20 from "./Prerna15.0Images/20.JPG";
import Img21 from "./Prerna15.0Images/21.JPG";
import Img22 from "./Prerna15.0Images/22.JPG";
import Img23 from "./Prerna15.0Images/23.JPG";
import Img24 from "./Prerna15.0Images/24.JPG";
import Img25 from "./Prerna15.0Images/25.JPG";
import Img26 from "./Prerna15.0Images/26.JPG";
import Img27 from "./Prerna15.0Images/27.JPG";
import Img28 from "./Prerna15.0Images/28.JPG";
import Img29 from "./Prerna15.0Images/29.JPG";

const images = [
    Img1,
    Img2,
    Img3,
    Img4,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img20,
    Img11,
    Img21,
    Img12,
    Img22,
    Img13,
    Img23,
    Img14,
    Img24,
    Img15,
    Img25,
    Img16,
    Img26,
    Img17,
    Img27,
    Img18,
    Img28,
    Img19,
    Img29,
    
]

export default function prerna15() {
  return (
    <>
        <h1 style={{textAlign : 'center' , padding:"20px", color:"black",paddingTop:"14rem"}}> Prerna 15.0</h1>
        <h2 style={{textAlign : 'center'}}> Description About Particular Event</h2>

        <div style={{padding : '10px'}}>
            <ResponsiveMasonry
                    columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
                >
                <Masonry gutter='20px' >
                    {images.map((image,i) =>(
                        <img key={i} src={image} className='sty' style={{width:"100%", display:"block",border:"3px solid Black" , borderRadius:"20px"}} alt='' />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </div>
    </>
  )
}








// import React from 'react'

// import Img1 from "./Images/1.jpg";
// import Img2 from "./Images/2.jpg";
// import Img3 from "./Images/3.jpg";
// import Img4 from "./Images/4.jpg";
// import Img5 from "./Images/5.jpg";
// import Img6 from "./Images/6.jpg";
// import Img7 from "./Images/7.jpg";
// import Img8 from "./Images/8.jpg";
// import Img9 from "./Images/9.jpg";
// import Img10 from "./Images/10.jpg";


// export default function Images() {

//     let data = [
//         {
//             id: 1,
//             imgSrc: 'Img1',
//         },
//         {
//             id: 2,
//             imgSrc: 'Img2',
//         },
//         {
//             id: 3,
//             imgSrc: 'Img3',
//         },
//         {
//             id: 4,
//             imgSrc: 'Img4',
//         },
//         {
//             id: 5,
//             imgSrc: 'Img5',
//         },
//         {
//             id: 6,
//             imgSrc: 'Img6',
//         },
//         {
//             id: 7,
//             imgSrc: 'Img7',
//         },
//         {
//             id: 8,
//             imgSrc: 'Img8',
//         },
//         {
//             id: 9,
//             imgSrc: 'Img9',
//         },
//         {
//             id: 10,
//             imgSrc: 'Img10',
//         }
//     ]

//   return (
//     <>
//         <h1 style={{textAlign : 'center'}}> Image Gallary</h1>
//         <hr />
//         <h2 style={{textAlign : 'center'}}> Description About Particular Event</h2>

//         <div className='gallery'>
//             {data.map((item,index)=>{
//                 return(
//                     <div className='pics' key={index}>
//                         <img src={item.imgSrc} />
//                     </div>
//                 )
//             })}
//         </div>

    
    
//     </>
//   );
// }
