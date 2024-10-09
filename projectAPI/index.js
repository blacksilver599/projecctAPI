const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON data

// Simulating a database with an array
let courses = [
  { id: 1, title: "Node.js Basics", description: "Learn the basics of Node.js", duration: "3 hours" },
  { id: 2, title: "React Fundamentals", description: "Introduction to React", duration: "5 hours" }
];

// Get all courses
app.get('/api/courses', (req, res) => {
  res.json(courses);
});

// Get a course by ID
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found.');
  res.json(course);
});

// Add a new course
app.post('/api/courses', (req, res) => {
  const { title, description, duration } = req.body;

  if (!title || !description || !duration) {
    return res.status(400).send('Title, description, and duration are required.');
  }

  const newCourse = {
    id: courses.length + 1,
    title,
    description,
    duration
  };

  courses.push(newCourse);
  res.status(201).json(newCourse);
});

// Update a course by ID
app.put('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send('Course not found.');

  const { title, description, duration } = req.body;

  if (title) course.title = title;
  if (description) course.description = description;
  if (duration) course.duration = duration;

  res.json(course);
});

// Delete a course by ID
app.delete('/api/courses/:id', (req, res) => {
  const courseIndex = courses.findIndex(c => c.id === parseInt(req.params.id));
  if (courseIndex === -1) return res.status(404).send('Course not found.');

  const deletedCourse = courses.splice(courseIndex, 1);
  res.json(deletedCourse[0]);
});

// Start the server
app.listen(port, () => {
  console.log(`API running on http://localhost:${port}`);
});

[
    { "id": 1, "title": "Node.js Basics", "description": "Learn the basics of Node.js", "duration": "3 hours" },
    { "id": 2, "title": "React Fundamentals", "description": "Introduction to React", "duration": "5 hours" }
  ]

  { "title"; "New Course", "description"; "Description of new course", "duration"; "4 hours" }

  { "title"; "Updated Course", "description"; "Updated description", "duration"; "6 hours" }

  { "id"; 1, "title"; "Node.js Basics", "description"; "Learn the basics of Node.js", "duration"; "3 hours" }

  




  







