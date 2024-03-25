const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 FAR AWAY 👜</h1>;
}
function Form() {
  return (
    <div className="add-form">
      <h3>What do you for your trip😍</h3>
    </div>
  );
}
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((items) => (
          <Items item={items} key={items.id} />
        ))}
      </ul>
    </div>
  );
}
function Items({ item }) {
  return (
    <li>
      <span>
        {item.quantity} {item.description}
      </span>
      <button>✖️</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>👜you have x items on yout lits , and yoy already packed x % </em>
    </footer>
  );
}
