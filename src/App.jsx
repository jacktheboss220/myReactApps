import { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Content from './components/content/Content';
import Adder from './components/addItems/Adder';

const App = () => {
  const [items, setItems] = useState(localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []);

  const [newItem, setNewItem] = useState('');

  const [search, setSearch] = useState('');

  const saveToLocalStorage = (items) => {
    setItems(items);
    localStorage.setItem('items', JSON.stringify(items));
  }

  const handleDelete = (id) => {
    const newItem = items.filter((item) => {
      return item.id !== id;
    });
    saveToLocalStorage(newItem);
  }

  const handleCheck = (id) => {
    const newItem = items.map((item) => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    saveToLocalStorage(newItem);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    const newItem = {
      id: items.length ? items[items.length - 1].id + 1 : items.length,
      checked: false,
      name: e.target[0].value
    }
    saveToLocalStorage([...items, newItem]);
    setNewItem('');
  }

  return (
    <main className="App" >
      <Header title="My To Do List" />
      <section className="addSearch">
        <Adder
          newItem={newItem}
          setNewItem={setNewItem}
          handleAdd={handleAdd}
        />
        <Search
          search={search}
          setSearch={setSearch}
        />
        <Content
          items={
            items.filter((item) => {
              return item.name.toLowerCase().includes(search.toLowerCase());
            })
          }
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      </section>
      <Footer length={items.length} />
    </main >
  )
}

export default App;
