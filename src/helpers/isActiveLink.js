function isActiveLink() {
  const link = document.querySelector('nav');
  return link.children[0].outerHTML.includes('#');
}
export { isActiveLink };
