let app;
let students;


$(document).ready(() => {
  app.init();
});


class App {
  init() {
    fetch("/students").then(response => {
      if (!response.ok) {
        throw new Error("Network error - not ok")
      }
      return response.json();
    })
      .then(data => {
        app.build(data);
      })
  }
  build(students) {
    $("#student-count").text(students.length);
    students.forEach((student) => {
      let study_string = student.studying.join(", ")
      let html = `
      <li><a class="underline" href="/student/${student.id}">${student.first} ${student.last}</a> <span class="italic"> (studies ${study_string})</span></li>
      `
      $("#student-list").append($(html))
    })
  }
}

app = new App();