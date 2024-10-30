import ButtonWithImage from "../../../components/ui/ButtonWithImage"

type RequestRowProps = {
    invoice_id: string,
    product_name: string,
    request_state: string,
    client_name: string
}

export default function RequestRowAdmin(props: RequestRowProps) {
    return (
        <div>
            <div className="grid grid-cols-custom-1 gap-5 bg-green-1 p-4 w-auto items-center text-green-3">
                <div className="col-span-2 overflow-hidden">{props.invoice_id}</div>
                <div className="col-span-1 overflow-hidden">{props.product_name}</div>
                <div className="col-span-1 overflow-hidden">{props.request_state}</div>
                <div className="col-span-1 overflow-hidden">{props.client_name}</div>
                <div className="col-span-2 overflow-hidden"></div> {/* Espacio vacío para relleno */}
                <div className="col-span-1 overflow-hidden">
                    <ButtonWithImage image_name='inspect-icon-green-3.png' />
                </div>
            </div>
        </div>

    )
}
