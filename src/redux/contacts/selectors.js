export const selectContacts = (state) => state.contacts.items;
export const selectIsLoading = (state) => state.contacts.isLoading;
export const selectError = (state) => state.contacts.error;

// Функція для вибору відфільтрованих контактів
export const selectFilteredContacts = (state) => {
  const { items, filter } = state.contacts;
  return items.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};
