const commentTextarea = document.querySelector("textarea");
const cancelBtn = document.querySelector(".cancel-btn");
const submitBtn = document.querySelector(".submit-btn");
const commentList = document.querySelector(".comment-list");

commentTextarea.value = "";

cancelBtn.addEventListener("click", () => {
  commentTextarea.value = "";
});

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const commentText = commentTextarea.value.trim(); // textarea의 텍스트

  if (commentText !== "") {
    const commentItem = document.createElement("li");
    commentItem.innerHTML = `
        <div class="comment-item">
          <div class="comment-author">
            <img src="./images/comment-author-icon.png" alt="사용자 프로필 이미지" />
            <span>방문자</span>
          </div>
          <div class="comment-content">
            ${commentText}
          </div>
        </div>
      `;

    commentList.appendChild(commentItem);
    commentTextarea.value = "";
  }
  if (!commentText) {
    alert("댓글을 작성해주세요.");
  }
});
