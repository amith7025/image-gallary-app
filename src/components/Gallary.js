import React,{useState,useEffect}from 'react'
import './gallary.css'
//import logo from '../assets/logo192.png'



function Gallary() {

    const [image,setImage] = useState([])

    useEffect(()=>{

        const fetchImage = () =>{
            const data = [
                {
                    id:1,
                    url:'https://picsum.photos/id/1/300/200',
                    title:'Image 1'
                },
                {
                    id:2,
                    url:'https://picsum.photos/id/2/300/200',
                    title:'Image 2'
                },
                {
                    id:3,
                    url:'https://picsum.photos/id/3/300/200',
                    title:'Image 3'
                },
                {
                    id:4,
                    url:'https://picsum.photos/id/4/300/200',
                    title:'Image 4'
                },
                {
                    id:5,
                    url:'https://picsum.photos/id/5/300/200',
                    title:'Image 5'
                },
                {
                    id:6,
                    url:'https://picsum.photos/id/6/300/200',
                    title:'Image 6'
                }
            ]
            setImage(data)

        }
        fetchImage()

    },[])

    const delete_btn = (id) => {
        setImage(image.filter((image)=>image.id !== id))
    }




  return (
    <div>
      <h1 className='title'>Image Gallary App</h1>

        {
            image.length > 0 ?
            (
                <div className='image-grid'>
                {
                      image.map((img)=>(
      
                          <div className='image-card' key={img.id}>
                              <img src={img.url} alt=''></img>
      
                              <div className='image-details'>
                                      <h3>{img.title}</h3>
                                      <button onClick={()=>delete_btn(img.id)}>Delete</button>
                              </div>
      
                      </div>
      
                      ))
                      
      
      
                }
      
            </div>
            ):
            (
                <p>No Images</p>
            )
        }


    </div>
  )
}

export default Gallary
