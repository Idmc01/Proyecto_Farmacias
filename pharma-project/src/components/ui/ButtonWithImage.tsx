type ButtonWithImageProps = {
    image_name: string
    action?: () => void
}

let IMAGE_URL:string = 'src/assets/'

export default function ButtonWithImage(props: ButtonWithImageProps){
    return (
        <button 
            onClick={props.action}
            className="bg-cover w-9 h-8" 
            style={{
                backgroundImage: `url(${IMAGE_URL}${props.image_name})`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}
        ></button>
    );
}