export default function setActiveFilter() {
  const foo = () => {
    const allOptions = document.querySelectorAll('option');
    allOptions[0].selected = localStorage.filter === ''
    allOptions[1].selected = localStorage.filter === 'true'
    allOptions[2].selected = localStorage.filter === 'false'
  }
  setTimeout(() => {
    foo()
  }, 0);
}
