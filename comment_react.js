import React, { useEffect, useState } from "react";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const url = "PASTE_URL_HERE";
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setComments(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain",
        },
        body: JSON.stringify({ name, comment }),
      });
      setName("");
      setComment("");
      fetchData(); // Refresh comments
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  return (
    <div>
      <div id="comments">
        {comments.length === 0
          ? "loading..."
          : comments.map((item, index) => (
              <div key={index}>
                <div className="nameBox">{item.name}</div>
                <pre className="commentBox">{item.comment}</pre>
                <hr />
              </div>
            ))}
      </div>
      <div id="sendBox">
        <form onSubmit={handleSubmit}>
          <input
            id="nameInputBox"
            type="text"
            placeholder="name"
            maxLength="20"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <textarea
              id="commentInputBox"
              placeholder="comment"
              maxLength="100"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <button id="sendButton" type="submit">
              send
            </button>
          </div>
        </form>
      </div>
      <style>{`
        #sendBox {
          width: 500px;
        }
        .nameBox {
          font-family: Arial, sans-serif;
          font-size: 16px;
        }
        .commentBox {
          font-family: Arial, sans-serif;
          font-size: 16px;
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        #nameInputBox {
          width: 50%;
          font-family: Arial, sans-serif;
          font-size: 16px;
        }
        #commentInputBox {
          height: 50px;
          width: 100%;
          resize: none;
          font-family: Arial, sans-serif;
          font-size: 16px;
        }
        #sendButton {
          font-family: Arial, sans-serif;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
};

export default Comments;
