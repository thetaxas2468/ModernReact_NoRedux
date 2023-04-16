import ImageShow from "./ImageShow";
import "../css/ImageList.css"

function ImageList({imgs}){

    const renderImages = imgs.map((image,index)=>{
        return <ImageShow image={image} key={image.id}/>
    })
    return(
        <div className="image-list">{renderImages}</div>
    );

}

export default ImageList;