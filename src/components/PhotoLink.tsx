interface Props {
  link: string;
  name: string;
}

const PhotoLink = ({ link, name }: Props) => {
  return (
    <p className="lead">
      Click{" "}
      <a href={link} target="blank" className="link-primary">
        here
      </a>{" "}
      to see a photo of the {name} Spacecraft docked on the International Space
      Station.
    </p>
  );
};

export default PhotoLink;
