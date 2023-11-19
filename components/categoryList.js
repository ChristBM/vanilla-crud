const selectCategory = document.querySelector('category-list-select') 

const categoryList = (list) => {
  if (list.length) {
    let optsNodes = ''
      
    list.forEach((category) => {
      optsNodes = optsNodes + `
        <option value="${category.id}">${category.name}</option>
      `;
    })
    
    selectCategory.innerHTML = optsNodes
  } selectCategory.innerHTML = '<option value="3">Nuevo name</option>'
}

export default categoryList
