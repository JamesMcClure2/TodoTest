namespace ToDoApp.Api
{
	public class ToDoItem
	{
		public string Id { get; set; } = "";
		public string Title { get; set; } = "";
		public bool IsDone { get; set; }
	}

	public class TodoItemDto
	{
		public string Title { get; set; } = "";
	}
}
