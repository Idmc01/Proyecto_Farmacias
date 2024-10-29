import ButtonWithImage from "./ui/ButtonWithImage";

type SearchBarProps = {
    place_holder: string;
    className?: string;
    onClickSearch?: () => void;
    onClickFilter?: () => void;
    filter: boolean
    onSearchChange: (text: string) => void;
}

export default function SearchBar(props: SearchBarProps) {
    
    return (
        <div className={`flex justify-center items-center m-3 gap-4 w-screen ${props.className}`}>
            <div className={`basis-2/4 flex p-3 bg-green-1 rounded`}>
                <input 
                type="text" 
                name="search-bar" 
                placeholder={props.place_holder}
                className="font-bold bg-green-1 text-green-3 
                placeholder:text-green-2 focus:outline-none w-full"
                onChange={(e) => props.onSearchChange(e.target.value)}
                />
            </div>
            <ButtonWithImage image_name="search-icon-green-1.png" action={props.onClickSearch}></ButtonWithImage>
            {props.filter && <ButtonWithImage image_name="filter-icon-green-1.png" action={props.onClickFilter}/>}
        </div>
    );
}