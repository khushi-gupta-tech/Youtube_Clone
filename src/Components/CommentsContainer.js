import React from "react";

const commentsData = [
  {
    name: "khushi gupta",
    text: "Lorem Lipsum",
    replies: [],
  },

  {
    name: "khushi gupta",
    text: "Lorem Lipsum",
    replies: [
      {
        name: "khushi gupta",
        text: "Lorem Lipsum",
        replies: [
          {
            name: "khushi gupta",
            text: "Lorem Lipsum",
            replies: [
              {
                name: "khushi gupta",
                text: "Lorem Lipsum",
                replies: [
                  {
                    name: "khushi gupta",
                    text: "Lorem Lipsum",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "khushi gupta",
    text: "Lorem Lipsum",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://tse2.mm.bing.net/th/id/OIP.fqSvfYQB0rQ-6EG_oqvonQHaHa?pid=Api&P=0&h=180"
      />

      <div>
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment  data={comment} />
      <div className="pl-5 border-l-black ml-5">
         <CommentsList comments={comment.replies}/>
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
