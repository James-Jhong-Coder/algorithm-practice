/**
 * ============================================================
 *  題目：Search Insert Position（搜索插入位置）
 * ============================================================
 *
 * 給定一個已排序的整數陣列 nums（不含重複值）和一個目標值 target，
 * 如果 target 存在於陣列中，回傳它的索引位置。
 * 如果 target 不存在於陣列中，回傳它「應該被插入的位置」，
 * 使得插入後陣列仍然保持排序。
 *
 * 你必須使用時間複雜度為 O(log n) 的演算法。
 *
 * ============================================================
 *  範例
 * ============================================================
 *
 * 範例 1:
 *   輸入: nums = [1, 3, 5, 6], target = 5
 *   輸出: 2
 *   說明: 5 存在於陣列中，索引為 2
 *
 * 範例 2:
 *   輸入: nums = [1, 3, 5, 6], target = 2
 *   輸出: 1
 *   說明: 2 不在陣列中，應插入到索引 1 的位置 → [1, 2, 3, 5, 6]
 *
 * 範例 3:
 *   輸入: nums = [1, 3, 5, 6], target = 7
 *   輸出: 4
 *   說明: 7 不在陣列中，應插入到陣列末端 → [1, 3, 5, 6, 7]
 *
 * 範例 4:
 *   輸入: nums = [1, 3, 5, 6], target = 0
 *   輸出: 0
 *   說明: 0 不在陣列中，應插入到陣列最前面 → [0, 1, 3, 5, 6]
 *
 * ============================================================
 *  限制條件
 * ============================================================
 *
 * - 1 <= nums.length <= 10^4
 * - -10^4 <= nums[i] <= 10^4
 * - nums 中不含重複值
 * - nums 已按升序排列
 * - -10^4 <= target <= 10^4
 */

function searchInsert(nums: number[], target: number): number {
  console.log("----------- searchInsert ----------", nums);
  //  nums: [1, 3, 5, 6], target: 5, expected: 2
  // midIndex
  // 在這裡實作你的程式碼
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let midIndex = Math.floor((left + right) / 2);
    console.log("midIndex = ", midIndex, left, right, nums[left], nums[right]);
    if (nums[midIndex] > target) {
      right = midIndex - 1;
    } else if (nums[midIndex] < target) {
      left = midIndex + 1;
    } else {
      return midIndex;
    }
  }
  return left;
}

// ==================== 測試 ====================

const tests = [
  { nums: [1, 3, 5, 6], target: 5, expected: 2 },
  { nums: [1, 3, 5, 6], target: 2, expected: 1 },
  { nums: [1, 3, 5, 6], target: 7, expected: 4 },
  { nums: [1, 3, 5, 6], target: 0, expected: 0 },
  { nums: [1], target: 0, expected: 0 },
  { nums: [1], target: 1, expected: 0 },
  { nums: [1], target: 2, expected: 1 },
  { nums: [1, 3], target: 2, expected: 1 },
];

console.log("Search Insert Position 測試結果：\n");
tests.forEach(({ nums, target, expected }, i) => {
  const result = searchInsert(nums, target);
  const pass = result === expected ? "PASS" : "FAIL";
  console.log(
    `  [${pass}] 測試 ${i + 1}: nums=[${nums}], target=${target} → 預期: ${expected}, 實際: ${result}`,
  );
});

/**
 * 執行方式：
 * npx tsx 2-binary-search-fill-in-the-blank.ts
 */
