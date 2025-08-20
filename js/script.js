$(document).ready(function () {
  let $list = $("#todo-list");
  let $input = $("#todo-input");
  let $form = $("#add-form");

  // 1. Add new item
  $form.on("submit", function (e) {
    e.preventDefault(); // stop page refresh
    let text = $input.val().trim();
    if (text === "") return;

    // create new list item
    let $li = $(`
      <li class="item">
        <span class="text">${text}</span>
        <button class="delete">X</button>
      </li>
    `);

    $list.append($li);
    $input.val(""); // clear input
  });

  // 2. Cross out item when clicked
  $list.on("click", ".text", function () {
    $(this).parent().toggleClass("done");
  });

  // 3. Delete item when X is clicked
  $list.on("click", ".delete", function () {
    $(this).parent().remove();
  });

  // 4. Reorder items with drag and drop
  $list.sortable();
});
