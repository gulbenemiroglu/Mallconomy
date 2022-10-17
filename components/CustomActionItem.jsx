import Image from "next/image";

const CustomActionItem = ({image, title, description, point}) => {
  return (
      <div className="action-item-container d-flex flex-row justify-content-between">
        <div className="d-flex">
          <div className="custom-image">
          <Image 
            src={image}
            layout={"fixed"}
            width={36}
            height={36}
          />
          </div>
          
          <div className="d-flex flex-column px-2">
            <h4 className="title">{title}</h4>
            <p className="description">{description}</p>
          </div>
        </div>
        <h4 className="txt-point">+{point}</h4>
      </div>
  );
}

export default CustomActionItem;