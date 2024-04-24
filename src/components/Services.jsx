import { useRef } from "react";
const Services = () => {
    let liTag = useRef();
  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <ul>
        <li>Service 1</li>
        <li>Service 2</li>
        <li ref={liTag}>Service 3</li>
      </ul>
      <button onClick={()=>{
        liTag.current.style.backgroundColor="red";
      }}>ChangeBG</button>
    </div>
  );
};

export default Services;
