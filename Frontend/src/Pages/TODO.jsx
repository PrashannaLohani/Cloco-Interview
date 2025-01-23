import { Box, Checkbox, Divider, Typography } from "@mui/material";

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
  return (
    <Box p="1rem">
      <Box display="flex" justifyContent="flex-end">
        <Typography variant="caption">12/12/2025, 12:00 PM</Typography>
      </Box>
      {taskData.map((task, id) => (
        <Box
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
              <Typography variant="caption">Time:{task.time}</Typography>
              <Typography variant="caption">
                Priority: {task.priority}
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
}
