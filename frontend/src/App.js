import './App.css';
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


import { Router } from 'react-router-dom';
import Routers from './Routers';
import ProductAPI from './API/ProductAPI'
import CategoryAPI from './API/CategoryAPI'
import ContactAPI from './API/ContactAPI'
function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {

    //call api 
    const getTodos = async () => {
      try {
        // let response = await fetch('http://localhost:3001.todos');
        // let dataTodos = await response.json();
        const { data: products } = await ProductAPI.getAll();
        console.log(products);
        setProducts(products);
        
        // setTodos(dataTodos)
      } catch (error) {
        console.log(error)
      }
    }
    getTodos();
  }, [])
  useEffect(() => {
    //call api 
    const getCategory = async () => {
      try {
        // let response = await fetch('http://localhost:3001.todos');
        // let dataTodos = await response.json();
        const { data: category } = await CategoryAPI.getAll();
        // console.log(category);

        setCategories(category);
        
        // setTodos(dataTodos)
      } catch (error) {
        console.log(error)
      }
    }
    getCategory();
  }, [])

  const onHandleDelete = async (id) => {
    try {
      await ProductAPI.remove(id);
      const newProduct = products.filter(product => product._id !== id);
      setProducts(newProduct);
    } catch (error) {
      console.log(error)
    }
  }
  // const onHandleDelete = async (id) => {
  //   try {
  //     await CategoryAPI.remove(id);
  //     const newCategory = categories.filter(categories => categories._id !== id);
  //     setCategories(newCategory);
  //   } catch (error) {
  //     console.log(error);
  //   }
  
  
  // }
  const onHandleAddCategory = async (category, data) => {
    try {
      await CategoryAPI.add(category);
      setCategories([
        ...categories,
        data
      ])
    }catch (error) {
      console.log(error)
    }
  }
  
  const onHandleAdd = async (product) => {
    // console.log( product) // { name : 'new product', price: 200 }
    try {
      
       await ProductAPI.add(product);

   
      setProducts([
        ...products,
        product
      ]);
    } catch (error) {
      console.log(error)
    }

  }

const onHandleDeleteCate = async (id) => {
  try {
    const ondelete = window.confirm("xoa?")
    if (ondelete){
      await CategoryAPI.remove(id);
      const newCate = categories.filter(category => category._id !== id);
      setCategories(newCate);
    }
    
  } catch (error) {
    console.log(error); 
  }


}

//edit categories
const onHandleEditCate = async (id, category) => {
  try {
    const { data } = await CategoryAPI.update(id, category);
    const newCate = categories.map(item => (item._id === id ? data : item));
    setCategories(newCate);
    console.log(newCate)
  } catch (error) {
    console.log(error);
  }
}
const onHandleEditProduct = async (id, product) => {
  try {
    const { data } = await ProductAPI.update(id, product);
    const newCate = products.map(item => (item._id === id ? data : item));
    setProducts(newCate);
    console.log(newCate)
  } catch (error) {
    console.log(error);
  }
}
//contacts
useEffect(() => {
  const getContact = async () => {
    try {
      const { data: contact } = await ContactAPI.getAll();
      console.log(contact)
      setContacts(contact);
    } catch (error) {
      console.log(error)
    }
  }
  getContact();
},[])
const onHandleDeleteContact = async (id) => {
  try {
    await ContactAPI.remove(id);
    const newContact = contacts.filter(contact => contact._id !== id);
    setProducts(newContact);
  } catch (error) {
    console.log(error)
  }
}
const onHandleAddContact = async (contact) => {
  try {
    await ContactAPI.add(contact);

    setContacts([
      ...contacts,
      contact
    ])
  } catch (error) {
    console.log(error)
  }

}


return (
  <div className="" >
    {/* <TodoForm onAdd={onHandleAdd} />
    <TodoList data={todos} onDelete={onHandleDelete} /> */}
    <Routers products={products} onDelete={onHandleDelete}
     onAdd={onHandleAdd} 
    cate={categories} 
    contact={contacts}
    DeleteCate = {onHandleDeleteCate}
      addCate={onHandleAddCategory} 
      onCateEdit={onHandleEditCate}
      onEditProduct={onHandleEditProduct}
      addContact = {onHandleAddContact}
      DeleteContact = {onHandleDeleteContact}
      />
  
  </div>
);
  }

export default App;