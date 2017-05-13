// base Employee Class
class Employee {
  constructor(priority = null, availability = true) {
    this.priority = priority;
    this.availability = availability;
  }

  answerCall() {
    if (this.availability) {
      this.toggleAvailability();
    }
  }
  endCall() {
    this.availability = true;
  }
  toggleAvailability() {
    this.availability = !this.availability;
  }
}

// 3 diff types of employees and their priority
class Respondent extends Employee {
  constructor(priority = 'r', availability = true) {
    super(priority);
  }
}

class Manager extends Employee {
  constructor(priority = 'm', availability = true) {
    super(priority);
  }
}

class Director extends Employee {
  constructor(priority = 'd', availability = true) {
    super(priority);
  }
}

class CallCenter {
  constructor(respondents = [], managers = [], directors = []) {
    this.respondents = respondents;
    this.managers = managers;
    this.directors = directors;
  }

  addEmployee(employee) {
    switch (employee) {
      case 'respondent':
        this.respondents.push(new Respondent());
        break;
      case 'manager':
        this.managers.push(new Manager());
        break;
      case 'director':
        this.directors.push(new Director());
        break;
      default:
    }
  }

  findAvailable(division) {
    return this[division].find((employee) => employee.availability === true);
  }

  dispatchCall() {
    // check for respondents, if none available
    const freeRespondent = this.findAvailable('respondents');
    if (freeRespondent) {
      freeRespondent.answerCall();
    } else {
      const freeManager = this.findAvailable('managers');
      if (freeManager) {
        freeManager.answerCall();
      } else {
        const freeDirector = this.findAvailable('directors')
        if (freeDirector) {
          freeDirector.answerCall();
        } else {
          console.log('All our operators are currently busy!Please stay on the line');
        }
      }
    }
  }

  endCall(line) {
    const division = line[0];
    const index = line[1];
    switch (division) {
      case 'r':
        this.respondents[index].endCall();
        break;
      case 'm':
        this.managers[index].endCall();
        break;
      case 'd':
        this.directors[index].endCall();
        break;
      default:
    }
  }

}

const myCenter = new CallCenter();
myCenter.addEmployee('respondent');
myCenter.addEmployee('respondent');
myCenter.addEmployee('respondent');
myCenter.addEmployee('director');
myCenter.addEmployee('manager');
myCenter.addEmployee('respondent');
myCenter.addEmployee('respondent');


myCenter.dispatchCall();
myCenter.dispatchCall();
myCenter.dispatchCall();
myCenter.dispatchCall();
myCenter.dispatchCall();

myCenter.endCall('r2');
myCenter.dispatchCall();

myCenter.endCall('m0');
myCenter.dispatchCall();

console.log(myCenter);
