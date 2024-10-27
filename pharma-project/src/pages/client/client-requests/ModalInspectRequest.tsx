import Title from "../../../components/ui/Title"
import DetailGrid from "./DetailGrid"

let IMAGE_URL:string = 'src/assets/'

type ModalInspectRequestProps = {
    show: boolean,
    close: () => void
}

export default function ModalInspectRequest(props: ModalInspectRequestProps) {
    if (!props.show)
        return null
    return (
        <div className="fixed h-svh w-svw top-0 left-0 right-0 bottom-0 flex justify-center items-center">
            <div onClick={props.close} className="fixed h-svh w-svw top-0 left-0 right-0 bottom-0 flex justify-center items-center z-10 bg-black bg-opacity-25"></div>
            <div className="flex flex-col bg-green-3 rounded z-20">
                <Title title="Request Details" green="1" className="p-3"></Title>
                <div className="flex">
                    <div>
                        <DetailGrid details={[["Invoice ID:", "12312664"], 
                                                ["Purchase Date:", "12/4/24"],
                                                ["Request State:", "Accepted"],
                                                ["Pharmacy:", "FarmaValue"]]}></DetailGrid>
                        <Title title="Product" green="1" className="p-3"></Title>
                        <DetailGrid details = {[["Name:", "Loratadina"],
                                                ["Presentation:", "Capsules"],
                                                ["Amount:", "5"],
                                                ["Potential point gain:", "350"]]}></DetailGrid>
                    </div>
                    <div className="h-96 w-80 m-5" style={{
                        backgroundImage: `url(${IMAGE_URL}factura-ejemplo.jpg)`,
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat'
                    }}>

                    </div>
                </div>
            </div>
        </div>

    )
}