// export const getRandomColor = () => {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// };

export const getAbbreviation = string => {
  if (/^[A-Za-z0-9]*$/.test(string[0])) {
    return string.match(/[A-Z]/g).splice(0, 2);
  } else {
    return string[0];
  }
};

// export const formatDetails = name => {
//   let formattedName;
//   if (name.length >= 34) {
//     formattedName = name.slice(0, 34).padEnd(37, '.');
//   } else {
//     formattedName = name.slice(0, name.length - 3).padEnd(name.length);
//   }
//   return formattedName;
// };

export const parseDate = date => {
  return date
    .slice(0, 10)
    .split('-')
    .map(item => Number(item));
};

export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
