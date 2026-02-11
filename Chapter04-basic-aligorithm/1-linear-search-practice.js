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
function linearSearch(arr, target) {
    // TODO: 在這裡實作你的程式碼
    // 提示：使用 for 迴圈遍歷陣列，比對每個元素是否等於 target
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
// ==================== 測試案例 ====================
// 測試案例 1：在陣列中找到目標值
console.log("測試案例 1：");
var arr1 = [10, 23, 45, 70, 11, 15];
var target1 = 70;
console.log("\u5728\u9663\u5217 [".concat(arr1, "] \u4E2D\u5C0B\u627E ").concat(target1));
console.log("\u9810\u671F\u7D50\u679C\uFF1A3");
console.log("\u5BE6\u969B\u7D50\u679C\uFF1A".concat(linearSearch(arr1, target1)));
console.log("---");
// 測試案例 2：目標值不在陣列中
console.log("測試案例 2：");
var arr2 = [5, 10, 15, 20, 25];
var target2 = 30;
console.log("\u5728\u9663\u5217 [".concat(arr2, "] \u4E2D\u5C0B\u627E ").concat(target2));
console.log("\u9810\u671F\u7D50\u679C\uFF1A-1");
console.log("\u5BE6\u969B\u7D50\u679C\uFF1A".concat(linearSearch(arr2, target2)));
console.log("---");
// 測試案例 3：目標值在陣列的第一個位置
console.log("測試案例 3：");
var arr3 = [100, 200, 300, 400];
var target3 = 100;
console.log("\u5728\u9663\u5217 [".concat(arr3, "] \u4E2D\u5C0B\u627E ").concat(target3));
console.log("\u9810\u671F\u7D50\u679C\uFF1A0");
console.log("\u5BE6\u969B\u7D50\u679C\uFF1A".concat(linearSearch(arr3, target3)));
console.log("---");
// 測試案例 4：目標值在陣列的最後一個位置
console.log("測試案例 4：");
var arr4 = [1, 2, 3, 4, 5];
var target4 = 5;
console.log("\u5728\u9663\u5217 [".concat(arr4, "] \u4E2D\u5C0B\u627E ").concat(target4));
console.log("\u9810\u671F\u7D50\u679C\uFF1A4");
console.log("\u5BE6\u969B\u7D50\u679C\uFF1A".concat(linearSearch(arr4, target4)));
console.log("---");
// 測試案例 5：空陣列
console.log("測試案例 5：");
var arr5 = [];
var target5 = 10;
console.log("\u5728\u7A7A\u9663\u5217\u4E2D\u5C0B\u627E ".concat(target5));
console.log("\u9810\u671F\u7D50\u679C\uFF1A-1");
console.log("\u5BE6\u969B\u7D50\u679C\uFF1A".concat(linearSearch(arr5, target5)));
console.log("---");
// 測試案例 6：陣列中有重複的值（返回第一個找到的索引）
console.log("測試案例 6：");
var arr6 = [7, 3, 7, 9, 7];
var target6 = 7;
console.log("\u5728\u9663\u5217 [".concat(arr6, "] \u4E2D\u5C0B\u627E ").concat(target6));
console.log("\u9810\u671F\u7D50\u679C\uFF1A0\uFF08\u7B2C\u4E00\u500B\u51FA\u73FE\u7684\u4F4D\u7F6E\uFF09");
console.log("\u5BE6\u969B\u7D50\u679C\uFF1A".concat(linearSearch(arr6, target6)));
/**
 * 執行方式：
 * 在終端機中執行：npx ts-node 1-linear-search-practice.ts
 * 或使用：deno run 1-linear-search-practice.ts
 */
