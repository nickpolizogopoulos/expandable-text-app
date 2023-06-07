import { useState } from "react";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars)
    return <p className="lead"> {children} </p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p className="lead">
      {" "}
      {text}...
      <button
        type="button"
        className="btn rounded-pill btn-link"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Read less" : "Read more"}
      </button>
    </p>
  );
};

export default ExpandableText;
