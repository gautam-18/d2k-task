export function sortUsers(sortParam, filteredUsers) {
  const { asc, field } = sortParam;
  if (
    field === "first_name" ||
    field === "last_name" ||
    field === "email" ||
    field === "web"
  ) {
    let sortedData = [];
    if (asc) {
      sortedData = [...filteredUsers].sort((a, b) =>
        a[field].localeCompare(b[field])
      );
    } else {
      sortedData = [...filteredUsers].sort((a, b) =>
        b[field].localeCompare(a[field])
      );
    }
    return sortedData;
  } else if (field === "age") {
    let sortedData = [];
    if (asc) {
      sortedData = [...filteredUsers].sort((a, b) => a[field] - b[field]);
    } else {
      sortedData = [...filteredUsers].sort((a, b) => b[field] - a[field]);
    }
    return sortedData;
  }
}
