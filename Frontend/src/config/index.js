

export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: 'email',
    label: 'Email', 
    placeholder: "Enter your Email",
    componentType : "input",
    type : 'email',
  },
  {
    name: 'password',
    label: 'Password', 
    placeholder: "Enter your password",
    componentType : "input",
    type : 'password',
  }
];


export const loginFormControls = [
  {
    name: 'email',
    label: 'Email', 
    placeholder: "Enter your Email",
    componentType : "input",
    type : 'email',
  },
  {
    name: 'password',
    label: 'Password', 
    placeholder: "Enter your password",
    componentType : "input",
    type : 'password',
  }
]


// 

export const addProductFormElements = [
  {
    label: "Title",
    name: "title",
    componentType: "input",
    type: "text",
    placeholder: "Enter product title",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "men", label: "Men" },
      { id: "women", label: "Women" },
      { id: "kids", label: "Kids" },
      { id: "accessories", label: "Accessories" },
      { id: "footwear", label: "Footwear" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    type: "dropdown",
    options: [
      { id: "nike", label: "Nike" },
      { id: "adidas", label: "Adidas" },
      { id: "puma", label: "Puma" },
      { id: "reebok", label: "Reebok" },
      { id: "under_armour", label: "Under Armour" },
      { id: "new_balance", label: "New Balance" },
    ],
  },
  {
    label: "Price", // Updated label
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter price price (optional X)",
  },
  {
    label: "Sale Price (USD)",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock",
  },
];
