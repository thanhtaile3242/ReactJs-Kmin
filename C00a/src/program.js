import { question } from "readline-sync";
import { booksData } from "../data/data.js";
import * as features from "./feature.js";

/**
 * Hàm in ra menu của chương trình
 */
function menu() {
    console.log("============= MinShop =============");
    console.log("1. Lọc sách theo nhà xuất bản.");
    console.log("2. Lọc sách theo tên sách.");
    console.log("3. Lọc sách theo giá sách.");
    console.log("4. Thêm sách mới.");
    console.log("5. Xóa sách hiện tại.");
    console.log("6. Chỉnh sửa thông tin sách.");
    console.log("============= Menu ===============");
}

/**
 * Hàm chạy chương trình chính
 */
function run() {
    let choice = 0;

    do {
        menu();
        choice = Number(question("Chọn chức năng (Nhập số 0 để dừng): "));
        console.clear();
        switch (choice) {
            case 1:
                const listFilterBook1 =
                    features.handleFilterByProvider(booksData);
                console.log(listFilterBook1);
                break;
            case 2:
                const listFilterBook2 = features.handleFilterByName(booksData);
                console.log(listFilterBook2);
                break;
            case 3:
                const listFilterBook3 = features.handleSortByPrice(booksData);
                console.log(listFilterBook3);
                break;
            case 4:
                const listFilterBook4 = features.handleAddBook(booksData);
                console.log(listFilterBook4);
                break;
            case 5:
                const listFilterBook5 = features.handleDeleteBook(booksData);
                console.log(listFilterBook5);
                break;
            case 6:
                const listFilterBook6 = features.handleUpdateBook(booksData);
                console.log(listFilterBook6);
                break;
        }
        if (choice !== 0) {
            question("Nhan phim bat ky de tiep tuc...");
            console.clear();
        }
    } while (choice !== 0);
    console.log("Cam on ban da su dung ung dung. Tam biet!");
}

export { run };
