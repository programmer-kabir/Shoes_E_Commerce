export const handleAddToFavorite = (id) => {
  const storedIdsString = localStorage.getItem("favoriteShoes");

  const storedIds = storedIdsString ? JSON.parse(storedIdsString) : [];

  if (!storedIds.includes(id)) {
    storedIds.push(id);

    localStorage.setItem("favoriteShoes", JSON.stringify(storedIds));
  }
};
