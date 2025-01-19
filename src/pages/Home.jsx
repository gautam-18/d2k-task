import "../App.css";
import React, { useContext } from "react";
import { ImSpinner2 } from "react-icons/im";
import { useEffect, useState } from "react";
import Search from "../Components/Search";
import PersonList from "../Components/PersonList";
import { getUserData } from "../services/getUserData";
import Pagination from "../Components/Pagination";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { sortUsers } from "../utils/sort-users";
function Home() {
  const { users, setUsers } = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState("");
  const [filteredUsers, setfilteredUsers] = useState([]);
  const [query, setQuery] = useState("");
  const [sortParam, setSortParam] = useState({
    asc: false,
    field: "",
  });
  const itemsPerPage = 20;
  const navigate = useNavigate();

  function handleSelectPerson(person) {
    navigate(`/users/${person.id}`, { state: { person } });
  }

  const indexOfLastPerson = currentPage * itemsPerPage;
  const indexOfFirstPerson = indexOfLastPerson - itemsPerPage;
  const currentfilteredUsers = filteredUsers?.slice(
    indexOfFirstPerson,
    indexOfLastPerson
  );

  function filterDataByQuery(data, query) {
    return data.filter(
      (user) =>
        user.first_name.toLowerCase().includes(query.toLowerCase()) ||
        user.last_name.toLowerCase().includes(query.toLowerCase())
    );
  }

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("users"));
    if (!localData || localData.length === 0) {
      (async () => {
        setIsLoading(true);
        const userData = await getUserData();
        setIsLoading(false);
        if (!userData) {
          setError("No Users found");
          return;
        }
        //Storing the users data in the localContext
        setUsers(userData);
      })();
    } else {
      setUsers(localData);
      setIsLoading(false);
      setError("");
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query?.length < 1) {
        setfilteredUsers(users);
      } else {
        const filteredData = filterDataByQuery(users, query);
        if (filteredData?.length === 0) {
          setError("No user found with the searched name");
          setfilteredUsers([]);
          return;
        }
        setError("");
        setfilteredUsers(filteredData);
      }
    }, 300);
    return () => {
      clearInterval(timer);
    };
  }, [query, users]);

  useEffect(() => {
    const sortedData = sortUsers(sortParam, filteredUsers);
    setfilteredUsers(sortedData);
  }, [sortParam.asc, sortParam.field]);

  return (
    <div className="flex flex-col gap-10">
      <h1 className="font-bold text-start text-4xl">Users</h1>
      <Search query={query} setQuery={setQuery} />

      {isLoading ? (
        <ImSpinner2 className="animate-spin text-black mx-auto" />
      ) : (
        <PersonList
          persons={currentfilteredUsers}
          onSelectPerson={handleSelectPerson}
          setSortParam={setSortParam}
          sortParam={sortParam}
        />
      )}
      {error?.length > 0 && `${error}`}
      <Pagination
        dataLength={filteredUsers?.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
