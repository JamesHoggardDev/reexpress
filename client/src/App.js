import React, { useState, useEffect } from 'react';

const App = () => {
  const tops = [
    {
      title: 'Brother-MFC20x',
      url: 'https://rjs.org/',
      author: 'Joan Vicke',
      num_comms: 3,
      points: 4887,
      objectID: 0,
    },
    {
      title: 'Brother-MFC10x',
      url: 'https://www.js.org/',
      author: 'Ervin Kimb',
      num_comms: 2,
      points: 5007,
      objectID: 1,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };
  const searchedTops = tops.filter((top) =>
    top.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [bkeData, setBkeData] = useState([{}]);
  const opening = {
    greeting: "Hello",
    title: "BarheKry188",
  };
  useEffect(() => {
    fetch('/api').then(
      res => res.json()
    ).then(
      data => {
        setBkeData(data);
      }
    )
  }, []);

  return (
    <div>
      <div>
        <h1>
          {opening.greeting} {opening.title}
        </h1>
        <Search search={searchTerm} onSearch={handleSearch} />
        <hr />
        <h2>Top Reviewers: </h2>
        <List list={searchedTops} />
      </div>

      {(typeof bkeData.users === 'undefined') ? (
        <p>Loading users</p>
      ) : (
        bkeData.users.map((user) => (
          <div key={user.objectID} className="comment-display">
            <p key={user.objectID}>
              <span>{user.num_comms}</span>
              <span style={{ padding: 20, color: 'blue' }}>{user.objectID}</span>
              <span style={{ padding: 20 }}>{user.num_comms}</span>
              <span style={{ padding: 20 }}>{user.comment}</span>
            </p>
            <hr style={{ padding: 20 }} />
          </div>
        ))
      )}
    </div>
  )
};

const Search = props => {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        onChange={props.onSearch}
        value={props.search}
      />
    </div>
  );
};

const List = props => {
  return (
    <ul>
      {props.list.map((item) => (
        <div key={item.objectID}>
          <span style={{ padding: "20px" }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span >{item.author}</span>
          <span style={{ padding: "20px" }}>{item.num_comms}</span>
          <span>{item.points}</span>
          <hr />
        </div>
      )
      )};
    </ul>
  );
};
export default App;
