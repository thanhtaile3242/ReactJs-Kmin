// Viết các hàm xử lý chức năng ở đây
import { removeVietnameseDiacritics, countMatching } from "./utils.js";
import { booksData } from "../data/data.js";
import { question } from "readline-sync";
// Không import data ở đây

// 1. Lọc theo nhà xuất bản
export const handleFilterByProvider = (data) => {
    // Xử lý keyword do user nhập
    const providerName = removeVietnameseDiacritics(
        question("Nhập tên nhà xuất bản: ")
    );
    // Xử lý data raw
    const newData = data.map((book) => {
        return {
            ...book,
            ...{ provider: removeVietnameseDiacritics(book.provider) },
        };
    });

    //Lọc lấy các sách trùng với providerName
    let filterList = [];
    for (const book of newData) {
        const score = countMatching(providerName, book.provider);
        if (score > 0) {
            filterList.push(book);
        }
    }

    // Xử lý danh sách các quyển sách theo keyword và trả về cho người dùng
    const ListID = filterList.map((book) => book.id);
    filterList = data.filter((book) => ListID.includes(book.id));

    return filterList;
};

// 2. Lọc theo tên quyển sách
export const handleFilterByName = (data) => {
    // Xử lý keyword do người dùng nhập
    const bookName = removeVietnameseDiacritics(
        question("Nhập tên quyển sách: ")
    );
    // Xử lý data raw
    const newData = data.map((book) => {
        return {
            ...book,
            ...{ name: removeVietnameseDiacritics(book.name) },
        };
    });
    //Lọc lấy các sách trùng với providerName
    let filterList = [];
    for (const book of newData) {
        const score = countMatching(bookName, book.name);
        if (score > 0) {
            filterList.push(book);
        }
    }
    // Xử lý danh sách các quyển sách theo keyword và trả về cho người dùng
    const ListID = filterList.map((book) => book.id);
    filterList = data.filter((book) => ListID.includes(book.id));

    return filterList;
};

// 3. Lọc theo giá tăng hoặc giảm dần
export const handleSortByPrice = (data) => {
    // Hiển thị tùy chọn lọc giá
    console.log(">>>>>Lọc theo giá<<<<<");
    console.log(">>>>>Giá tăng dần: nhập 0<<<<<");
    console.log(">>>>>Giá giảm dần: nhập 1<<<<<");
    const sortOrder = question("Nhập: ");

    switch (sortOrder) {
        case "0":
            data.sort((a, b) => a.price - b.price);
            break;
        case "1":
            data.sort((a, b) => b.price - a.price);
    }
    return data;
};

// 4. Thêm 1 hoặc nhiều quyển sách
export const handleAddBook = (data) => {
    let stop = "";
    // Cập nhật id cho danh sách hiện có
    data = data.map((book, index) => {
        return {
            ...book,
            id: index + 1,
        };
    });
    // Hiển thị danh sách hiện có
    console.log(">>>>>Đây là danh sách các quyển sách hiện có<<<<<");
    console.log(data);
    // Cho phép người dùng thêm 1 hoặc nhiều quyển sách mới
    do {
        console.log(">>>>>Nhập thông tin quyển sách<<<<<");
        const name = question("Nhập tên sách: ");
        const price = Number(question("Nhập giá sách: "));
        const provider = question("Nhập nhà xuất bản: ");

        const newBook = {
            id: data.length + 1,
            name: name,
            price: price,
            provider: provider,
        };
        data.push(newBook);
        console.clear();
        console.log(">>>>>Đã thêm 1 quyển sách thành công !!!<<<<<");
        stop = question("Tiếp tục thêm sách ? (Y/N): ");
    } while (stop === "Y");

    return data;
};

// 5. Xóa 1 hoặc nhiều quyển sách
export const handleDeleteBook = (data) => {
    let stop = "";
    // Cập nhật id cho danh sách hiện tại
    data = data.map((book, index) => {
        return {
            ...book,
            id: index + 1,
        };
    });
    // Hiển thị danh sách hiện có
    console.log(">>>>>Đây là danh sách các quyển sách hiện có<<<<<");
    console.log(data);
    // Cho phép người dùng nhập id của quyển sách cần xóa
    do {
        const deletedId = Number(question("Nhập id của quyển sách cần xóa: "));
        data = data.filter((book) => book.id != deletedId);
        console.log(`Bạn đã xóa thành công quyển sách có id = ${deletedId}`);
        stop = question("Tiếp tục thêm sách ? (Y/N): ");
    } while (stop === "Y");

    return data;
};

// 6. Cập nhật 1 quyển sách
export const handleUpdateBook = (data) => {
    // Cập nhật Id cho các quyển sách
    data = data.map((book, index) => {
        return {
            ...book,
            id: index + 1,
        };
    });
    // Hiển thị danh sách hiện có
    console.log(">>>>>Đây là danh sách các quyển sách hiện có<<<<<");
    console.log("Sách trên", data);
    // Cho người dùng lựa chọn quyển sách cần xóa
    const updatedId = Number(
        question("Nhập id của quyển sách mà bạn muốn cập nhật: ")
    );
    console.clear();
    // Hiện thị thông tin sách cần chỉnh sửa
    const updatedBook = data.find((book) => book.id === updatedId);
    console.log("Thông tin sách", updatedBook);
    // Nhập thông tin mới cho sách
    console.log(">>>Nhập thông tin cập nhật<<<");
    let name = question("Nhập tên mới: ");
    name = name ? name : updatedBook.name;
    let price = Number(question("Nhập giá mới: "));
    price = price ? price : updatedBook.price;
    let provider = question("Nhập tên nhà xuất bản: ");
    provider = provider ? provider : updatedBook.provider;
    // Tạo 1 quyển sách có thông tin mới và id cũ
    const newUpdatedBook = {
        id: updatedId,
        name: name,
        price: price,
        provider: provider,
    };
    // Thay đổi thông tin quyển sách trên danh sách hiện tại
    data = data.map((book) => {
        if (book.id === updatedId) {
            return {
                ...newUpdatedBook,
            };
        }
        return book;
    });
    return data;
};
