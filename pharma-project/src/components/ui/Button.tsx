type ButtonProps = {
    children?: React.ReactNode;
    onClick?: () => void;
}
export default function Button(props: ButtonProps) {
    return (
        <button className="bg-green-1 text-green-3 font-bold 
                        p-2 rounded focus:outline-none" onClick={props.onClick}>
            {props.children}
        </button>
    )
}