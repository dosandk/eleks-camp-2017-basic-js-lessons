let monday = [
  {
    'name': 'Write a tutorial',
    'duration': 180
  },
  {
    'name': 'Some web development',
    'duration': 120
  }
];

let tuesday = [
  {
    'name': 'Keep writing that tutorial',
    'duration': 240
  },
  {
    'name': 'Some more web development',
    'duration': 120
  },
  {
    'name': 'A whole lot of nothing',
    'duration': 240
  }
];

let tasks = [monday, tuesday];

let combined = tasks.reduce((a, b) => a.concat(b));

let durationInHours = combined.map(task => {
  task.duration /= 60;
  return task;
});

let moreThanTwoHours = durationInHours.filter(task => task.duration > 2);

const RATE = 15;

combined.map(task => {
  task.income = task.duration * RATE;
  return task;
});

let totalTime = combined.reduce((a, b) => {
  return { duration: a.duration + b.duration };
});

let formated = combined.map(task => {
  task.income = `$${task.income}`;
  return task;
});
