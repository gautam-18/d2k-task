import { FaSort } from "react-icons/fa";
function PersonList({ persons, onSelectPerson, setSortParam, sortParam }) {
  return (
    <table className="table-auto w-full -collapse rounded-md overflow-hidden">
      <thead className="bg-gray-100  ">
        <tr>
          <th
            className="  p-4 text-left "
            onClick={() => {
              setSortParam({
                asc: !sortParam.asc,
                field: "first_name",
              });
            }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span>First Name </span>
              <FaSort className="text-black/40" />
            </div>
          </th>
          <th
            className="  p-4 text-left"
            onClick={() => {
              setSortParam({
                asc: !sortParam.asc,
                field: "last_name",
              });
            }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span>Last Name </span>
              <FaSort className="text-black/40" />
            </div>
          </th>
          <th
            className="  p-4 text-left"
            onClick={() => {
              setSortParam({
                asc: !sortParam.asc,
                field: "age",
              });
            }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span>Age </span>
              <FaSort className="text-black/40" />
            </div>
          </th>
          <th
            className="  p-4 text-left"
            onClick={() => {
              setSortParam({
                asc: !sortParam.asc,
                field: "email",
              });
            }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span>Email </span>
              <FaSort className="text-black/40" />
            </div>
          </th>
          <th
            className="  p-4 text-left"
            onClick={() => {
              setSortParam({
                asc: !sortParam.asc,
                field: "web",
              });
            }}
          >
            <div className="flex items-center gap-2 cursor-pointer">
              <span>Website </span>
              <FaSort className="text-black/40" />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {persons?.map((person, index) => (
          <tr key={index} className="border-b">
            <td
              className="flex justify-start p-4 cursor-pointer"
              onClick={() => {
                onSelectPerson(person);
              }}
            >
              {person.first_name}
            </td>
            <td
              className="   text-left p-4 cursor-pointer"
              onClick={() => {
                onSelectPerson(person);
              }}
            >
              {person.last_name}
            </td>
            <td className="  text-left p-4">{person.age}</td>
            <td className="  text-left p-4">{person.email}</td>
            <td className="  p-4 text-left">
              <a
                href={person.web}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                {person.web}
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default PersonList;
