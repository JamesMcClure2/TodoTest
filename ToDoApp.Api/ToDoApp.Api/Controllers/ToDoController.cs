using Microsoft.AspNetCore.Mvc;
using System;

namespace ToDoApp.Api.Controllers
{
	[ApiController]
	[Route("api/[controller]")]
	public class ToDoController : ControllerBase
	{
		[HttpGet("GetToDoItems")]
		public IActionResult GetToDoItems()
		{
			return Ok(ToDoRepository.Items);
		}

		[HttpPost("AddItem")]
		public IActionResult AddItem([FromBody] TodoItemDto dto)
		{
			ToDoItem newItem = new ToDoItem
			{
				Id = DateTime.Now.ToString("yyyy_MM_dd_HH_mm_ss"),
				Title = dto.Title,
				IsDone = false
			};

			ToDoRepository.Items.Add(newItem);

			return Ok(newItem);
		}

		[HttpPost("UpdateItem")]
		public IActionResult UpdateItem(ToDoItem item)
		{
			ToDoItem updatingItem = ToDoRepository.Items.FirstOrDefault(x => x.Id == item.Id);

			if (updatingItem == null)
			{
				return NotFound();
			}

			updatingItem.IsDone = item.IsDone;

			return Ok(updatingItem);
		}

		[HttpDelete("DeleteItem")]
		public IActionResult DeleteItem(string id) {
			ToDoItem deletingItem = ToDoRepository.Items.FirstOrDefault(x => x.Id == id);

			if (deletingItem == null)
			{
				return NotFound();
			}
			
			ToDoRepository.Items.Remove(deletingItem);

			return Ok();
		}

		[HttpDelete("DeleteAllDone")]
		public IActionResult DeleteAllDone()
		{
			ToDoRepository.Items.RemoveAll(item => item.IsDone);

			return Ok(ToDoRepository.Items);
		}
	}
}
