/**
 * 線性搜索練習題 (Linear Search Practice)
 *
 * 題目說明：
 * 實作一個線性搜索函數，在一個陣列中尋找目標值，並返回該值的索引位置。
 * 如果找不到目標值，則返回 -1。
 *
 * 時間複雜度：O(n)
 * 空間複雜度：O(1)
 *
 * 提示：
 * - 從陣列的第一個元素開始，逐一比對每個元素
 * - 如果找到目標值，立即返回該位置的索引
 * - 如果遍歷完整個陣列都沒找到，返回 -1
 */

/**
 * 線性搜索函數
 * @param arr - 要搜索的陣列
 * @param target - 要尋找的目標值
 * @returns 目標值的索引位置，如果找不到則返回 -1
 */
function linearSearch(arr: number[], target: number): number {
  // TODO: 在這裡實作你的程式碼
  // 提示：使用 for 迴圈遍歷陣列，比對每個元素是否等於 target

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// ==================== 測試案例 ====================

// 測試案例 1：在陣列中找到目標值
console.log("測試案例 1：");
const arr1 = [10, 23, 45, 70, 11, 15];
const target1 = 70;
console.log(`在陣列 [${arr1}] 中尋找 ${target1}`);
console.log(`預期結果：3`);
console.log(`實際結果：${linearSearch(arr1, target1)}`);
console.log("---");

// 測試案例 2：目標值不在陣列中
console.log("測試案例 2：");
const arr2 = [5, 10, 15, 20, 25];
const target2 = 30;
console.log(`在陣列 [${arr2}] 中尋找 ${target2}`);
console.log(`預期結果：-1`);
console.log(`實際結果：${linearSearch(arr2, target2)}`);
console.log("---");

// 測試案例 3：目標值在陣列的第一個位置
console.log("測試案例 3：");
const arr3 = [100, 200, 300, 400];
const target3 = 100;
console.log(`在陣列 [${arr3}] 中尋找 ${target3}`);
console.log(`預期結果：0`);
console.log(`實際結果：${linearSearch(arr3, target3)}`);
console.log("---");

// 測試案例 4：目標值在陣列的最後一個位置
console.log("測試案例 4：");
const arr4 = [1, 2, 3, 4, 5];
const target4 = 5;
console.log(`在陣列 [${arr4}] 中尋找 ${target4}`);
console.log(`預期結果：4`);
console.log(`實際結果：${linearSearch(arr4, target4)}`);
console.log("---");

// 測試案例 5：空陣列
console.log("測試案例 5：");
const arr5: number[] = [];
const target5 = 10;
console.log(`在空陣列中尋找 ${target5}`);
console.log(`預期結果：-1`);
console.log(`實際結果：${linearSearch(arr5, target5)}`);
console.log("---");

// 測試案例 6：陣列中有重複的值（返回第一個找到的索引）
console.log("測試案例 6：");
const arr6 = [7, 3, 7, 9, 7];
const target6 = 7;
console.log(`在陣列 [${arr6}] 中尋找 ${target6}`);
console.log(`預期結果：0（第一個出現的位置）`);
console.log(`實際結果：${linearSearch(arr6, target6)}`);

/**
 * 執行方式：
 * 在終端機中執行：npx ts-node 1-linear-search-practice.ts
 * 或使用：deno run 1-linear-search-practice.ts
 */
