import Image from "next/image"

const CustomActionHeader = ({image, point}) => {
    return(
        <div>
            <Image
                src={image}
                width={72}
                height={72}
                layout={'fixed'}
            />
            <div className="card-points">
                +{point} Points
            </div>
        </div>
    )
}

export default CustomActionHeader;