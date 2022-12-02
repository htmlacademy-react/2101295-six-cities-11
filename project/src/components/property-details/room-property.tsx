type ListPropertysProp = {
  propertys: string[] | undefined;
}

export default function ListPropertys({propertys}: ListPropertysProp): JSX.Element {
  return (
    <ul className="property__inside-list">
      {propertys?.map((property) => (
        <li className="property__inside-item"
          key = {property}
        >
          {property}
        </li>))}
    </ul>

  );
}
