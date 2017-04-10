function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  for (let i = 0, l = rankedLists.length; i < l; i++) {
    rankedLists[i].innerHTML = (i + n).toString();
  }
}

function deepestChild() {
  var nodes = document.querySelectorAll('#grand-node div');
  if(!nodes.length) return false;
  return nodes[nodes.length-1];
}
