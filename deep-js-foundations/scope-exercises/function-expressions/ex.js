function locateStudentById(studentId) {
  return studentRecords.find(function matchId(student) {
    return studentId == student.id;
  });
}

function printRecords(recordIds) {
  function formatRecord(record) {
    console.log(
      `${record.name} (${record.id}): ${record.paid ? 'Paid' : 'Not Paid'}`
    );
  }

  var students = recordIds.map(locateStudentById);

  students = students.sort(function sortByNameAsc(student1, student2) {
    if (student1.name < student2.name) {
      return -1;
    } else {
      return 1;
    }
  });

  students.forEach(formatRecord);
}

function paidStudentsToEnroll() {
  function excludeExistingStudent(studentId) {
    return eligibleStudents.includes(studentId) ? false : true;
  }

  function filterByPaidStatusAndEnrollment(student) {
    return student.paid && !currentEnrollment.includes(student.id);
  }

  function getIdFromRecord(record) {
    return record.id;
  }

  let eligibleStudents = studentRecords
    .filter(filterByPaidStatusAndEnrollment)
    .map(getIdFromRecord);

  return [
    ...eligibleStudents,
    ...currentEnrollment.filter(excludeExistingStudent)
  ];
}

function remindUnpaid(recordIds) {
  let studentsInDebt = recordIds.filter(function filterByPaidStatus(studentId) {
    return !locateStudentById(studentId).paid;
  });

  printRecords(studentsInDebt);
}

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
  { id: 313, name: 'Frank', paid: true },
  { id: 410, name: 'Suzy', paid: true },
  { id: 709, name: 'Brian', paid: false },
  { id: 105, name: 'Henry', paid: false },
  { id: 502, name: 'Mary', paid: true },
  { id: 664, name: 'Bob', paid: false },
  { id: 250, name: 'Peter', paid: true },
  { id: 375, name: 'Sarah', paid: true },
  { id: 867, name: 'Greg', paid: false }
];

printRecords(currentEnrollment);
console.log('----');
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log('----');
remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
