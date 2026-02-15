/**
 * Binary Search 二分搜索實作
 * 時間複雜度: O(log n)
 * 空間複雜度: O(1) - 迭代版本, O(log n) - 遞迴版本
 */

// ==================== 基本實作：迭代版本 ====================

function binarySearchIterative(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    // 計算中間位置（避免溢位的寫法）
    const mid = Math.floor(left + (right - left) / 2);

    // 找到目標值
    if (arr[mid] === target) {
      return mid;
    }

    // 目標值在右半部
    if (arr[mid] < target) {
      left = mid + 1;
    }
    // 目標值在左半部
    else {
      right = mid - 1;
    }
  }

  // 找不到目標值
  return -1;
}

// ==================== 遞迴版本 ====================

function binarySearchRecursive(
  arr: number[],
  target: number,
  left: number = 0,
  right: number = arr.length - 1
): number {
  // 基本情況：搜索範圍無效
  if (left > right) {
    return -1;
  }

  const mid = Math.floor(left + (right - left) / 2);

  // 找到目標值
  if (arr[mid] === target) {
    return mid;
  }

  // 遞迴搜索右半部
  if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right);
  }

  // 遞迴搜索左半部
  return binarySearchRecursive(arr, target, left, mid - 1);
}

// ==================== 視覺化版本：顯示搜索過程 ====================

function binarySearchVisual(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let step = 1;

  console.log(`\n開始搜索目標值: ${target}`);
  console.log(`陣列: [${arr.join(", ")}]\n`);

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    // 視覺化當前狀態
    const visual = arr.map((val, idx) => {
      if (idx === mid) return `[${val}]`; // 中間值
      if (idx >= left && idx <= right) return `${val}`; // 搜索範圍內
      return `_`; // 已排除的範圍
    });

    console.log(`步驟 ${step}:`);
    console.log(`  範圍: left=${left}, mid=${mid}, right=${right}`);
    console.log(`  視覺: ${visual.join(" ")}`);
    console.log(`  比較: arr[${mid}]=${arr[mid]} vs target=${target}`);

    if (arr[mid] === target) {
      console.log(`  ✓ 找到了！在索引 ${mid}\n`);
      return mid;
    }

    if (arr[mid] < target) {
      console.log(`  → 目標在右半部，縮小範圍至 [${mid + 1}, ${right}]\n`);
      left = mid + 1;
    } else {
      console.log(`  → 目標在左半部，縮小範圍至 [${left}, ${mid - 1}]\n`);
      right = mid - 1;
    }

    step++;
  }

  console.log(`  ✗ 找不到目標值\n`);
  return -1;
}

// ==================== 進階應用：找到第一個出現的位置 ====================

/**
 * 在有重複元素的已排序陣列中，找到目標值第一次出現的位置
 */
function binarySearchFirst(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      result = mid; // 記錄結果
      right = mid - 1; // 繼續在左半部尋找更早出現的位置
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// ==================== 進階應用：找到最後一個出現的位置 ====================

/**
 * 在有重複元素的已排序陣列中，找到目標值最後一次出現的位置
 */
function binarySearchLast(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor(left + (right - left) / 2);

    if (arr[mid] === target) {
      result = mid; // 記錄結果
      left = mid + 1; // 繼續在右半部尋找更晚出現的位置
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

// ==================== 測試範例 ====================

console.log("=".repeat(70));
console.log("  Binary Search 二分搜索示範");
console.log("=".repeat(70));

// 測試 1: 基本迭代版本
console.log("\n【測試 1: 基本迭代版本】");
const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(`陣列: [${arr1}]`);
console.log(`搜索 7: ${binarySearchIterative(arr1, 7)}`); // 3
console.log(`搜索 1: ${binarySearchIterative(arr1, 1)}`); // 0
console.log(`搜索 19: ${binarySearchIterative(arr1, 19)}`); // 9
console.log(`搜索 10: ${binarySearchIterative(arr1, 10)}`); // -1

// 測試 2: 遞迴版本
console.log("\n【測試 2: 遞迴版本】");
const arr2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log(`陣列: [${arr2}]`);
console.log(`搜索 8: ${binarySearchRecursive(arr2, 8)}`); // 3
console.log(`搜索 2: ${binarySearchRecursive(arr2, 2)}`); // 0
console.log(`搜索 20: ${binarySearchRecursive(arr2, 20)}`); // 9
console.log(`搜索 15: ${binarySearchRecursive(arr2, 15)}`); // -1

// 測試 3: 視覺化搜索過程
console.log("\n【測試 3: 視覺化搜索過程】");
const arr3 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
binarySearchVisual(arr3, 70);
binarySearchVisual(arr3, 25);

// 測試 4: 找到第一個和最後一個出現的位置
console.log("\n【測試 4: 處理重複元素】");
const arr4 = [1, 2, 2, 2, 3, 4, 4, 5, 5, 5, 5, 6];
console.log(`陣列: [${arr4}]`);
console.log(`搜索 2 的第一個位置: ${binarySearchFirst(arr4, 2)}`); // 1
console.log(`搜索 2 的最後一個位置: ${binarySearchLast(arr4, 2)}`); // 3
console.log(`搜索 5 的第一個位置: ${binarySearchFirst(arr4, 5)}`); // 7
console.log(`搜索 5 的最後一個位置: ${binarySearchLast(arr4, 5)}`); // 10

// 測試 5: 效能比較
console.log("\n【測試 5: 效能比較 - Linear Search vs Binary Search】");
const largeArray = Array.from({ length: 100000 }, (_, i) => i);

console.log("\n搜索陣列大小: 100,000 個元素");
console.log("目標值: 99,999 (最後一個元素)\n");

// Linear Search
console.time("Linear Search");
let found = -1;
for (let i = 0; i < largeArray.length; i++) {
  if (largeArray[i] === 99999) {
    found = i;
    break;
  }
}
console.timeEnd("Linear Search");

// Binary Search
console.time("Binary Search");
const result = binarySearchIterative(largeArray, 99999);
console.timeEnd("Binary Search");

console.log(
  `\n線性搜索結果: ${found}, 二分搜索結果: ${result}`
);
console.log(
  "\n💡 可以看到，在大型已排序陣列中，二分搜索明顯快很多！"
);

console.log("\n" + "=".repeat(70));

// 匯出函式供其他模組使用
export {
  binarySearchIterative,
  binarySearchRecursive,
  binarySearchVisual,
  binarySearchFirst,
  binarySearchLast,
};
