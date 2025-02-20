function openDropdown(dropdownLink,dropdownItemLink){
    const dropdown = document.querySelector(dropdownLink);
    const dropdownItem = document.querySelector(dropdownItemLink);

    dropdown.addEventListener("click",(e)=>{
        if(dropdownItem.style.display === 'none' || !dropdownItem.style.display){
            dropdownItem.style.display = 'grid';
        } else if (dropdownItem.style.display === 'grid'){
            dropdownItem.style.display = 'none';
        }
    })
};

openDropdown('.dropdownItem','.dropdownItemList');