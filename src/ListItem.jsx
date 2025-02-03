const ListItem = ({ obj }) => {
  return (
    <li
      className="mb-5 border-2 border-slate-100 flex p-4 rounded-sm"
      key={obj.id}
    >
      {JSON.stringify(obj)}
    </li>
  );
};

export default ListItem;
