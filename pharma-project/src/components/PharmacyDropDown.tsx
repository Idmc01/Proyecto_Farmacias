import { useEffect, useState } from "react";

type PharmacyDropDownProps = {
    handleChange: (pharmacyId: number) => void;
};
export default function PharmacyDropDown(props: PharmacyDropDownProps) {
    const [pharmacies, setPharmacies] = useState([]);

    useEffect(() => {
        fetchRequestDetails();
    }, []);

    const fetchRequestDetails = async () => {
        try {
            const response = await fetch(
                `https://pr-disenno-backend-production.up.railway.app/pharmacies`
            );
            if (!response.ok) {
                throw new Error(
                    `Error: ${response.status} ${response.statusText}`
                );
            }
            const data = await response.json();
            setPharmacies(data);
        } catch (error) {
            console.error("Error fetching request details:", error);
        }
    };
    const handleSelectChange = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const pharmacyId = Number(event.target.value);
        props.handleChange(pharmacyId); // Notifica al componente padre el ID seleccionado
    };
    return (
        <select
            name="pharmacies"
            onChange={handleSelectChange}
            className="font-bold bg-green-1 text-green-3 
                        placeholder:text-green-2 focus:outline-none w-full p-1 rounded"
        >
            {pharmacies.map((pharmacy: any) => {
                return (
                    <option key={pharmacy.id} value={pharmacy.id}>
                        {pharmacy.name}
                    </option>
                );
            })}
        </select>
    );
}
