// Remove Vietnamese Diacritics
export const removeVietnameseDiacritics = (str) => {
    const accents =
        "àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ";
    const nonAccents =
        "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyd";

    return str
        .split("")
        .map((char) => {
            const accentIndex = accents.indexOf(char);
            return accentIndex !== -1 ? nonAccents[accentIndex] : char;
        })
        .join("")
        .toLowerCase();
};
// Count matching score
export const countMatching = (keyWord, Target) => {
    // Tách chuỗi thành mảng
    const a = keyWord.split(" ");
    const b = Target.split(" ");

    // Xử lý thuật toán trên mảng
    const lenA = a.length;
    const lenB = b.length;
    let count = 0;
    // Bắt cặp từ một phần tử ở mảng a với một phần tử ở mảng b
    for (let i = 0; i < lenA; i++) {
        for (let j = 0; j < lenB; j++) {
            if (a[i] == b[j])
                // Nếu 2 phần tử giống nhau thì tăng đếm
                count++;
        }
    }
    return count;
};
