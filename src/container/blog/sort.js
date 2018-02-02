class QuickSort {
  constructor() {
    const arr = [ 5, 8, 7, 9, 6, 4, 1, 2, 3, 6, 10 ];
    this.sort(arr, 0, arr.length - 1);
    console.log(arr, '---arr---');
  }

  sort(arr, left, right) {
    if (left > right) {
      return;
    }

    const temp = this.partition(arr, left, right);
    this.sort(arr, left, temp - 1);
    this.sort(arr, temp + 1, right);
  }

  partition(arr, left, right) {
    let leftIterator = left + 1;
    let rightIterator = right;
    while (leftIterator <= rightIterator) {
      if (arr[leftIterator] < arr[left]) {
        leftIterator++;
        continue;
      }

      if (arr[rightIterator] >= arr[left]) {
        rightIterator--;
        continue;
      }

      this.swap(arr, leftIterator, rightIterator);
    }
    this.swap(arr, left, leftIterator - 1);
    return leftIterator - 1;
  }

  swap(arr, former, latter) {
    const temp = arr[former] ;
    arr[former] = arr[latter];
    arr[latter] = temp;
  }
}

class HeapSort {
    constructor() {
        const arr = [ 5, 8, 7, 9, 6, 4, 1, 2, 3 ];
        this.sort(arr);
        console.log(arr, '---arr---');
    }

    sort(arr) {
        //1.构建大顶堆
        for(let i = parseInt(arr.length / 2) - 1; i >= 0 ; i--) {
            //从第一个非叶子结点从下至上，从右至左调整结构
            this.adjustHeap(arr, i, arr.length);
        }
        //2.调整堆结构+交换堆顶元素与末尾元素
        for(let j = arr.length - 1; j > 0; j--){
            this.swap(arr, 0, j);//将堆顶元素与末尾元素进行交换
            this.adjustHeap(arr, 0, j);//重新对堆进行调整
        }
    }

    adjustHeap(arr, i, length) {
        const temp = arr[i];//先取出当前元素i
        for(let k = i * 2 + 1; k < length; k = k * 2 + 1) {//从i结点的左子结点开始，也就是2i+1处开始
            if (k + 1 < length && arr[k] < arr[k+1]) {//如果左子结点小于右子结点，k指向右子结点
                k++;
            }
            if (arr[k] > temp) {//如果子节点大于父节点，将子节点值赋给父节点（不用进行交换）
                arr[i] = arr[k];
                i = k;
            }else{
                break;
            }
        }
        arr[i] = temp;//将temp值放到最终的位置
    }

    swap(arr, a, b){
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }
}
