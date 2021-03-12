import React, { useState, useEffect } from 'react'
import './App.css';
import Alert from './components/Alert/Alert';
import List from './components/List/List';
import Navbar from './components/Navbar/Navbar';
import Popup from './components/Popup/Popup';
import Submit from './components/Submit/Submit';
import getDatasToLS, { setDatasToLS, removeDataToLS } from './components/Helper';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Add from './components/Add/Add';
import Pagination from './components/Pagination/Pagination';

const App = () => {
  const [links, setLinks] = useState(getDatasToLS("links"));
  const [alert, setAlert] = useState({ msg: '', visible: false });
  const [popup, setPopup] = useState({ msg: '', lnk: {}, visible: false });
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(links.length / 5);
  const indexOfLast = currentPage * 5;
  const indexOfFirst = indexOfLast - 5;
  const currentLinks = links.slice(indexOfFirst, indexOfLast);
  //This projects is not over. Just pagination process left.
  //This projects is not over. Just pagination process left.
  //This projects is not over. Just pagination process left.
  //This projects is not over. Just pagination process left.

  useEffect(() => {
    setTimeout(() => {
      setAlert({ msg: '', visible: false });
    }, 2000);
  }, [alert])

  const addLink = (link) => {
    setDatasToLS("links", link);
    setLinks(getDatasToLS("links"));
  }
  const sortAtoZ = () => {
    let datas = [...links];
    let data1 = datas.sort((a, b) => (a.points > b.points) ? 1 : -1);
    setLinks(data1);
  }
  const sortZtoA = () => {
    let datas = [...links];
    let data2 = datas.sort((a, b) => (b.points > a.points) ? 1 : -1);
    setLinks(data2);
  }
  const removeLink = (link) => {
    setPopup({ msg: link.name, lnk: link, visible: true });
  }
  const doRemoveLink = (link) => {
    const data = links.filter(item =>
      item !== link
    );
    setLinks(data);
    setAlert({ msg: `${link.name} removed.`, visible: true });
    removeDataToLS("links", data);
  }
  const setLinkVote = (link, type) => {
    let newArr = [...links];
    const linkIndex = links.findIndex(item => item == link);
    if (type) {
      newArr[linkIndex] = { ...newArr[linkIndex], points: newArr[linkIndex].points + 1 };
    } else {
      newArr[linkIndex] = { ...newArr[linkIndex], points: newArr[linkIndex].points - 1 };
    }
    setLinks(newArr);
    removeDataToLS("links", newArr);
  }

  return (
    <>
      <BrowserRouter>
        <Alert alert={alert} />
        <Popup popup={popup} setPopup={setPopup} doRemoveLink={doRemoveLink} />
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Submit />
            <List links={currentLinks} setLinkVote={setLinkVote} sortAtoZ={sortAtoZ} sortZtoA={sortZtoA} removeLink={removeLink} />
            <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </Route>
          <Route path="/add">
            <Add setAlert={setAlert} addLink={addLink} />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
