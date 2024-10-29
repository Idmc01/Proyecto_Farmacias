import { useState } from "react";
import Modal from "../../../components/ui/Modal";
import Title from "../../../components/ui/Title";
import PharmacyDropDown from "./PharmacyDropDown";
import ProductDropDown from "./ProductDropDown";
import Button from "../../../components/ui/Button";

type SendRequestModalProps = {
    onClose: () => void;
    show: boolean;
};

export default function SendRequestModal(props: SendRequestModalProps) {
    const [invoiceId, setInvoiceId] = useState<number>(0);
    const [purchaseDate, setPurchaseDate] = useState<string>("");
    const [selectedPharmacyId, setSelectedPharmacyId] = useState<number>(0);
    const [selectedProductId, setSelectedProductId] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(0);
    const [imageUploaded, setImageUploaded] = useState<boolean>(false);
    const [image, setImage] = useState<string>("");
    
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setImage(URL.createObjectURL(e.target.files[0]));
            setImageUploaded(true);
        }
    }
    const handleSendRequest = async () => {
        console.log("Sending request...");
        if (invoiceId === 0 || purchaseDate === "" || selectedPharmacyId === 0 || selectedProductId === 0 || quantity === 0 || !imageUploaded) {
            alert("Please fill all fields");
            return;
        }
        else {
            const response = await fetch(
                "https://pr-disenno-backend-production.up.railway.app/requests",
                
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json" // Asegúrate de establecer el tipo de contenido
                    },
                    body: JSON.stringify({
                        invoice_id: invoiceId,
                        purchase_date: purchaseDate,
                        pharmacy_id: selectedPharmacyId,
                        product_id: selectedProductId,
                        product_quantity: quantity,
                        invoice_image: "imageBase64",
                        user_id: 1
                    })
                }
            );
            if (response.ok) {
                alert("Request sent successfully");
                props.onClose();
            } else {
                alert("Error sending request");
            }
        }
    };
    return (
        <Modal show={props.show} onClose={props.onClose}>
            <Title title="Points Request" green="1" className="p-2" />
            <div className="flex">
                <div className="flex flex-col gap-4 p-2">
                    <div>
                        <strong className="text-green-2">Invoice ID:</strong>
                        <input
                            type="text"
                            name="search-bar"
                            placeholder="Enter Invoice ID"
                            className="font-bold bg-green-1 text-green-3 
                        placeholder:text-green-2 focus:outline-none w-full p-1 rounded"
                            onChange={(e) => setInvoiceId(Number(e.target.value))}
                        />
                    </div>
                    <div>
                        <strong className="text-green-2">Purchase date:</strong>
                        <input
                            type="date"
                            name="search-bar"
                            placeholder="Enter Invoice ID"
                            className="font-bold bg-green-1 text-green-3 
                        placeholder:text-green-2 focus:outline-none w-full p-1 rounded"
                            onChange={(e) => setPurchaseDate(e.target.value)}
                        />
                    </div>
                    <div>
                        <strong className="text-green-2">
                            Pharmacy of purchase:
                        </strong>
                        <PharmacyDropDown
                            handleChange={(pharmacyId) =>
                                setSelectedPharmacyId(pharmacyId)
                            }
                        ></PharmacyDropDown>
                    </div>
                    <div>
                        <strong className="text-green-2">Product:</strong>
                        <ProductDropDown
                            is_in_program="true"
                            handleChange={(productId) =>
                                setSelectedProductId(productId)
                            }
                        ></ProductDropDown>
                    </div>
                    <div>
                        <strong className="text-green-2">Cantidad:</strong>
                        <input
                            type="text"
                            name="search-bar"
                            placeholder="Quantity"
                            className="font-bold bg-green-1 text-green-3 
                        placeholder:text-green-2 focus:outline-none w-full rounded p-1"
                            onChange={(e) => setQuantity(Number(e.target.value))}
                        /> 
                    </div>
                    <input type="file" accept="image/*" className="p-2 my-3 rounded bg-green-1 font-bold max-w-fit" onChange={handleImageUpload}/>
                </div>
                {imageUploaded && (<div className="m-5">
                    <img
                        src={image}
                        alt="Uploaded image"
                        className=""
                    />
                </div>)}
            </div>
            <Button onClick={handleSendRequest}>Send Request</Button>        
        </Modal>
    );
}
