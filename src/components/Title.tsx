interface Props {
  title: string;
  secondaryText: string;
}

const Title = ({ title, secondaryText }: Props) => {
  return (
    <h3>{title}
      <small className="text-muted">{secondaryText}</small>
    </h3>
  );
};

export default Title;
