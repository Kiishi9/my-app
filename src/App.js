import React from "react";
function Greetings() {
  return <p>Hello there! Good Morning!!</p>;
}

function UserProfileCard() {
  return (
    <div className="card">
      <img
        className="class-img"
        src="https:/www.w3schools.com/howto/img_avatar.png"
        alt="avatar"
        style={{ width: 100 }}
      />
      <div className="card-name">Blessing Adediwura</div>
      <div>She is the first Product Manager in her family.</div>
    </div>
  );
}

const App = () => {
  return (
    <section className="main-page">
      <UserProfileCard />
    </section>
  );
};
export default App;
