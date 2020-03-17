export default function csvMaker(allData, checkboxes) {
  const string = allData.map(e => {
    const filteredArray = Object.values(e)
      .map((element, idx) => {
        switch (idx) {
          case 0:
            return element;
          case 1:
            return element;
          case 2:
            return element;
          case 3:
            return element;
          case 4:
            return `${element} $`;
          case 5:
            return new Date(element).toLocaleDateString();
          case 6:
            return element ? 'Yes' : 'No';
        }
        return element
      })
      .filter((el, i) => i > 0 ? checkboxes[i - 1].isChecked : el);
    return filteredArray.join(', ')
  }).join('\n');
  const header = checkboxes
    .filter(e => e.isChecked)
    .map(e => e.label)
    .join(', ');
  const csvData = 'data:text/csv;charset=utf-8,'
    + `Id, ${header}\n`
    + string;
  return encodeURI(csvData);
}