export const removeStrainItem = (data, strainToRemove) => {
  const existingStrainItem = data.find(
    strain => strain.id === strainToRemove.strainid
  )

  if (existingStrainItem) {
    return data.filter(strain => strain.id !== strainToRemove.id)
  }
};

export const addStrainToFavorites = (data, strainToAdd) => {
  const existingStrainItem = data.find(
    strain => strain.strainid === strainToAdd.strainid
  )

  if (existingStrainItem) {
    return data.map(strain =>
      strain.strainid === strainToAdd.strainid
        ? {...data}
        : strain
      )
  }

  return [...data, {...strainToAdd}];
}