import React from "react";
import moment from "moment";

const ExistingThoughts = ({ allThoughts, setAllThoughts, fetchThoughts }) => {
  const onLikesIncrease = (thoughtId) => {
    const LIKES_URL = `https://sarah-mottram-happy-thoughts.herokuapp.com/thoughts/${thoughtId}/like`;

    const options = {
      method: "POST",
    };

    fetch(LIKES_URL, options).then(
      fetchThoughts()
    );
  };

  return (
    <section className="thoughts-container">
      {allThoughts.map((thought) => (
        <div className="thought-box" key={thought._id}>
          <p className="message">{thought.message}</p>
          <div className="post-info">
            <div className="likes">
              <button
                onClick={() => onLikesIncrease(thought._id)}
                className="heart-button"
              >
                &hearts;
              </button>
              <span className="hearts-number"> x {thought.hearts}</span>
            </div>
            <p className="date">posted {moment(thought.createdAt).fromNow()}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExistingThoughts;
