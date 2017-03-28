function Stack() {
  const obj = {};
  const storage = {};
  let size = 0;

  obj.push = (item) => {
    storage[size++] = item;
  };

  obj.pop = () => {
    /*
      expression on the right will only execute only if the left evalutes
      to true. So if size === 0, i.e. false size will not be decreased and
      result will be undefined;
    */
    size && size--;
    const popped = storage[size];
    delete storage[size];
    return popped;
  };

  obj.size = () => size;

  obj.isEmpty = () => !obj.size();

  return obj;
}
