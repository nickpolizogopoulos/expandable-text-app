interface Props {
  name: string;
  text: string;
  source: string;
}

const Quote = ({ name, text, source }: Props) => {
  return (
    <figure>
      <blockquote className="blockquote">
        <p><i>"{text}"</i></p>
      </blockquote>
      <figcaption className="blockquote-footer">
        {name}
        <cite title="Source Title">{" - "}{source}</cite>
      </figcaption>
    </figure>
  );
};

export default Quote;
