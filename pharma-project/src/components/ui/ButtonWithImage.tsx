type ButtonWithImageProps = {
    image_name: string
}

let IMAGE_URL:string = 'src/assets/'

export default function ButtonWithImage({image_name}: ButtonWithImageProps){
    return (
        <button 
            className="bg-cover w-9 h-8" 
            style={{
                backgroundImage: `url(${IMAGE_URL}${image_name})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}
        ></button>
    );
}