/**
 * Linear Search 線性搜尋實作
 * 時間複雜度: O(n)
 * 空間複雜度: O(1)
 */

// 基本實作：搜尋數字陣列
function linearSearch(arr: number[], target: number): number {
  // 遍歷陣列中的每個元素
  for (let i = 0; i < arr.length; i++) {
    // 如果找到目標值，返回索引
    if (arr[i] === target) {
      return i;
    }
  }
  // 如果沒找到，返回 -1
  return -1;
}

// 泛型版本：支援任何類型的陣列
function linearSearchGeneric<T>(arr: T[], target: T): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// 進階版本：使用比較函式
function linearSearchWithComparator<T>(
  arr: T[],
  predicate: (element: T) => boolean,
): number {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      return i;
    }
  }
  return -1;
}

// 找出所有符合條件的索引
function linearSearchAll(arr: number[], target: number): number[] {
  const indices: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      indices.push(i);
    }
  }
  return indices;
}

// 從後往前搜尋
function linearSearchReverse(arr: number[], target: number): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// ============= 測試範例 =============

console.log("=== Linear Search 測試 ===\n");

// 測試 1: 基本搜尋
const numbers = [3, 7, 2, 9, 5, 1, 8];
console.log("陣列:", numbers);
console.log("搜尋 9:", linearSearch(numbers, 9)); // 輸出: 3
console.log("搜尋 1:", linearSearch(numbers, 1)); // 輸出: 5
console.log("搜尋 10:", linearSearch(numbers, 10)); // 輸出: -1
console.log();

// 測試 2: 字串陣列
const fruits = ["apple", "banana", "orange", "grape", "mango"];
console.log("水果陣列:", fruits);
console.log("搜尋 orange:", linearSearchGeneric(fruits, "orange")); // 輸出: 2
console.log("搜尋 kiwi:", linearSearchGeneric(fruits, "kiwi")); // 輸出: -1
console.log();

// 測試 3: 使用比較函式搜尋物件
interface Person {
  name: string;
  age: number;
}

const people: Person[] = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 28 },
  { name: "David", age: 35 },
];

console.log("人員陣列:", people);
const bobIndex = linearSearchWithComparator(
  people,
  (person) => person.name === "Bob",
);
console.log("搜尋 Bob:", bobIndex, "→", people[bobIndex]); // 輸出: 1 → { name: 'Bob', age: 30 }

const over30Index = linearSearchWithComparator(
  people,
  (person) => person.age > 30,
);
console.log("搜尋年齡 > 30:", over30Index, "→", people[over30Index]); // 輸出: 3 → { name: 'David', age: 35 }
console.log();

// 測試 4: 找出所有符合的元素
const duplicates = [5, 2, 8, 2, 9, 2, 3];
console.log("含重複值的陣列:", duplicates);
console.log("所有 2 的位置:", linearSearchAll(duplicates, 2)); // 輸出: [1, 3, 5]
console.log();

// 測試 5: 反向搜尋
console.log("反向搜尋（找最後一個 2）:", linearSearchReverse(duplicates, 2)); // 輸出: 5
console.log();

// 效能測試：展示時間複雜度
console.log("=== 效能測試 ===");
const largeArray = Array.from({ length: 10000 }, (_, i) => i);

console.time("搜尋第一個元素 (Best Case)");
linearSearch(largeArray, 0);
console.timeEnd("搜尋第一個元素 (Best Case)");

console.time("搜尋中間元素 (Average Case)");
linearSearch(largeArray, 5000);
console.timeEnd("搜尋中間元素 (Average Case)");

console.time("搜尋最後一個元素 (Worst Case)");
linearSearch(largeArray, 9999);
console.timeEnd("搜尋最後一個元素 (Worst Case)");

console.time("搜尋不存在的元素 (Worst Case)");
linearSearch(largeArray, 10000);
console.timeEnd("搜尋不存在的元素 (Worst Case)");

// 匯出函式供其他模組使用
export {
  linearSearch,
  linearSearchGeneric,
  linearSearchWithComparator,
  linearSearchAll,
  linearSearchReverse,
};
