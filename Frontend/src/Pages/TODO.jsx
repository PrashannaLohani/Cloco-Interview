import { Box, Checkbox, Typography } from "@mui/material";

export default function Todo() {
  const taskData = [
    {
      id: 1,
      title: "Task 1",
      desc: "Description of Task 1",
      dueDate: "12/12/2025",
      time: "1pm",
      priority: "Medium",
    },
    {
      id: 2,
      title: "Task 2",
      desc: "Description of Task 2",
      dueDate: "18/12/2025",
      time: "12pm",
      priority: "High",
    },
    {
      id: 3,
      title: "Task 3",
      desc: "Description of Task 3",
      dueDate: "12/11/2025",
      time: "5pm",
      priority: "Low",
    },
  ];
  const fetchDate = new Date();

  // Format date
  const date = fetchDate.getDate();
  const month = String(fetchDate.getMonth() + 1).padStart(2, "0");
  const year = fetchDate.getFullYear();
  const fullDate = `${date}/${month}/${year}`;

  // Format time
  const hours24 = fetchDate.getHours();
  const ampm = hours24 >= 12 ? "PM" : "AM";
  const hours12 = hours24 % 12 || 12;
  const minutes = String(fetchDate.getMinutes()).padStart(2, "0");
  const fullTime = `${hours12}:${minutes} ${ampm}`;

  return (
    <Box p="1rem" overflow="auto">
      <Box display="flex" justifyContent="space-between">
        <Box bgcolor="red" p="0.5rem">
          Sort
        </Box>
        <Typography variant="caption">
          {fullDate}, {fullTime}
        </Typography>
      </Box>

      {taskData && taskData.length > 0 ? (
        taskData.map((task, id) => (
          <Box
            key={id}
            display="flex"
            alignItems="center"
            borderBottom="1px solid black"
            p="1rem"
          >
            <Checkbox />
            <Box display="flex" flexDirection="column">
              <Typography variant="h6">{task.title}</Typography>
              <Typography variant="body1">{task.desc}</Typography>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-around"
                gap="2rem"
              >
                <Typography variant="caption">
                  Due Date: {task.dueDate}
                </Typography>
                <Typography variant="caption">Time: {task.time}</Typography>
                <Typography variant="caption">
                  Priority: {task.priority}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))
      ) : (
        <Box>
          <Typography variant="h6">No tasks available</Typography>
        </Box>
      )}
    </Box>
  );
}
