import "./styles.css";

const onClickAdd = () => {
  // 入力したテキストを取得し、初期化
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // 未完了リストの追加
  createIncomp(inputText);
};

// 未完了リストの追加
const createIncomp = (text) => {
  // divタグを生成
  const div = document.createElement("div");
  div.className = "list-row";

  // listタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  // complete-buttonの生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    // 未完了リストから削除
    deleteFromIncomp(completeButton.parentNode);
    // 親要素と子要素の取得、子要素の初期化
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    // 子要素の作成
    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "back";
    // backButtonのclickメソッド
    backButton.addEventListener("click", () => {
      // 完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);
      // 親要素と子要素の取得、子要素の初期化
      const addTarget = backButton.parentNode;
      const text = addTarget.firstElementChild.innerText;
      addTarget.textContent = null;
      // 未完了リストへの追加
      createIncomp(text);
    });
    // 子要素の挿入
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // delete-buttonの生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    deleteFromIncomp(deleteButton.parentNode);
  });

  // divタグの中に子要素を追加
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};

// 未完了リストから削除
const deleteFromIncomp = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// addボタンにclickイベントを追加
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
