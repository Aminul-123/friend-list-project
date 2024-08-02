import { useState } from "react";

//const imageLink = 'https://i.pravatar.cc/48';
const initialFriend = [
  {
    name: "jonas",
    image: "https://i.pravatar.cc/48?=3636",
  },
  {
    name: "Haydor",
    image: "https://i.pravatar.cc/48?=474748",
  },
  {
    name: "Smith",
    image: "https://i.pravatar.cc/48?=3737",
  },
];

export default function App() {
  const [showForm, setShowForm] = useState(false);
  const [friend, setFriend] = useState(initialFriend);

  function handleShowForm() {
    setShowForm((open) => !open);
  }
  function handleAddFriend(friend) {
    setFriend((f) => [...f, friend]);
  }
  return (
    <>
      <Header />
      <div className="friends">
        <FriendList friend={friend} />
        {/* <Friends />
    <Friends />
    <Friends /> */}
      </div>
      <Join handleShowForm={handleShowForm} showForm={showForm} />
      {showForm && <JoinForm handleAddFriend={handleAddFriend} />}
    </>
  );
}

function Header() {
  return (
    <>
      <h2>Friends Group</h2>
    </>
  );
}
function FriendList({ friend }) {
  return (
    <>
      {friend.map((f, idx) => (
        <Friend key={idx} name={f?.name} image={f?.image} />
      ))}
    </>
  );
}
function Friend({ name, image }) {
  return (
    <>
      <div className="container">
        <img src={image} alt="image" />
        <h2>{name}</h2>
      </div>
    </>
  );
}
function Join({ handleShowForm, showForm }) {
  return (
    <>
      <button className="join-btn" onClick={handleShowForm}>
        {showForm ? "Close" : "Join Group"}
      </button>
    </>
  );
}

function JoinForm({ handleAddFriend }) {
  const [image, setImage] = useState("https://i.pravatar.cc/48");
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !image) return;

    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
    };
    console.log(newFriend);
    handleAddFriend(newFriend);
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Imagel Link</label>
          <input
            type="text"
            placeholder=" paste URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div>
          <label>Name</label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button className="join">Join</button>
      </form>
    </>
  );
}
