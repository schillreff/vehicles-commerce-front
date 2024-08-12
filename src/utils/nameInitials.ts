export const splitName = (name: string) => {
  const splitedName = name.split(' ');
  if (splitedName.length > 1) {
    return `${splitedName[0]} ${splitedName[splitedName.length - 1]}`;
  }
  return splitedName[0];
};

export const nameInitials = (name: string) => {
  const splitedName = name.split(' ');
  if (splitedName.length > 1) {
    return `${splitedName[0][0]}${
      splitedName[splitedName.length - 1][0]
    }`.toUpperCase();
  } else {
    return `${splitedName[0][0]}`;
  }
};
