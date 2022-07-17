function PriorityQueue() {
    this.enqueue = function (element) {
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        var added = false;
        for (var i = 0; i < collection.length; i++) {
          if (element[1] < collection[i][1]) {
            collection.splice(i, 0, element);
            added = true;
            break;
          }
        }
        if (!added) {
          collection.push(element);
        }
      }
    }
  }

var pQ = new PriorityQueue();
pQ.enqueue([ gannicus , 3]);
pQ.enqueue([ spartacus , 1]);
pQ.enqueue([ crixus , 2]);
pQ.enqueue([ oenomaus , 4]);
pQ.print();

[
  [  spartacus , 1 ],
  [  crixus , 2 ],
  [  gannicus , 3 ],
  [  oenomaus , 4 ]
]