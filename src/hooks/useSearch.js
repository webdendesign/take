const useSearch = (contacts, search) => {
  if(search.length === 0) {
    return contacts;
  }

  return contacts.filter((item) => {
    return item.username.toLowerCase().indexOf(search.toLowerCase()) > -1
  })
};

export default useSearch;
