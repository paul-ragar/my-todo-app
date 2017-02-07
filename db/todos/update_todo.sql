UPDATE todos
SET todo_title = $1, todo_description = $2
WHERE todo_id = $3;
