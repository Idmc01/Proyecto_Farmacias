type StringTuple = [string, string]

type DetailGridProps = {
    details: StringTuple[]
}
export default function DetailGrid(props: DetailGridProps){
    return( 
        <div className="p-2">
            {props.details.map((detail, index) => (
                <div key={index} className="flex gap-4 p-1">
                    <div className="text-green-2 justify-self-end">
                        <strong>{detail[0]}</strong>
                    </div>
                    <div className="text-green-3 bg-green-1 rounded p-1">
                        <p>{detail[1]}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}