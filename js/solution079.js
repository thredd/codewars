// Maximum Product

function adjacentElementsProduct(arr) {
    return arr.slice(0, -1)
              .reduce((max, n, i) => Math.max(max, n * arr[i + 1]), -Infinity)
  }