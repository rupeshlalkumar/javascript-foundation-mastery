const students = [
  {
    name: "Rahul",
    status: false,
  },
  {
    name: "Ram",
    status: true,
  },
];

const NewStudent = students.find((students) => {
  return students.status === false;
});

console.log(NewStudent);
