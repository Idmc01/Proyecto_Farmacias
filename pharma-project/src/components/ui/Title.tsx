type TitleProps = {
    title: string
    green: string
    className?: string
}

// Componente que muestra un título, recibe el titulo, y el tono de los 3 verdes principales de la paleta de colores, 1 siendo el mas claro y 3 el mas oscuro
export default function Title(props: TitleProps){
    return (
        <h1 className={`text-xl font-bold text-green-${props.green} ${props.className}`}>{props.title}</h1>
    )
}