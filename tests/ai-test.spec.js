import { test, expect } from '@playwright/test';

// Hàm kiểm tra năm nhuận do AI sinh ra
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Các test case do AI tự phân tích và viết
test('Kiem tra logic ham nam nhuan', () => {
  expect(isLeapYear(2024)).toBe(true);  // Năm nhuận thông thường
  expect(isLeapYear(2023)).toBe(false); // Năm không nhuận
  expect(isLeapYear(2000)).toBe(true);  // Năm nhuận thế kỷ (chia hết 400)
  expect(isLeapYear(1900)).toBe(false); // Năm không nhuận thế kỷ (chia hết 100 nhưng k chia hết 400)
});