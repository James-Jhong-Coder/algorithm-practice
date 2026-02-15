/**
 * 二分搜索練習題 (Binary Search Practice)
 *
 * 題目說明：
 * 實作一個二分搜索函數，在一個已排序的陣列中尋找目標值，並返回該值的索引位置。
 * 如果找不到目標值，則返回 -1。
 *
 * 重要前提：陣列必須是已排序的（由小到大）
 *
 * 時間複雜度：O(log n)
 * 空間複雜度：O(1)
 *
 * 提示：
 * - 使用兩個指標 left 和 right 分別指向搜索範圍的起點和終點
 * - 計算中間位置 mid = Math.floor((left + right) / 2)
 * - 如果 arr[mid] === target，找到了，返回 mid
 * - 如果 arr[mid] < target，目標在右半部，更新 left = mid + 1
 * - 如果 arr[mid] > target，目標在左半部，更新 right = mid - 1
 * - 重複以上步驟，直到 left > right（表示找不到）
 */

/**
 * 二分搜索函數（迭代版本）
 * @param arr - 已排序的數字陣列（由小到大）
 * @param target - 要尋找的目標值
 * @returns 目標值的索引位置，如果找不到則返回 -1
 */
function binarySearch(arr: number[], target: number): number {
  // TODO: 在這裡實作你的程式碼
  // 提示：
  // 1. 初始化 left = 0, right = arr.length - 1
  // 2. 使用 while (left <= right) 迴圈
  // 3. 計算 mid，比較 arr[mid] 和 target
  // 4. 根據比較結果調整搜索範圍

  return -1; // 移除這行，實作你的邏輯
}

// ==================== 測試案例 ====================

console.log("=== 二分搜索練習題測試 ===\n");

// 測試案例 1：在已排序陣列中找到目標值
console.log("測試案例 1：在已排序陣列中找到目標值");
const arr1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
const target1 = 7;
console.log(`陣列: [${arr1}]`);
console.log(`尋找目標值: ${target1}`);
console.log(`預期結果: 3`);
console.log(`實際結果: ${binarySearch(arr1, target1)}`);
console.log("---\n");

// 測試案例 2：目標值不在陣列中
console.log("測試案例 2：目標值不在陣列中");
const arr2 = [2, 4, 6, 8, 10, 12, 14];
const target2 = 5;
console.log(`陣列: [${arr2}]`);
console.log(`尋找目標值: ${target2}`);
console.log(`預期結果: -1`);
console.log(`實際結果: ${binarySearch(arr2, target2)}`);
console.log("---\n");

// 測試案例 3：目標值在陣列的第一個位置
console.log("測試案例 3：目標值在陣列的第一個位置");
const arr3 = [10, 20, 30, 40, 50];
const target3 = 10;
console.log(`陣列: [${arr3}]`);
console.log(`尋找目標值: ${target3}`);
console.log(`預期結果: 0`);
console.log(`實際結果: ${binarySearch(arr3, target3)}`);
console.log("---\n");

// 測試案例 4：目標值在陣列的最後一個位置
console.log("測試案例 4：目標值在陣列的最後一個位置");
const arr4 = [5, 15, 25, 35, 45, 55];
const target4 = 55;
console.log(`陣列: [${arr4}]`);
console.log(`尋找目標值: ${target4}`);
console.log(`預期結果: 5`);
console.log(`實際結果: ${binarySearch(arr4, target4)}`);
console.log("---\n");

// 測試案例 5：目標值在陣列的中間位置
console.log("測試案例 5：目標值在陣列的中間位置");
const arr5 = [1, 2, 3, 4, 5, 6, 7];
const target5 = 4;
console.log(`陣列: [${arr5}]`);
console.log(`尋找目標值: ${target5}`);
console.log(`預期結果: 3`);
console.log(`實際結果: ${binarySearch(arr5, target5)}`);
console.log("---\n");

// 測試案例 6：空陣列
console.log("測試案例 6：空陣列");
const arr6: number[] = [];
const target6 = 10;
console.log(`陣列: []`);
console.log(`尋找目標值: ${target6}`);
console.log(`預期結果: -1`);
console.log(`實際結果: ${binarySearch(arr6, target6)}`);
console.log("---\n");

// 測試案例 7：只有一個元素的陣列（找到）
console.log("測試案例 7：只有一個元素的陣列（找到）");
const arr7 = [42];
const target7 = 42;
console.log(`陣列: [${arr7}]`);
console.log(`尋找目標值: ${target7}`);
console.log(`預期結果: 0`);
console.log(`實際結果: ${binarySearch(arr7, target7)}`);
console.log("---\n");

// 測試案例 8：只有一個元素的陣列（找不到）
console.log("測試案例 8：只有一個元素的陣列（找不到）");
const arr8 = [42];
const target8 = 100;
console.log(`陣列: [${arr8}]`);
console.log(`尋找目標值: ${target8}`);
console.log(`預期結果: -1`);
console.log(`實際結果: ${binarySearch(arr8, target8)}`);
console.log("---\n");

// 測試案例 9：大型陣列測試
console.log("測試案例 9：大型陣列測試");
const arr9 = Array.from({ length: 1000 }, (_, i) => i * 2); // [0, 2, 4, 6, ..., 1998]
const target9 = 888;
console.log(`陣列: [0, 2, 4, 6, ..., 1998] (共 1000 個元素)`);
console.log(`尋找目標值: ${target9}`);
console.log(`預期結果: 444`);
console.log(`實際結果: ${binarySearch(arr9, target9)}`);

console.log("\n" + "=".repeat(60));
console.log("提示：二分搜索的關鍵是不斷將搜索範圍縮小一半！");
console.log("每次迭代都能排除一半的元素，這就是為什麼時間複雜度是 O(log n)");
console.log("=".repeat(60));

/**
 * 執行方式：
 * npx tsx 2-binary-search-practice.ts
 */
