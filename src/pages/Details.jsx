import { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function PersonDetail() {
  // I have used the React Context as written in AppContext for storing the userData. But as commented below, I also passed the state of the person data in the location object. so we can get the userData from here too.
  // const location = useLocation();
  // const data = location.state?.person || {};
  const [person, setPerson] = useState([]);
  const [error, setError] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useContext(AppContext);
  useEffect(() => {
    const user = users?.find((user) => user.id == id);
    if (!user) {
      setError("User not found");
      return;
    }
    setError("");
    setPerson(user);
  }, [users]);

  if (!person) {
    return null;
  }
  const {
    first_name,
    last_name,
    age,
    email,
    web,
    company_name,
    city,
    state,
    zip,
  } = person;
  function moveToUsersPage() {
    navigate("/");
  }
  if (error.length > 0) {
    return (
      <div className="w-full h-full flex items-center justify-center text-2xl">
        {error}
      </div>
    );
  }
  return (
    <>
      <div className="flex flex-row items-center mb-10 gap-8">
        <IoMdArrowRoundBack
          size={25}
          onClick={moveToUsersPage}
          className="cursor-pointer"
        />
        <h1 className="text-3xl font-bold">
          Details: {first_name} {last_name}
        </h1>
      </div>
      <div className="flex flex-col w-full gap-1 items-start text-[#66696B]">
        <p className="border-b  w-full text-start p-3">
          First Name: <span className="font-bold text-black">{first_name}</span>
        </p>
        <p className="border-b  w-full text-start p-3">
          Last Name: <span className="font-bold text-black">{last_name}</span>
        </p>
        <p className="border-b  w-full text-start p-3">
          Company Name:{" "}
          <span className="font-bold text-black">{company_name}</span>
        </p>
        <p className="border-b  w-full text-start p-3">
          City: <span className="font-bold text-black">{city}</span>
        </p>
        <p className="border-b  w-full text-start p-3">
          State:<span className="font-bold text-black"> {state}</span>
        </p>
        <p className="border-b  w-full text-start p-3">
          Zip: <span className="font-bold text-black">{zip}</span>
        </p>
        <p className="border-b  w-full text-start p-3">
          Email: <span className="font-bold text-black"> {email}</span>
        </p>
        <p className="border-b  w-full text-start p-3">
          Web:{" "}
          <a href={web} target="_blank" rel="noopener noreferrer">
            <span className="font-bold text-black">{web}</span>
          </a>
        </p>
        <p className="border-b  w-full text-start p-3">
          Age: <span className="font-bold text-black">{age}</span>
        </p>
      </div>
    </>
  );
}

export default PersonDetail;
