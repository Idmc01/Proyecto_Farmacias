type TitleProps = {
    title: string
    green: string
    className?: string
}

export default function Title(props: TitleProps){
    return (
        <h1 className={`text-xl font-bold text-green-${props.green} ${props.className}`}>{props.title}</h1>
    )
}